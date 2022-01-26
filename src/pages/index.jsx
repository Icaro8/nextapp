import { useState, useRef } from "react";
import Head from "next/head";
import { Form } from "@unform/web";
import { ToastContainer, toast } from "react-toastify";

import { AiFillEye, AiFillEyeInvisible, AiOutlineUser } from "react-icons/ai";

import styles from "../styles/Home.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { api } from "./api/hello";
import { Input } from "../components/InputComponent";

export default function Home() {
  const formRef = useRef();
  const [inputType, setInputType] = useState("password");
  function handleTypeInputText() {
    setInputType("text");
  }
  function handleTypeInputPassword() {
    setInputType("password");
  }

  async function handleSubmit(data, { reset }) {
    const response = api.post("user/login", data);
    console.log(response);
    if (response.status === 200) toast.success("Logado com sucesso");
    if (response.status === 500) {
      toast.error("Tivemos um erro verifque seu usuario ou senha");
    }
    reset();
  }
  return (
    <div className={styles.ContainerContent}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.ContainertForm}>
        <div className={styles.classNameTopSvgUSer}>
          <AiOutlineUser />
        </div>
        <h2>Login</h2>
        <main>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="user.email" type="text" placeholder="email" />
            <div>
              <Input
                name="user.password"
                type={inputType}
                placeholder="password"
              />
              {inputType === "password" ? (
                <AiFillEye onClick={handleTypeInputText} />
              ) : (
                <AiFillEyeInvisible onClick={handleTypeInputPassword} />
              )}
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </Form>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
}
