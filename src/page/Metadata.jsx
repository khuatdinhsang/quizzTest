import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  Icon,
  Link,
  MenuItem,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import "../App.css";
import React from "react";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../component/Header";
import NavBar from "../component/NavBar";

const Metadata = () => {
  const [openDetail, setOpenDetail] = React.useState(false);
  const [openEditDetail, setOpenEditDetail] = React.useState(false);
  const [openAddData, setOpenAddData] = React.useState(false);
  const handleOpenDetail = () => setOpenDetail(true);
  const handleCloseDetail = () => setOpenDetail(false);
  const handleOpenEditDetail = () => {
    setOpenDetail(false);
    setOpenEditDetail(true);
  };
  const handleCloseEditDetail = () => {
    setOpenEditDetail(false);
    setOpenDetail(false);
  };
  const handleOpenAddData = () => {
    setOpenDetail(false);
    setOpenEditDetail(false);
    setOpenAddData(true);
  };
  const handleCloseAddData = () => {
    setOpenDetail(false);
    setOpenEditDetail(false);
    setOpenAddData(false);
  };

  const rowData = [
    {
      id: 1,
      name: "Snow",
      description: "Jon",
      dataSuccess: "Tam ",
      confirm: true,
    },
    {
      id: 2,
      name: "Snow SnowSnowSnowSnowSnowSnowSnowSnowSnowSnowSnowSnowSnowSnowSnowSnowSnowSnowSnow",
      description: "Jon",
      dataSuccess: "Tam ",
      confirm: true,
    },
    {
      id: 3,
      name: "Snow",
      description: "Jon",
      dataSuccess: "Tam ",
      confirm: true,
    },
    {
      id: 4,
      name: "Snow",
      description: "Jon",
      dataSuccess: "Tam ",
      confirm: true,
    },
    {
      id: 5,
      name: "Snow",
      description: "Jon",
      dataSuccess: "Tam ",
      confirm: true,
    },
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    borderRadius: "5px",
  };

  return (
    <Box>
      <Header />
      <Grid container sx={{ color: "#686868" }}>
        <NavBar />
        <Grid item xs={10} p={10} sx={{ color: "#161E54" }}>
          <Typography
            sx={{ fontWeight: 600, fontSize: 20, marginBottom: "30px" }}
          >
            Thiết lập dữ liệu
          </Typography>
          <Box className="flex">
            <Box className="flex" sx={{ marginRight: "50px", fontWeight: 600 }}>
              <Icon sx={{ color: "blue" }}>
                <AddCircleOutlinedIcon />
              </Icon>
              <Link
                className="activeLink"
                href="#"
                sx={{ color: "#000000", textDecoration: "none" }}
              >
                Tạo dữ liệu
              </Link>
            </Box>
            <Box className="flex" sx={{ marginRight: "50px", fontWeight: 600 }}>
              <Icon sx={{ color: "green" }}>
                <LockOpenOutlinedIcon />
              </Icon>
              <Link
                className="activeLink"
                href="#"
                sx={{ color: "#000000", textDecoration: "none" }}
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
                sx={{ color: "#000000", textDecoration: "none" }}
              >
                Đóng hiệu lực
              </Link>
            </Box>
          </Box>

          {/*  */}

          <TableContainer sx={{ marginTop: "40px" }} component={Paper}>
            <Table aria-label="simple-table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox inputProps={{ "aria-label": "controlled" }} />
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    STT
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Tên dữ liệu
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Mô tả
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Dữ liệu gợi ý
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "17px", fontWeight: 600, color: "#565656" }}
                  >
                    Bắt buộc
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowData.map((item) => {
                  return (
                    <TableRow
                      sx={{ cursor: "pointer" }}
                      onClick={handleOpenDetail}
                      className="activeTable"
                      key={item.id}
                    >
                      <TableCell>
                        <Checkbox inputProps={{ "aria-label": "controlled" }} />
                      </TableCell>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.dataSuccess}</TableCell>
                      <TableCell>{item.confirm ? "Có" : "Không"}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Model handleclick  */}
          <Modal
            open={openDetail}
            onClose={handleCloseDetail}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Grid container>
                <Grid xs={4}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 14,
                      marginBottom: "10px",
                      color: "#565656",
                    }}
                  >
                    Tên metadata
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 14,
                      marginBottom: "10px",
                      color: "#565656",
                    }}
                  >
                    Mô tả
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 14,
                      marginBottom: "10px",
                      color: "#565656",
                    }}
                  >
                    Yêu cầu
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 14,
                      marginBottom: "10px",
                      color: "#565656",
                    }}
                  >
                    Dữ liệu gợi ý
                  </Typography>
                </Grid>
                <Grid xs={8}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 14,
                      marginBottom: "10px",
                      color: "#565656",
                    }}
                  >
                    Chủ đề
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 14,
                      marginBottom: "10px",
                      color: "#565656",
                    }}
                  >
                    Các chủ đề mà câu hỏi đó thuộc về
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 14,
                      marginBottom: "10px",
                      color: "#565656",
                    }}
                  >
                    Yes
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 14,
                      marginBottom: "10px",
                      color: "#565656",
                    }}
                  >
                    Diversity,Economic,Animals...
                  </Typography>
                </Grid>
              </Grid>
              <Box mt={5} align="right">
                <Button
                  sx={{ width: 100, marginRight: "20px" }}
                  align="right"
                  variant="outlined"
                  onClick={handleCloseDetail}
                >
                  Hủy
                </Button>
                <Button
                  onClick={handleOpenEditDetail}
                  sx={{ width: 100 }}
                  align="right"
                  variant="contained"
                >
                  Sửa
                </Button>
              </Box>
            </Box>
          </Modal>

          {/* Model handleEdit */}
          <Modal
            open={openEditDetail}
            onClose={handleCloseEditDetail}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CloseIcon
                onClick={handleCloseEditDetail}
                sx={{
                  display: "block",
                  cursor: "pointer",
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }}
              />
              <Typography mb={3} sx={{ color: "#0C8CE9", textAlign: "center" }}>
                Thông tin dữ liệu
              </Typography>
              <FormControl sx={{ width: "600px" }}>
                <TextField
                  sx={{ marginBottom: "10px" }}
                  required
                  label="Tên dữ liệu"
                  variant="outlined"
                />
                <TextField
                  sx={{ marginBottom: "10px" }}
                  required
                  label="Mô tả"
                  variant="outlined"
                  fullWidth
                />
                <Box>
                  <TextField
                    sx={{ marginBottom: "10px", width: "250px" }}
                    required
                    label="Bắt buộc"
                    variant="outlined"
                    select
                  >
                    <MenuItem value="true">Có</MenuItem>
                    <MenuItem value="false">Không</MenuItem>
                  </TextField>
                  <Button
                    sx={{ marginLeft: "20px", marginTop: "20px" }}
                    variant="outlined"
                    onClick={handleOpenAddData}
                  >
                    Thêm dữ liệu
                  </Button>
                </Box>
                <TextField
                  sx={{ marginBottom: "10px" }}
                  required
                  label="Chủ đề 1"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: "10px" }}
                  required
                  label="Chủ đề 2"
                  variant="outlined"
                  fullWidth
                />
              </FormControl>
              <Box mt={3} align="right">
                <Button
                  sx={{
                    width: 100,
                    marginRight: "20px",
                    bgcolor: "red",
                    color: "white",
                    "&:hover": {
                      opacity: 0.8,
                      backgroundColor: "red",
                    },
                  }}
                  align="right"
                  variant="contained"
                  onClick={handleCloseEditDetail}
                >
                  Hủy
                </Button>
                <Button sx={{ width: 100 }} align="right" variant="contained">
                  Lưu
                </Button>
              </Box>
            </Box>
          </Modal>

          {/* Model Add */}

          <Modal
            open={openAddData}
            onClose={handleCloseAddData}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CloseIcon
                sx={{
                  display: "block",
                  cursor: "pointer",
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }}
                onClick={handleCloseAddData}
              />
              <Typography mb={3} sx={{ color: "#0C8CE9", textAlign: "center" }}>
                Thêm mới dữ liệu
              </Typography>
              <FormControl sx={{ width: "600px" }}>
                <TextField
                  sx={{ marginBottom: "10px" }}
                  required
                  label="Tên dữ liệu"
                  variant="outlined"
                />
                <TextField
                  sx={{ marginBottom: "10px" }}
                  required
                  label="Mô tả"
                  variant="outlined"
                  fullWidth
                />
                <Box>
                  <TextField
                    sx={{ marginBottom: "10px", width: "250px" }}
                    required
                    label="Bắt buộc"
                    variant="outlined"
                    select
                  >
                    <MenuItem value="true">Có</MenuItem>
                    <MenuItem value="false">Không</MenuItem>
                  </TextField>
                  <Button
                    sx={{ marginLeft: "20px", marginTop: "20px" }}
                    variant="outlined"
                  >
                    Thêm dữ liệu
                  </Button>
                </Box>
                <TextField
                  sx={{ marginBottom: "10px" }}
                  required
                  label="Chủ đề 1"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: "10px" }}
                  required
                  label="Chủ đề 2"
                  variant="outlined"
                  fullWidth
                />
              </FormControl>
              <Box mt={3} align="right">
                <Button
                  sx={{
                    width: 100,
                    marginRight: "20px",
                    bgcolor: "red",
                    color: "white",
                    "&:hover": {
                      opacity: 0.8,
                      backgroundColor: "red",
                    },
                  }}
                  align="right"
                  variant="contained"
                  onClick={handleCloseAddData}
                >
                  Hủy
                </Button>
                <Button sx={{ width: 100 }} align="right" variant="contained">
                  Lưu
                </Button>
              </Box>
            </Box>
          </Modal>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Metadata;
