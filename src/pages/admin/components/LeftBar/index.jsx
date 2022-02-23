import Link from "next/link";
import React from "react";

import styles from "./style.module.scss";

import { GrScorecard } from "react-icons/gr";
import { BsPatchQuestionFill } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";

export const LeftBar = () => {
  return (
    <aside className={styles.columnBar}>
      <nav>
        <div>
          <GrScorecard />
          <Link href="/admin">
            <a>Score</a>
          </Link>
        </div>
        <div>
          <BsPatchQuestionFill />
          <Link href="/admin/newquestion">
            <a>Create new questions</a>
          </Link>
        </div>
        <div>
          <FiUserPlus />
          <Link href="/admin/createuser">
            <a>Create new user</a>
          </Link>
        </div>
      </nav>
    </aside>
  );
};
