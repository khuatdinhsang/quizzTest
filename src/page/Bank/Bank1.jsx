import "../../App.css";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  Grid,
  Icon,
  Input,
  MenuItem,
  Modal,
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
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import React from "react";
import Header from "../../component/Header";
import NavBar from "../../component/NavBar";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
const Bank1 = () => {
  const [openExcel, setOpenExcel] = React.useState(false);
  const handleOpenExcel = () => setOpenExcel(true);
  const handleCloseExcel = () => setOpenExcel(false);
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
  function createData(name, calories, fat, carbs, protein, abc) {
    return { name, calories, fat, carbs, protein, abc };
  }

  const rows = [
    createData(
      "Somebody has made a mistake. A mistake _______________________",
      "Working",
      "Trung bình",
      "Reading",
      "C2",
      "Trắc nghiệm"
    ),
    createData(
      "You should spend about 40 minutes on this task .Rich countries often give money to poorer countries, but it does not solve poverty. Therefore, developed countries should give other types of help to the poor countries rather than financial aid. To what extent do you agree or disagree?You should write at least 250 words.",
      "Working",
      "Trung bình",
      "Writing",
      "C1",
      "Tự luận"
    ),
    createData(
      "Although the local authorities (take) ………………………………… some methods to solve the pollution issue, there seems to be little improvement in the air quality..",
      "Population",
      "Trung bình",
      "Reading",
      "B1",
      "Tự luận ngắn"
    ),
  ];
  return (
    <Box>
      <Header />
      <Grid container>
        <NavBar />
        <Grid xs={10} p={10}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 20,
              marginBottom: "10px",
              color: "#161E54",
            }}
          >
            Ngân hàng câu hỏi
          </Typography>
          <Divider
            sx={{ marginBottom: "20px", borderBottom: "2px solid #ccc" }}
          />
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <TextField
              size="small"
              sx={{ marginBottom: "10px", width: "150px" }}
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
            <TextField
              size="small"
              sx={{ marginBottom: "10px", width: "150px" }}
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
            <TextField
              size="small"
              sx={{ marginBottom: "10px", width: "150px" }}
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
            <TextField
              size="small"
              sx={{ marginBottom: "10px", width: "150px" }}
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
            <TextField
              size="small"
              sx={{ marginBottom: "10px", width: "150px" }}
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
            <TextField
              size="small"
              sx={{ marginBottom: "10px", width: "150px" }}
              required
              select
              value="2"
            >
              <MenuItem value="0">Loại câu hỏi</MenuItem>
              <MenuItem value="1" selected>
                Có
              </MenuItem>
              <MenuItem value="2">Không</MenuItem>
            </TextField>
            <Button sx={{ height: "40px" }} variant="contained">
              Tìm kiếm
            </Button>
          </Stack>

          <Box className="flex">
            <Box className="flex" sx={{ marginRight: "50px", fontWeight: 600 }}>
              <Icon sx={{ color: "blue" }}>
                <AddCircleOutlinedIcon />,
              </Icon>
              <Link
                className="activeLink"
                href="#"
                sx={{ color: "#000000", textDecoration: "none" }}
              >
                Tạo câu hỏi
              </Link>
            </Box>
            <Box className="flex" sx={{ marginRight: "50px", fontWeight: 600 }}>
              <Icon sx={{ color: "green" }}>
                <DescriptionIcon />,
              </Icon>
              <Link
                onClick={handleOpenExcel}
                className="activeLink"
                href="#"
                sx={{ color: "#000000", textDecoration: "none" }}
              >
                Import excel
              </Link>
            </Box>
            <Box className="flex" sx={{ marginRight: "50px", fontWeight: 600 }}>
              <Icon sx={{ color: "red" }}>
                <DeleteForeverOutlinedIcon />,
              </Icon>
              <Link
                className="activeLink"
                href="#"
                sx={{ color: "#000000", textDecoration: "none" }}
              >
                Xóa
              </Link>
            </Box>
          </Box>
          <TableContainer
            sx={{ marginTop: "30px", color: "#565656" }}
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox inputProps={{ "aria-label": "controlled" }} />
                  </TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell sx={{ width: "450px" }}>Câu hỏi </TableCell>
                  <TableCell>Chủ đề</TableCell>
                  <TableCell>Mức độ </TableCell>
                  <TableCell>Kỹ năng</TableCell>
                  <TableCell>Trình độ</TableCell>
                  <TableCell>Loại câu hỏi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Checkbox inputProps={{ "aria-label": "controlled" }} />
                    </TableCell>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                    <TableCell>{row.abc}</TableCell>
                    <TableCell>
                      <VisibilityIcon
                        sx={{ color: "green", cursor: "pointer" }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack
            mt={3}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
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
            <Stack spacing={2}>
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

      {/* Modal Popup */}
      <Modal
        open={openExcel}
        onClose={handleCloseExcel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ color: "#525252", fontWeight: 600, fontSize: "18px" }}
          >
            Tải câu hỏi lên từ tệp excel
          </Typography>
          <CloseIcon
            onClick={handleCloseExcel}
            sx={{
              display: "block",
              cursor: "pointer",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          />
          <Divider
            sx={{
              marginBottom: "20px",
              marginTop: "10px",
              borderBottom: "1px solid black",
              width: "108%",
              marginLeft: "-24px",
            }}
          />
          <Typography>Tệp</Typography>
          <FormControl
            sx={{ width: "100%", marginTop: "20px", position: "relative" }}
          >
            <TextField required variant="outlined" placeholder="Cauhoi.xlss" />
            <Divider
              orientation="vertical"
              sx={{ position: "absolute", right: "50px", color: "red" }}
            />
            <Icon sx={{ position: "absolute", top: "17px", right: "12px" }}>
              <AttachFileIcon />
            </Icon>
          </FormControl>
          <Box mt={5} align="right">
            <Button
              sx={{ width: 125, marginRight: "20px" }}
              align="right"
              variant="outlined"
            >
              Tải tệp mẫu
            </Button>
            <Button sx={{ width: 100 }} align="right" variant="contained">
              Import
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Bank1;
