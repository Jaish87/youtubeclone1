import React from 'react';
import MyContext from './MyContext';
import MyConsumer from './MyContext';

class SearchBar extends React.Component{

     constructor(){
         super();
         this.state= {
             term: ''
         }
     }

     logout = () => {
         localStorage.removeItem('isUserLoggedIn');
         this.props.history.push('/login');
     }

     handleSearch =(event) => {

             event.preventDefault();
             console.log(this.state);
             this.props.onVideoSearch(this.state.term);

     }
     render(){
         
         return(
             <div>
                 
                 <form onSubmit={this.handleSearch}>
                     <input size="100" type="text" onChange={(event) => {this.setState({term:event.target.value})}}></input>
                     <button>Search</button>
                     <button onClick= {this.logout}>Logout</button>
                 </form>
                 {/* <MyConsumer>
                 <p>{this.props.isUserLoggedIn}</p> 
                 </MyConsumer> */}
             </div>
         )
        
         
     }

}

export default SearchBar;