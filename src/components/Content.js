import React, { useEffect } from 'react';
import '../css/content.css';
import {  useVideoContext } from '../context/VideoContext';
import VideoTile from './VideoTile';


const Content = () => {

    const [{ movies } , dispatch] = useVideoContext();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES'});
    }, [])


    return(
        <div className="content">
            <h2>Wybrane dla Ciebie</h2>
            <div className="content__main">
                {movies.map((movie) => 
                    <VideoTile key={movie.id} movie={movie}/>
                )}
            </div>
        </div>
    )
}   

export default Content;