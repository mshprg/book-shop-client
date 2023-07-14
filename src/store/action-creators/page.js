import {
    SET_CURRENT_PAGE,
    SET_PAGES_COUNT
} from "@/store/reducers/pageReducer/pageReducerActions";

export const setPagesCount = (payload) => {
    return {type: SET_PAGES_COUNT, payload}
}

export const setCurrentPage = (payload) => {
    return {type: SET_CURRENT_PAGE, payload}
}