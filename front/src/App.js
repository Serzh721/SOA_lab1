import './App.css';
import React from "react";
import MainTable from "./components/MainTable";
import Pagination from "./components/Pagination";
import {connect} from "react-redux";
import Filter from "./components/Filter";
import EditWindow from "./components/EditWindow";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="alert alert-danger" role="alert" hidden={!this.props.error}>
                    {this.props.error}
                </div>
                <EditWindow store={this.props.store}/>
                <div className="pt-2 mt-2">
                    <Filter store={this.props.store}/><br/>
                </div>
                <MainTable store={this.props.store}/>
                <button className="btn btn-success" onClick={() => this.handleAdd()}>Add flat</button>
                <Pagination store={this.props.store}/>
            </div>
        );
    }

    handleAdd() {
        this.props.dispatch({type: "CLEAR_CURRENT_FLAT"})
        this.props.dispatch({type: "SET_MODE", value: {mode: 2}})
    }
}

const mapStateToProps = function (store) {
    return {
        error: store.error,
    }
};

export default connect(mapStateToProps)(App);
