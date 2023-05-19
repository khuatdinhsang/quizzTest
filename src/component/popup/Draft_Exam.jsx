import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
const Draft_Exam = () => {
  const style_popup = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
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
        <CloseIcon
          sx={{
            display: "block",
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        />
        <Box
          sx={{
            padding: "20px",
            borderRadius: "50%",
            background: "#36CA68",
            display: "inline-block",
            marginBottom: "30px",
          }}
        >
          <CheckIcon
            sx={{ fontSize: "100px", color: "white", fontWeight: "bold" }}
          />
        </Box>
        <Typography
          sx={{ color: "#525252", fontWeight: "600", fontSize: "22px" }}
        >
          Đề thi ABC đã được lưu vào mục Đề thi nháp !
        </Typography>
      </Box>
    </Modal>
  );
};

export default Draft_Exam;
