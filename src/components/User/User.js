import React from "react";

const User = (props) => (
    <div>
        <h1>User Information</h1>
        <p>User Name: {props.name}</p>
        <p>Age: {props.age}</p>
    </div>
)
export default User;