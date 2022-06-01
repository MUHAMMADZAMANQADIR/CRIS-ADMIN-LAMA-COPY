import React, { useState, useEffect } from 'react';
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlashOffIcon from '@mui/icons-material/FlashOff';
import AllOutIcon from '@mui/icons-material/AllOut';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import axios from 'axios'

const Widget = (props) => {
  let data;
 
  //temporary
  
  const diff = 20;

  switch (props.type) {
    case "user":
      data = {
        title: "Investigation Teams",
        isMoney: false,
        amount : props.count,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Total Resolved Cases",
        isMoney: false,
        amount : props.count,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Total Assinged Case",
        isMoney: true,
        amount :  props.count,
        icon: (
          <AllOutIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Case UnderInvestigation",
        isMoney: true,
        amount : props.count,
        icon: (
          <FlashOffIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney} {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
        
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
