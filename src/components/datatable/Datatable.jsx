import React, { useState, useEffect , useRef,  useContext} from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import axios from 'axios'

const Datatable = () => {
  const [backdata , setbackData]=useState([])
  const [data, setData] = useState(userRows);
  const [newlist,setnewlist]=useState([])
 
  
  useEffect(() => {
     
  getdata()
   
  });
  const getdata=()=>{
     let url = `http://localhost:5000/api/alladmin/allinvestigationteams`;
    axios
      .get(url)
      .then(function (response) {
        
        setbackData(response.data);
        renameKeys(response.data)
        console.log(backdata)
         
      })
      .catch((error) => console.log(error));
  }
   
function renameKeys(obj) {
    
   obj.map((e)=>{
        e["id"] = e["_id"];
        delete e["_id"];
        newlist.push(e)
   })
}
  const handleDelete = (TeamName) => {
    setData(data.filter((item) => item.TeamName !== TeamName));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.TeamName)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Investigation Team
        <Link to="/users/new" className="link">
          Add 
        </Link>
      </div>
      <DataGrid
        
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
