"use client";

import { FormEvent, useContext, useState } from "react";
import { itadObject } from "../models/itadObject";
import { steamStoreAPIObject } from "../models/steamStoreAPI";
import { twitchObject } from "../models/twitchObject";
import { GameContext } from "../contexts/GameProvider";
import styles from "../styles/Form.module.css"

export default function Form() {
  const [text, setText] = useState("");
  const gameContext = useContext(GameContext);

  function twitchObjectChecker(obj: any): obj is twitchObject {
    return obj.pagination !== undefined;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    let games = (await import("../db/games.json")) as {
      default: { applist: { apps: any[] } };
    };
    const matchingApp = games.default.applist.apps.find(
      (game: { appid: number; name: string }) => game.name === text
    );
    if (matchingApp) {
      const game = await fetch(
        `https://store.steampowered.com/api/appdetails?appids=${matchingApp.appid}`
      );
      const gamer: steamStoreAPIObject = await game.json();
      gameContext!.setSteam(gamer);
    }

    const twitch = await fetch(`/api/twitch?game=${text}`);
    const twitchJson: twitchObject | { error: string } = await twitch.json();
    if (twitchObjectChecker(twitchJson)) {
      gameContext!.setTwitch(twitchJson);
    }

    const itad = await fetch(`/api/itad?game=${text}`);
    const itadJson: itadObject = await itad.json();
    if (!Object.keys(itadJson.data).includes("undefined")) {
      gameContext!.setITAD(itadJson);
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.searchBar}
          value={text}
          type="search"
          onChange={(event) => {
            setText(event.target.value);
          }}
          placeholder="Enter a game"
        />
        <button className={styles.button} disabled={!text} type="submit" value="Submit" />
      </form>
    </>
  );
}
