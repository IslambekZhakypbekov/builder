import classes from "./Logo.module.css";
import logo from "../../images/logo.svg"

const Logo = ( { } ) => {
    return ( 
        <div className={classes.Logo}><img src={logo}/>
        <span>Restaraunt</span></div>
     );
}
 
export default Logo;