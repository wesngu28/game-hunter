"use client";

import { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";
import styles from "../styles/Game.module.css";
import Itad from "./Itad";
import Steam from "./Steam";
import Twitch from "./Twitch";

export function Game() {
  const gameContext = useContext(GameContext);
  return gameContext?.input ? (
    <div className={styles.game}>
      {gameContext?.steam ? (
        <a
          href={`https://store.steampowered.com/app/${gameContext?.steam?.steam_appid}`}
          className={styles.title}
        >
          {gameContext?.steam.name}
        </a>
      ) : gameContext?.twitch ? (
        <a
        href={`https://www.twitch.tv/directory/game/${gameContext?.twitch.data[0].game_name}`}
        className={styles.title}>{gameContext?.twitch.name}</a>
      ) : (
        <a className={styles.title}>{gameContext.input}</a>
      )}
      {gameContext?.steam ? <Steam steam={gameContext.steam} /> : null}
      {gameContext?.itad ? <Itad itad={gameContext?.itad} /> : null}
      {gameContext?.twitch ? (
        gameContext?.steam ? (
          <Twitch steam={true} twitch={gameContext.twitch} />
        ) : (
          <Twitch steam={false} twitch={gameContext.twitch} />
        )
      ) : null}
    </div>
  ) : null;
}

// steam header is 460x215
// need to make twitch header that in the event steam doesn't exist
// make a placeholder image in event it does not exist
