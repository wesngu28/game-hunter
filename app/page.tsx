"use client";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Form from "../components/Form";
import { NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className={styles.layout}>
      <div className="page-content">
          <Form />
      </div>
    </div>
  );
}

export default Home