import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { debounce } from "lodash";

const Register = ({ switchForm, ThemeStyles }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: debounce((values, { setSubmitting }) => {
      setLoading(true);
      fetch(
        "https://uzuri-limited-backend-veim.onrender.com/api/auth/admin_signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(values),
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          switchForm();
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred. Please try again.");
        })
        .finally(() => {
          setLoading(false);
          setSubmitting(false);
        });
    }, 300), // Debounce API call by 300ms
  });

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={ThemeStyles}
    >
      <div className="max-w-md w-full bg-gray-500 shadow-lg rounded-lg p-2 mb-9">
        <form onSubmit={formik.handleSubmit} className="m-3">
          <h2 className="text-2xl font-medium py-2 border-b border-gray-300 text-gray-700 mb-4">
            Registration Form
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-2">
            {["username", "email", "password", "confirmPassword"].map(
              (field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-lg font-medium leading-6"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={
                      field === "email"
                        ? "email"
                        : field === "password" || field === "confirmPassword"
                        ? showPassword
                          ? "text"
                          : "password"
                        : "text"
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[field]}
                    required
                    className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {formik.touched[field] && formik.errors[field] ? (
                    <div className="text-red-500">{formik.errors[field]}</div>
                  ) : null}
                </div>
              )
            )}
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
              disabled={loading}
              className="rounded-md bg-blue-600 px-4 py-1 text-lg font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading ? "Loading..." : "Register"}
            </button>
            <p
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={switchForm}
            >
              Login
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;