import classes from "./Nav.module.css";

import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/" exact>Shop</NavItem>
      <NavItem url="/checkout">Orders</NavItem>
    </ul>
  );
}

export default Nav;