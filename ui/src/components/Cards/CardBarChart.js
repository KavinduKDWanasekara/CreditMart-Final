import React, { useState } from "react";
import Chart from "chart.js";
import axiosInstance from '../../axios';

export default function CardBarChart() {
  const [yearArray, setYearArray] = useState([]);

  React.useEffect(() => {
    
    let salesArray = [];
    axiosInstance
			.get(`api/pd`)
			.then((response) => {
        console.log(response.data);
        let tmpArrayYear = [];
        let tmpArraySales = [];
        console.log(response.data.financial_data.length)
            for (var i = 0; i < response.data.financial_data.length; i++) {
              tmpArrayYear.push(response.data.financial_data[i].financial_year.toString())
              tmpArraySales.push(response.data.financial_data[i].pd)
            }
            // console.log(tmpArrayYear)

        setYearArray = tmpArrayYear;
        salesArray = tmpArraySales;

        console.log("Year array : ",yearArray)
        console.log("Sales array : ",salesArray)
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
      })
      .catch((error) => {
        console.log(error);
      });
  
    let config = {
      type: "bar",
      data: {
        labels: setYearArray,
        datasets: [
          {
            label: "Sales",
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: salesArray,
            fill: false,
            barThickness: 8,
          }
        ],
      },
      
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                // display: true,
                // labelString: "Month",
              },
              // gridLines: {
              //   drawBorder: false,
              //   borderDash: [0],
              //   borderDashOffset: [0],
              //   color: "rgba(33, 37, 41, 0.3)",
              //   zeroLineColor: "rgba(33, 37, 41, 0.3)",
              //   zeroLineBorderDash: [2],
              //   zeroLineBorderDashOffset: [2],
              // },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                // display: false,
                // labelString: "Value",
              },
              // gridLines: {
              //   borderDash: [2],
              //   drawBorder: false,
              //   borderDashOffset: [2],
              //   color: "rgba(33, 37, 41, 0.2)",
              //   zeroLineColor: "rgba(33, 37, 41, 0.15)",
              //   zeroLineBorderDash: [2],
              //   zeroLineBorderDashOffset: [2],
              // },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-gray-500 mb-1 text-xs font-semibold">
                Performance
              </h6>
              <h2 className=" text-xl font-semibold">
                Credit Sales
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-72">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
