import classes from "./Drawer.module.css";
import Logo from "../../Logo/Logo.js";
import Nav from "../../Nav/Nav.js";
const Drawer = () => {
    return ( 
        <div className={classes.Drawer}>
            <div className={[classes.content, classes.open].join("")}>
            <Logo/>
             <Nav/>
            Drawer</div></div>
     );
}
 
export default Drawer;