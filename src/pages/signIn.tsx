import { SignInValue } from "@/types/Common";
import {
  Field,
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  FormikProps,
  FormikValues,
} from "formik";
import React from "react";
import * as Yup from "yup";

//  todo: get store user data
const initUserValue: SignInValue = {
  email: "",
  password: "",
  name: "",
};


export default function signIn() {

  // this schemadoing validate form value
  const signInScheme = Yup.object().shape({
    email: Yup.string().email("Invailid email").required("Is Required"),
    password: Yup.string()
      .min(7, "To Short")
      .max(20, "To Long")
      .required("Please Write your password"),
  });

  // fomik init config
  const formikInitConfig: FormikConfig<SignInValue> = {
    // formik 초기화 value
    initialValues: { ...initUserValue },
    enableReinitialize: true, // deafault: false, 초기값이 변경될 경우 Formik이 양식을 재설정해야 하는지 여부 제어
    validationSchema:  signInScheme , // Validate value schema
    onSubmit: async (
      // this event on click button type of submit in Formik when all value validation ok
      formValue: FormikValues,
      _: FormikHelpers<SignInValue>
    ) => {
      if (!formValue) return;
      onSubmitHandler(formValue);
    },
  };

  // formik submit event handler
  function onSubmitHandler(value: FormikValues) {
    const payload: SignInValue = {
      email: value?.email,
      password: value?.password,
      name: value?.name,
    };

    // Sending Sign In function...
  }

  return (
    <>
      <section className="continaer w-full h-screen">
        <div className=" w-full h-full flex justify-center items-center">
          <div className=" w-[400px] h-[600px] border-2 border-solid border-black">
            <Formik {...formikInitConfig}>
              {({ values, touched, errors }: FormikProps<SignInValue>) => (
                <Form className="h-full">
                  <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
                    <Field
                      className="border-2 border-blue-400 border-solid w-1/2 p-1"
                      types="text"
                      name="email"
                      value={values.email}
                      placeholder="email"
                    />
                    {touched.email && errors.email ? (
                      <p>{errors.email}</p>
                    ) : null}
                    <Field
                      className="border-2 border-blue-400 border-solid w-1/2 p-1"
                      types="password"
                      name="password"
                      value={values.password}
                      placeholder="password"
                    />
                    {touched.password && errors.password ? (
                      <p>{errors.email}</p>
                    ) : null}
                    <button
                      className="border-2 border-red-400 border-solid uppercase text-red-600"
                      type="submit"
                    >
                      submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}
