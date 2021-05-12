import classes from "./Logo.module.css";
// import logo from "../../../images/logo.png";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      {/* <img src={logo} alt="Logo of the Restaraunt project" /> */}
      <div className={classes.Restoran}>Restaraunt</div>
    </div>
  );
}

export default Logo;