import {fromFlat} from "../util/flatUtil";

const mainReducer = (state = {}, action) => {
    switch (action.type) {
        case ("UPDATE_FLATS"): {
            let result = [];
            let flat = action.value.flatList.flat;
            if (flat && typeof flat[Symbol.iterator] === 'function') {
                result = flat;
            } else if (flat) {
                result.push(flat);
            }
            return Object.assign({}, state, {
                flats: result,
                totalFlats: parseInt(action.value.flatList.totalFlats._text)
            });
        }
        case ("UPDATE_CURRENT_PAGE"): {
            return Object.assign({}, state, {currentPage: action.value.currentPage})
        }
        case ("UPDATE_PAGE_SIZE"): {
            return Object.assign({}, state, {pageSize: action.value.pageSize})
        }
        case ("UPDATE_SORT"): {
            let filters = state.filters;
            filters[action.value.filterName].sort = (filters[action.value.filterName].sort + 1) % 3;
            return Object.assign({}, state, {filters: filters})
        }
        case ("UPDATE_FILTER"): {
            let filters = state.filters;
            filters[action.value.filterName].filter = action.value.value;
            return Object.assign({}, state, {filters: filters})
        }
        case ("UPDATE_CURRENT_FLAT_FIELD"): {
            let flat = state.currentFlat;
            flat[action.value.fieldName] = action.value.value;
            return Object.assign({}, state, {currentFlat: flat})
        }
        case ("UPDATE_CURRENT_FLAT"): {
            return Object.assign({}, state, {currentFlat: fromFlat(action.value.flat)})
        }
        case ("CLEAR_CURRENT_FLAT"): {
            let flat = state.currentFlat;
            for (let field in flat) {
                if (Object.prototype.hasOwnProperty.call(flat, field)) {
                    flat[field] = "";
                }
            }
            return Object.assign({}, state, {currentFlat: flat})
        }
        case ("SET_ERROR"): {
            return Object.assign({}, state, {error: action.value.error})
        }
        case ("SET_MODE"): {
            return Object.assign({}, state, {mode: action.value.mode})
        }
        default:
            return state;
    }
}

export default mainReducer