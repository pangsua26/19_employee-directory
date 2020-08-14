import React from "react";

const UserContext = React.createContext({
    image: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  
});

export default UserContext;