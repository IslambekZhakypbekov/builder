import classes from "./Logo.module.css";
import logo from "../../images/logo.svg"

const Logo = (  ) => {
    return ( 
        <div className={classes.Logo}><img src={logo} alt="Lodotype"/>
       <a className={classes.link}  href="https://islambek-zhakypbekov.netlify.app/">Restaraunt</a></div>
     );
}
 
export default Logo;