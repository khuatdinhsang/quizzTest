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
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const Start_Exam = () => {
  const style_popup = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 7,
    borderRadius: "10px",
    overflow: "auto",
    boxShadow: "0 5px 10px white",
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
        <Typography
          sx={{
            color: "#525252",
            marginBottom: "10px",
            fontWeight: "600",
            fontSize: "22px",
          }}
        >
          01. Bài test cho TTS Front-End React JS và Database
        </Typography>
        <Grid container spacing={5} sx={{ color: "#5A5A5A" }}>
          <Grid item xs={5}>
            <Box>
              <Stack flexDirection="row" justifyContent="flex-end">
                <Typography sx={{ fontWeight: "bold" }}>Chủ đề</Typography>
              </Stack>
              <Stack flexDirection="row" justifyContent="flex-end">
                <Typography sx={{ fontWeight: "bold" }}>Số câu hỏi</Typography>
              </Stack>
              <Stack flexDirection="row" justifyContent="flex-end">
                <Typography sx={{ fontWeight: "bold" }}>
                  Thời gian làm bài
                </Typography>
              </Stack>
              <Stack flexDirection="row" justifyContent="flex-end">
                <Typography sx={{ fontWeight: "bold" }}>
                  Thời gian mở
                </Typography>
              </Stack>
              <Stack flexDirection="row" justifyContent="flex-end">
                <Typography sx={{ fontWeight: "bold" }}>
                  Thời gian đóng
                </Typography>
              </Stack>
              <Stack flexDirection="row" justifyContent="flex-end">
                <Typography sx={{ fontWeight: "bold" }}>Trạng thái</Typography>
              </Stack>
              <Stack flexDirection="row" justifyContent="flex-end">
                <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>
                  Hướng dẫn làm bài
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box sx={{ textAlign: "left" }}>
              <Stack flexDirection="row">
                <Typography>Java Spring Boot, Database, Java core</Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>15 câu</Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>30 phút</Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>15/03/2022 09:00</Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>16/03/2022 09:00</Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography
                  sx={{
                    padding: "5px 20px ",
                    color: "white",
                    borderRadius: "15px",
                    background: "#FFAA01",
                  }}
                >
                  Chưa làm
                </Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>
                  Chọn đáp án đúng nhất trong mỗi đáp án được đưa ra, có thể có
                  nhiều hơn 1 đáp án đúng trong câu hỏi{" "}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3} align="right">
          <Button
            sx={{
              width: 150,
              marginRight: "20px",
              bgcolor: "#FF5151",
              color: "white",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "#FF5151",
              },
            }}
            variant="contained"
          >
            Quay lại
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
            Làm bài
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Start_Exam;
