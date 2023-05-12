import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Icon,
  Link,
  MenuItem,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import "../App.css";
import React from "react";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../component/Header";
import NavBar from "../component/NavBar";

const Do_Test = () => {
  return (
    <Box>
      <Header />
      <Grid container sx={{ color: "#686868" }}>
        <NavBar />
        <Grid item xs={10} p={10} sx={{ color: "" }}>
          <Typography
            sx={{ fontWeight: 600, fontSize: 20, marginBottom: "10px" }}
          >
            Làm bài
          </Typography>
          <Divider sx={{ borderBottom: "2px solid #ccc" }} />
          <Box sx={{ marginTop: "20px" }}>
            <Box sx={{ marginBottom: "30px", color: "#565656" }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "20px",
                  marginRight: "20px",
                }}
                variant="span"
              >
                1.
              </Typography>
              <Typography variant="span">
                Làm thế nào để hiển thị viền 1 phần tử với kích thước đường viền
                như sau: The top border = 10 pixels the bottom border = 5 pixels
                the left border = 20 pixels the right border = 1pixel?
              </Typography>
              <FormControl
                sx={{ marginLeft: "50px", marginTop: "10px", display: "block" }}
              >
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                  <FormControlLabel
                    value="other1"
                    control={<Radio />}
                    label="Other1"
                  />
                </RadioGroup>
              </FormControl>
              <Divider sx={{ marginTop: "15px" }} />
            </Box>
            <Box sx={{ marginBottom: "30px", color: "#565656" }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "20px",
                  marginRight: "20px",
                }}
                variant="span"
              >
                2.
              </Typography>
              <Typography variant="span">
                Chọn tất cả các đáp án đúng:
              </Typography>
              <FormControl
                sx={{ marginLeft: "50px", marginTop: "10px", display: "block" }}
              >
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Checkbox />}
                    label="Border-width:5px 20px 10px 1px"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Checkbox />}
                    label="Border-width:5px 20px 10px 1px"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Checkbox />}
                    label="Border-width:5px 20px 10px 1px"
                  />
                  <FormControlLabel
                    value="other1"
                    control={<Checkbox />}
                    label="Border-width:5px 20px 10px 1px"
                  />
                </RadioGroup>
              </FormControl>
              <Divider sx={{ marginTop: "15px" }} />
            </Box>
            <Box sx={{ marginBottom: "30px", color: "#565656" }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "20px",
                  marginRight: "20px",
                }}
                variant="span"
              >
                3.
              </Typography>
              <Typography variant="span">
                Viết 1 đoạn văn mô tả con mèo
              </Typography>
              <FormControl
                sx={{ marginLeft: "50px", marginTop: "10px", display: "block" }}
              >
                <TextareaAutosize
                  minRows={10}
                  style={{ padding: "10px", fontSize: "16px", width: "100%" }}
                />
              </FormControl>
              <Divider sx={{ marginTop: "15px" }} />
            </Box>
            <Box sx={{ marginBottom: "30px", color: "#565656" }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "20px",
                  marginRight: "20px",
                }}
                variant="span"
              >
                4.
              </Typography>
              <Typography variant="span">
                Nhận định sau đúng hay sai: Tổng thống Mỹ đời thứ 40 là Black
                Obama
              </Typography>
              <FormControl
                sx={{ marginLeft: "50px", marginTop: "10px", display: "block" }}
              >
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Đúng"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Sai"
                  />
                </RadioGroup>
              </FormControl>
              <Divider sx={{ marginTop: "15px" }} />
            </Box>
            <Box sx={{ marginBottom: "30px", color: "#565656" }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "20px",
                  marginRight: "20px",
                }}
                variant="span"
              >
                5.
              </Typography>
              <Typography variant="span">
                Sắp xếp các từ dưới đây thành câu có nghĩa
              </Typography>

              <Divider sx={{ marginTop: "15px" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Do_Test;
