import Link from "next/link";
import React from "react";

import styles from "./style.module.scss";

export const LeftBar = () => {
  return (
    <aside className={styles.columnBar}>
      <nav>
        <div>
          <Link href="/">
            <a>Users</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>Score</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>Create new questions</a>
          </Link>
        </div>
      </nav>
    </aside>
  );
};
