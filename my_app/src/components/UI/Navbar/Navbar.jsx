import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import Mybutton from "../button/Mybutton";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  };
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to={"/posts"} style={{ margin: "0 10px " }}>
          Posts
        </Link>
        <Link to={"/about"} style={{ margin: "0 10px " }}>
          About
        </Link>

        {isAuth ? (
          <Mybutton onClick={logout}>Logout</Mybutton>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
