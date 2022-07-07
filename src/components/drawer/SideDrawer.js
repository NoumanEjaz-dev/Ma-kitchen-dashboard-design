import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import Layout from "../../pages/layout/Layout";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: theme.palette.common.green,
    // width: "95%",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    backgroundColor: theme.palette.common.green,
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: theme.palette.common.green,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  //
  icons: {
    color: "#fff",
    alignItems: "center",
  },
  lable: {
    color: "#fff",
    width: "100%",
    textTransform: "capitalize",
  },
  btnBox: {
    // width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    "&:hover": {
      // background: "#ffc107",
    },
  },
  wrapper: {
    padding: theme.spacing(7, 1),
    // marginLeft: "72px",
    // [theme.breakpoints.down("sm")]: {
    //   padding: theme.spacing(2, 2),
    // },
  },
}));

export default function SideDrawer({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const ItemDate = [
    { lable: "Dashboard", link: "/Dashboard", icon: <DashboardIcon /> },
    { lable: "Home Chef", link: "/Home", icon: <HomeIcon /> },
    { lable: "Customers", link: "/Customers", icon: <DashboardIcon /> },
    { lable: "Order", link: "/Order", icon: <DashboardIcon /> },
    { lable: "Delivery", link: "/Delivery", icon: <DashboardIcon /> },
    { lable: "Menu", link: "/Menu", icon: <DashboardIcon /> },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {ItemDate.map((item, i) => {
            return (
              // <Button
              //   onClick={() => handleDrawerClose()}
              //   style={{ width: "100%" }}
              // >
              <ListItem component={NavLink} to={item.link} key={i}>
                <div className={classes.btnBox}>
                  <ListItemIcon className={classes.icons}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText className={classes.lable}>
                    {item.lable}
                  </ListItemText>
                </div>
              </ListItem>
              // </Button>
            );
          })}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <Layout />
      </main>
    </div>
  );
}
