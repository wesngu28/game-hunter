import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <span>Game Stats</span>
        <span>Dashboard</span>
      </h1>
      <h2>Details, Streams, and Prices</h2>
    </header>
  );
}
