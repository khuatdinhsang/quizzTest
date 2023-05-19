import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import question from "../../img/question.png";
import questionBorder from "../../img/border_question.png";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const Confirm_Point = () => {
  const style_popup = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    bgcolor: "background.paper",
    boxShadow: 24,
    border: "1px solid white",
    p: 7,
    borderRadius: "5px",
    overflow: "auto",
  };
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ textAlign: "center" }}
    >
      <Box sx={style_popup}>
        <Box sx={{ position: "ralative" }}>
          <img src={questionBorder} style={{ width: "140px" }} />
          <Box sx={{ position: "absolute", left: "45%", top: "26%" }}>
            <img src={question} style={{ width: "50px" }} />
          </Box>
        </Box>
        <Typography
          sx={{ color: "#565656", fontWeight: "600", fontSize: "20px" }}
        >
          Điểm tối đa là: 10
        </Typography>
        <FormControl>
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Chia đều điểm cho các câu"
            sx={{ color: "#646464", fontSize: "18px" }}
          />
        </FormControl>
        <Box mt={3} align="center">
          <Button
            sx={{
              width: 150,
              marginRight: "40px",
              bgcolor: "#DC3545",
              color: "white",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "#DC3545",
              },
            }}
            variant="contained"
          >
            Hủy
          </Button>
          <Button
            sx={{
              width: 150,
              color: "white",
              backgroundColor: "#4ECB71",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "#4ECB71",
              },
            }}
            variant="contained"
          >
            Xác nhận
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Confirm_Point;
