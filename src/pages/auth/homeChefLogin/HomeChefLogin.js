import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assest/Image/HomeChef/bg.png";
import { Button, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import logo from "../../../assest/Image/HomeChef/logo.png";
import RadioButton from "../../../components/radiobutton/RadioButton";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    position: "fixed",
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center center",
  },
  errorMessage: {
    color: "green",
  },
  card: {
    margin: "20px",
    backgroundColor: "#08080878",
    borderRadius: "12px",
  },

  wrapper: {
    background: " rgb(233 233 223 / 0%)",
    boxShadow: " -3px 8px 7px 8px rgb(2 2 2 / 37%)",
    backdropFilter: "blur(8.5px)",
    textAlign: "center",
    padding: "15px",
    maxWidth: "400px",
    margin: "auto",
    borderRadius: "12px",
  },

  heading: {
    marginBottom: "0px",
    color: theme.palette.common.white,
  },
  SubTitle: {
    color: theme.palette.common.white,
  },
  FormikLoginForm: {
    padding: " 3px 20px",
  },
  Input: {
    width: "95%",
    padding: "12px 0px",
    borderRadius: "2px",
    outline: "none",
    border: "1px solid #80808069",
    paddingLeft: "16px",
    marginTop: "15px",
  },
  SubmitButton: {
    backgroundColor: "#e87906",
    width: "100%",
    padding: "10px",
    border: "none",
    margin: "7px 0px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#e87906",
    },
  },
  checkout: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
  },
  radioBox: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.common.white,
  },
  ForgetPass: {
    color: theme.palette.common.blue,
  },
}));

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("password is Required"),
  email: Yup.string().email("Invalid email").required(" Email is Required"),
});

export default function HomeChefLogin() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.card}>
            <div className={classes.wrapper}>
              <div className={classes.logo}>
                <img
                  className={classes.Login_Logo}
                  src={logo}
                  alt="login-logo"
                  width={"150px"}
                />
              </div>
              <h2 className={classes.heading}>Welcome </h2>
              <span className={classes.SubTitle}>Login into your account</span>
              <div className={classes.LoginForm}>
                <Formik
                  initialValues={{
                    password: "",
                    email: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values, "dasfas");
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className={classes.FormikLoginForm}>
                      <Field
                        className={classes.Input}
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                      {/* {errors.email && touched.email ? (
                        <div className={classes.errorMessage}>
                          {errors.email}
                        </div>
                      ) : null} */}
                      <Field
                        className={classes.Input}
                        name="password"
                        placeholder="Password"
                      />
                      {errors.password && touched.password ? (
                        <div className={classes.errorMessage}>
                          {errors.password}
                        </div>
                      ) : null}
                      <br />
                      <div className={classes.checkout}>
                        <span className={classes.radioBox}>
                          <RadioButton />
                          Keep me Login
                        </span>
                        <span className={classes.ForgetPass}>
                          Forget Password
                        </span>
                      </div>
                      <Button type="submit" className={classes.SubmitButton}>
                        Submit
                      </Button>
                      {/* <button>Submit</button> */}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
