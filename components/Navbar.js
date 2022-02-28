import React from 'react';
import {NavLink, HashRouter,Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import Dashboard from './Dashboard';
import MyContext from './MyContext';

class Navbar extends React.Component{
    render(){
        var isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
        console.log(isUserLoggedIn);
        return(
            <div>
                {/* <MyContext.Consumer>
                    return(
                        <div>
                            {}
                        </div>
                    )
           
            </MyContext.Consumer> */}
                 <HashRouter>
                     {!isUserLoggedIn ? (
                     <div>
                     <NavLink  to="/login">Login</NavLink> 
                 <NavLink  to="/register">Register</NavLink>
                     <NavLink  to="/contact">Contact</NavLink> </div>) : ( <NavLink to ="/logout">Logout</NavLink>)}
                 
                 {/* <Route exact path="/" component={Login}></Route> */}
                  <Route path="/login" component={Login}></Route>
                  <Route path="/register" component={Register}></Route>
                  <Route path="/contact" component={Contact}></Route>
                  <Route path="/dashboard" component={Dashboard}></Route>
                 </HashRouter>
            </div>
        )
    }
}
export default Navbar;