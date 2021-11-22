import React from "react";
import {connect} from "react-redux";
import Modal from 'react-bootstrap/Modal'
import {Button, Col, Form, Row} from "react-bootstrap";

class EditWindow extends React.Component {
    render() {
        return (
            <Modal centered show={this.props.mode !== 0} onHide={() => this.handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.mode === 2 ? "Add flat" : `Modify flat ${this.props.flat.id}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={this.props.flat.name}
                                                  onChange={(e) => this.handleChange(e, "name")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Area</Form.Label>
                                    <Form.Control type="number" value={this.props.flat.area}
                                                  onChange={(e) => this.handleChange(e, "area")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>X coordinate</Form.Label>
                                    <Form.Control type="number" value={this.props.flat.coords_x}
                                                  onChange={(e) => this.handleChange(e, "coords_x")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Y coordinate</Form.Label>
                                    <Form.Control type="number" value={this.props.flat.coords_y}
                                                  onChange={(e) => this.handleChange(e, "coords_y")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Rooms</Form.Label>
                                    <Form.Control type="number" value={this.props.flat.rooms}
                                                  onChange={(e) => this.handleChange(e, "rooms")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" value={this.props.flat.price}
                                                  onChange={(e) => this.handleChange(e, "price")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Kitchen Area</Form.Label>
                                    <Form.Control type="number" value={this.props.flat.kitchenArea}
                                                  onChange={(e) => this.handleChange(e, "kitchenArea")}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>View</Form.Label>
                                    <Form.Control type="text" value={this.props.flat.view}
                                                  onChange={(e) => this.handleChange(e, "view")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>House Name</Form.Label>
                                    <Form.Control type="text" value={this.props.flat.house_name}
                                                  onChange={(e) => this.handleChange(e, "house_name")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>House Year</Form.Label>
                                    <Form.Control type="number" value={this.props.flat.house_year}
                                                  onChange={(e) => {
                                                      this.handleChange(e, "house_year")
                                                  }}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>House Floors</Form.Label>
                                    <Form.Control type="number" value={this.props.flat.house_floors}
                                                  onChange={(e) => this.handleChange(e, "house_floors")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>House FlatsOnFloor</Form.Label>
                                    <Form.Control type="number" value={this.props.flat.house_flatsOnFloor}
                                                  onChange={(e) => {
                                                      this.handleChange(e, "house_flatsOnFloor")
                                                  }}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>House Lifts</Form.Label>
                                    <Form.Control type="number" value={this.props.flat.house_lifts}
                                                  onChange={(e) => this.handleChange(e, "house_lifts")}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" disabled={this.props.mode !== 1} onClick={() => this.handleDelete()}>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={() => this.handleSubmit()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    handleClose() {
        this.props.dispatch({type: "SET_MODE", value: {mode: 0}})
    }

    handleSubmit() {
        if (this.props.mode === 1) {
            this.props.dispatch({type: "UPDATE_FLAT"})
        }
        if (this.props.mode === 2) {
            this.props.dispatch({type: "ADD_FLAT"})
        }
        this.props.dispatch({type: "SET_MODE", value: {mode: 0}})
    }

    handleDelete() {
        this.props.dispatch({type: "DELETE_FLAT"})
        this.props.dispatch({type: "SET_MODE", value: {mode: 0}})
    }

    handleChange(e, field) {
        let mode = this.props.mode;
        this.props.dispatch({type: "SET_MODE", value: {mode: 0}})
        this.props.dispatch({type: "UPDATE_CURRENT_FLAT_FIELD", value: {fieldName: field, value: e.target.value}});
        this.props.dispatch({type: "SET_MODE", value: {mode: mode}})
    }
}

const mapStateToProps = function (store) {
    return {
        mode: store.mode,
        flat: store.currentFlat
    }
};

export default connect(mapStateToProps)(EditWindow);