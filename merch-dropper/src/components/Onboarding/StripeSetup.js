import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postStripe } from '../../store/actions';
import StripeConnect from './StripeConnect'
import styled from 'styled-components';
import StripeCTA from './StripeCTA';


const MainContainer = styled.div`

    background: #E5E5E5;
    height: 1024px;
    display:flex;
    justify-content:space-around;

`;

const StripeSetup = ({history}) => {

    return (
        <MainContainer>
            <StripeCTA/>
            <StripeConnect/>
        </MainContainer>
    );
}


const mapStateToProps = state => {
    let stripe = state.StripeReducer;

    return {
        isFetching: stripe.isFetching,
        error: stripe.error
    }

}

export default StripeSetup;