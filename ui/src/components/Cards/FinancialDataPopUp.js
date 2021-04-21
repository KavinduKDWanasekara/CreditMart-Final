import React, {component} from 'react';
import { Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import axiosInstance from '../../axios';

export class FinancialDataPopUp extends Component{
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
          Add Your Financial Data !!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='Container'>
            <Row>
                <Col sm={6}>
                    <Form
                        onSubmit={this.handleSubmit}
                    >
                        <Form.Group controlId="FinancialYearOfStatement">
                            <Form.Label>
                            1. Financial Year Of Statement
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='FinancialYearOfStatement'
                                required
                                placeholder='Enter the year (Ex: 2021 )'
                            />
                        </Form.Group>

                        <Form.Group controlId="TotalAssets">
                            <Form.Label>
                                2. Total Assets
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='TotalAssets'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="ProfitOnSales">
                            <Form.Label>
                                3. Profit On Sales
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='ProfitOnSales'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="InterestExpenses">
                            <Form.Label>
                                4. Interest Expenses
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='InterestExpenses'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="EBITDA">
                            <Form.Label>
                                5. EBITDA
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='EBITDA'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="EBIT">
                            <Form.Label>
                                6. EBIT
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='EBIT'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="CostOfProductsSold">
                            <Form.Label>
                                7. Cost Of Products Sold
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='CostOfProductsSold'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="Sales">
                            <Form.Label>
                                8. Sales
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='Sales'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="Depreciation">
                            <Form.Label>
                                9. Depreciation
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='Depreciation'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="ProfitOnoperatingActivities">
                            <Form.Label>
                              10. Profit On operating Activities
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='ProfitOnoperatingActivities'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="ExtraordinaryItems">
                            <Form.Label>
                                11. Extraordinary Items
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='ExtraordinaryItems'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="TotalExpenses">
                            <Form.Label>
                                12. Total Expenses
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='TotalExpenses'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="ShortTermLiabilities">
                            <Form.Label>
                                13. Short Term Liabilities
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='ShortTermLiabilities'
                                required
                                placeholder='Rs.0000.00'
                            />
                        </Form.Group>

                        <Form.Group controlId="TotalLiablities">
                            <Form.Label>
                                 14. Total Liablities
                            </Form.Label>
                            <Form.Control
                                type='integer'
                                name='TotalLiablities'
                                required
                                placeholder='Rs.0000.00'
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