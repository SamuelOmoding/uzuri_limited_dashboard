// AuthForm.js
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AuthForm({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  buttonText,
  switchFormText,
  switchForm,
  ThemeStyles,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={ThemeStyles}
    >
      <div className="max-w-md w-full bg-gray-500 shadow-lg rounded-lg p-2 mb-9">
        <form onSubmit={formik.handleSubmit} className="m-3">
          <h2 className="text-2xl font-medium py-2 border-b border-gray-300 text-gray-700 mb-4">
            {buttonText} Form
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-2">
            {fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-lg font-medium leading-6"
                >
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={
                    field.type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : field.type
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[field.name]}
                  required
                  className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {formik.touched[field.name] && formik.errors[field.name] ? (
                  <div className="text-red-500">{formik.errors[field.name]}</div>
                ) : null}
              </div>
            ))}
            <div className="w-full mt-2 flex items-center">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPassword" className="ml-2 text-lg">
                Show Password
              </label>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-1 text-lg font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {buttonText}
            </button>
            <p
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={switchForm}
            >
              {switchFormText}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

