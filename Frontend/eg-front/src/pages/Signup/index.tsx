import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { useFormik, FormikHelpers } from "formik";

import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import { AuthContext } from "../../context/auth/auth.context";
import { signup } from "../../context/auth/auth.action";
import { SignupFormValues } from "../../interfaces/SignupForm";
import { signupUser } from "../../services/auth.service";
import Toast from "../../components/Toast/Toast";
import { ToastType } from "../../props-types/ToastProps";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});
const initialValues: SignupFormValues = { email: "", password: "", name: "" };

export default function Signup() {
  const { dispatch } = useContext(AuthContext);
  const [toast, setShowToast] = useState<{
    show: boolean,
    message: string,
    type: ToastType
  }>({
    show: false,
    message: "",
    type: ToastType.SUCCESS,
  });

  const handleSubmit = async (
    values: SignupFormValues,
    formikHelpers: FormikHelpers<SignupFormValues>
  ) => {
    formikHelpers.setSubmitting(true);
    try {
      const response: any = await signupUser(values);
      dispatch(signup(response.data.user));
      formikHelpers.setSubmitting(false);
      setShowToast({
        show: true,
        message: "User signed up successfully!",
        type: ToastType.SUCCESS,
      });
    } catch (err: any) {
      setShowToast({
        show: true,
        message: err.message || "Error while signing up user",
        type: ToastType.ERROR,
      });
      formikHelpers.setSubmitting(false);
    }
  };

  const hideToast = () => {
    setShowToast({
      show: false,
      message: "",
      type: ToastType.SUCCESS,
    });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      {toast.show ? (
        <Toast
          message={toast.message}
          type={toast.type}
          closeToast={hideToast}
        />
      ) : null}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="h-16 mr-2"
              src="./assets/EasyGenerator_logo-v2.png"
              alt="logo"
            />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <Input
                    label="Name"
                    name={"name"}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                    placeholder="Your Name"
                    id="name"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <Input
                    label="Email"
                    name={"email"}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                    touched={formik.touched.email}
                    placeholder="name@company.com"
                    id="email"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <Input
                    label="Password"
                    name={"password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                    placeholder="••••••••"
                    id="password"
                    type="password"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox name="terms" id="terms" type="checkbox" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-orange-600 hover:underline dark:text-gray-500"
                          href="/"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800
                    ${formik.isSubmitting ? "bg-orange-300" : ""}`}
                >
                  {formik.isSubmitting ? "Submitting..." : "Sign in"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-orange-600 hover:underline dark:text-gray-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
