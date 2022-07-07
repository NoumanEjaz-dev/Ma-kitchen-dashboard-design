import React from "react";
import { Routes, Route } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Dashboard from "../../pages/dashnoard/Dashboard";
import Home from "../../pages/home/Home";
import Customer from "../../pages/customer/Customers";
import Order from "../../pages/order/order";
import Delivery from "../../pages/delivery/Delivery";
import Menu from "../../pages/menu/Menu";
import DropdownMenu from "../../components/dropdown-menu/DropdownMenu";
import { Box } from "@material-ui/core";
import Login from "../../pages/auth/login/Login";
import Signup from "../../pages/auth/signup/Signup";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(7, 1),
    // marginLeft: "72px",
    // [theme.breakpoints.down("sm")]: {
    //   padding: theme.spacing(2, 2),
    // },
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.wrapper}>
        <Routes>
          {/* <Route exact path="/Login" element={<Login />} /> */}
          {/* <Route path="/Signup" element={<Signup />} /> */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Customers" element={<Customer />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Delivery" element={<Delivery />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/DropdownMenu" element={<DropdownMenu />} />
        </Routes>
      </Box>
    </>
  );
}
