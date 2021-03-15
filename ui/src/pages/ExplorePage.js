import React from 'react'
import Navbar from '../components/Navbar'
import CardExplorePage from "../components/Cards/CardExplorePage";

import { MDBCol, MDBFormInline, MDBIcon, MDBBtn  } from "mdbreact";
import Footer from '../components/Footer';

const ExplorePage = () => {
    return (
        <div>
            <Navbar/>
            <div>
            <MDBCol>
                <MDBFormInline className="md-form flex justify-center">
                    <MDBIcon icon="search" />
                    <input className="form-control ml-3" type="text" placeholder="Search" aria-label="Search"/>
                    <MDBBtn color="blue" type="submit" className="rounded-3xl p-2 w-24 h-9">
                        Search
                    </MDBBtn>
                </MDBFormInline>
            </MDBCol>

            </div>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <CardExplorePage/>
                <CardExplorePage/>
                <CardExplorePage/>
                <CardExplorePage/>
                <CardExplorePage/>
                <CardExplorePage/>
                <CardExplorePage/>

                </div>
        </div>
        <Footer/>
        </div>
    )
}

export default ExplorePage
