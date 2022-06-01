export const userColumns = [
  { field: '_id', headerName: 'ID', width: 90,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row._id}
        </div>
      );
    }

  },
  { field: "TeamName", headerName: "Team Name", width: 70 ,
     renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.TeamName}
        </div>
      );
    },
 
  },
  {
    field: "LeaderName",
    headerName: "Leader Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.LeaderName}
        </div>
      );
    },
  },
  {
    field: "Email",
    headerName: "Email",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.Email}
        </div>
      );
    },
  },
  {
    field: "TeamLeadCNIC",
    headerName: "TeamLead CNIC",
    width: 230,
     renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.TeamLeadCNIC}
        </div>
      );
    },
  },

  {
    field: "Phone",
    headerName: "Phone",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.Phone}
        </div>
      );
    },
  },
  {
    field: "Address",
    headerName: "Address",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.Address}`}>
          {params.row.Address}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
     {
        id: "627d7177867eb62da4c5f50e",
       
        UserName: "mzamanqadir@gmail.com",
        TeamName: "Azad-A",
        LeaderName: "MUHAMMAD ZAMAN",
      
        date: "2022-05-12T20:37:52.468Z",
      
        Email: "mzamanqadir@gmail.com",
        Address: "Chak 329 JB Toba tek Singh",
        Phone: "+923341300582",
        PoliceStationID: "ISB-Bani-Gala-Main-A",
        PoliceStationLocation: "M4GV+43V, Shahzad Town, Islamabad, Islamabad Capital Territory",
        City: "Islamabad",
        TeamLeadCNIC: "3130283817849"
    },
    {
        id: "627d73583515a67b838755c1",
        PoliceStation: "61b6437dda9915f4d7f69097",
        UserName: "usmanyousaf@gmail.com",
        TeamName: "shaheen-A",
        LeaderName: "Usman Yousaf",
         
        date: "2022-05-12T20:46:42.754Z",
  
        PoliceStationID: "ISB-Bani-Gala-Main-A"
    },
    {
        id: "6287893941a13a0162cdd388",
        PoliceStation: "61b6437dda9915f4d7f69097",
        PoliceStationID: "ISB-Bani-Gala-Main-A",
        TeamLeadCNIC: "12345-1234123-3",
        PoliceStationLocation: "hostel city",
        City: "islamabad",
        UserName: "STForce",
        Email: "zaman@gmail.com",
        Phone: "123456",
        Address: "hostel city",
        TeamName: "Special Task Force",
        LeaderName: "Inspector Zaman Qadir",
        
    }
];
