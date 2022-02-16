import React from "react";

import './custom-button.styles.scss'

const CustomButton=({children, isGoogleSighIn, ...otherProps})=>(

    <button className={`${isGoogleSighIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {children}
    </button>
)

export default CustomButton;
