import React from 'react'
import Navbar from '../components/Navbar'
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn  } from "mdbreact";

const ExplorePage = () => {
    return (
        <div>
            <Navbar/>
            <div className="">
            <h1>EXPLORE PAGE</h1>
            <MDBCol className="text-center md=6">
                <MDBFormInline className="md-form inline-flex min-w-200px">
                    <MDBIcon icon="search" />
                    <input className="form-control ml-3 " type="text" placeholder="Search" aria-label="Search"/>
                    <MDBBtn color="blue" type="submit" className="rounded-3xl p-2 h-9">
                        Search
                    </MDBBtn>
                </MDBFormInline>
            </MDBCol>
            </div>
        </div>
    )
}

export default ExplorePage
