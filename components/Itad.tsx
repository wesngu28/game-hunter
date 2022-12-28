import { Game } from "../models/itadObject"
import styles from "../styles/Itad.module.css";

interface Props {
  itad: Game
}

export default function Itad({itad}: Props) {
  return (
    <>
      {itad.list.length > 0 && itad.list[0].price_cut > 0 && <p className={styles.title}>Current Top Deals</p>}
      <div id="itad" className={styles.dealcontainer}>
        {itad.list.map((platform, index) => {
          if (index > 2 && platform.shop.name !== 'Steam') {
            return null;
          }
          return (
            platform.price_cut > 0 &&
              <div key={platform.shop.name} className={styles.main}>
                <a className={styles.platformlink} href={platform.url}>{platform.shop.name}</a>
                <p className={styles.info}>{platform.price_new} - <span>{platform.price_cut}%</span></p>
                <p className={styles.info}>Current Price: {platform.price_old}</p>
              </div>
            )
          })}
      </div>
    </>
  )
}