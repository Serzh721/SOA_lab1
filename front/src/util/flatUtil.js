import convert from "xml-js";

export function fromXML(xml) {
    return convert.xml2js(xml, {compact: true})
}

export function toXML(flat) {
    let result = "";
    if (flat.name) result += `<name>${flat.name}</name>`;
    if (flat.area) result += `<area>${flat.area}</area>`;
    if (flat.rooms) result += `<numberOfRooms>${flat.rooms}</numberOfRooms>`;
    if (flat.price) result += `<price>${flat.price}</price>`;
    if (flat.kitchenArea) result += `<kitchenArea>${flat.kitchenArea}</kitchenArea>`;
    if (flat.view) result += `<view>${flat.view}</view>`;
    if (flat.coords_x || flat.coords_y) {
        let coords = "";
        if (flat.coords_x) coords += `<x>${flat.coords_x}</x>`
        if (flat.coords_y) coords += `<y>${flat.coords_y}</y>`
        result += `<coordinates>${coords}</coordinates>`
    }
    if (flat.house_id || flat.house_name || flat.house_year || flat.house_floors || flat.house_flatsOnFloor || flat.house_lifts) {
        let house = "";
        if (flat.house_id) house += `<id>${flat.house_id}</id>`
        if (flat.house_name) house += `<name>${flat.house_name}</name>`
        if (flat.house_year) house += `<year>${flat.house_year}</year>`
        if (flat.house_floors) house += `<numberOfFloors>${flat.house_floors}</numberOfFloors>`
        if (flat.house_flatsOnFloor) house += `<numberOfFlatsOnFloor>${flat.house_flatsOnFloor}</numberOfFlatsOnFloor>`
        if (flat.house_lifts) house += `<numberOfLifts>${flat.house_lifts}</numberOfLifts>`
        result += `<house>${house}</house>`
    }
    return `<flat>${result}</flat>`
}

export function fromFlat(flat) {
    return {
        id: flat.id._text,
        name: flat.name._text,
        coords_x: flat.coordinates.x._text,
        coords_y: flat.coordinates.y._text,
        date: flat.creationDate._text,

        area: flat.area ? flat.area._text : "",
        rooms: flat.numberOfRooms ? flat.numberOfRooms._text : "",
        price: flat.price ? flat.price._text : "",
        kitchenArea: flat.kitchenArea ? flat.kitchenArea._text : "",
        view: flat.view ? flat.view._text : "",

        house_id: flat.house.id._text,
        house_name: flat.house.name._text,

        house_year: flat.house && flat.house.year ? flat.house.year._text : "",
        house_floors: flat.house && flat.house.numberOfFloors ? flat.house.numberOfFloors._text : "",
        house_flatsOnFloor: flat.house && flat.house.numberOfFlatsOnFloor ? flat.house.numberOfFlatsOnFloor._text : "",
        house_lifts: flat.house && flat.house.numberOfLifts ? flat.house.numberOfLifts._text : ""
    }
}