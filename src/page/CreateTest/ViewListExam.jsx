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
const ViewListExam = () => {
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
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      topic: "Economics, animals",
      skills: "nghe,nói",
      status: true,
    },
    {
      id: 2,
      name: "Bài test cho thực tập sinh",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      topic: "Economics, animals",
      skills: "nghe,nói",
      status: true,
    },
    {
      id: 3,
      name: "Bài test cho thực tập sinh",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      topic: "Economics, animals",
      skills: "nghe,nói",
      status: true,
    },
    {
      id: 4,
      name: "Bài test cho thực tập sinh",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      topic: "Economics, animals",
      skills: "nghe,nói",
      status: true,
    },
    {
      id: 5,
      name: "Bài test cho thực tập sinh",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      topic: "Economics, animals",
      skills: "nghe,nói",
      status: true,
    },
    {
      id: 6,
      name: "Bài test cho thực tập sinh",
      creator: "Khuất Đình Sáng",
      day_creator: "23/09/2002",
      topic: "Economics, animals",
      skills: "nghe,nói",
      status: true,
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
            Ngân hàng đề thi
          </Typography>
          <Stack
            sx={{
              flexDirection: "row",
              marginBottom: "10px",
              marginTop: "20px",
              marginLeft: "20px",
              alignItems: "end",
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
              <Button variant="contained">Tìm kiếm</Button>
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
                Tạo đề
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
            <Box className="flex" sx={{ marginRight: "50px", fontWeight: 600 }}>
              <Icon sx={{ color: "green" }}>
                <LockOpenOutlinedIcon />
              </Icon>
              <Link
                className="activeLink"
                href="#"
                style={{ color: "#000000", textDecoration: "none" }}
              >
                Mở hiệu lực
              </Link>
            </Box>
            <Box className="flex" sx={{ marginRight: "50px", fontWeight: 600 }}>
              <Icon sx={{ color: "red" }}>
                <LockOutlinedIcon />
              </Icon>
              <Link
                className="activeLink"
                href="#"
                style={{ color: "#000000", textDecoration: "none" }}
              >
                Đóng hiệu lực
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
                    Tên đề
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
                    Chủ đề
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Kỹ năng
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Trạng thái
                  </TableCell>
                  <TableCell>
                    <Checkbox inputProps={{ "aria-label": "controlled" }} />
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
                      <TableCell>{item.creator}</TableCell>
                      <TableCell>{item.day_creator}</TableCell>
                      <TableCell>{item.topic}</TableCell>
                      <TableCell>{item.skills}</TableCell>
                      <TableCell>
                        {item.status ? "Còn hiểu lực" : "Hết hiệu lực"}
                      </TableCell>
                      <TableCell>
                        <Checkbox inputProps={{ "aria-label": "controlled" }} />
                      </TableCell>
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

export default ViewListExam;
