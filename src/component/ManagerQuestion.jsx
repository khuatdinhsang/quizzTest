import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
const ManagerQuestion = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "10px",
        marginTop: "30px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#525252",
            fontWeight: "600",

            position: "relative",
          }}
        >
          Chủ đề:
          <StarIcon
            sx={{ color: "red", fontSize: "10px", position: "absolute" }}
          />
        </Typography>

        <TextField
          size="small"
          sx={{ marginTop: "10px", width: "150px" }}
          required
          select
          value="0"
        >
          <MenuItem value="0">Loại câu hỏi</MenuItem>
          <MenuItem value="1" selected>
            Có
          </MenuItem>
          <MenuItem value="2">Không</MenuItem>
        </TextField>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#525252",
            fontWeight: "600",
            position: "relative",
          }}
        >
          Loại câu hỏi:
          <StarIcon
            sx={{ color: "red", fontSize: "10px", position: "absolute" }}
          />
        </Typography>

        <TextField
          size="small"
          sx={{ marginTop: "10px", width: "150px" }}
          required
          select
          value="0"
        >
          <MenuItem value="0">Loại câu hỏi</MenuItem>
          <MenuItem value="1" selected>
            Có
          </MenuItem>
          <MenuItem value="2">Không</MenuItem>
        </TextField>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#525252",
            fontWeight: "600",
            position: "relative",
          }}
        >
          Mức độ:
        </Typography>

        <TextField
          size="small"
          sx={{ marginTop: "10px", width: "150px" }}
          required
          select
          value="0"
        >
          <MenuItem value="0">Loại câu hỏi</MenuItem>
          <MenuItem value="1" selected>
            Có
          </MenuItem>
          <MenuItem value="2">Không</MenuItem>
        </TextField>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#525252",
            fontWeight: "600",
            position: "relative",
          }}
        >
          Kỹ năng:
        </Typography>

        <TextField
          size="small"
          sx={{ marginTop: "10px", width: "150px" }}
          required
          select
          value="0"
        >
          <MenuItem value="0">Loại câu hỏi</MenuItem>
          <MenuItem value="1" selected>
            Có
          </MenuItem>
          <MenuItem value="2">Không</MenuItem>
        </TextField>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#525252",
            fontWeight: "600",
            position: "relative",
          }}
        >
          Trình độ:
        </Typography>

        <TextField
          size="small"
          sx={{ marginTop: "10px", width: "150px" }}
          required
          select
          value="0"
        >
          <MenuItem value="0">Loại câu hỏi</MenuItem>
          <MenuItem value="1" selected>
            Có
          </MenuItem>
          <MenuItem value="2">Không</MenuItem>
        </TextField>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#525252",
            fontWeight: "600",
            position: "relative",
          }}
        >
          Điểm:
        </Typography>

        <TextField
          size="small"
          sx={{ marginTop: "10px", width: "150px" }}
          required
          select
          value="0"
        >
          <MenuItem value="0">Loại câu hỏi</MenuItem>
          <MenuItem value="1" selected>
            Có
          </MenuItem>
          <MenuItem value="2">Không</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

export default ManagerQuestion;
