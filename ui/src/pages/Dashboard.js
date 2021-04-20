import React from "react";


// components

import CardLineChart from "../components/Cards/CardLineChart";
import CardBarChart from "../components/Cards/CardBarChart";
import CardPageVisits from "../components/Cards/CardPageVisits";
import CardSocialTraffic from "../components/Cards/CardSocialTraffic";
import Navbar from "./../components/Navbar"
import Footer from "../components/Footer";

class Dashboard extends React.Component{
  

  render (){
    return(
    <>
    <Navbar/>
    <div>
      <div className="flex flex-wrap m-5">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap m-4">
        <div className="w-100 xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
       
      </div>
      <div className="w-100 xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
      <Footer/>
    </>
    );
  }

}

export default Dashboard;
