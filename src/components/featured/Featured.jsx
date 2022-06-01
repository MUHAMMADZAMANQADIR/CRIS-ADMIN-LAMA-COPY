import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlashOffIcon from '@mui/icons-material/FlashOff';
import AllOutIcon from '@mui/icons-material/AllOut';
const Featured = (props) => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Overall performance</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
        
          <CircularProgressbar value={((((props.CTA-props.CUI))/props.CTA)*100)} text={Math.round(((((props.CTA-props.CUI))/props.CTA)*100))} strokeWidth={5} />
        </div>
        <p className="title">Total Resolved Cases</p>
        <CheckCircleIcon/>
        <p className="amount">{props.CTA-props.CUI}</p>
        <p className="desc">
          According to latest information We are going very slowly
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Total</div>
            <div className="itemResult negative">
              <AllOutIcon/>
              <div className="resultAmount">{props.CTA}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Under Investigation</div>
            <div className="itemResult positive">
               <FlashOffIcon/>
              <div className="resultAmount">{props.CUI}</div>
            </div>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default Featured;
