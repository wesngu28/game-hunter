import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <span>Game Stats</span>
        <span>Done Quick</span>
      </h1>
      <h2>Twitch and potentially Steam</h2>
    </header>
  );
}
