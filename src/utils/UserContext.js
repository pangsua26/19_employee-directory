import React from "react";

const UserContext = React.createContext({
    // create user context once new values are given
    image: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    id:""
  
});

export default UserContext;