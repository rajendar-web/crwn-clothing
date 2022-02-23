import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeChekoutButton=({ price })=>{

    const priceForStripe =price*100;

    const publishableKey='pk_test_51KWETFSANShdn0uVW3kcZA18jMP8Y2aNUjDA5nEZlBQUwJ3Zp8BIyqeLLRydtNVHNbnCqiFbPDT6La6KGmljWVCv00CkSKAIeK'

    const onToken=(token)=>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}

export default StripeChekoutButton;