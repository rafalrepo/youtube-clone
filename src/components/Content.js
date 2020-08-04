import React, { useEffect } from 'react';
import '../css/content.css';
import { useVideoContext } from '../context/VideoContext';
import VideoTile from './VideoTile';


const Content = () => {

    const [{ movies, toggleSiedbar } , dispatch] = useVideoContext();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES'});
    }, [])


    return(
        <div className="content" style={{flex: !toggleSiedbar ? '0.8' : '0.95'}}>
            <h2>Wybrane dla Ciebie</h2>
            <div className="content__main">
                {movies.map((movie, index) => 
                    <VideoTile key={index} movie={movie}/>
                )}
            </div>
        </div>
    )
}   

export default Content;