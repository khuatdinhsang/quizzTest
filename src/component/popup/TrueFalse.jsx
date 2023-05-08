import {
  Box,
  Button,
  Checkbox,
  Modal,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Editor from "../../page/library/Editor";
import StarIcon from "@mui/icons-material/Star";
import ManagerQuestion from "../ManagerQuestion";

const TrueFalse = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    width: "1200px",
    p: 7,
    borderRadius: "5px",
    border: "none",
  };
  return (
    <Modal open={true} aria-labelledby="modal-modal-title">
      <Box sx={style}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 20,
            marginBottom: "20px",
            color: "#525252",
          }}
        >
          Tạo câu hỏi mới
        </Typography>
        <CloseIcon
          sx={{
            display: "block",
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        />
        <ManagerQuestion />
        <Typography
          sx={{
            color: "#484848",
            fontWeight: "600",
            position: "relative",
            marginBottom: "10px",
          }}
        >
          Nội dung câu hỏi:
          <StarIcon
            sx={{ color: "red", fontSize: "10px", position: "absolute" }}
          />
        </Typography>
        <Editor />

        <Stack sx={{ marginTop: "30px" }}>
          <Stack flexDirection="row">
            <Typography sx={{ marginRight: "80px" }}>Đáp án</Typography>
            <Typography>Lựa chọn</Typography>
          </Stack>
          <form>
            <Stack sx={{ marginTop: "20px" }} flexDirection="row">
              <Radio name="correctQuestion" value="true" />
              <Typography
                sx={{
                  width: "200px",
                  height: "50px",
                  paddingLeft: "10px",
                  border: "1px solid #ccc",
                  textAlign: "left",
                  lineHeight: "50px",
                  marginLeft: "80px",
                  bgcolor: "#FFF9F9",
                }}
              >
                Đúng
              </Typography>
            </Stack>
            <Stack sx={{ marginTop: "20px" }} flexDirection="row">
              <Radio name="correctQuestion" value="false" />
              <Typography
                sx={{
                  width: "200px",
                  height: "50px",
                  paddingLeft: "10px",
                  border: "1px solid #ccc",
                  textAlign: "left",
                  lineHeight: "50px",
                  marginLeft: "80px",
                  bgcolor: "#FFF9F9",
                }}
              >
                Sai
              </Typography>
            </Stack>
          </form>
        </Stack>
        <Box mt={3} align="right">
          <Button
            sx={{
              width: 150,
              marginRight: "20px",
              bgcolor: "#0C8CE9",
              color: "white",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "#0C8CE9",
              },
            }}
            variant="contained"
          >
            Chỉnh sửa
          </Button>
          <Button
            sx={{
              width: 150,
              color: "white",
              backgroundColor: "#121843",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "#121843",
              },
            }}
            variant="contained"
          >
            Lưu
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TrueFalse;
