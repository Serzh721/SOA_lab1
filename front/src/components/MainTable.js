import React from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSort, faSortUp, faSortDown} from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table'

class MainTable extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch({type: "LOAD_FLATS", value: {}})
    }

    render() {
        let result = [];
        if (this.props.flats) {
            for (let flat of this.props.flats) {
                result.push(
                    <tr onClick={() => this.handleClick(flat)}>
                        <td>{flat.id._text}</td>
                        <td>{flat.name._text}</td>
                        <td>x={flat.coordinates.x._text}, y={flat.coordinates.y._text}</td>
                        <td>{flat.creationDate._text}</td>
                        <td>{flat.area ? flat.area._text : ""}</td>
                        <td>{flat.numberOfRooms ? flat.numberOfRooms._text : ""}</td>
                        <td>{flat.price ? flat.price._text : ""}</td>
                        <td>{flat.kitchenArea ? flat.kitchenArea._text : ""}</td>
                        <td>{flat.view ? flat.view._text : ""}</td>
                        <td>{flat.house ? flat.house.name._text : ""}</td>
                    </tr>
                )
            }
        }
        return (
            <Table bordered hover>
                <thead className="table-dark">
                <tr>
                    <th scope="col">ID <FontAwesomeIcon
                        icon={this.props.filters.id.sort === 0 ? faSort : this.props.filters.id.sort === 1 ? faSortUp : faSortDown}
                        onClick={() => this.sort("id")}/></th>
                    <th scope="col">Name <FontAwesomeIcon
                        icon={this.props.filters.name.sort === 0 ? faSort : this.props.filters.name.sort === 1 ? faSortUp : faSortDown}
                        onClick={() => this.sort("name")}/></th>
                    <th scope="col">Coordinates <FontAwesomeIcon
                        icon={this.props.filters.coordinates.sort === 0 ? faSort : this.props.filters.coordinates.sort === 1 ? faSortUp : faSortDown}
                        onClick={() => this.sort("coordinates")}/></th>
                    <th scope="col">Creation Date <FontAwesomeIcon
                        icon={this.props.filters.date.sort === 0 ? faSort : this.props.filters.date.sort === 1 ? faSortUp : faSortDown}
                        onClick={() => this.sort("date")}/></th>
                    <th scope="col">Area <FontAwesomeIcon
                        icon={this.props.filters.area.sort === 0 ? faSort : this.props.filters.area.sort === 1 ? faSortUp : faSortDown}
                        onClick={() => this.sort("area")}/></th>
                    <th scope="col">Rooms <FontAwesomeIcon
                        icon={this.props.filters.rooms.sort === 0 ? faSort : this.props.filters.rooms.sort === 1 ? faSortUp : faSortDown}
                        onClick={() => this.sort("rooms")}/></th>
                    <th scope="col">Price <FontAwesomeIcon
                        icon={this.props.filters.price.sort === 0 ? faSort : this.props.filters.price.sort === 1 ? faSortUp : faSortDown}
                        onClick={() => this.sort("price")}/></th>
                    <th scope="col">Kitchen Area <FontAwesomeIcon
                        icon={this.props.filters.kitchenArea.sort === 0 ? faSort : this.props.filters.kitchenArea.sort === 1 ? faSortUp : faSortDown}
                        onClick={() => this.sort("kitchenArea")}/></th>
                    <th scope="col">View <FontAwesomeIcon
                        icon={this.props.filters.view.sort === 0 ? faSort : this.props.filters.view.sort === 1 ? faSortUp : faSortDown}
                        onClick={() => this.sort("view")}/></th>
                    <th scope="col">House <FontAwesomeIcon
                        icon={this.props.filters.house.sort === 0 ? faSort : this.props.filters.house.sort === 1 ? faSortUp : faSortDown}
                        onClick={() => this.sort("house")}/></th>
                </tr>
                </thead>
                <tbody>{result}</tbody>
            </Table>
        )
    }

    sort(filterName) {
        this.props.dispatch({type: "UPDATE_SORT", value: {filterName: filterName}})
        this.props.dispatch({type: "LOAD_FLATS", value: {}})
    }

    handleClick(flat) {
        this.props.dispatch({type: "UPDATE_CURRENT_FLAT", value: {flat: flat}});
        this.props.dispatch({type: "SET_MODE", value: {mode: 1}})
    }
}

const mapStateToProps = function (store) {
    return {
        flats: store.flats,
        filters: store.filters
    }
};

export default connect(mapStateToProps)(MainTable);