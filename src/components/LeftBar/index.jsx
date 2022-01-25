import Link from "next/link";
import React from "react";

import styles from "./style.module.scss";

import { FaUserCircle } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";
import { BsPatchQuestionFill } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";

export const LeftBar = () => {
  return (
    <aside className={styles.columnBar}>
      <nav>
        <div>
          <FaUserCircle />
          <Link href="/">
            <a>Users</a>
          </Link>
        </div>
        <div>
          <GrScorecard />
          <Link href="/">
            <a>Score</a>
          </Link>
        </div>
        <div>
          <BsPatchQuestionFill />
          <Link href="/">
            <a>Create new questions</a>
          </Link>
        </div>
        <div>
          <FiUserPlus />
          <Link href="/createuser">
            <a>Create new user</a>
          </Link>
        </div>
      </nav>
    </aside>
  );
};
