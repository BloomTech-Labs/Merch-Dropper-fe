import React, { useState } from "react";
import { connect } from "react-redux";
import { postUser } from "../../store/actions";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import axios from "axios";

const initialStoreName = {
  store_name: "",
};

function CreateStore({ postUser, history }) {
  const [storeName, setStoreName] = useState("");
  const [domain, setDomain] = useState("");
  const [activeStep, setActiveStep] = React.useState(2);
  const [isSubmit, setIsSubmit] = useState(false);

  // This code is specific to the Material-UI components for displaying the progress bar (steps 1, 2, 3)
  const steps = getSteps();
  const classes = useStyles();

  const handleChange = (e) => {
    setStoreName(displayStoreName(e.target.value));
  };

  const displayStoreName = (string) => {
    let splitString = string.split(/[^A-Za-z]/);
    let joinedString = splitString.join("");

    setDomain(joinedString);
  };

  // The code below must be adjusted for the correct end point once merged
  // const profile = JSON.parse(localStorage.getItem(profile));
  // console.log(profile);

  const callSignUp = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    // axios
    //   .post(`http://localhost:5032/api/stores`, {
    //     store_name: storeName,
    //     email: profile.email,
    //   })
    //   .then((res) => {
    //     setIsSubmit(false);
    //   });
  };

  const callCreateStore = (e) => {
    e.preventDefault();
    postUser(storeName);
    history.push("/");
  };

  const skipToDashboard = (e) => {
    e.preventDefault();
    history.push("/");
  };

  // if user submits the store creation form, a new route is created based on the user's custom store name
  // if user skips this step, the user is forwarded to /dashboard until they create a custom store name

  return (
    <Container>
      <div>
        <Header>Merch made easy.</Header>
        <H2>Sell your custom print-on-demand designs with Merch Dropper</H2>
        <CreateH3>Create your store</CreateH3>
        <CreateP>
          Simplified setup includes free custom domain and storefront template.
        </CreateP>
        <DesignsH3>Upload your designs</DesignsH3>
        <DesignsP>
          Add your artwork or create a design with our easy-to-use tool.
        </DesignsP>
        <SalesH3>Hassle-free sales</SalesH3>
        <SalesP>We print and shop merchandise straight to the customer.</SalesP>
      </div>
      <CreateStoreForm onSubmit={callSignUp}>
        <FormHeader>Create store</FormHeader>
        <StepperDiv>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </StepperDiv>
        <StoreTextDiv>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Store name"
            name="store-name"
            variant="outlined"
            inputProps={{ maxLength: 25 }}
            value={storeName}
            onChange={handleChange}
          />
        </StoreTextDiv>
        <URLPreviewDiv>
          {domain.length < 16 ? (
            <p>merchdropper.com/{domain}</p>
          ) : (
            <p>
              merchdropper.com/<br></br>
              {domain}
            </p>
          )}
        </URLPreviewDiv>
        <CreateStoreButton type="submit">Create store</CreateStoreButton>
        <SkipCreateStoreButton onClick={skipToDashboard}>
          Skip for now
        </SkipCreateStoreButton>
      </CreateStoreForm>
    </Container>
  );
}

const mapStateToProps = (state) => {
  let register = state.RegisterReducer;

  return {
    isFetching: register.isFetching,
    error: register.error,
  };
};

export default connect(mapStateToProps, { postUser })(CreateStore);

// All the material UI
function getSteps() {
  return ["Create account", "Connect Stripe", "Create store"];
}

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "38.2ch",
  },
}));

// All the styling
const Container = styled.div`
  width: 1440px;
  height: 1024px;
  background: #f3f3f3;
`;

const Header = styled.h1`
  position: absolute;
  width: 392px;
  height: 56px;
  left: 104px;
  top: 153px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
`;

const H2 = styled.h2`
  position: absolute;
  width: 555px;
  height: 84px;
  left: 104px;
  top: 225px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #333333;
`;

const CreateH3 = styled.h3`
  position: absolute;
  width: 186px;
  height: 28px;
  left: 104px;
  top: 365px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const DesignsH3 = styled.h3`
  position: absolute;
  width: 220px;
  height: 28px;
  left: 104px;
  top: 495px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const SalesH3 = styled.h3`
  position: absolute;
  width: 190px;
  height: 28px;
  left: 104px;
  top: 625px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const CreateP = styled.p`
  position: absolute;
  width: 311px;
  height: 42px;
  left: 104px;
  top: 397px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const DesignsP = styled.p`
  position: absolute;
  width: 311px;
  height: 42px;
  left: 104px;
  top: 527px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const SalesP = styled.p`
  position: absolute;
  width: 311px;
  height: 42px;
  left: 104px;
  top: 657px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const CreateStoreForm = styled.form`
  position: absolute;
  width: 550px;
  height: 888px;
  left: 786px;
  top: 68px;
  background: #ffffff;
  border-radius: 30px;
`;

const FormHeader = styled.h2`
  position: absolute;
  width: 199px;
  height: 42px;
  left: calc(50% - 199px / 2 - 0.5px);
  top: 86px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
`;

const StepperDiv = styled.div`
  position: absolute;
  width: 350px;
  height: 27px;
  left: calc(50% - 350px / 2 + 1.5px);
  top: 127px;
`;

const StoreTextDiv = styled.div`
  position: absolute;
  width: 344px;
  height: 59px;
  left: calc(50% - 344px / 2);
  top: 252px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const URLPreviewDiv = styled.div`
  position: absolute;
  width: 275px;
  height: 21px;
  left: calc(50% - 275px / 2 - 10.5px);
  top: 323px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`;

const CreateStoreButton = styled.button`
  position: absolute;
  width: 344px;
  height: 59px;
  left: calc(50% - 344px / 2);
  top: 372px;
  background: #c4c4c4;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const SkipCreateStoreButton = styled.button`
  position: absolute;
  width: 344px;
  height: 59px;
  left: 103px;
  top: 449px;
  border: 3px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 18px;
`;
