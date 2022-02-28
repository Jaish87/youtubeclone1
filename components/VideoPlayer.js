import React from 'react';

class VideoPlayer extends React.Component{
    render(){

         if(this.props.video){
              var videoId =  this.props.video.id.videoId;
              var url = `https://www.youtube.com/embed/${videoId}`;
            return(
                <div>
                    <iframe width="560" height="315" src={url} title="YouTube video player"  allowFullScreen></iframe>
                </div>
            )
         }
         else

         {
             return <div>Loading......</div>
         }
        
       
    }
}
export default VideoPlayer;