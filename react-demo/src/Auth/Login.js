import React, { Component } from 'react';
import fakeAuth from './fakeAuth';
import {BrowserRouter as Router,  Route,  Link,  Redirect,  withRouter} from "react-router-dom";

class Login extends Component {
    constructor(){
        super();
        this.state = {
            redirectToReferrer:false
        }
    }
    Log = ()=>{
        fakeAuth.authenticate();
        this.setState({
            redirectToReferrer:true
        })
    }
    render() {
        if(this.state.redirectToReferrer){
            return <Redirect to='/protected' />
        }
        return (
            <div>
                <p>You must log in to view the page at </p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

export default Login;
