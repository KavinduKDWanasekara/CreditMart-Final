import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import React, {useEffect, useState} from 'react';

export default function CardSocialTraffic() {
  const [data, setData] = useState([]);
  const history = useHistory();
  const sendGetRequest = async () => {
    axiosInstance
    .get(`api/fdetailsratio`)
    .then((response) => {
      console.log(response.data);
      setData(response.data.message);

   
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
                Ratio Details
              </h3>
            </div>
        
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
         
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                  Year
                </th>
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                cost_of_products_sold
                </th>
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                ebit
                </th>
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                ebitda
                </th>
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                extraordinary_items
                </th>
                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                short_term_liabilities
                </th>
              
              </tr>
            </thead>
            <tbody>
            {
                        data.map((item) => (
                            <tr key={item.financial_year}>
                                 <td>{item.financial_year}</td>
                                <td>{item.cost_of_products_sold}</td>
                                <td>{item.ebit}</td>
                                <td>{item.ebitda}</td>
                                <td>{item.extraordinary_items}</td>
                                <td>{item.short_term_liabilities}</td>
                                
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
