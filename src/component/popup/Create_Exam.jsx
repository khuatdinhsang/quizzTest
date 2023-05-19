import {
  Box,
  Button,
  Checkbox,
  FormControl,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
const Create_Exam = () => {
  const style_popup = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    bgcolor: "background.paper",
    boxShadow: 24,
    border: "1px solid white",
    p: 5,
    borderRadius: "5px",
    overflow: "auto",
  };
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
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
        <Typography
          sx={{
            color: "#525252",
            fontWeight: "600",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          Tạo đề thi
        </Typography>
        <Box sx={{ marginTop: "10px" }}>
          <FormControl sx={{ width: "100%" }}>
            <Stack
              flexDirection="row"
              alignItems="center"
              sx={{ marginBottom: "15px" }}
            >
              <Typography sx={{ fontSize: "20px" }}>Tên đề thi:</Typography>
              <input
                placeholder="Nhập tên bài kiểm tra"
                style={{
                  height: "20px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  outline: "none",
                  width: "350px",
                  marginLeft: "10px",
                  fontSize: "16px",
                }}
              />
            </Stack>
            <Stack flexDirection="row" alignItems="center" s>
              <Typography sx={{ fontSize: "20px" }}>
                Phương thức tạo bài kiểm tra:
              </Typography>
              <Select
                sx={{
                  height: "40px",
                  border: "1px solid #ccc",
                  outline: "none",
                  width: "350px",
                  marginLeft: "10px",
                  fontSize: "16px",
                }}
                value={30}
              >
                <MenuItem value={20}>Tạo thủ công từ thư viện</MenuItem>
                <MenuItem value={30}>Tạo tự động từ thư viện</MenuItem>
              </Select>
            </Stack>
            <Box sx={{ textAlign: "right", marginTop: "50px" }}>
              <Button
                variant="contained"
                sx={{
                  background: "#121843",
                  "&:hover": {
                    opacity: 0.8,
                    backgroundColor: "#121843",
                  },
                }}
              >
                Tạo đề
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Modal>
  );
};

export default Create_Exam;
