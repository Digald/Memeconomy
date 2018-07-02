import {GET_PAGES, UPDATE_CARD} from './actions';
import {UNHIGHLIGHT_PAGE} from '../IndividualIcon/actions';

const initialState = {
    pagesToBeDisplayed: [],
    currentHover: 1
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PAGES:
            return {...state, pagesToBeDisplayed: action.data};
        case UPDATE_CARD:
            return {...state, currentHover: action.data};
        case UNHIGHLIGHT_PAGE:
            return {...state, currentHover: 0};
        default:
            return state;
    }
}