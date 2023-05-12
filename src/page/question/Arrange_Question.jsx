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

const Arrange_Question = () => {
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
          Sắp xếp thành câu hoàn chỉnh
        </Typography>
        <Box sx={{ marginBottom: "30px", color: "#565656" }}>
          <Typography
            sx={{ fontWeight: "700", fontSize: "20px", marginRight: "20px" }}
            variant="span"
          >
            1.
          </Typography>
          <Typography variant="span">
            Sắp xếp các từ dưới đây thành câu có ý nghĩa:
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
      <Stack></Stack>
    </Box>
  );
};

export default Arrange_Question;
