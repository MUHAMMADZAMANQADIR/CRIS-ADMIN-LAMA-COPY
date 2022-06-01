import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from 'axios'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [InvestigationTeam, setInvestigationTeam] = useState({
     UserName:"",
     Password:"",
     TeamName: "",
     LeaderName:"",
     TeamLeadCNIC:"",
     PoliceStationLocation:"",
     Email:"",
     Phone:"",
     Address:"",
     PoliceStationID:"",
     City:"",
});
   
  const submitcall= async ()=>{
      console.log(InvestigationTeam)
      const body = InvestigationTeam    
      console.log(body);
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
      }
      try {
            
        const res = await axios.post("http://localhost:5000/api/investigationteams/registerinvestigationteams", body, config) 
        console.log("from backend" ,res.data)
             
        } catch (err) {
             
            console.log(err)
        }
  }
  const handleChange=(e)=>{
      console.log(e.target.name ,e.target.value)
      setInvestigationTeam({[e.target.name]: e.target.value})
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input name={input.label} type={input.type} placeholder={input.placeholder} onChange={(e)=>handleChange(e)}/>
                </div>
              ))}
              <button onClick={submitcall}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
