import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
// import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";
import CheckoutPage from "./components/Cart/Checkout";
import Home from "./components/Home.js";
import ShoppingCart from "./components/Cart/ShoppingCart";
import DesignShirt from "./components/Shirt/DesignShirt";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/Auth/SignUp";
import LearnMore from "./components/LearnMore";
import StripeSetup from "./components/Onboarding/StripeSetup";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={ShoppingCart} />
      {/*<Route exact path="/callback" component={Callback} />*/}
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route
        exact
        path="/products"
        render={props => <ProductDisplay {...props} />}
      />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/designshirt" component={DesignShirt} />
      <Route exact path="/learnmore" component={LearnMore} />
      <Route exact path="/stripe-setup" component={StripeSetup} />
      {/* <ImageUpload /> */}
      <Footer />
    </div>
  );
}

export default App;
