"use client";

import { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";
import styles from "../styles/Game.module.css";

export function Game() {
  const gameContext = useContext(GameContext);

  return gameContext?.input ? (
    <div className={styles.game}>
      {gameContext?.steam ? (
        <div className={styles.steam}>
          <div className={styles.main}>
            <h2>{gameContext?.steam?.data.name}</h2>
            <img src={gameContext.steam.data.header_image} />
          </div>
          <div className={styles.steamdesc}>
            <p>{gameContext.steam.data.short_description}</p>
            <p>{gameContext.steam.data.short_description}</p>
          </div>
        </div>
      ) : null}
    </div>
  ) : null;
}

// steam header is 460x215
// need to make twitch header that in the event steam doesn't exist
// make a placeholder image in event it does not exist
