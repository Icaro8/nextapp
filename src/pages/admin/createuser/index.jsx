import React, { useState, useRef } from "react";

import { Form } from "@unform/web";

import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineUserAdd,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Head from "next/head";
import { RiLockPasswordFill, RiUserAddLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

import styles from "./style.module.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api } from "../../api/hello";
import { Input } from "../../../components/InputComponent";
import { useRouter } from "next/router";

export default function CreateUser() {
  const router = useRouter();
  const formRef = useRef();
  const [inputType, setInputType] = useState("password");
  function handleSateInput() {
    if (inputType === "password") setInputType("text");
    if (inputType === "text") setInputType("password");
  }
  async function handleSubmit(data) {
    const response = await api.post("user/register", data);
    console.log(response);
    if (response.status === 201) toast.success("usuario criado com sucesso");

    if (response.status >= 400) {
      toast.error("tivemos um problema por favor tente novamente");
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create User</title>
      </Head>
      <div className={styles.formContainer}>
        <h2>Register new user</h2>
        <div className={styles.userAddSvg}>
          <RiUserAddLine />
        </div>
        <main>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <div className={styles.input}>
              <AiOutlineUserAdd />
              <Input name="user.name" type="text" placeholder="Email" />
            </div>
            <div className={styles.input}>
              <MdAlternateEmail />
              <Input name="email" type="email" placeholder="Email" />
            </div>
            <div className={styles.input}>
              <RiLockPasswordFill />
              <Input name="password" type={inputType} placeholder="Password" />
              {inputType === "password" ? (
                <AiFillEye onClick={handleSateInput} className={styles.eye} />
              ) : (
                <AiFillEyeInvisible
                  onClick={handleSateInput}
                  className={styles.eye}
                />
              )}
            </div>
            <div className={styles.btn}>
              <button
                type="button"
                className={styles.back}
                onClick={() => router.push("/admin")}
              >
                <AiOutlineArrowLeft />
                voltar
              </button>
              <button type="submit">Create new user</button>
            </div>
          </Form>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
}
