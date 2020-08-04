import axios from 'axios';
import data from "../data/data.json";

// console.log(data);

export const initialState = {
    movies: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_MOVIES': {
            // const loadData = () => JSON.parse(JSON.stringify(jsonData));
            // console.log(data);
            console.log(data);
            return {
                ...state,
                movies: data
            }
        }
        default:
            return state;
    }
}


export default reducer;