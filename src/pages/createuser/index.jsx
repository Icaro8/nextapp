import React, { useState, useRef } from "react";

import { Form } from "@unform/web";

import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { RiLockPasswordFill, RiUserAddLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

import styles from "./style.module.scss";

import { Input } from "../../components/InputComponent";
import Head from "next/head";

export default function CreateUser() {
  const formRef = useRef();
  const [inputType, setInputType] = useState("password");
  function handleSateInput() {
    if (inputType === "password") setInputType("text");
    if (inputType === "text") setInputType("password");
  }
  function handleSubmit(data) {
    console.log(data);
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
            <div>
              <AiOutlineUserAdd />
              <Input name="user.name" type="text" placeholder="Email" />
            </div>
            <div>
              <MdAlternateEmail />
              <Input name="user.email" type="email" placeholder="Email" />
            </div>
            <div>
              <RiLockPasswordFill />
              <Input
                name="user.password"
                type={inputType}
                placeholder="Password"
              />
              {inputType === "password" ? (
                <AiFillEye onClick={handleSateInput} className={styles.eye} />
              ) : (
                <AiFillEyeInvisible
                  onClick={handleSateInput}
                  className={styles.eye}
                />
              )}
            </div>
            <div className={styles.button}>
              <button type="submit">Create new user</button>
            </div>
          </Form>
        </main>
      </div>
    </div>
  );
}
