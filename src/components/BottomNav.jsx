import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <BottomNavigation
        className="specificNav"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          "& .Mui-selected, .Mui-selected > svg": {
            color: "#438883",
          },
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          margin: "0 auto",
        }}
      >
        <BottomNavigationAction
          onClick={() => navigate("/")}
          icon={<HomeIcon sx={{ color: "#438883", fontSize: "40px" }} />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/addtransaction")}
          sx={{ positon: "absolute", top: -30 }}
          icon={<AddCircleIcon sx={{ color: "#438883", fontSize: "50px" }} />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/statistics")}
          icon={<BarChartIcon sx={{ color: "#438883", fontSize: "40px" }} />}
        />
      </BottomNavigation>
    </div>
  );
}
