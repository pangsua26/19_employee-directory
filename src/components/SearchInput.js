import React from "react";

// search field with input properties
function SearchInput(props) {
   return (
    <div>
        <input
            style={{width: "30%"}}
            className="center"
            value={props.results}
            onChange={props.handleInputChange}
            placeholder="Type a first name"
            id="name"
        />
    </div>
   )
}

export default SearchInput;