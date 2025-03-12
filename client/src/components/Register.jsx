// Register.js
import React from "react";
import { useMutation } from "react-query";
import * as Yup from "yup";
import AuthForm from "./AuthForm";

export default function Register({ switchForm, ThemeStyles }) {
  const registerMutation = useMutation((values) =>
    fetch("https://uzuri-limited-backend-veim.onrender.com/api/auth/admin_signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(values),
    }).then((res) => res.json())
  );

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    registerMutation.mutate(values, {
      onSuccess: () => {
        setSubmitting(false);
        switchForm(); // Switch to login form
      },
      onError: () => {
        setSubmitting(false);
      },
    });
  };

  const fields = [
    { name: "username", label: "Username", type: "text" },
    { name: "email", label: "Email address", type: "email" },
    { name: "password", label: "Password", type: "password" },
    { name: "confirmPassword", label: "Confirm Password", type: "password" },
  ];

  return (
    <AuthForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      fields={fields}
      buttonText="Register"
      switchFormText="Login"
      switchForm={switchForm}
      ThemeStyles={ThemeStyles}
    />
  );
}