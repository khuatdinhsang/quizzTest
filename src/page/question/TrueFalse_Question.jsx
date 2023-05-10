import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  MenuItem,
  Pagination,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const TrueFalse_Question = () => {
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          color: "#5A5A5A",
          fontWeight: "700",
          fontSize: "48px",
          borderBottom: "1px solid #ccc",
          padding: "10px 0",
          boxShadow: " 0 4px 10px -3px",
        }}
      >
        Câu hỏi
      </Typography>
      <Box sx={{ padding: "20px 150px" }}>
        <Typography sx={{ marginBottom: "30px" }} textAlign="right">
          Đúng sai
        </Typography>
        <Box sx={{ marginBottom: "30px", color: "#565656" }}>
          <Typography
            sx={{ fontWeight: "700", fontSize: "20px", marginRight: "20px" }}
            variant="span"
          >
            1.
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
          </FormControl>
          <Divider sx={{ marginTop: "15px" }} />
        </Box>
        <Box sx={{ marginBottom: "30px", color: "#565656" }}>
          <Typography
            sx={{ fontWeight: "700", fontSize: "20px", marginRight: "20px" }}
            variant="span"
          >
            1.
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
          </FormControl>
          <Divider sx={{ marginTop: "15px" }} />
        </Box>
        <Box sx={{ marginBottom: "30px", color: "#565656" }}>
          <Typography
            sx={{ fontWeight: "700", fontSize: "20px", marginRight: "20px" }}
            variant="span"
          >
            1.
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
          </FormControl>
          <Divider sx={{ marginTop: "15px" }} />
        </Box>
        <Box sx={{ marginBottom: "30px", color: "#565656" }}>
          <Typography
            sx={{ fontWeight: "700", fontSize: "20px", marginRight: "20px" }}
            variant="span"
          >
            1.
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
          </FormControl>
          <Divider sx={{ marginTop: "15px" }} />
        </Box>
        <Box sx={{ marginBottom: "30px", color: "#565656" }}>
          <Typography
            sx={{ fontWeight: "700", fontSize: "20px", marginRight: "20px" }}
            variant="span"
          >
            1.
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
          </FormControl>
          <Divider sx={{ marginTop: "15px" }} />
        </Box>
        <Stack flexDirection="row" justifyContent="space-between">
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography>Hiển thị</Typography>
            <TextField
              size="small"
              sx={{ marginLeft: "5px", marginRight: "5px", width: "65px" }}
              required
              select
              value="20"
            >
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="10" selected>
                10
              </MenuItem>
              <MenuItem value="20">20</MenuItem>
            </TextField>
            <Typography>trong 100 bản ghi</Typography>
          </Stack>
          <Stack spacing={2}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              color="warning"
            />
          </Stack>
        </Stack>
      </Box>

      <Stack flexDirection="row" justifyContent="center" mb={5}>
        <Box>
          <Link
            to="/"
            style={{
              padding: " 20px 30px",
              display: "inline-block",
              textDecoration: "none",
              borderRadius: "30px 0 0 30px",
              color: "#36CA68",
              background: "#F3F3F3",
            }}
          >
            Trắc nghiệm (1 đáp án)
          </Link>
        </Box>
        <Box>
          <Link
            to="/"
            style={{
              padding: " 20px 30px",
              display: "inline-block",
              textDecoration: "none",
              color: "#36CA68",
              background: "white",
              borderLeft: "1px solid white",
            }}
          >
            Nối từ
          </Link>
        </Box>
        <Box>
          <Link
            to="/"
            style={{
              padding: " 20px 30px",
              display: "inline-block",
              textDecoration: "none",
              color: "#36CA68",
              background: "#F3F3F3",
              borderLeft: "1px solid white",
            }}
          >
            Sắp xếp câu
          </Link>
        </Box>
        <Box>
          <Link
            to="/"
            style={{
              padding: " 20px 30px",
              display: "inline-block",
              textDecoration: "none",
              borderRadius: "0 30px 30px 0",
              color: "#36CA68",
              background: "#F3F3F3",
              borderLeft: "1px solid white",
            }}
          >
            Trắc nghiệm (nhiều đáp án)
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default TrueFalse_Question;
