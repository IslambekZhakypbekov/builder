import classes from "./Drawer.module.css";
import Logo from "../Logo/Logo.js";
import Nav from "../Nav/Nav.js";
const Drawer = () => {
    return ( 
        <div className={classes.Drawer}>
            <Logo/>
             <Nav/>
            Drawer</div>
     );
}
 
export default Drawer;