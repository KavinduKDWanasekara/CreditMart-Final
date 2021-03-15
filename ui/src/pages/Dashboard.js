import React from "react";
import axios from 'axios';

// components

import CardLineChart from "../components/Cards/CardLineChart";
import CardBarChart from "../components/Cards/CardBarChart";
import CardPageVisits from "../components/Cards/CardPageVisits";
import CardSocialTraffic from "../components/Cards/CardSocialTraffic";
import Navbar from "./../components/Navbar"
import Footer from "../components/Footer";
import { Component } from "react";


class Dashboard extends React.Component{
  
  constructor(props) {
    super(props)
  
    this.state = {
    details: []
       
    }
  }

  componentDidMount() {
    
    //CONNECT THE API HERE @Safraz
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        // console.log(res);
        this.setState({ details : res.data});
      })
      .catch(console.error());
  }

  render (){
    return(
    <>
    <Navbar/>
    <div className="">
      <div className="flex flex-wrap m-5">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap m-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
      </div>
      <Footer/>
    </>
    );
  }

}

export default Dashboard;
