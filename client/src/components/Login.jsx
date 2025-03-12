// Login.js
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import * as Yup from "yup";
import AuthForm from "./AuthForm";

export default function Login({ switchForm, ThemeStyles }) {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const loginMutation = useMutation((values) =>
    fetch("https://uzuri-limited-backend-veim.onrender.com/api/auth/admin_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(values),
    }).then((res) => res.json())
  );

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    loginMutation.mutate(values, {
      onSuccess: (data) => {
        setUser(data.user); // Assuming the API returns a user object
        navigate("/dashboard");
      },
      onError: () => {
        setSubmitting(false);
      },
    });
  };

  const fields = [
    { name: "email", label: "Email address", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  return (
    <AuthForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      fields={fields}
      buttonText="Login"
      switchFormText="Register"
      switchForm={switchForm}
      ThemeStyles={ThemeStyles}
    />
  );
}