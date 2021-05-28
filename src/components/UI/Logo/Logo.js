import classes from "./Logo.module.css";
import logo from "../../../images/logo.svg"

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <div><img src={logo} alt="Logo of the Pie builder" /></div>
      <p>Pies</p>
    </div>
  );
}

export default Logo;