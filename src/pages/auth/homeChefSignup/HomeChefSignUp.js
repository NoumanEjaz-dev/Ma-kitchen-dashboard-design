import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assest/Image/HomeChef/bg.png";
import { Button, Grid, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import logo from "../../../assest/Image/HomeChef/logo.png";
import RadioButton from "../../../components/radiobutton/RadioButton";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    // display: "flex",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    position: "fixed",
    backgroundSize: "cover",
    justifyContent: "center",
    // alignItems: "center",
    backgroundPosition: "center center",
  },
  // row: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  errorMessage: {
    color: "green",
  },
  card: {
    margin: "20px",
  },

  wrapper: {
    backgroundColor: "#08080878",
    // background: " rgb(233 233 223 / 0%)",
    boxShadow: " -3px 8px 7px 8px rgb(2 2 2 / 37%)",
    backdropFilter: "blur(8.5px)",
    // textAlign: "center",
    padding: "8px 13px",
    maxWidth: "405px",
    margin: "auto",
    borderRadius: "12px",
  },

  heading: {
    color: theme.palette.common.white,
    margin: "0px",
  },
  SubTitle: {
    color: theme.palette.common.white,
  },
  FormikLoginForm: {
    // padding: " 3px 20px",
    // marginRight: "12px",
  },
  Input: {
    width: "100%",
    padding: "10px 0px",
    borderRadius: "2px",
    outline: "none",
    border: "1px solid #80808069",
    paddingLeft: "10px",
    marginTop: "15px",
    borderRadius: "3px",
  },
  SubmitButton: {
    backgroundColor: "#e87906",
    width: "100%",
    padding: "10px",
    border: "none",
    margin: "18px 0px",
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
  Detail: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "11px",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  logo: {
    textAlign: "center",
  },
  email: {
    marginRight: "12px",
  },
}));

const SignupSchema = Yup.object().shape({
  country: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Add state Name"),
  state: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Add state Name"),
  employees: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Add Employees Name"),
  kitchenname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required(" Add Kitchen Name"),
  postalcode: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Add Employees Name"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required(" Add Kitchen Name"),
  confirmpass: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("confirm pass is Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("password is Required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("lastname is Required"),
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("firstname is Required"),
  email: Yup.string().email("Invalid email").required(" Email is Required"),
});

export default function HomeChefSignUp() {
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
                <h2 className={classes.heading}>
                  Get Started With Ma Kitchen{" "}
                </h2>
                <span className={classes.SubTitle}>
                  Getting Started is easy
                </span>
              </div>

              <div className={classes.LoginForm}>
                <Formik
                  initialValues={{
                    address: "",
                    country: "",
                    state: "",
                    employees: "",
                    kitchenname: "",
                    postalcode: "",
                    city: "",
                    lastname: "",
                    firstname: "",
                    email: "",
                    password: "",
                    confirmpass: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values, "dasfas");
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className={classes.FormikLoginForm}>
                      <Grid className={classes.Detail}>
                        <Grid item>
                          <Field
                            className={classes.Input}
                            name="firstname"
                            placeholder="firstname"
                          />
                          {errors.firstname && touched.firstname ? (
                            <div className={classes.errorMessage}>
                              {errors.firstname}
                            </div>
                          ) : null}
                        </Grid>
                        <Grid>
                          <Field
                            className={classes.Input}
                            name="lastname"
                            placeholder="Last Name"
                          />
                          {errors.lastname && touched.lastname ? (
                            <div className={classes.errorMessage}>
                              {errors.lastname}
                            </div>
                          ) : null}
                          <br />
                        </Grid>
                      </Grid>
                      <Grid className={classes.email}>
                        <Field
                          className={classes.Input}
                          name="email"
                          type="email"
                          placeholder="Email"
                        />
                        {errors.email && touched.email ? (
                          <div className={classes.errorMessage}>
                            {errors.email}
                          </div>
                        ) : null}
                      </Grid>
                      <Grid className={classes.email}>
                        <Field
                          className={classes.Input}
                          name="kitchenname"
                          placeholder="kitchen Name"
                        />
                        {errors.kitchenname && touched.kitchenname ? (
                          <div className={classes.errorMessage}>
                            {errors.kitchenname}
                          </div>
                        ) : null}
                      </Grid>
                      <Grid className={classes.email}>
                        <Field
                          className={classes.Input}
                          name="employees"
                          placeholder="Employees"
                        />
                        {errors.employees && touched.employees ? (
                          <div className={classes.errorMessage}>
                            {errors.employees}
                          </div>
                        ) : null}
                      </Grid>
                      <Grid className={classes.Detail}>
                        <Grid item>
                          <Field
                            className={classes.Input}
                            name="password"
                            placeholder="password"
                          />
                          {errors.password && touched.password ? (
                            <div className={classes.errorMessage}>
                              {errors.password}
                            </div>
                          ) : null}
                        </Grid>
                        <Grid>
                          <Field
                            className={classes.Input}
                            name="confirmpass"
                            placeholder="Confirm Password"
                          />
                          {errors.confirmpass && touched.confirmpass ? (
                            <div className={classes.errorMessage}>
                              {errors.confirmpass}
                            </div>
                          ) : null}
                          <br />
                        </Grid>
                      </Grid>
                      <Grid className={classes.Detail}>
                        <Grid item>
                          <Field
                            className={classes.Input}
                            name="city"
                            placeholder="City"
                          />
                          {errors.city && touched.city ? (
                            <div className={classes.errorMessage}>
                              {errors.kitchenname}
                            </div>
                          ) : null}
                        </Grid>
                        <Grid>
                          <Field
                            className={classes.Input}
                            name="postalcode"
                            placeholder="Postal code"
                          />
                          {errors.postalcode && touched.postalcode ? (
                            <div className={classes.errorMessage}>
                              {errors.postalcode}
                            </div>
                          ) : null}
                          <br />
                        </Grid>
                      </Grid>
                      <Grid className={classes.Detail}>
                        <Grid item>
                          <Field
                            className={classes.Input}
                            name="state"
                            placeholder="State"
                          />
                          {errors.state && touched.state ? (
                            <div className={classes.errorMessage}>
                              {errors.state}
                            </div>
                          ) : null}
                        </Grid>
                        <Grid>
                          <Field
                            className={classes.Input}
                            name="country"
                            placeholder="Country"
                          />
                          {errors.country && touched.country ? (
                            <div className={classes.errorMessage}>
                              {errors.country}
                            </div>
                          ) : null}
                          <br />
                        </Grid>
                      </Grid>
                      <Grid className={classes.email}>
                        <Field
                          className={classes.Input}
                          name="address"
                          placeholder="Address"
                        />
                        {errors.address && touched.address ? (
                          <div className={classes.errorMessage}>
                            {errors.address}
                          </div>
                        ) : null}
                      </Grid>
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
