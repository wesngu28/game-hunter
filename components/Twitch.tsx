import Image from "next/image";
import { twitchObject } from "../models/twitchObject";
import styles from "../styles/Twitch.module.css";

interface Props {
  steam: boolean;
  twitch: twitchObject;
}

export default function Twitch({ steam, twitch }: Props) {
  let rand = 0;
  if (twitch.data.length > 3)
    rand = Math.floor(Math.random() * (twitch.data.length - 3)) + 3;

  return (
    <>
      {!steam && (
        <div className={styles.main}>
          <Image
            alt={`${twitch.name} banner`}
            width={138}
            height={190}
            src={twitch?.img
              .replace("{width}", "138")
              .replace("{height}", "190")}
          />
        </div>
      )}
      {twitch.data.length > 0 && <p className={styles.title}>Top Streams</p>}
      <div id="twitch" className={styles.iframehome}>
        {twitch.data.map((stream, index) => {
          if (index > 2) {
            return null;
          } else {
            return (
              <iframe
                id="stream"
                key={stream.id}
                src={`https://player.twitch.tv/?channel=${stream.user_name}&parent=localhost&autoplay=false`}
                height="173"
                width="320"
                allowFullScreen
              />
            );
          }
        })}
      </div>

      {rand !== 0 && (
        <>
          <p className={styles.title}>Random Creator</p>
          <iframe
            id="random"
            className={styles.random}
            key={twitch.data[rand].id}
            src={`https://player.twitch.tv/?channel=${twitch.data[rand].user_name}&parent=localhost&autoplay=false`}
            height="300"
            width="300"
            allowFullScreen
          />
        </>
      )}
    </>
  );
}
