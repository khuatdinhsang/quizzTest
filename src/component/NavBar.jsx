import { Grid, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
const NavBar = () => {
  const metadata = [
    {
      id: 1,
      title: "Câu hỏi",
      icon: <HelpCenterOutlinedIcon />,
      path: "/",
    },
    {
      id: 2,
      title: "Câu hỏi lớn",
      icon: <AttachFileOutlinedIcon />,
      path: "/",
    },
    {
      id: 3,
      title: "Bài kiểm tra",
      icon: <TextSnippetOutlinedIcon />,
      path: "/",
    },
    {
      id: 4,
      title: "Làm bài",
      icon: <VideocamOutlinedIcon />,
      path: "/",
    },
    {
      id: 5,
      title: "Cài đặt dữ liệu",
      icon: <SettingsSuggestOutlinedIcon />,
      path: "/",
    },
    {
      id: 6,
      title: "Ngân hàng câu hỏi",
      icon: <AccountBalanceIcon />,
      path: "/",
    },
  ];
  return (
    <Grid
      item
      xs={2}
      sx={{
        paddingTop: "45px",
        background: "#F3F3F3",
        height: "100vh",
      }}
    >
      {metadata.map((item) => {
        return (
          <ListItem
            className="active"
            sx={{ height: "60px", cursor: "pointer" }}
            key={item.id}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        );
      })}
    </Grid>
  );
};

export default NavBar;
