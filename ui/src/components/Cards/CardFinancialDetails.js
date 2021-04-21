import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import React, {useEffect, useState} from 'react';

export default function CardSocialTraffic() {
  const [data, setData] = useState([]);
  const history = useHistory();
  const sendGetRequest = async () => {
    axiosInstance
    .get(`api/fdetails`)
    .then((response) => {
      console.log(response.data);
      setData(response.data.financial_details);
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
              <h3 className="font-bold text-2xl text-center">
                Ratio Details
              </h3>
            </div>
        
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
         
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="bg-gray-800 text-white align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center px-4">
                  Year
                </th>
                <th className="bg-gray-800 text-white align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center px-4">
                cost of products sold
                </th>
                <th className="bg-gray-800 text-white align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center px-4">
                ebit
                </th>
                <th className="bg-gray-800 text-white align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center px-4">
                ebitda
                </th>
                <th className="bg-gray-800 text-white align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center px-4">
                extraordinary items
                </th>
                <th className="bg-gray-800 text-white align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center px-4">
                short term liabilities
                </th>
              
              </tr>
            </thead>
            <tbody>
            {
              data.map((item) => (
                <tr key={item.financial_year} className="hover:bg-gray-100">
                  <td className="px-3 py-2 text-center font-normal" >{item.financial_year}</td>
                  <td className="border-l border-solid border-gray-200 px-3 py-2 text-right font-normal">{item.cost_of_products_sold}</td>
                  <td className="border-l border-solid border-gray-200 px-3 py-2 text-right font-normal">{item.ebit}</td>
                  <td className="border-l border-solid border-gray-200 px-3 py-2 text-right font-normal">{item.ebitda}</td>
                  <td className="border-l border-solid border-gray-200 px-3 py-2 text-right font-normal">{item.extraordinary_items}</td>
                  <td className="border-l border-solid border-gray-200 px-3 py-2 text-right font-normal">{item.short_term_liabilities}</td>
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
