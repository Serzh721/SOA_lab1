import React from "react";
import {connect} from "react-redux";

class Filter extends React.Component {
    render() {
        return (
            <form>
                <div className="row justify-content-md-center">
                    <div className="col-auto">
                        <label className="form-label" htmlFor="id">ID</label>
                        <input type="number" id="id" className="form-control" value={this.props.filters.id.filter}
                               onChange={(e) => this.updateFilter(e, "id")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control" value={this.props.filters.name.filter}
                               onChange={(e) => this.updateFilter(e, "name")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="x">X</label>
                        <input type="number" id="x" className="form-control" value={this.props.filters.x.filter}
                               onChange={(e) => this.updateFilter(e, "x")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="y">Y</label>
                        <input type="number" id="y" className="form-control" value={this.props.filters.y.filter}
                               onChange={(e) => this.updateFilter(e, "y")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="date">Date</label>
                        <input type="text" id="date" className="form-control" value={this.props.filters.date.filter}
                               onChange={(e) => this.updateFilter(e, "date")}/>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-auto">
                        <label className="form-label" htmlFor="area">Area</label>
                        <input type="number" id="area" className="form-control" value={this.props.filters.area.filter}
                               onChange={(e) => this.updateFilter(e, "area")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="rooms">Rooms</label>
                        <input type="number" id="rooms" className="form-control" value={this.props.filters.rooms.filter}
                               onChange={(e) => this.updateFilter(e, "rooms")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="price">Price</label>
                        <input type="number" id="price" className="form-control" value={this.props.filters.price.filter}
                               onChange={(e) => this.updateFilter(e, "price")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="kitchenArea">Kitchen Area</label>
                        <input type="number" id="kitchenArea" className="form-control"
                               value={this.props.filters.kitchenArea.filter}
                               onChange={(e) => this.updateFilter(e, "kitchenArea")}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label" htmlFor="view">View</label>
                        <input type="text" id="view" className="form-control" value={this.props.filters.view.filter}
                               onChange={(e) => this.updateFilter(e, "view")}/>
                    </div>
                </div>
                <div className="col-auto">
                    <br/>
                    <button type="button" className="btn btn-outline-primary"
                            onClick={() => this.applyChanges()}>Apply
                    </button>
                </div>
            </form>
        )
    }

    updateFilter(e, name) {
        this.props.dispatch({type: "UPDATE_FILTER", value: {filterName: name, value: e.target.value}})
    }

    applyChanges() {
        this.props.dispatch({type: "UPDATE_CURRENT_PAGE", value: {currentPage: 1}})
        this.props.dispatch({type: "LOAD_FLATS", value: {}})
    }
}

const mapStateToProps = function (store) {
    return {
        filters: store.filters
    }
};

export default connect(mapStateToProps)(Filter);