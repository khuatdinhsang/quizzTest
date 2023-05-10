import "../../App.css";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Icon,
  Modal,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import question from "../../img/question.png";
import questionBorder from "../../img/border_question.png";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import Editor from "../../page/library/Editor";
import { useState } from "react";
import ManagerQuestion from "../ManagerQuestion";

const MultipleAnswer = () => {
  const [isSaveQuestion, setIsSaveQuestion] = useState(false);
  const handleEditQuestion = () => setIsSaveQuestion(true);
  const handleCloseEditQuestion = () => setIsSaveQuestion(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "1200px",
    height: "700px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 7,
    borderRadius: "5px",
    overflow: "auto",
  };
  const style_popup = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 7,
    borderRadius: "5px",
    overflow: "auto",
  };
  const styleAnswer = {
    padding: "6px",
    border: "1px solid black",
    height: "15px",
    borderRadius: "50%",
    background: "#D9D9D9",
    marginRight: "20px",
    flex: 1,
    textAlign: "center",
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

        <ManagerQuestion />
        <Box sx={{ marginTop: "30px", marginBottom: "20px", width: "100%" }}>
          <form>
            <Typography
              sx={{
                color: "#525252",
                fontWeight: "700",
              }}
            >
              Đáp án:
            </Typography>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Box sx={styleAnswer}>A</Box>
              <Box sx={{ marginTop: "-10px", flex: 1 }}>
                <FormControlLabel
                  value="female"
                  control={<Checkbox />}
                  checked
                />
              </Box>
              <Box sx={{ flex: 70 }}>
                <Editor />
              </Box>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Box sx={styleAnswer}>B</Box>
              <Box sx={{ marginTop: "-10px", flex: 1 }}>
                <FormControlLabel value="female" control={<Checkbox />} />
              </Box>
              <Box sx={{ flex: 70 }}>
                <Editor />
              </Box>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Box sx={styleAnswer}>C</Box>
              <Box sx={{ marginTop: "-10px", flex: 1 }}>
                <FormControlLabel value="female" control={<Checkbox />} />
              </Box>
              <Box sx={{ flex: 70 }}>
                <Editor />
              </Box>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Box sx={styleAnswer}>D</Box>
              <Box sx={{ marginTop: "-10px", flex: 1 }}>
                <FormControlLabel value="female" control={<Checkbox />} />
              </Box>
              <Box sx={{ flex: 70 }}>
                <Editor sx={{ height: "200px" }} />
              </Box>
            </Stack>
          </form>
        </Box>
        <Icon
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            padding: "5px",
            borderRadius: "50%",
            border: "1px solid #ccc",
            backgroundColor: "#B2B2B2",
          }}
        >
          <AddIcon sx={{ color: "white", cursor: "pointer" }} />
        </Icon>
        <Box mt={3} align="right">
          <Button
            sx={{
              width: 120,
              marginRight: "20px",
              bgcolor: "blue",
              color: "white",
              "&:hover": {
                backgroundColor: "blue",
                opacity: 0.8,
              },
            }}
            align="right"
            variant="contained"
          >
            Chỉnh sửa
          </Button>
          <Button
            onClick={handleEditQuestion}
            sx={{
              width: 120,
              bgcolor: "#121843",
              color: "white",
              "&:hover": {
                backgroundColor: "#121843",
                opacity: 0.8,
              },
            }}
            align="right"
            variant="contained"
          >
            Lưu
          </Button>
        </Box>
        <Modal
          open={isSaveQuestion}
          onClose={handleCloseEditQuestion}
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
              onClick={handleCloseEditQuestion}
            />
            {/* <Icon
                sx={{
                  display: "block",
                  margin: "auto",
                }}
              >
                <HelpOutlineOutlinedIcon sx={{ fontSize: "40px" }} />
              </Icon> */}
            <Box sx={{ position: "ralative" }}>
              <img src={questionBorder} />
              <Box sx={{ position: "absolute", left: "45%", top: "28%" }}>
                <img src={question} />
              </Box>
            </Box>
            <Typography>Bạn có chắc muốn lưu thay đổi cho câu hỏi?</Typography>
            <Box mt={3} align="center">
              <Button
                sx={{
                  width: 150,
                  marginRight: "20px",
                  bgcolor: "red",
                  color: "white",
                  "&:hover": {
                    opacity: 0.8,
                    backgroundColor: "red",
                  },
                }}
                variant="contained"
                onClick={handleCloseEditQuestion}
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
                Lưu thay đổi
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Modal>
  );
};

export default MultipleAnswer;
