
import React from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

const API_KEY = "AIzaSyDkjxpRVglEe4HVzp86NM17Q1ECXp8EZes";

class Dashboard extends React.Component{
   constructor(){
     super();
     this.state = {
       videos: [],
       selectedVideo : null
     }
   }
   componentDidMount(){
       
    this.videoSearch('cricket');
   }
videoSearch =(term) =>{
  YTSearch({key:API_KEY,term:term},(videos) => {
    console.log(videos);
    this.setState({videos:videos, selectedVideo:videos[0]});
})
}

   render(){
        if(!localStorage.getItem('isUserLoggedIn')){
               this.props.history.push("/login");
        }
     return(
       <div>
         <br></br>
         {/* <SearchBar onVideoSearch= { (term) => {this.videoSearch(term) }}/> <br></br>  */}
         <SearchBar onVideoSearch= {this.videoSearch}/> <br></br> 
         <VideoPlayer video = {this.state.selectedVideo}/><br></br>
          <VideoList videoSelection={ video => {this.setState({ selectedVideo:video })}} videos = {this.state.videos}></VideoList>
       </div>
     )
   }
}
export default Dashboard;
