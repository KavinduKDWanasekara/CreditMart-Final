import React from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  React.useEffect(() => {
    fetch(
      'http://127.0.0.1:8000/api/pd',
      {
        method: "GET",
        headers: new Headers({
          Authorization : 'Token '+localStorage.getItem('token'), 
          Accept: "application/json"
        })
      })
    .then(res => res.json())
    .then(response => {
      // setCommitHistory(response.items);
      // setIsLoading(false);
      console.log(response);
    })
    .catch(console.error());
  
    let config = {
      type: "bar",
      data: {
        labels: [
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
        ],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: [30, 78, 56, 34, 100, 45, 13],
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
