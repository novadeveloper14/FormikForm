import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
import imagen from "/logo.png";
import { FormUI } from "./interface";
import { usersMockData } from "./usersMockData";

const App = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      identification: "",
      phoneNumber: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Must contain only letters")
        .max(50, "Must be 50 characters or less")
        .min(2, "Must be 2 characters or more")
        .required("Required"),

      identification: Yup.string()
        .matches(/^[0-9]{6,10}$/, "Must be between 6 and 10 digits")
        .required("Required")
        .test(
          "identification",
          "This identification already exists",
          function (value) {
            return !Object.values(usersMockData).some(
              (usersMockData) => usersMockData.identification === value
            );
          }
        ),

      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be 10 numbers")
        .required("Required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .max(254, "Must be 254 characters or less")
        .min(5, "Must be 5 characters or more")
        .test("email", "This mail already exists", function (value) {
          return !Object.values(usersMockData).some(
            (usersMockData) => usersMockData.email === value
          );
        }),

      userName: Yup.string()
        .max(32, "Must be 32 characters or less")
        .min(4, "Must be 4 characters or more")
        .required("Required")
        .test("userName", "This username already exists", function (value) {
          return !Object.values(usersMockData).some(
            (usersMockData) => usersMockData.userName === value
          );
        }),

      password: Yup.string()
        .max(64, "Must be 64 characters or less")
        .min(8, "Must be 8 characters or more")
        .required("Required")
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s])(?!.*\s).{8,}$/,
          "Must include at least one uppercase letter, one lowercase letter, one number, and one symbol"
        ),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),

    onSubmit: () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsFormSubmitted(true);
        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 4000);
      }, 2000);
    },
  });

  return (
    <FormUI
      formik={formik}
      isFormSubmitted={isFormSubmitted}
      isLoading={isLoading}
      imagen={imagen}
    ></FormUI>
  );
};

export { App };
