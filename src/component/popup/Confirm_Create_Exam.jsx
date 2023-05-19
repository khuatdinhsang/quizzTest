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

const Confirm_Create_Exam = () => {
  const style_popup = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
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
        <Box sx={{ position: "ralative" }}>
          <img src={questionBorder} style={{ width: "80px" }} />
          <Box sx={{ position: "absolute", left: "48%", top: "15%" }}>
            <img src={question} style={{ width: "30px" }} />
          </Box>
        </Box>
        <Typography
          sx={{ color: "#525252", fontWeight: "600", fontSize: "20px" }}
        >
          Bạn có chắc chắn muốn tạo bài kiểm tra này không?
        </Typography>
        <Grid container sx={{ marginTop: "30px", color: "#4D4D4D" }}>
          <Grid xs={8}>
            <Box>
              <Stack flexDirection="row">
                <Typography>Tên bài kiểm tra: </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Bài kiểm tra ABC
                </Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>Thời gian: </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  14:00 15/03/2022 - 14:00 15/04/2022
                </Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>Chủ đề: </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Java Spring Boot, Java Core, Dabase,..
                </Typography>
              </Stack>
              <FormControl sx={{ width: "90%" }}>
                <RadioGroup aria-label="gender" name="gender1">
                  <FormControlLabel
                    value="0"
                    control={<Checkbox />}
                    label="Hiển thị đáp án sau khi làm bài"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Checkbox />}
                    label="Hiển thị điểm sau khi làm bài"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Checkbox />}
                    label=" Cho phép người dùng làm lại bài thi"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box>
              <Stack flexDirection="row">
                <Typography>Lượt thi tối đa: </Typography>
                <Typography sx={{ fontWeight: "bold" }}>3</Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>Đảo câu hỏi</Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>Điểm tối đa: </Typography>
                <Typography sx={{ fontWeight: "bold" }}>10</Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>Số người tham gia: </Typography>
                <Typography sx={{ fontWeight: "bold" }}>3</Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>Số câu: </Typography>
                <Typography sx={{ fontWeight: "bold" }}>50</Typography>
              </Stack>
              <Stack flexDirection="row">
                <Typography>Thời gian làm bài: </Typography>
                <Typography sx={{ fontWeight: "bold" }}>60 phút</Typography>
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
            Xác nhận tạo
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Confirm_Create_Exam;
