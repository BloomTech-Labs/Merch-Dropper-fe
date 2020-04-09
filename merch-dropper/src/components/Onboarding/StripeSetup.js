import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postStripe } from '../../store/actions';
import StripeConnect from './StripeConnect';
import {MainContainer} from './Styled';
import StripeCTA from './StripeCTA';




const StripeSetup = () => {

    return (
        <MainContainer>
            <StripeCTA/>
            <StripeConnect/>
        </MainContainer>
    );
}

export default StripeSetup;