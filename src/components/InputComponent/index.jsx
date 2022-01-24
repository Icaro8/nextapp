import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";

export function Input({ name, title, type, ...rest }) {
  const inputRef = useRef();
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input ref={inputRef} name={name} type={type} {...rest} />
    </>
  );
}
