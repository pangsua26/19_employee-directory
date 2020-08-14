import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

// employee search function to pull UserContent hook to objects
function EmployeeSearch() {
    const { users, searchedUsers, search} = useContext(UserContext);

    console.log(users);
    console.log(searchedUsers);
    console.log(search);

    return (
        // return search format
        <div className="row">
            {search === "" ? (users.map(user => {
                    return (
                        <div className="col s12 m4" key={user.id}>
                            <div className="card small horizontal" >
                                <div className="card-image" style={{height: "250px", width: "250px"}}>
                                    <img src={user.image}  alt="avatar" /> 
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <span className="card-title">{user.firstName} {user.lastName}</span>
                                        <p>Phone: {user.phoneNumber}</p>
                                    </div>
                                    <div className="card-action">
                                        <a href={user.email}>{user.email}</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    )  
                })) : (searchedUsers.map(user => {
                    return (
                        <div className="col s12 m4" key={user.id}>
                            <div className="card small horizontal" >
                                <div className="card-image" style={{height: "250px", width: "250px"}}>
                                    <img src={user.image}  alt="avatar" /> 
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <span className="card-title">{user.firstName} {user.lastName}</span>
                                        <p>Phone: {user.phoneNumber}</p>
                                    </div>
                                    <div className="card-action">
                                        <a href={user.email}>{user.email}</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    );
                }))
            }
        </div>
    )
}
export default EmployeeSearch;