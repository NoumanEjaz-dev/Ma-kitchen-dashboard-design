import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Img1 from "../../../assest/Image/LoginsideImage.png";
import { Button, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import logo from "../../../assest/Image/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F0F2F5",
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  containerBox: {
    height: "100%",
  },
  loginImage: {
    width: "100%",
    height: "100%",
    // position: "fixed",
  },

  ImageContainer: {
    // width: "100%",
    // background: "red",
    // backgroundImage: `url(${Img1})`,
    // backgroundRepeat: "no-repeat",
    // position: "fixed",
  },
  SideBgImage: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px  20px 0px 20px",
    flexWrap: "wrap",
  },
  LoginForm: {
    textAlign: "center",
    marginTop: "100px",
  },
  input: {
    width: "90%",
    padding: "15px 8px",
    outline: "none",
    overflow: "hidden",
    borderRadius: "2px",
    border: "1px solid #80808069",
    margin: "15px",
    marginTop: "18px",
  },
  errorMessage: {
    color: "red",
  },
  h2: {
    marginBottom: "0px",
  },
  SignUpButton: {
    padding: "0px",
    textTransform: "capitalize",
    color: theme.palette.common.green,
  },
}));

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("password is Required"),
  email: Yup.string().email("Invalid email").required(" Email is Required"),
});

export default function Login() {
  const classes = useStyles();

  // const [email, setEmail]= useState("Nomee@gmail.com")
  // cosnt [pass, setPass] = useState(1233);

  // if(pass ==  newpass && email == newEmail){
  //   navigator("./Dashboard")
  // }

  return (
    <>
      <div className={classes.root}>
        <Grid container className={classes.containerBox}>
          <Grid item xs={6} className={classes.SideBgImage}>
            <img className={classes.loginImage} src={Img1} />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <div className={classes.nav}>
              <div className={classes.logoText}>
                <span>
                  <img src={logo} />
                </span>
              </div>
              <div className={classes.logoText}>
                <span>
                  Do you have an account?{" "}
                  <span>
                    <Button className={classes.SignUpButton}>Sign up!</Button>{" "}
                  </span>{" "}
                </span>
              </div>
            </div>
            <div className={classes.LoginForm}>
              <div>
                <h2 className={classes.h2}>Welcome Back </h2>
                <span>Login into your account</span>
                <Formik
                  initialValues={{
                    password: "",
                    email: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Field
                        className={classes.input}
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                      {errors.email && touched.email ? (
                        <div className={classes.errorMessage}>
                          {errors.email}
                        </div>
                      ) : null}
                      <Field
                        className={classes.input}
                        name="password"
                        placeholder="Password"
                      />
                      {errors.password && touched.password ? (
                        <div className={classes.errorMessage}>
                          {errors.password}
                        </div>
                      ) : null}
                      <br />
                      <button type="submit">Submit</button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
