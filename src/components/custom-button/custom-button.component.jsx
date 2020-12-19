import React from 'react';

import './custom-button.styles.scss';

const CustomBtn= ({children,isGoogleSignIn,...otherprops})=>(
    <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-btn`}
    {...otherprops}
  >
    {children}
</button>

)

export default CustomBtn;