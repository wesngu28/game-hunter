"use client";

import { FormEvent, useContext, useState } from "react";
import { itadObject } from "../models/itadObject";
import { twitchObject } from "../models/twitchObject";
import { GameContext } from "../contexts/GameProvider";
import styles from "../styles/Form.module.css"
import { AppInfo } from "../models/steamStoreAPI";

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
      (game: { appid: number; name: string }) => game.name.toLowerCase() === text.toLowerCase()
    );
    if (matchingApp) {
      const steam = await fetch(`/api/steam?game=${matchingApp.appid}`);
      const steamJson = await steam.json()
      gameContext!.setSteam(steamJson[matchingApp.appid].data)
    }
    else gameContext!.setSteam(null)

    const twitch = await fetch(`/api/twitch?game=${text}`);
    const twitchJson: twitchObject | { error: string } = await twitch.json();
    if (twitchObjectChecker(twitchJson) && twitchJson.data.length > 0) {
      gameContext!.setTwitch(twitchJson);
    }
    else gameContext!.setTwitch(null)

    const itad = await fetch(`/api/itad?game=${text}`);
    const itadJson: itadObject = await itad.json();
    if(itadJson.string) gameContext!.setITAD(itadJson.data[itadJson.string]);
    gameContext!.setInput(text);
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
