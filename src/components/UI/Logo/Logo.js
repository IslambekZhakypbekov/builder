import classes from "./Logo.module.css";
// import logo from "../../../images/logo.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img  alt="Logo of the Pizza project" />
      <div></div>
    </div>
  );
}

export default Logo;