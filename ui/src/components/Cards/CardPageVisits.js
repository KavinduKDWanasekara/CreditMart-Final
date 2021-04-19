
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import React, {useEffect, useState} from 'react';

export default function CardPageVisits() {
  
  // let yearArray = [];
  const [data, setData] = useState([]);
  const history = useHistory();
  const sendGetRequest = async () => {
    axiosInstance
    .get(`api/fdetails`)
    .then((response) => {
      console.log(response.data);
      setData(response.data.financial_details);

 
      // console.log(response.data.financial_data.length)
      //     for (var i = 0; i < response.data.financial_data.length; i++) {
      //       yearArray.push(response.data.financial_data[i].financial_year.toString())
      //       salesArray.push(response.data.financial_data[i].net_credit_sales)
      //     }
         

      // console.log("Year array : ",yearArray)
      // console.log("Sales array : ",salesArray)
   
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.request.response,
        footer: '<a>card page visit</a>'
      });
      if (error.request.status == 401) {
        history.push('/login')
      }
    });
  }
  useEffect(() => {
    sendGetRequest();
}, []);
 
  return (

    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-gray-800">
                Financial Data
              </h3>
            </div>
        
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
        
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                  Year
                </th>
               
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                interest_expenses
                </th>
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                profit_on_sales 
                </th>
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                total_assets 
                </th>
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                total_expenses 
                </th>
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                total_liabilities 
                </th>
              </tr>
            </thead>
            <tbody>
            {
                        data.map((item) => (
                            <tr key={item.financial_year}>
                                <td>{item.financial_year}</td>
                                <td>{item.interest_expenses}</td>
                                <td>{item.total_assets}</td>
                                <td>{item.profit_on_sales}</td>
                                <td>{item.total_expenses}</td>
                                <td>{item.total_liabilities}</td>
                                <td/>
                            </tr>
                        ))
                    }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
