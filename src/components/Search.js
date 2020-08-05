import React, { useState, useEffect } from 'react';
import { useVideoContext } from '../context/VideoContext';
import VideoTile from './VideoTile';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import '../css/search.css'
import FilterVideoTile from './FilterVideoTile';

const Search = ({ match }) => {

    const [{ movies, toggleSiedbar }, dispatch] = useVideoContext();
    const [newMovies, setNewMovies] = useState([]);
    const searchWord = match.params.word.toUpperCase();

    useEffect(() => {

        const search = movies.filter(movie => {
            const title = movie.title.toUpperCase();
            const channel = movie.channel.toUpperCase();
            const description = movie.description.toUpperCase();
            return title.indexOf(`${searchWord}`) >= 0 || channel.indexOf(`${searchWord}`) >= 0 || description.indexOf(`${searchWord}`) >= 0
        })
        
        setNewMovies(search);

    }, [searchWord])

    return(
        <div className="search" style={{flex: !toggleSiedbar ? '0.8' : '0.95'}}>
            <h3><TuneOutlinedIcon className="search__icon"/> Filtr</h3>
            <hr />
            <div className="search__main">
                {newMovies.map((movie, index) => 
                    <FilterVideoTile key={index} movie={movie}/>
                )}
            </div>
        </div>
    )
}

export default Search;