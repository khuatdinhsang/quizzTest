import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Icon,
  MenuItem,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../component/Header";
import { styled } from "@mui/material/styles";
const CreateExamManually = () => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const rowData = [
    {
      id: 1,
      name: "Các biến được sử dụng trong lệnh switch có thể được sử dụng với kiểu dữ liệu nào?",
      category: "Java",
      level: "Dễ",
      topic: "Nhiều đáp án",
      skills: "Nghe",
      degree: "A2",
    },
    {
      id: 2,
      name: "Các biến được sử dụng trong lệnh switch có thể được sử dụng với kiểu dữ liệu nào?",
      category: "Java",
      level: "Dễ",
      topic: "Nhiều đáp án",
      skills: "Nghe",
      degree: "A2",
    },
    {
      id: 3,
      name: "Các biến được sử dụng trong lệnh switch có thể được sử dụng với kiểu dữ liệu nào?",
      category: "Java",
      level: "Dễ",
      topic: "Nhiều đáp án",
      skills: "Nghe",
      degree: "A2",
    },
    {
      id: 4,
      name: "Các biến được sử dụng trong lệnh switch có thể được sử dụng với kiểu dữ liệu nào?",
      category: "Java",
      level: "Dễ",
      topic: "Nhiều đáp án",
      skills: "Nghe",
      degree: "A2",
    },
    {
      id: 5,
      name: "Các biến được sử dụng trong lệnh switch có thể được sử dụng với kiểu dữ liệu nào?",
      category: "Java",
      level: "Dễ",
      topic: "Nhiều đáp án",
      skills: "Nghe",
      degree: "A2",
    },
    {
      id: 6,
      name: "Các biến được sử dụng trong lệnh switch có thể được sử dụng với kiểu dữ liệu nào?",
      category: "Java",
      level: "Dễ",
      topic: "Nhiều đáp án",
      skills: "Nghe",
      degree: "A2",
    },
  ];
  return (
    <Box>
      <Header />
      <Box sx={{ marginTop: "70px" }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 26,
            color: "#161E54",
            textAlign: "center",
            margin: "20px 0 10px 0",
          }}
        >
          Ngân hàng câu hỏi
        </Typography>
        <Divider sx={{ borderBottom: "1px solid #ccc" }} />
        <Stack
          sx={{
            flexDirection: "row",
            margin: "20px 0 10px 20px",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <Box sx={{ marginRight: "30px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#525252",
                fontWeight: "600",
                position: "relative",
              }}
            >
              Chủ đề:
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
          <Box sx={{ marginRight: "30px" }}>
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
          <Box sx={{ marginRight: "30px" }}>
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
          <Box sx={{ marginRight: "30px" }}>
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
          <Box sx={{ marginRight: "30px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#525252",
                fontWeight: "600",
                position: "relative",
              }}
            >
              Loại câu hỏi:
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
          <Box sx={{ marginRight: "30px" }}>
            <input
              placeholder="Nhập nội dung câu hỏi"
              style={{
                height: "25px",
                width: "200px",
                padding: "5px",
                outline: "none",
                fontSize: "16px",
              }}
            />
          </Box>
          <Box>
            <Button variant="contained">Tìm kiếm</Button>
          </Box>
        </Stack>
        <TableContainer sx={{ marginTop: "20px" }} component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                >
                  Câu hỏi
                </TableCell>
                <TableCell
                  sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                >
                  Chủ đề
                </TableCell>
                <TableCell
                  sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                >
                  Mức độ
                </TableCell>
                <TableCell
                  sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                >
                  Loại câu hỏi
                </TableCell>
                <TableCell
                  sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                >
                  Kỹ năng
                </TableCell>
                <TableCell
                  sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                >
                  Trình độ
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowData.map((item) => {
                return (
                  <StyledTableRow
                    sx={{ cursor: "pointer" }}
                    className="activeTable"
                    key={item.id}
                  >
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.level}</TableCell>
                    <TableCell>{item.topic}</TableCell>
                    <TableCell>{item.skills}</TableCell>
                    <TableCell>{item.degree}</TableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          sx={{ marginTop: "10px" }}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography sx={{ marginLeft: "30px" }}>Hiển thị</Typography>
            <TextField
              size="small"
              sx={{ marginLeft: "5px", marginRight: "5px", width: "65px" }}
              required
              select
              value="20"
            >
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="10" selected>
                10
              </MenuItem>
              <MenuItem value="20">20</MenuItem>
            </TextField>
            <Typography>trong 100 bản ghi</Typography>
          </Stack>
          <Stack spacing={2} sx={{ marginRight: "50px" }}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              color="warning"
            />
          </Stack>
        </Stack>
        <Box mt={3} align="right" mr={5}>
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
            Hủy tạo đề
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
            Tiếp
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateExamManually;
