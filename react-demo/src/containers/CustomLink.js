import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,withRouter} from 'react-router-dom';

function CustomLink(){
    return(
        <Router>
            <div>
                <OldLink activeOnlyWhenExact={true} to="/" label="Home" />
                <OldLink to="/about" label="About" />
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    )
}

function OldSchoolMenuLink({to,location,activeOnlyWhenExact,label}){
    let isActive = to===location.pathname;
    // console.log(props);
    return(
        <li>
            <Link className={isActive?'active':""} exact={activeOnlyWhenExact} to={to}>{label}</Link>
        </li>
    ) 
}

const OldLink = withRouter(OldSchoolMenuLink);

function Home(props){
    // console.log(props);
    return <h2>Home组件</h2>
}

function About(){
    return <h2>About组件</h2>
}
export default CustomLink;
