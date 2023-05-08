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
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Editor from "../../page/library/Editor";
import StarIcon from "@mui/icons-material/Star";
import ManagerQuestion from "../ManagerQuestion";

const Compare_Number = () => {
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
          <Stack
            sx={{ marginTop: "10px" }}
            alignItems="center"
            flexDirection="row"
          >
            <Typography variant="span" sx={{ marginRight: "10px" }}>
              Giá trị là:
            </Typography>
            <TextField
              size="small"
              sx={{ width: "400px" }}
              required
              select
              value="equal"
            >
              <MenuItem value="equal">Equal to</MenuItem>
              <MenuItem value="beetwen">Beetwen</MenuItem>
              <MenuItem value="greater_than">Greater than</MenuItem>
              <MenuItem value="greater_than_equal">
                Greater than or equal to
              </MenuItem>
              <MenuItem value="less_than">Less than</MenuItem>
              <MenuItem value="less_than_equal">
                Less than or equal to{" "}
              </MenuItem>
              <MenuItem value="not_equal">Not equal to </MenuItem>
            </TextField>
            <Typography
              sx={{
                width: "100px",
                height: "40px",
                border: "1px solid #ccc",
                textAlign: "center",
                lineHeight: "40px",
                marginLeft: "35px",
              }}
            >
              21
            </Typography>
          </Stack>
          <Stack
            sx={{ marginTop: "10px" }}
            alignItems="center"
            flexDirection="row"
          >
            <Typography variant="span" sx={{ marginRight: "10px" }}>
              Giá trị là:
            </Typography>
            <TextField
              size="small"
              sx={{ width: "400px" }}
              required
              select
              value="equal"
            >
              <MenuItem value="equal">Equal to</MenuItem>
              <MenuItem value="beetwen">Beetwen</MenuItem>
              <MenuItem value="greater_than">Greater than</MenuItem>
              <MenuItem value="greater_than_equal">
                Greater than or equal to
              </MenuItem>
              <MenuItem value="less_than">Less than</MenuItem>
              <MenuItem value="less_than_equal">
                Less than or equal to{" "}
              </MenuItem>
              <MenuItem value="not_equal">Not equal to </MenuItem>
            </TextField>
            <Typography
              sx={{
                width: "100px",
                height: "40px",
                border: "1px solid #ccc",
                textAlign: "center",
                lineHeight: "40px",
                marginLeft: "35px",
              }}
            >
              {" "}
              21
            </Typography>
          </Stack>
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
      </Box>
    </Modal>
  );
};

export default Compare_Number;
