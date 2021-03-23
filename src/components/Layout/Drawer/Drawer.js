import classes from "./Drawer.module.css";
import Logo from "../../Logo/Logo.js";
import Nav from "../../Nav/Nav.js";
const Drawer = ( { open } ) => {
    const drawerClasses = [classes.content]
    if(open){
        drawerClasses.push = (classes.open)
    }
    else{
 drawerClasses.push(classes.closed)
    }
    return ( 
        <div className={classes.Drawer}>
            <div className={[classes.content, classes.open].join("")}>
           
            Drawer</div></div>
     );
}
 
export default Drawer;