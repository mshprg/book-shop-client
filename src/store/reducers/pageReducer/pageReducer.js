import {SET_CURRENT_PAGE, SET_PAGES_COUNT} from "@/store/reducers/pageReducer/pageReducerActions";

const initialState = {
    _pagesCount: 0,
    _currentPage: 1,
}

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGES_COUNT:
            return {...state, _pagesCount: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, _currentPage: action.payload}
        default:
            return state
    }
}