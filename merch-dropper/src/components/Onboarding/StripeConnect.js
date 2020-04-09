import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import {FormContainer, ExitButton, StripeTitle, StepContainer, StripeButton, StripeSkipButton} from './Styled'
import history from '../../utils/history';

const getSteps = () => {

    return ['Create Account', 'Connect Stripe', 'Create Store'];

}

const ConnectStripe = e => {

    e.preventDefault();
    window.location.replace('https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_GbPkPOEwM5cWwcBy1WX8mXq7UeB0VlxB&scope=read_write')

}

const SkipSetup = e => {

    e.preventDefault();
    history.push('/createstore');
}

const StripeConnect = () => {

    let queryString = window.location.search;
    const [stripeConnected,setStripeConnected] = useState(false);
    let stripeError = false;
    let userCode = "";
    const [activeStep, setActiveStep] = useState(1);
    const steps = getSteps();

    if(queryString.includes("error")){ stripeError = true; }

    if(queryString.includes("code=")){
       
        const stripe = require('stripe')('sk_test_LuUPedkQ24QvxJfvBVKdSdmT00ZkaFXUHk');
        userCode = queryString.substring( queryString.indexOf('code=') + 5 );
        
        stripe.oauth.token({
            grant_type: 'authorization_code',
            code: userCode,
            }).then(res => {/*returns an object withe the users stripe info. Still need to create an endpoint */
                            setStripeConnected(true);
            });

    }

    return (
        <FormContainer>
            <ExitButton onClick={SkipSetup}/>

            <StripeTitle>Connect Stripe</StripeTitle>
            <StepContainer>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </StepContainer>
            {   //For the initial setup form
                !queryString &&
                <StripeButton onClick={ConnectStripe}>Connect Stripe</StripeButton>   
            }
            {   //For the initial setup form
                (!queryString || stripeError) &&
                <StripeSkipButton onClick={SkipSetup}>Skip for now</StripeSkipButton>
            }
            {   //If we get a user code back and the connect was successful
                queryString &&
                <StripeButton onClick={SkipSetup}>Create Store</StripeButton> 
            }
            {   //If the connection was not successful
                stripeError &&
                <StripeButton onClick={ConnectStripe}>Try Again</StripeButton> 
            }
        </FormContainer>

    );
}

export default StripeConnect;