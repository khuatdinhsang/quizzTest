import { Box, Button, Input, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Editor from "../../page/library/Editor";
import StarIcon from "@mui/icons-material/Star";
import ManagerQuestion from "../ManagerQuestion";

const Arrange_Word = () => {
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

        <Box sx={{ marginTop: "40px" }}>
          <Typography
            variant="span"
            sx={{
              color: "#525252",
              fontWeight: "700",
              marginRight: "30px",
            }}
          >
            Đáp án:
          </Typography>
          <input
            placeholder="Nhập câu..."
            style={{
              height: "40px",
              width: "300px",
              padding: "0 10px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <Button
            sx={{
              color: "primary",
              marginLeft: "10px",
              width: 100,
              "&:hover": {
                opacity: 0.8,
              },
            }}
            variant="contained"
          >
            Trộn
          </Button>
        </Box>
        <Stack flexWrap="wrap" flexDirection="row" sx={{ marginTop: "30px" }}>
          <Box sx={{ marginRight: "15px", marginBottom: "20px" }}>
            <Typography variant="span">1.</Typography>
            <Box
              sx={{
                display: "inline-block",
                width: "180px",
                height: "60px",
                borderRadius: "10px",
                border: "1px solid black",
                padding: "10px",
                marginLeft: "5px",
              }}
            >
              <Typography>Một</Typography>
            </Box>
          </Box>
          <Box sx={{ marginRight: "15px", marginBottom: "20px" }}>
            <Typography variant="span">1.</Typography>
            <Box
              sx={{
                display: "inline-block",
                width: "180px",
                height: "60px",
                borderRadius: "10px",
                border: "1px solid black",
                padding: "10px",
                marginLeft: "5px",
              }}
            >
              <Typography>Một</Typography>
            </Box>
          </Box>
          <Box sx={{ marginRight: "15px", marginBottom: "20px" }}>
            <Typography variant="span">1.</Typography>
            <Box
              sx={{
                display: "inline-block",
                width: "180px",
                height: "60px",
                borderRadius: "10px",
                border: "1px solid black",
                padding: "10px",
                marginLeft: "5px",
              }}
            >
              <Typography>Một</Typography>
            </Box>
          </Box>
          <Box sx={{ marginRight: "15px", marginBottom: "20px" }}>
            <Typography variant="span">1.</Typography>
            <Box
              sx={{
                display: "inline-block",
                width: "180px",
                height: "60px",
                borderRadius: "10px",
                border: "1px solid black",
                padding: "10px",
                marginLeft: "5px",
              }}
            >
              <Typography>Một</Typography>
            </Box>
          </Box>
          <Box sx={{ marginRight: "15px", marginBottom: "20px" }}>
            <Typography variant="span">1.</Typography>
            <Box
              sx={{
                display: "inline-block",
                width: "180px",
                height: "60px",
                borderRadius: "10px",
                border: "1px solid black",
                padding: "10px",
                marginLeft: "5px",
              }}
            >
              <Typography>Một</Typography>
            </Box>
          </Box>
          <Box sx={{ marginRight: "15px", marginBottom: "20px" }}>
            <Typography variant="span">1.</Typography>
            <Box
              sx={{
                display: "inline-block",
                width: "180px",
                height: "60px",
                borderRadius: "10px",
                border: "1px solid black",
                padding: "10px",
                marginLeft: "5px",
              }}
            >
              <Typography>Một</Typography>
            </Box>
          </Box>
          <Box sx={{ marginRight: "15px", marginBottom: "20px" }}>
            <Typography variant="span">1.</Typography>
            <Box
              sx={{
                display: "inline-block",
                width: "180px",
                height: "60px",
                borderRadius: "10px",
                border: "1px solid black",
                padding: "10px",
                marginLeft: "5px",
              }}
            >
              <Typography>Một</Typography>
            </Box>
          </Box>
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

export default Arrange_Word;
