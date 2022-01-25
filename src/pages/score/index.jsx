import React from "react";
import Head from "next/head";

import { LeftBar } from "../../components/LeftBar";
import { Header } from "../../components/Header";
import { TableScore } from "../../components/ScoreUsers";

import style from "./style.module.scss";

export default function ScorePage() {
  return (
    <div className={style.layoutGrid}>
      <Head></Head>
      <Header />
      <LeftBar />
      <TableScore />
    </div>
  );
}
