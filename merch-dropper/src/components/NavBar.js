import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import CartIcon from "./Cart/CartIcon.js";
import CartDropDown from "./Cart/CartDropDown";
import Search from "./Search";
import { useAuth0 } from "./Auth/Auth";
import { Media, NavbarText } from "reactstrap";

const imgStyle = {
  maxHeight: 45,
  maxWidth: 45,
  borderRadius: 10,
};

export const DesktopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: white;
  width: 100%;
  // border: 1px solid black;

  @media (max-width: 768px) {
    // display: flex;
    // flex-direction: column;
    display: none;
  }
`;
export const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    background: white;
    // border: 1px solid black;
  }
`;
export const BrandWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  //border: 1px solid black;
  @media (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 411px) {
    width: 49%;
    justify-content: space-between;
  }
`;
export const BrandLogo = styled.img`
  cursor: pointer;
  width: 3rem;
`;
export const BrandTitle = styled.div`
  color: #007bff;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 411px) {
    font-size: 1.25rem;
  }
`;
export const ButtonWrapper = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  //border: 1px solid black;
  @media (min-width: 1280px) {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const CartAndHamWrapper = styled.div`
  width: 8rem;
  // border: 1px solid black;
  display: flex;
  justify-content: space-between;
`;
export const Hamburger = styled.button`
  width: 3rem;
  height: 3rem;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;
export const HamburgerLines = styled.div`
  width: 3rem;
  height: 4px;
  border-radius: 2px;
  background: #037bff;
`;

export const Button = styled.button`
  text-align: center;
  color: white;
  background: #037bff;
  border: 1px solid #037bff;
  border-radius: 0.25rem;
  width: 7rem;
  height: 2.25rem;
  &:hover {
    background: #0369d9;
    border: 1px solid #0369d9;
  }
`;
export const MediaWrapper = styled.div`
  display: flex;
  align-items: center;
  // border: 1px solid black;
  @media (max-width: 768px) {
    padding: 0.1rem 1rem;
    border-bottom: 1px solid black;
  }
`;

const NavBar = ({ hidden, history }) => {
  const { user, loginWithRedirect, logout } = useAuth0();

  const [state, setState] = useState({ sideDrawerOpen: false });


  const logoutWithRedirect = () => {
    logout({
      returnTo: window.location.origin,
    });
    localStorage.removeItem("profile");
  };

  const customLogin = () => {
    loginWithRedirect({

      redirect_uri: "https://merch-dropper.com/redirect",
      // redirect_uri: "http://localhost:3000/redirect"

    });
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
    <div>
      <MobileWrapper>
        {sideDrawer}
        <BrandWrapper>
          <BrandLogo
            src="https://uxmasters.org/images/merch_logo_50.svg"
            onClick={() => {
              history.push("/");
            }}
          />

          <BrandTitle
            onClick={() => {
              history.push("/");
            }}
          >
            Merch Dropper
          </BrandTitle>
        </BrandWrapper>

        <CartAndHamWrapper>
          <CartIcon />
          <Hamburger onClick={drawerToggleClickHandler}>
            <HamburgerLines></HamburgerLines>
            <HamburgerLines></HamburgerLines>
            <HamburgerLines></HamburgerLines>
          </Hamburger>
        </CartAndHamWrapper>
        {hidden ? null : <CartDropDown />}
      </MobileWrapper>

      <DesktopWrapper>
        <BrandWrapper>
          <BrandLogo
            src="https://uxmasters.org/images/merch_logo_50.svg"
            onClick={() => {
              history.push("/");
            }}
          />

          <BrandTitle
            onClick={() => {
              history.push("/");
            }}
          >
            Merch Dropper
          </BrandTitle>
        </BrandWrapper>

        <Search />

        <ButtonWrapper>
          <Button
            onClick={() => {
              history.push("/designshirt");
            }}
          >
            Design Merch
          </Button>

          <Button
            onClick={() => {
              history.push("/products");
            }}
          >
            Buy Merch
          </Button>
          {localStorage.getItem("profile") ? (
            <Button onClick={() => logoutWithRedirect()}>Log out</Button>
          ) : (
            <Button onClick={customLogin}>Log In</Button>
          )}

          <MediaWrapper>
            {localStorage.getItem("profile") ? (
              <Media
                object
                src={JSON.parse(localStorage.profile).picture}
                style={imgStyle}
                alt="Profile Photo"
              />
            ) : (
              <Media
                object
                src="https://cdn4.iconfinder.com/data/icons/messenger-1-0-line/106/Profile_Line-512.png"
                style={imgStyle}
                alt="Profile Photo"
              />
            )}
            {localStorage.getItem("profile") ? (
              <NavbarText style={{ paddingLeft: "1rem" }}>
                {JSON.parse(localStorage.profile).name}
              </NavbarText>
            ) : (
              <p style={{ paddingLeft: "1rem" }}>Guest</p>
            )}
          </MediaWrapper>

          <CartIcon />
        </ButtonWrapper>
        {hidden ? null : <CartDropDown />}
      </DesktopWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.CartReducer.hidden,
});

export default withRouter(connect(mapStateToProps)(NavBar));
