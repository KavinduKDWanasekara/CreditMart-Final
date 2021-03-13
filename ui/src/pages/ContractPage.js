import "./ContractPage.css";
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

const ContractPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="">
            <div id="applyContract"> 
                <div id="companyDet">
                    <h1 className="head">Contract</h1>
                    <hr/>
                    <table id="contrTable">
                        <tr>
                            <td><img src="logo2.png" alt="CREDIT MART" id="logoImg"/></td>
                            <td><p/><strong>Company Name</strong><br/>Product Type<br/><i>Unit Price</i></td>
                            <td><input type="text" className="formData" id="quantity" placeholder="Quantity" /></td>
                        </tr>
                    </table>
                </div>
                <div id="summary">
                    <h1 className="head">Summary</h1>
                    <hr/>
                    <table id="summTable">
                        <tr>
                            <td><strong>TOTAL </strong></td>
                            <td> Rs. 1000</td>
                        </tr>
                    </table>
                </div>
            </div>
            <hr/>
            
            <div id="CompDetForm">
                <h1>Company Details</h1>
                <hr/>
                <form id="form">
                    <p/><input type="text" className="formData" id="name" placeholder="Name" />
                    <p/><input type="text" className="formData" id="regNo" placeholder="Reg. No." />
                    <p/><input type="text" className="formData" id="email" placeholder="Email" />
                    <p/><textarea className="formData" id="address" placeholder="Address" />
                    <p/><input type="text" className="formData" id="country" placeholder="Country" />
                    <p/><input type="text" className="formData" id="city" placeholder="City" />
                    <p/><input type="text" className="formData" id="zip" placeholder="Zip/Postal Code" />
                    <p/><input type="text" className="formData" id="tel" placeholder="Telephone No." />
                    <p/><button id="contract" className="formbtn">
                        Contract
                  </button>
                  <button id="cancel" className="formbtn">
                        Cancel
                  </button>
                </form>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContractPage
