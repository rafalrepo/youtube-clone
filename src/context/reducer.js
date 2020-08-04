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
        default:
            return state;
    }
}


export default reducer;