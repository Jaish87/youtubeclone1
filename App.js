
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Login from './components/Login';
import Navbar from './components/Navbar';
import MyProvider from './components/MyContext';

const API_KEY = "AIzaSyDkjxpRVglEe4HVzp86NM17Q1ECXp8EZes";

class App extends Component{
   

   render(){
     return(
       <div>
         
        {/* <MyProvider>
          <Login value={{isUserLoggedIn:true}}/>
        {this.props.children}
        </MyProvider> */}
        
        <Navbar ></Navbar>
        
           
       </div>
     )
   }
}
export default App;
