import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Header } from "../../components/Header";
import { TitleQuest } from "../../components/TitleQuestion";
import { api } from "../api/hello";
import styles from "./style.module.scss";

import "react-toastify/dist/ReactToastify.css";

export default function QuizUser({ list: questions }) {
  const [question, setQuestion] = useState([]);
  const [title, setTitle] = useState([]);
  const [runtimeFinish, setHuntimeFinsih] = useState(true);

  useEffect(
    () => {
      async function pegarTitulo() {
        const data = await questions;
        setTitle(data);
        setQuestion(data.answers);
      }
      pegarTitulo();
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  async function handleClick(idResposta) {
    const questionId = questions.questionId;

    const response = await api.post("questions", {
      questionId: questionId,
      answerId: idResposta,
    });
    console.log(response);
    setQuestion(await response.data.answers);
    setTitle(response.data);
    console.log(title, question);
  }
  return (
    <div className={styles.layout}>
      <Head>
        <title>Quizz</title>
      </Head>
      <Header />
      <div className={styles.Container}>
        <div className={styles.card}>
          <h1>{/* Question {countQuestion + 1} de {question.length} */}</h1>
          {runtimeFinish ? (
            <div className={styles.contentCard}>
              <div className={styles.title}>
                <TitleQuest title={title.text} />
              </div>
              <div className={styles.response}>
                {question?.map((element) => (
                  <div key={element.id}>
                    <button onClick={() => handleClick(element.id)}>
                      {element.text}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.finish}>
              <h1>Finsh the game</h1>
              <button>
                <p>Go back</p> <AiOutlineArrowLeft />
              </button>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

// export async function getServerSideProps(ctx) {
//   const data = await fetch("http://e906-186-232-143-24.ngrok.io/questions");
//   const response = await data.json();
//   const questions = response;
//   return {
//     props: {
//       list: questions,
//     },
//   };
// }
