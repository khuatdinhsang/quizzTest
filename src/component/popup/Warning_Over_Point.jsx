import "../../App.css";
import { Box, Modal, Typography } from "@mui/material";
import triangle from "../../img/triangle.png";
import warning from "../../img/warning.png";
const Warning_Over_Point = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    borderRadius: "5px",
    overflow: "auto",
  };

  return (
    <Modal open={true} aria-labelledby="modal-modal-title">
      <Box sx={style}>
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <img src={triangle} />
          <Box sx={{ position: "absolute", left: "47%", top: "28%" }}>
            <img src={warning} />
          </Box>
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            color: "#525252",
            fontWeight: "600",
            fontSize: "20px",
            margin: "10px 0",
          }}
        >
          Bạn đã nhập quá số điểm tối đa!
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#525252",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          Vui lòng nhập lại!
        </Typography>
      </Box>
    </Modal>
  );
};

export default Warning_Over_Point;
