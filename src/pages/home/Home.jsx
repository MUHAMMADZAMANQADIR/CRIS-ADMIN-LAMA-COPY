import React, { useState, useEffect } from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import axios from 'axios'
const Home = () => {
  const [countInvest, setCountInvest] = useState(0);
  const [countpolic, setCountpolic] = useState(0);
  const [countunderin, setCountunderin] = useState(0);
  const [countTotalAssign, setCountTotalAssign] = useState(0);
  useEffect(() => {
     countinv()
     countpoli()
     countUnderInvestigation()
     countTotalAssigncase()
  });
  
  const countinv= async ()=>{
    try {       
      const res = await axios.get("http://localhost:5000/api/alladmin/countinvestigationteam")
      setCountInvest(res.data)
    } catch (err) {
            
            console.log(err)
    }
  }
  const countpoli= async ()=>{
    try {       
      const res = await axios.get("http://localhost:5000/api/alladmin/countPoliceStation")
      setCountpolic(res.data)
    } catch (err) {
            
            console.log(err)
    }
  }
  const countUnderInvestigation= async ()=>{
    try {       
      const res = await axios.get("http://localhost:5000/api/alladmin/countUnderInvestigation")
      setCountunderin(res.data)
    } catch (err) {
            
            console.log(err)
    }
  }
  const countTotalAssigncase= async ()=>{
    try {       
      const res = await axios.get("http://localhost:5000/api/alladmin/countTotalAssigncase")
      setCountTotalAssign(res.data)
    } catch (err) {
            
            console.log(err)
    }
  }
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" count={countInvest} />
          <Widget type="order" count={countTotalAssign-countunderin}/>
          <Widget type="earning" count={countTotalAssign} />
          <Widget type="balance" count={countunderin}/>
        </div>
        <div className="charts">
          <Featured CUI={countunderin} CTA={countTotalAssign}/>
          <Chart title="Last 6 Months Performance" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Registered Cases</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
