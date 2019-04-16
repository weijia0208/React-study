import React, { Component } from "react";
import {  BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";
import fakeAuth from './fakeAuth';

function Button(props){
    
    return(
        fakeAuth.isAuthenticated?
        <p>
            welcome!!!
            <button onClick={()=>{
                fakeAuth.signout(props.history.push('/'));
            }}>退出</button>
        </p>:<p>You are not logged in.</p>
    )
}
const AuthButton = withRouter(Button);
export default AuthButton;