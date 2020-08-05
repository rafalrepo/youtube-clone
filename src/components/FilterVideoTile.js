import React from 'react';
import video from '../img/default-video.png';
import '../css/filtervideotile.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const FilterVideoTile = ({ movie }) => {

    const tags =  movie.tags ? movie.tags.map((tag, index) => <p key={index} className="filterVideo__tag">{tag}</p> ) : '';

    return(
        <article className="filterVideo">
            <div className="filterVideo__img">
                <img src={video}/>
            </div>
            <div className="filterVideo__content">
                <h4>{movie.title}</h4>
                <div className="filterVideo__videoInfo">
                    <p>{movie.channel}</p>
                    <CheckCircleIcon className="filterVideo__iconCheck"/>
                    <p>{movie.views}</p>
                    <FiberManualRecordIcon className="filterVideo__iconDot"/>
                    <p>{movie.timestamp}</p>
                </div>
                <p>{movie.description}</p>
                <div className="filterVideo__tags">
                    {tags}
                </div>
            </div>
        </article>
    )
}

export default FilterVideoTile;