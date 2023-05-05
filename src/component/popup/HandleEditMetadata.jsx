import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const HandleEditMetadata = (props) => {
  let { handleOpenEditDetail } = props;
  console.log(handleOpenEditDetail);
  const [openEditDetail, setOpenEditDetail] = useState(handleOpenEditDetail);
  const handleCloseEditDetail = () => {
    console.log("kk");
  };
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
              // onClick={handleOpenAddData}
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
  );
};

export default HandleEditMetadata;
