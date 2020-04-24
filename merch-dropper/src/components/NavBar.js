import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// components
import SideDrawer from "./SideDrawer";
import CartIcon from "./Cart/CartIcon.js";
import CartDropDown from "./Cart/CartDropDown";
import Search from "./Search";

// styles
import { Media, NavbarText } from "reactstrap";
import { NavbarStyles } from "./Component-Styles/Navbar-styles.js";

// auth0 client
import { useAuth0 } from "./Auth/Auth";

// logo
import logo from "../assets/merchdropper-logo.png";

const NavBar = ({ hidden, history, location, match }) => {
  const { loginWithRedirect, logout } = useAuth0();
  const { pathname } = location;
  const { domain_name } = match.params;

  const [state, setState] = useState({ sideDrawerOpen: false });

  const logoutWithRedirect = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    logout({
      returnTo: window.location.origin,
    });
  };

  const customLogin = () => {
    loginWithRedirect({
      redirect_uri: "http://localhost:3000/redirect",
      // redirect_uri: "https://www.merchdropper.store/redirect",
    });
  };

  const customSignup = () => {
    loginWithRedirect({
      redirect_uri: "http://localhost:3000/redirect",
      // redirect_uri: "https://www.merchdropper.store/redirect",
      signup: true,
    });
  };

  const homepageRedirect = () => {
    history.push("/");
  };

  let drawerToggleClickHandler = () => {
    setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  let closeBackDropClickHandler = () => {
    setState({ sideDrawerOpen: false });
  };

  let sideDrawer;
  const imgStyle = {
    maxHeight: 45,
    maxWidth: 45,
    borderRadius: 10,
  };

  if (state.sideDrawerOpen) {
    sideDrawer = (
      <SideDrawer
        closeDrawer={closeBackDropClickHandler}
        imgStyle={imgStyle}
        logoutWithRedirect={logoutWithRedirect}
        customLogin={customLogin}
      />
    );
  }

  return (
    <div
      style={
        pathname === "/stripe-setup" || pathname === "/createstore"
          ? { display: "none" }
          : { display: "block" }
      }
    >
      <NavbarStyles />
      <div className="MobileWrapper">
        {sideDrawer}
        <div className="BrandWrapper" onClick={homepageRedirect}>
          <img
            className="BrandLogo"
            src={logo}
            alt="merch-dropper logo"
            onClick={homepageRedirect}
          />

          <h2 className="BrandTitle">Merch Dropper</h2>
        </div>

        <div className="CartAndHamWrapper">
          {/* <CartIcon /> */}

          <button className="Hamburger" onClick={drawerToggleClickHandler}>
            <div className="HamburgerLines"></div>
            <div className="HamburgerLines"></div>
            <div className="HamburgerLines"></div>
          </button>
        </div>

        {hidden ? null : <CartDropDown />}
      </div>

      <div className="DesktopWrapper">
        <div className="BrandWrapper" onClick={homepageRedirect}>
          <img className="BrandLogo" src={logo} alt="merch-dropper logo" />
          <h2 className="BrandTitle">Merch Dropper</h2>
        </div>

        <nav className="ButtonWrapper">
          {pathname === "/" ? (
            <>
              {localStorage.getItem("profile") ? (
                <>
                  <Link to="#" className="links" style={{ display: "none" }}>
                    View Store
                  </Link>
                  <Link to="/dashboard" className="links">
                    Dashboard
                  </Link>
                  <span
                    className="links"
                    onClick={logoutWithRedirect}
                    style={{ marginLeft: "32px" }}
                  >
                    Logout
                  </span>
                </>
              ) : (
                <>
                  <span className="links" onClick={customLogin}>
                    Sign in
                  </span>
                  <button className="links cta" onClick={customSignup}>
                    Get Started
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <Link to="#" className="links" style={{ display: "none" }}>
                View Store
              </Link>
              <Link
                to="/dashboard"
                className="links"
                style={
                  pathname === "/dashboard"
                    ? { fontWeight: 700 }
                    : { fontWeight: 500 }
                }
              >
                Dashboard
              </Link>
              <span
                className="links"
                onClick={logoutWithRedirect}
                style={{ marginLeft: "32px" }}
              >
                Logout
              </span>
            </>
          )}
        </nav>
        {hidden ? null : <CartDropDown />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.CartReducer.hidden,
});

export default withRouter(connect(mapStateToProps)(NavBar));
