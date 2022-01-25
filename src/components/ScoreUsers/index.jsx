import React from "react";

import { AiFillStar } from "react-icons/ai";

import styles from "./style.module.scss";

export function TableScore() {
  return (
    <div className={styles.container}>
      <main>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
              <th>situation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Icaro Vieira</td>
              <td>5</td>
              <td>
                <AiFillStar />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
