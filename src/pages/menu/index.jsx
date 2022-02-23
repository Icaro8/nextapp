import React from "react";
import Head from "next/head";
import { FaFantasyFlightGames } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { Header } from "../../components/Header";
import styles from "./stlyes.module.scss";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main>
        <nav>
          <div className={styles.card}>
            <FaFantasyFlightGames />
            <h2>Iniciar quizz</h2>
          </div>
          <div className={styles.card}>
            <CgProfile />
            <h2>Perfil</h2>
          </div>
        </nav>
      </main>
    </div>
  );
}
