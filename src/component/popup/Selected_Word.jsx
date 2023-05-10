import {
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Editor from "../../page/library/Editor";
import StarIcon from "@mui/icons-material/Star";
import ManagerQuestion from "../ManagerQuestion";
import JoditEditor from "jodit-react";
import Test1 from "../../page/library/Test1";

const Selected_Word = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
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
  const handleContent = () => {
    alert("hello");
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

        <Box>
          <Typography
            sx={{
              color: "#525252",
              fontWeight: "700",
              marginTop: "50px",
            }}
          >
            Đáp án:
          </Typography>
          <Box sx={{ height: "auto" }}>
            <Editor />
          </Box>
        </Box>
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
        <h1>{content}</h1>
      </Box>
    </Modal>
  );
};

export default Selected_Word;
