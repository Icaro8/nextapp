import Link from "next/link";
import React from "react";

import { FaFantasyFlightGames } from "react-icons/fa";

import styles from "./style.module.scss";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <div>
          <FaFantasyFlightGames />
        </div>
        <div>
          <h1>Quizz Game</h1>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/'">
              <a>Quiz</a>
            </Link>
          </li>
          <li>
            <Link href="/'">
              <a>Menu</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
