import classes from "./Toolbar.module.css";

import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";
import Logo from "../../UI/Logo/Logo";
import Nav from "../../Nav/Nav";


const Toolbar = ({ openDrawer }) => {
  return (
    <div className={classes.Toolbar}>
      <Logo />
      <nav>
        <Nav />
      </nav>
      <DrawerOpen click={openDrawer} />
    </div>
  );
}

export default Toolbar;