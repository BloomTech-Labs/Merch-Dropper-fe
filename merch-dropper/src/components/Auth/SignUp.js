import React, { useState } from "react";
import { connect } from "react-redux";
import { postUser } from "../../store/actions";
import { useAuth0 } from "./Auth";
import {
  StyledHeader,
  SignUpBox,
  StyledForm,
  StyledInput,
  StyledButton
} from "./Styled.js";

const initialCredentials = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  seller: true,
  stripe_account: "",
  address1: "",
  city: "",
  state: "",
  zip_code: "",
  country: "",
  email: ""
};

function SignUp({ postUser, history }) {
  const { user } = useAuth0();
  const [userData, setUserData] = useState({});
  const [credentials, setCredentials] = useState(initialCredentials);


  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

    const callSignUp = e => {
        e.preventDefault();
        postUser(credentials);
        history.push("/")
    };


  const callSignUp = e => {
    e.preventDefault();
    postUser(credentials, history);
    history.push("/");
  };

  return (
    <SignUpBox>
      <StyledHeader>Create Account to Sell Merchandise</StyledHeader>
      <StyledForm onSubmit={callSignUp}>
        <StyledInput
          name="first_name"
          type="text"
          value={credentials.first_name}
          placeholder="First Name"
          onChange={handleChange}
        />
        <StyledInput
          name="last_name"
          type="text"
          value={credentials.last_name}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <StyledInput
          name="username"
          type="text"
          value={credentials.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <StyledInput
          name="password"
          type="password"
          value={credentials.password}
          placeholder="password"
          onChange={handleChange}
        />
        <StyledInput
          name="stripe_account"
          type="text"
          value={credentials.stripe_account}
          placeholder="Stripe Account #"
          onChange={handleChange}
        />
        <StyledInput
          name="address1"
          type="text"
          value={credentials.address1}
          placeholder="Mailing Address"
          onChange={handleChange}
        />
        <StyledInput
          name="city"
          type="text"
          value={credentials.city}
          placeholder="City"
          onChange={handleChange}
        />
        <StyledInput
          name="state"
          type="text"
          value={credentials.state}
          placeholder="State"
          onChange={handleChange}
        />
        <StyledInput
          name="zip_code"
          type="text"
          value={credentials.zip_code}
          placeholder="Zipcode"
          onChange={handleChange}
        />
        <StyledInput
          name="country"
          type="text"
          value={credentials.country}
          placeholder="Country"
          onChange={handleChange}
        />
        <StyledInput
          name="email"
          type="email"
          value={credentials.email}
          placeholder="email"
          onChange={handleChange}
        />
        <StyledButton>Sign Up</StyledButton>
      </StyledForm>
    </SignUpBox>
  );
}

const mapStateToProps = state => {
  let register = state.RegisterReducer;

  return {
    isFetching: register.isFetching,
    error: register.error
  };
};

export default connect(mapStateToProps, { postUser })(SignUp);
