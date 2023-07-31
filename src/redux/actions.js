import {ALLCHECKED, UNCHECKEDALL, TOGGLECHECK} from "./types";

export function filterAllChecked() {
    return {
        type: ALLCHECKED,
    }
}

export function filterAllUnchecked() {
    return {
        type: UNCHECKEDALL,
    }
}

export const toggleCheck = (name) => ({
    type: TOGGLECHECK,
    payload: name,
});