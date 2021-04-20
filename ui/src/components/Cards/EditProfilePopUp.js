import React, {component} from 'react';
import { Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditProfilePopUp extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(

            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Your Profile Details !!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='Container'>
            <Row>
                <Col sm={6}>
                    <Form
                        onSubmit={this.handleSubmit}
                    >
                        <Form.Group controlId="CompanyName">
                            <Form.Label>
                                Company Name
                            </Form.Label>
                            <Form.Control
                                type='text'
                                name='CompanyName'
                                required
                                placeholder='Enter Your Company Name'
                            />
                        </Form.Group>

                        <Form.Group controlId="ContactNumber">
                            <Form.Label>
                                Contact Number
                            </Form.Label>
                            <Form.Control
                                type='text'
                                name='ContactNumber'
                                required
                                placeholder='Enter Your Contact Number'
                            />
                        </Form.Group>

                        <Form.Group controlId="Location">
                            <Form.Label>
                                Location
                            </Form.Label>
                            <Form.Control
                                type='text'
                                name='Location'
                                required
                                placeholder='Enter Your Location'
                            />
                        </Form.Group>

                        <Form.Group controlId="BusinessType">
                            <Form.Label>
                                Business Type
                            </Form.Label>
                            <Form.Control
                                type='text'
                                name='BusinessType'
                                required
                                placeholder='Enter Your Business Type'
                            />
                        </Form.Group>

                        <Form.Group controlId="Description">
                            <Form.Label>
                                Description
                            </Form.Label>
                            <Form.Control
                                type='text'
                                name='DepartmentName'
                                required
                                placeholder='Enter Your Description Here'
                            />
                        </Form.Group>

                        <Form.Group>
                            <Button
                            variant='primary'
                            >
                                Submit
                            </Button>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
         onClick={this.props.onHide}
         variant='danger'
        >Close
        </Button>
      </Modal.Footer>
    </Modal>

        );
    }
}