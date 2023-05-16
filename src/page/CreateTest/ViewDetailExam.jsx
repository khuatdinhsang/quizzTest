import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
const ViewDetailExam = () => {
  return (
    <Box>
      <Stack>
        <Typography
          sx={{
            color: "#565656",
            textAlign: "center",
            fontWeight: "600",
            fontSize: "24px",
            marginTop: "30px",
          }}
        >
          Tên đề thi
        </Typography>
        <Typography
          sx={{
            color: "#565656",
            textAlign: "right",
            fontWeight: "600",
            fontSize: "20px",
            paddingRight: "50px",
          }}
        >
          Điểm tối đa: 10
        </Typography>
      </Stack>
      <Divider sx={{ border: "1px solid #ccc" }} />
      <Box sx={{ marginTop: "20px", padding: "0 100px" }}>
        <Box
          sx={{ marginBottom: "30px", color: "#565656", position: "relative" }}
        >
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
            Làm thế nào để hiển thị viền 1 phần tử với kích thước đường viền như
            sau: The top border = 10 pixels the bottom border = 5 pixels the
            left border = 20 pixels the right border = 1pixel? Làm thế nào để
            hiển thị viền 1 phần tử với kích thước đường viền như sau: The top
            border = 10 pixels the bottom border = 5 pixels the left border = 20
            pixels the right border = 1pixel?
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
              <FormControlLabel value="male" control={<Radio />} label="Male" />
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
            <Typography
              variant="div"
              sx={{
                textAlign: "right",
                padding: "5px 10px ",
                background: "#C0C0C0",
                position: "absolute",
                bottom: "10%",
                right: "10px",
              }}
            >
              1 điểm
            </Typography>
          </FormControl>

          <Divider sx={{ marginTop: "15px" }} />
        </Box>
        <Box
          sx={{ marginBottom: "30px", color: "#565656", position: "relative" }}
        >
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
          <Typography variant="span">Chọn tất cả các đáp án đúng:</Typography>
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
            <Typography
              variant="div"
              sx={{
                textAlign: "right",
                padding: "5px 10px ",
                background: "#C0C0C0",
                position: "absolute",
                bottom: "10%",
                right: "10px",
              }}
            >
              1 điểm
            </Typography>
          </FormControl>
          <Divider sx={{ marginTop: "15px" }} />
        </Box>
        <Box
          sx={{ marginBottom: "30px", color: "#565656", position: "relative" }}
        >
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
          <Typography variant="span">Viết 1 đoạn văn mô tả con mèo</Typography>
          <FormControl
            sx={{ marginLeft: "50px", marginTop: "10px", display: "block" }}
          >
            <TextareaAutosize
              minRows={10}
              style={{ padding: "10px", fontSize: "16px", width: "90%" }}
            />
          </FormControl>
          <Typography
            variant="div"
            sx={{
              textAlign: "right",
              padding: "5px 10px ",
              background: "#C0C0C0",
              position: "absolute",
              bottom: "10%",
              right: "10px",
            }}
          >
            1 điểm
          </Typography>
          <Divider sx={{ marginTop: "15px" }} />
        </Box>
        <Box
          sx={{ marginBottom: "30px", color: "#565656", position: "relative" }}
        >
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
            Nhận định sau đúng hay sai: Tổng thống Mỹ đời thứ 40 là Black Obama
          </Typography>
          <FormControl
            sx={{ marginLeft: "50px", marginTop: "10px", display: "block" }}
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="true" control={<Radio />} label="Đúng" />
              <FormControlLabel value="false" control={<Radio />} label="Sai" />
            </RadioGroup>
            <Typography
              variant="div"
              sx={{
                textAlign: "right",
                padding: "5px 10px ",
                background: "#C0C0C0",
                position: "absolute",
                bottom: "10%",
                right: "10px",
              }}
            >
              1 điểm
            </Typography>
          </FormControl>
          <Divider sx={{ marginTop: "15px" }} />
        </Box>
        <Box
          sx={{ marginBottom: "30px", color: "#565656", position: "relative" }}
        >
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
            Số nào là số tự nhiên lớn nhất nhỏ hơn 100?
          </Typography>
          <FormControl sx={{ display: "block", padding: "5px" }}>
            <TextField
              sx={{ margin: "10px 0 10px 36px", width: "90%" }}
              required
              variant="outlined"
              fullWidth
            />
            <Typography
              variant="div"
              sx={{
                textAlign: "right",
                padding: "5px 10px ",
                background: "#C0C0C0",
                position: "absolute",
                bottom: "10%",
                right: "10px",
              }}
            >
              1 điểm
            </Typography>
          </FormControl>

          <Divider sx={{ marginTop: "15px" }} />
        </Box>

        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            padding: "10px",
            backgroundColor: "#0C8CE9",
            width: "150px",
            margin: "0 auto ",
            marginBottom: "30px",
            borderRadius: "5px",
          }}
        >
          <Icon sx={{ marginTop: "-3px", color: "white" }}>
            <AddCircleOutlinedIcon />
          </Icon>
          <Link href="#" style={{ textDecoration: "none", color: "white" }}>
            Tạo bài kiểm tra
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default ViewDetailExam;
