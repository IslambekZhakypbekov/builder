import classes from "./Logo.module.css";
import logo from "../../images/logo.png"

const Logo = (  ) => {
    return ( 
        <div className={classes.Logo}><img src={logo} alt="Lodotype"/>
       <a className={classes.link}  href="https://u.to/83QoGw ">Restaraunt</a></div>
     );
}
 
export default Logo;