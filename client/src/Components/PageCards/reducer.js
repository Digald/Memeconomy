import {GET_PAGES, UPDATE_CARD} from './actions';

const initialState = {
    pagesToBeDisplayed: [],
    currentHover: 1
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PAGES:
            return {...state, pagesToBeDisplayed: action.data};
        case UPDATE_CARD:
            return {...state, currentHover: action.data}
        default:
            return state;
    }
}