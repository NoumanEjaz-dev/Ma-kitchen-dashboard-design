import "./App.css";
import SideDrawer from "./components/drawer/SideDrawer";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./pages/auth/login/Login";
import HomeChefLogin from "./pages/auth/homeChefLogin/HomeChefLogin";
import HomeChefSignUp from "./pages/auth/homeChefSignup/HomeChefSignUp";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      {/* <HomeChefLogin /> */}
      <HomeChefSignUp />
      {/* <Login /> */}
      {/* <SideDrawer /> */}
    </div>
  );
}

export default App;
