import {ALLCHECKED, UNCHECKEDALL, TOGGLECHECK} from "./types";

const initialState = {
    allChecked: false,
    oneChecked: false,
    twoChecked: false,
    threeChecked: false,
    fourChecked: false,
}


export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALLCHECKED:
            return {
                ...state,
                allChecked: true,
                oneChecked: true,
                twoChecked: true,
                threeChecked: true,
                fourChecked: true,
            }
        case UNCHECKEDALL:
            return {
                ...state,
                allChecked: false,
                oneChecked: false,
                twoChecked: false,
                threeChecked: false,
                fourChecked: false,
            }
        case TOGGLECHECK:
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