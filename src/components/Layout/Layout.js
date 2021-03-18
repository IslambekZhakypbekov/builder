import classes from "./Layout.module.css"
import Drawer from "./Drawer/Drawer.js";
import Toolbar from "./Toolbar/Toolbar.js";
import { useState } from "react"

const Layout = ({children}) => {

    const [drawerOpen, setDrawerOpen] = useState(false)
    return ( 
        <div className={classes.Layout}>
        <Toolbar setDrawerOpen={setDrawerOpen}/>
        <Drawer drawerOpen={drawerOpen}/>
        {children}
        </div>
     );
}
 
export default Layout;