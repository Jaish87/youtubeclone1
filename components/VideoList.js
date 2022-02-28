import React from 'react';

class VideoList extends React.Component{

    //[0].snippet.title

     renderVideos = () => {
        let list =  this.props.videos.map( video => {
              return  <li onClick= { () => this.props.videoSelection(video) } key={video.id.videoId}><img src={video.snippet.thumbnails.default.url}></img>{video.snippet.title}</li>
          })
          return list;
     }

   render(){
       return(
           <div>
                <ul>
                {this.renderVideos()}
                </ul>
                   
           </div>
       )
   }
}
export default VideoList;