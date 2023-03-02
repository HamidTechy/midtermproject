import React, { useState } from "react";
import { Form } from "react-router-dom";

const Message = () =>{
    const [uname, setName] = useState("");
    const [age, setAge] = useState("");

const UserName = (event) => {
    setName(event.target.value);
}
const UserAge = (event) => {
    setAge(event.target.value);
}


    return(
        <>
        
        Name: <input name="uname" type="text" onChange={UserName}/>
        <br />
        Age: <input name="age" type="text" onChange={UserAge}/>
        <br />
        Name: {uname}
        <br />
        Age: {age}
        </>
    )
}
export default Message;