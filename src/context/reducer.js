import data from "../data/data.json";

export const initialState = {
    movies: [],
    toggleSiedbar: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_MOVIES': {
            return {
                ...state,
                movies: data
            }
        }
        case 'TOGGLE_SIEDBAR': {
            return {
                ...state,
                toggleSiedbar: !state.toggleSiedbar
            }
        }
        // case 'SEARCH': {
        //     console.log(action.payload);
        //     const newMovies = data.filter(movie => (movie.title.indexOf(action.payload) >- '-1' || movie.channel.indexOf(action.payload) >- '-1'));
        //     console.log();
        //     return {
        //         ...state,
        //         movies: action.payload ? newMovies : data,
        //     }
        // }
        default:
            return state;
    }
}


export default reducer;