import {GET_PAGES} from './actions';

const initialState = {
    pagesToBeDisplayed: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PAGES:
            return {...state, pagesToBeDisplayed: action.data};
        default:
            return state;
    }
}