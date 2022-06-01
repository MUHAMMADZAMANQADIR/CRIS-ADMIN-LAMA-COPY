import React, { useState, useEffect , useRef,  useContext} from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios'
const PoliceStationName="Police Station Bani Gala"
const List = () => {
  const [caselist , updatecase]=useState([])
  const loacakcaselist =[]
  useEffect(() => {
     
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
    let url = `http://localhost:5000/api/alladmin/policeassinged`;
    axios
      .get(url, config)
      .then(function (response) {
        updatecase(response.data);
        console.log("cases data1",caselist)
      })
      .catch((error) => console.log(error));
  }, []);
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">UserName</TableCell>
            <TableCell className="tableCell">CNIC</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Phone No</TableCell>
            <TableCell className="tableCell">ReportType</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        {
          caselist.map((ca)=>{
              ca.map((nw)=>{
                if(nw.policeStation==PoliceStationName)
                loacakcaselist.push(nw);
              })
            })
             
        }
        <TableBody>
          {loacakcaselist.map((row) => (
            <TableRow key={row.caseID}>
              <TableCell className="tableCell">{row.caseID}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  
                  {row.firstName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.CNIC}</TableCell>
              <TableCell className="tableCell">{row.ReportedDate}</TableCell>
              <TableCell className="tableCell">{row.phone}</TableCell>
              <TableCell className="tableCell">{row.ReportType}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
