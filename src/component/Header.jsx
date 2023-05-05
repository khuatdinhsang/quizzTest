import { AppBar, Avatar, Badge, Box, Typography } from "@mui/material";
import React from "react";

import iconAIS from "../img/Logo AIS 2.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Header = () => {
  return (
    <Box>
      <AppBar
        sx={{
          bgcolor: "white",
          height: 45,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: "20px",
          paddingLeft: "17px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{
              display: "inline-block",
              marginRight: "15px",
              width: "30px",
              height: "30px",
            }}
            src={iconAIS}
          />
          <Typography
            sx={{
              display: "inline-block",
              color: "#000000",
              fontWeight: 600,
              fontSize: "19px",
            }}
          >
            AISOLUTIONS
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Badge
            sx={{ top: "2px", right: "4px" }}
            color="warning"
            variant="dot"
            invisible={false}
          >
            <NotificationsIcon sx={{ color: "#B2B2B2", cursor: "pointer" }} />
          </Badge>
          <Avatar
            sx={{
              display: "inline-block",
              width: "30px",
              height: "30px",
              marginLeft: "20px",
              marginRight: "20px",
              cursor: "pointer",
            }}
          />
          <Typography
            sx={{
              display: "inline-block",
              color: "#161E54",
              fontWeight: 700,
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Khuất Đình Sáng
          </Typography>
          <KeyboardArrowDownIcon
            sx={{ color: "#737898", marginLeft: "20px", cursor: "pointer" }}
          />
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
