import React from 'react'
import Navbar from '../components/Navbar'
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn  } from "mdbreact";

const ExplorePage = () => {
    return (
        <div>
            <Navbar/>
            <h1>EXPLORE PAGE</h1>
            <MDBCol>
                <MDBFormInline className="md-form mx-0">
                    <MDBIcon icon="search" />
                    <input className="form-control ml-3 w-50" type="text" placeholder="Search" aria-label="Search"/>
                    <MDBBtn color="blue" type="submit" className="mr-auto rounded-3xl p-2 h-9">
                        Search
                    </MDBBtn>
                </MDBFormInline>
            </MDBCol>
        </div>
    )
}

export default ExplorePage
