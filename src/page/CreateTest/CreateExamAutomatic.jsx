import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../component/Header";

const CreateExamAutomatic = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ marginTop: "70px", padding: "0 50px" }}>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography
            sx={{ color: "#121843", fontWeight: "600", fontSize: "20px" }}
          >
            Tạo bài kiểm tra tự động
          </Typography>
          <Box>
            <Typography
              sx={{ color: "#121843", fontWeight: "600", fontSize: "20px" }}
              variant="span"
            >
              Điểm tối đa:
            </Typography>
            <input
              style={{
                width: "70px",
                height: "30px",
                textAlign: "center",
                fontSize: "16px",
                marginLeft: "5px",
              }}
            />
          </Box>
        </Stack>
        <Grid container>
          <Grid item xs={2}>
            <Typography sx={{ color: "161E54", fontWeight: "600" }}>
              Điều kiện 1
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl sx={{ m: 1, width: 300, height: 40 }}>
              <InputLabel id="demo-multiple-name-label">
                Loại câu hỏi
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Loại câu hỏi" />}
              >
                <MenuItem>Loại câu hỏi</MenuItem>
              </Select>
              <Box></Box>
            </FormControl>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreateExamAutomatic;
