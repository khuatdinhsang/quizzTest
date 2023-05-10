import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Select_Question = () => {
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
          Trắc nghiệm (1 đáp án )
        </Typography>
        <Box sx={{ marginBottom: "30px", color: "#565656" }}>
          <Typography
            sx={{ fontWeight: "700", fontSize: "20px", marginRight: "20px" }}
            variant="span"
          >
            1.
          </Typography>
          <Typography variant="span">
            Làm thế nào để hiển thị viền 1 phần tử với kích thước đường viền như
            sau: The top border = 10 pixels the bottom border = 5 pixels the
            left border = 20 pixels the right border = 1pixel?
          </Typography>
          <FormControl sx={{ marginLeft: "50px", marginTop: "10px" }}>
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
            Làm thế nào để hiển thị viền 1 phần tử với kích thước đường viền như
            sau: The top border = 10 pixels the bottom border = 5 pixels the
            left border = 20 pixels the right border = 1pixel?
          </Typography>
          <FormControl sx={{ marginLeft: "50px", marginTop: "10px" }}>
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
            Làm thế nào để hiển thị viền 1 phần tử với kích thước đường viền như
            sau: The top border = 10 pixels the bottom border = 5 pixels the
            left border = 20 pixels the right border = 1pixel?
          </Typography>
          <FormControl sx={{ marginLeft: "50px", marginTop: "10px" }}>
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
            Làm thế nào để hiển thị viền 1 phần tử với kích thước đường viền như
            sau: The top border = 10 pixels the bottom border = 5 pixels the
            left border = 20 pixels the right border = 1pixel?
          </Typography>
          <FormControl sx={{ marginLeft: "50px", marginTop: "10px" }}>
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
            Làm thế nào để hiển thị viền 1 phần tử với kích thước đường viền như
            sau: The top border = 10 pixels the bottom border = 5 pixels the
            left border = 20 pixels the right border = 1pixel?
          </Typography>
          <FormControl sx={{ marginLeft: "50px", marginTop: "10px" }}>
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
          </FormControl>
          <Divider sx={{ marginTop: "15px" }} />
        </Box>
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

export default Select_Question;
