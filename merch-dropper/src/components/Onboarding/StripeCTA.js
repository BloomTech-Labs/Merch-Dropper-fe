import React from 'react';
import {CTAContainer, CTAH2, CTABody, CreateH3, CreateP, DesignH3, DesignP, SalesH3, SalesP} from './Styled'

const StripeCTA = () => {

    return (
            <CTAContainer>
                <CTAH2>Merch made easy.</CTAH2>
                    <CTABody>Sell your custom print-on-demand designs with Merch Dropper</CTABody>
                <CreateH3>Create your store</CreateH3>
                    <CreateP>Simplified setup include free custom domain and storefront template.</CreateP>
                <DesignH3>Upload your designs</DesignH3>
                    <DesignP>Add your artwork or create a design with our easy-to-use tool.</DesignP>
                <SalesH3>Hassle-free sales</SalesH3>
                    <SalesP>We print and ship merchandise straight to the customer.</SalesP>
            </CTAContainer>

    );
}

export default StripeCTA;