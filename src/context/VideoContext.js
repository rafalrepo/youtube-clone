import React, { createContext, useReducer, useContext } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ reducer, initialState, children }) => {

    return(
        <VideoContext.Provider value={ useReducer(reducer, initialState) }>
            { children }
        </VideoContext.Provider>
    )
}

export const useVideoContext = () => useContext(VideoContext)
