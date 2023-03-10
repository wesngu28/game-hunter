"use client";
import styles from "./page.module.css";
import Form from "../components/Form";
import { NextPage } from "next";
import Header from "../components/Header";
import { Game } from "../components/Game";
import { GameContextProvider } from "../contexts/GameProvider";

export default function Home() {
  return (
    <div className={styles.layout}>
      <GameContextProvider>
        <div className={styles.pageContent}>
            <Header />
            <Form />
        </div>
        <Game />
      </GameContextProvider>
    </div>
  );
}