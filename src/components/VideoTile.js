import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import video from '../img/default-video.png';
import '../css/videotile.css';


const VideoTile = ({ movie }) => {

    return(
        <article className="video">
            <div className="video__img">
                <img src={video}/>
            </div>
            <div className="video__content">
                <div className="video__avatar">
                    <Avatar />
                </div>
                <div className="video__info">
                    <h4>{movie.title}</h4>
                    <p>{movie.channel}</p>
                    <p>{movie.views}</p>
                    <p>{movie.timestamp}</p>
                </div>
            </div>
        </article>
    )
}

export default VideoTile;