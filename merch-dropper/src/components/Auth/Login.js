import React, { useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../store/actions";
import {
  StyledHeader,
  SignUpBox,
  StyledForm,
  StyledInput,
  StyledButton
} from "./Styled.js";

const initialLoginInfo = {
  username: "",
  password: ""
};

function Login({ userLogin, history }) {
  const [loginInfo, setLoginInfo] = useState(initialLoginInfo);

  const handleChange = e => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };

  const callLogin = e => {
    e.preventDefault();
    userLogin(loginInfo, history);
  };

  return (
    <SignUpBox>
      <StyledHeader>Log In</StyledHeader>
      <StyledForm onSubmit={callLogin}>
        <StyledInput
          name="username"
          type="text"
          value={loginInfo.username}
          placeholder="username"
          onChange={handleChange}
        />
        <StyledInput
          name="password"
          type="password"
          value={loginInfo.password}
          placeholder="password"
          onChange={handleChange}
        />
        <StyledButton>Log In</StyledButton>
      </StyledForm>
    </SignUpBox>
  );
}

const mapStateToProps = state => {
  let login = state.LoginReducer;

  return {
    isFetching: login.isFetching,
    error: login.error
  };
};

export default connect(mapStateToProps, { userLogin })(Login);
