import React from "react";  
import {Outlet} from "react-router-dom";

const Auth = () => {
    return (
      <div className="font-poppins">
        Auth Page

        <Outlet />
      </div>
    );
};
  
  export default Auth;
  