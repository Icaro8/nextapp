import React, { useRef } from "react";
import Head from "next/head";
import { Form } from "@unform/web";

import { Input } from "../../../components/InputComponent";
import { Header } from "../../../components/Header";
import { LeftBar } from "../components/LeftBar";

import styles from "./style.module.scss";

export default function CreateNewQuestion() {
  const formRef = useRef();

  function hendleSubmit({ text, answer }) {
    const textQuestion = { text: text };
    const answers = {
      answer: answer.map(
        (question, index) =>
          (answer[index] = {
            iseCorrect: index === 3 ? true : false,
            text: question.text,
          })
      ),
    };
    console.log(answers);
    console.log(textQuestion);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create new question</title>
      </Head>
      <Header />
      <div className={styles.row}>
        <div className={styles.LeftBar}>
          <LeftBar />
        </div>
        <Form ref={formRef} onSubmit={hendleSubmit} className={styles.form}>
          <h1>Criar novos Quizz</h1>
          <div className={styles.text}>
            <h3>Enunciado da questão</h3>
            <Input name="text" type="text" className={styles.input} />
          </div>
          <div>
            <div className={styles.inputGroup}>
              <strong>Alternativa</strong>
              <Input name="answer[0].text" type="text" />
            </div>
            <div className={styles.inputGroup}>
              <strong>Alternativa</strong>
              <Input name="answer[1].text" type="text" />
            </div>
            <div className={styles.inputGroup}>
              <strong>Alternativa</strong>
              <Input name="answer[2].text" type="text" />
            </div>
            <div className={styles.inputGroup}>
              <strong>Resposta correta</strong>
              <Input name="answer[3].text" type="text" />
            </div>
            <button type="submit">submit</button>
          </div>
        </Form>
      </div>
    </div>
  );
}
