import {createStore} from 'redux';
import reducers from './reducers';
import middleware from "./middleware";

const initialState = {
    flats: [],
    totalFlats: 0,
    currentPage: 1,
    pageSize: 5,
    error: null,
    mode: 0,
    currentFlat:
        {
            id: "",
            name: "",
            coords_x: "",
            coords_y: "",
            date: "",
            area: "",
            rooms: "",
            price: "",
            kitchenArea: "",
            view: "",
            house_id: "",
            house_name: "",
            house_year: "",
            house_floors: "",
            house_flatsOnFloor: "",
            house_lifts: ""
        },
    filters:
        {
            id: {filter: null, sort: 0},
            name: {filter: null, sort: 0},
            coordinates: {filter: null, sort: 0},
            x: {filter: null, sort: 0},
            y: {filter: null, sort: 0},
            date: {filter: null, sort: 0},
            area: {filter: null, sort: 0},
            rooms: {filter: null, sort: 0},
            price: {filter: null, sort: 0},
            kitchenArea: {filter: null, sort: 0},
            view: {filter: null, sort: 0},
            house: {filter: null, sort: 0}
        }
}

export default createStore(reducers, initialState, middleware);