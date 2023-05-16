import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
const Create_Success = () => {
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
          sx={{ color: "#525252", fontWeight: "600", fontSize: "24px" }}
        >
          Tạo bài kiểm tra thành công
        </Typography>

        <Box mt={7} align="center">
          <Button
            sx={{
              minWidth: 150,
              marginRight: "40px",
              bgcolor: "#FF5151",
              color: "white",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "#FF5151",
              },
            }}
            variant="contained"
          >
            Quay lại trang chủ
          </Button>
          <Button
            sx={{
              minWidth: 150,
              color: "white",
              backgroundColor: "#121843",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "#121843",
              },
            }}
            variant="contained"
          >
            Tạo thêm bài
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Create_Success;
