import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            about
          </NavLink>
          <NavLink to="/USD" activeStyle>
            USD
          </NavLink>
          <NavLink to="/GBP" activeStyle>
            GBP
          </NavLink>
          <NavLink to="/EUR" activeStyle>
            EUR
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;