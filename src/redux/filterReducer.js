import {TOGGLE_CHECK, ALL_CHECKED, UN_CHECKED_ALL} from "./types";

const initialState = {
    allChecked: false,
    oneChecked: false,
    twoChecked: false,
    threeChecked: false,
    fourChecked: false,
}


export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_CHECKED:
            return {
                ...state,
                allChecked: true,
                oneChecked: true,
                twoChecked: true,
                threeChecked: true,
                fourChecked: true,
            }
        case UN_CHECKED_ALL:
            return {
                ...state,
                allChecked: false,
                oneChecked: false,
                twoChecked: false,
                threeChecked: false,
                fourChecked: false,
            }
        case TOGGLE_CHECK:
            const newState = {
                ...state,
                [action.payload]: !state[action.payload],
            };
            const allChecked = newState.oneChecked && newState.twoChecked && newState.threeChecked && newState.fourChecked;

            return {
                ...newState,
                allChecked,
            }
        default:
            return state;
    }
}