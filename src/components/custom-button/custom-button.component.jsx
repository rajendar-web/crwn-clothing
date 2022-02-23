import React from "react";

import './custom-button.styles.scss'

const CustomButton=({children, isGoogleSighIn, inverted, ...otherProps})=>(

    <button className={`${inverted ? 'inverted':''} ${isGoogleSighIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {children}
    </button>
)

export default CustomButton;
