import Image from "next/image";
import { Data } from "../models/steamStoreAPI";
import styles from "../styles/Steam.module.css";

interface Props {
  steam: Data;
}
// {`${steam.data.metacritic.score > 90 ? 'colo' :`}
export default function Steam({ steam }: Props) {
  let color = "red";
  if (steam.metacritic) {
    if (steam.metacritic.score < 100) color = "darkgreen";
    if (steam.metacritic.score < 95) color = "darkolivegreen";
    if (steam.metacritic.score < 90) color = "green";
    if (steam.metacritic.score < 80) color = "yellow";
    if (steam.metacritic.score < 70) color = "orangered";
  }

  return (
    <div id="steam" className={styles.steam}>
      <div className={styles.steamabove}>
        <div className={styles.main}>
          <a href={`https://store.steampowered.com/app/${steam.steam_appid}`}>
            <Image
              id="header"
              alt={`${steam.name} image`}
              src={steam.header_image}
              width={460}
              height={215}
            />
          </a>
        </div>
        <div className={styles.steamdesc}>
          <p>{steam.short_description}</p>
          {steam.metacritic ? (
            <a
              className={styles.meta} id="meta"
              href={steam.metacritic.url}
              style={{ color: color }}
            >
              {steam.metacritic.score}
            </a>
          ) : null}
          <div className={styles.genres}>
            {steam.genres.map((genre) => {
              return (
                <div id="genre" className={styles.genre} key={genre.description}>
                  {genre.description}
                </div>
              );
            })}
          </div>
          <p>
            Developed by:{" "}
            {steam.developers.map((developer) => (
              <span id="developer" key={developer}>{developer}</span>
            ))}
          </p>
        </div>
      </div>
      <div className={styles.steambelow}>
        {steam.dlc ? <p id="related">Related Content</p> : null}
        <div className={styles.dlc}>
          {steam.dlc
            ? steam.dlc.map((dlc) => {
                return (
                  <a
                    className={styles.genre} id="dlc"
                    key={dlc}
                    href={`https://store.steampowered.com/app/${dlc}/`}
                  >
                    {dlc}
                  </a>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
