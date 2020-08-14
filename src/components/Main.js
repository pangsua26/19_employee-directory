//imports

import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import EmployeeSearch from "./EmployeeSearch";
import SearchInput from "./SearchInput";
import SortButton from "./SortButton";

function Main () {
    // initialize states
    const [users, setUsers] = useState([]);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    // get users from API
    const loadUsers = () => {
        API
        .getUsers()
        .then(users => {
            setUsers(users);
        })
        .catch(err => console.log(err));
    };

    // input value on change
    const handleInputChange = e => {
        setSearch(e.target.value);
        if (!search) {
            setSearchedUsers([]);
        } else {
            const results = users.filter(user => {
                const fullName = user.firstName + " " + user.lastName;
                return fullName.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
        setSearchedUsers(results);
        }
    };

    const sortByFirstName = () => {
        if (!sorted) {
            setUsers(users.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1))
            setSorted(!sorted);
        } else {
            setUsers(users.sort((a, b) => (a.firstName > b.firstName) ? -1 : 1))
            setSorted(false);
        }
    }

    return (
        <UserContext.Provider value={{ users, search, searchedUsers }}>
          <div className="center">
              <SearchInput
                  handleInputChange={handleInputChange}
                  results={search}
              />
              <SortButton 
                  sortFirst={sortByFirstName}
              />
          </div>
          <div className="main">
              <EmployeeSearch />
          </div>
        </UserContext.Provider>     
    );
};

export default Main;

