import {
  Box,
  Button,
  Checkbox,
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
import NavBar from "../../component/NavBar";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
const Quizz_Management = () => {
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
      name: "Bài test cho thực tập sinh",
      category: "Reading",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      open_time: "17/05/2023 9:00",
      close_time: "17/05/2023 9:00",
      topic: "Working,Enviroment",
      status: "đang diễn ra",
      number_test: 20,
    },
    {
      id: 2,
      name: "Bài test cho thực tập sinh",
      category: "Reading",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      open_time: "17/05/2023 9:00",
      close_time: "17/05/2023 9:00",
      topic: "Working,Enviroment",
      status: "đang diễn ra",
      number_test: 20,
    },
    {
      id: 3,
      name: "Bài test cho thực tập sinh",
      category: "Reading",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      open_time: "17/05/2023 9:00",
      close_time: "17/05/2023 9:00",
      topic: "Working,Enviroment",
      status: "đang diễn ra",
      number_test: 20,
    },
    {
      id: 4,
      name: "Bài test cho thực tập sinh",
      category: "Reading",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      open_time: "17/05/2023 9:00",
      close_time: "17/05/2023 9:00",
      topic: "Working,Enviroment",
      status: "đang diễn ra",
      number_test: 20,
    },
    {
      id: 5,
      name: "Bài test cho thực tập sinh",
      category: "Reading",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      open_time: "17/05/2023 9:00",
      close_time: "17/05/2023 9:00",
      topic: "Working,Enviroment",
      status: "đang diễn ra",
      number_test: 20,
    },
    {
      id: 6,
      name: "Bài test cho thực tập sinh",
      category: "Reading",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      open_time: "17/05/2023 9:00",
      close_time: "17/05/2023 9:00",
      topic: "Working,Enviroment",
      status: "đang diễn ra",
      number_test: 20,
    },
    {
      id: 7,
      name: "Bài test cho thực tập sinh",
      category: "Reading",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      open_time: "17/05/2023 9:00",
      close_time: "17/05/2023 9:00",
      topic: "Working,Enviroment",
      status: "đang diễn ra",
      number_test: 20,
    },
  ];
  return (
    <Box>
      <Header />
      <Grid container sx={{ color: "#686868" }}>
        <NavBar />
        <Grid item xs={10} sx={{ color: "#161E54", marginTop: "60px" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 20,
              color: "#161E54",
              marginLeft: "20px",
            }}
          >
            Quản lý bài kiểm tra
          </Typography>
          <Stack
            sx={{
              flexDirection: "row",
              margin: "20px 0 10px 20px",
              alignItems: "end",
            }}
          >
            <Box sx={{ marginRight: "40px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#525252",
                  fontWeight: "600",
                  position: "relative",
                }}
              >
                Ngày tạo:
              </Typography>
              <input
                style={{
                  height: "37px",
                  fontSize: "16px",
                  marginTop: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "3px",
                }}
                type="date"
              />
            </Box>
            <Box sx={{ marginRight: "40px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#525252",
                  fontWeight: "600",
                  position: "relative",
                }}
              >
                Thời gian mở:
              </Typography>
              <input
                style={{
                  height: "37px",
                  fontSize: "16px",
                  marginTop: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "3px",
                }}
                type="date"
              />
            </Box>
            <Box sx={{ marginRight: "40px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#525252",
                  fontWeight: "600",
                  position: "relative",
                }}
              >
                Thời gian đóng:
              </Typography>
              <input
                style={{
                  height: "37px",
                  fontSize: "16px",
                  marginTop: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "3px",
                }}
                type="date"
              />
            </Box>

            <Box sx={{ marginRight: "40px" }}>
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
            <Box sx={{ marginRight: "40px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#525252",
                  fontWeight: "600",
                  position: "relative",
                }}
              >
                Trạng thái:
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
            <Box sx={{ margin: "0 40px 0 20px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#525252",
                  fontWeight: "600",
                  position: "relative",
                }}
              >
                Nội dung tìm kiếm:
              </Typography>
              <input
                style={{
                  height: "37px",
                  fontSize: "16px",
                  marginTop: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "3px",
                  padding: "0 10px",
                  outline: "none",
                }}
                placeholder="Nhập nội dung tìm kiếm"
              />
            </Box>
            <Box>
              <Button sx={{ height: "40px" }} variant="contained">
                Tìm kiếm
              </Button>
            </Box>
          </Stack>

          <Box className="flex" sx={{ marginLeft: "20px", marginTop: "20px" }}>
            <Box className="flex" sx={{ marginRight: "50px", fontWeight: 600 }}>
              <Icon sx={{ color: "blue" }}>
                <AddCircleOutlinedIcon />
              </Icon>
              <Link
                className="activeLink"
                href="#"
                style={{ color: "#000000", textDecoration: "none" }}
              >
                Tạo bài kiểm tra
              </Link>
            </Box>
            <Box className="flex" sx={{ marginRight: "50px", fontWeight: 600 }}>
              <Icon sx={{ color: "red" }}>
                <DeleteIcon />
              </Icon>
              <Link
                className="activeLink"
                href="#"
                style={{ color: "#000000", textDecoration: "none" }}
              >
                Xóa
              </Link>
            </Box>

            <Box
              className="flex"
              sx={{
                marginRight: "50px",
                fontWeight: 600,
                justifyContent: "flex-start",
              }}
            >
              <Icon sx={{ color: "green" }}>
                <LockOutlinedIcon />
              </Icon>
              <Link
                className="activeLink"
                href="#"
                style={{
                  color: "#000000",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                Chỉnh sửa
              </Link>
            </Box>
          </Box>
          <TableContainer sx={{ marginTop: "40px" }} component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    STT
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Tên bài kiểm tra
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Đề
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Người tạo
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Ngày tạo
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Thời gian mở
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Trạng thái đóng
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Chủ đề
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Trạng thái
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Số người làm
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
                      <TableCell>{item.creator}</TableCell>
                      <TableCell>{item.day_creator}</TableCell>
                      <TableCell>{item.open_time}</TableCell>
                      <TableCell>{item.close_time}</TableCell>
                      <TableCell>{item.topic}</TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            padding: "5px 10px",
                            border: "1px solid #ccc",
                            backgroundColor: "#4ADB32",
                            borderRadius: "20px",
                            color: "white",
                          }}
                        >
                          {item.status}
                        </Typography>
                      </TableCell>
                      <TableCell>{item.number_test}</TableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack
            sx={{ margin: "10px 0 0 20px" }}
            flexDirection="row"
            justifyContent="space-between"
          >
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Typography>Hiển thị</Typography>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Quizz_Management;
