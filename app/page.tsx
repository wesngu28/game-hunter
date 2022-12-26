"use client";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Form from "../components/Form";
import { NextPage } from "next";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.pageContent}>
          <Header />
          <Form />
      </div>
    </div>
  );
}

export default Home