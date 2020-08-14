import React from "react";

// sort by first name
function SortButton(props) {
    return (
        <div className="button center">
            <button className="btn" onClick={props.sortFirst}>First Name</button>
            &nbsp;
        </div>
    )
}

export default SortButton;