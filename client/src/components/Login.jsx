import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const Login = ({ switchForm, ThemeStyles }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: debounce((values, { setSubmitting }) => {
      setLoading(true);
      fetch(
        "https://uzuri-limited-backend-veim.onrender.com/api/auth/admin_login",
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
          setUser(data);
          navigate("/dashboard");
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
      style={{
        ...ThemeStyles,
      }}
    >
      <div className="max-w-md w-full bg-gray-500 shadow-lg rounded-lg mb-9">
        <form onSubmit={formik.handleSubmit} className="m-3">
          <h2 className="text-2xl font-medium py-2 border-b border-gray-500 text-gray-700 mb-4">
            Login Form
          </h2>
          <div className="flex flex-col items-center gap-y-4 mt-2 w-full">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-lg font-medium leading-6"
              >
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-lg font-medium leading-6"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
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
              {loading ? "Loading..." : "Login"}
            </button>
            <p
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={switchForm}
            >
              Register
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;