import classes from "./Layout.module.css"
import Drawer from "./Drawer/Drawer.js";
import Toolbar from "./Toolbar/Toolbar.js";


const Layout = ({children}) => {
    return ( 
        <div className={classes.Layout}>
        <Toolbar/>
        <Drawer/>
        {children}
        </div>
     );
}
 
export default Layout;