import {DEFAULT_URL} from '../index'
import {applyMiddleware} from "redux";
import {fromXML, toXML} from "../util/flatUtil";

const mainMiddleware = store => next => action => {
    switch (action.type) {
        case("LOAD_FLATS"): {
            let req = new XMLHttpRequest();
            //pagination
            let pagination = `pageNumber=${store.getState().currentPage}&pageSize=${store.getState().pageSize}`;
            //sorting
            let order = "";
            order = applySort(store.getState().filters.id, "id", order);
            order = applySort(store.getState().filters.name, "name", order);
            order = applySort(store.getState().filters.coordinates, "coordinates", order);
            order = applySort(store.getState().filters.date, "creationDate", order);
            order = applySort(store.getState().filters.area, "area", order);
            order = applySort(store.getState().filters.rooms, "numberOfRooms", order);
            order = applySort(store.getState().filters.price, "price", order);
            order = applySort(store.getState().filters.kitchenArea, "kitchenArea", order);
            order = applySort(store.getState().filters.view, "view", order);
            order = applySort(store.getState().filters.house, "house", order);
            //filtering
            order = applyFilter(store.getState().filters.id, "id", order);
            order = applyFilter(store.getState().filters.name, "name", order);
            order = applyFilter(store.getState().filters.x, "coordinates", order, store.getState().filters.y);
            order = applyFilter(store.getState().filters.date, "creationDate", order);
            order = applyFilter(store.getState().filters.area, "area", order);
            order = applyFilter(store.getState().filters.rooms, "numberOfRooms", order);
            order = applyFilter(store.getState().filters.price, "price", order);
            order = applyFilter(store.getState().filters.kitchenArea, "kitchenArea", order);
            order = applyFilter(store.getState().filters.view, "view", order);
            order = applyFilter(store.getState().filters.house, "house", order);
            req.open("GET", `${DEFAULT_URL}/flats?${pagination}${order}`, false);
            req.onload = () => {
                if (req.status === 200) {
                    store.dispatch({type: "UPDATE_FLATS", value: fromXML(req.responseText)})
                    store.dispatch({type: "SET_ERROR", value: {error: null}})
                } else {
                    store.dispatch({type: "SET_ERROR", value: {error: req.responseText}})
                }
            };
            req.onerror = () => alert("Server is unavailable");
            req.send();
            return next(action)
        }
        case("UPDATE_FLAT"): {
            let req = new XMLHttpRequest();
            req.open("PUT", `${DEFAULT_URL}/flats/${store.getState().currentFlat.id}`, false);
            req.onload = () => {
                if (req.status === 200) {
                    store.dispatch({type: "LOAD_FLATS"})
                } else {
                    store.dispatch({type: "SET_ERROR", value: {error: req.responseText}})
                }
            };
            req.onerror = () => alert("Server is unavailable");
            req.setRequestHeader("content-type", "text/xml")
            req.send(toXML(store.getState().currentFlat));
            return next(action)
        }
        case("DELETE_FLAT"): {
            let req = new XMLHttpRequest();
            req.open("DELETE", `${DEFAULT_URL}/flats/${store.getState().currentFlat.id}`, false);
            req.onload = () => {
                if (req.status === 200) {
                    store.dispatch({type: "LOAD_FLATS"})
                } else {
                    store.dispatch({type: "SET_ERROR", value: {error: req.responseText}})
                }
            };
            req.onerror = () => alert("Server is unavailable");
            req.send();
            return next(action)
        }
        case("ADD_FLAT"): {
            let req = new XMLHttpRequest();
            req.open("POST", `${DEFAULT_URL}/flats`, false);
            req.onload = () => {
                if (req.status === 200) {
                    store.dispatch({type: "LOAD_FLATS"})
                } else {
                    store.dispatch({type: "SET_ERROR", value: {error: req.responseText}})
                }
            };
            req.onerror = () => alert("Server is unavailable");
            req.send(toXML(store.getState().currentFlat));
            return next(action)
        }
        default: {
            return next(action)
        }

    }
}

function applySort(filter, name, result) {
    if (filter.sort !== 0) {
        return result + `&orderBy=${name},${filter.sort === 1 ? "asc" : "desc"}`;
    } else return result;
}

function applyFilter(filter, name, result, secondFilter = null) {
    if (filter.filter) {
        if (secondFilter) {
            return result + `&${name}=${filter.filter},${secondFilter.filter}`;
        } else return result + `&${name}=${filter.filter}`;
    } else return result;
}

export default applyMiddleware(mainMiddleware)