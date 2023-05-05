import "../../App.css";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Icon,
  MenuItem,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Header from "../../component/Header";
import NavBar from "../../component/NavBar";
import Editor from "../library/Editor";

const OneAnswer = () => {
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
              color: "#525252",
            }}
          >
            Tạo câu hỏi mới
          </Typography>

          <Editor />

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
          <Box sx={{ marginTop: "30px", width: "100%" }}>
            <form>
              <Typography>Đáp án:</Typography>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <Box
                  sx={{
                    padding: "6px",
                    border: "1px solid black",
                    height: "15px",
                    borderRadius: "50%",
                    background: "#D9D9D9",
                    marginRight: "20px",
                    flex: 1,
                  }}
                >
                  A
                </Box>
                <Box sx={{ marginTop: "-10px", flex: 1 }}>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    checked
                  />
                </Box>
                <Box sx={{ flex: 70 }}>
                  <Editor />
                </Box>
              </Stack>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <Box
                  sx={{
                    padding: "6px",
                    border: "1px solid black",
                    height: "15px",
                    borderRadius: "50%",
                    background: "#D9D9D9",
                    marginRight: "20px",
                    flex: 1,
                  }}
                >
                  B
                </Box>
                <Box sx={{ marginTop: "-10px", flex: 1 }}>
                  <FormControlLabel value="female" control={<Radio />} />
                </Box>
                <Box sx={{ flex: 70 }}>
                  <Editor />
                </Box>
              </Stack>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <Box
                  sx={{
                    padding: "6px",
                    border: "1px solid black",
                    height: "15px",
                    borderRadius: "50%",
                    background: "#D9D9D9",
                    marginRight: "20px",
                    flex: 1,
                  }}
                >
                  C
                </Box>
                <Box sx={{ marginTop: "-10px", flex: 1 }}>
                  <FormControlLabel value="female" control={<Radio />} />
                </Box>
                <Box sx={{ flex: 70 }}>
                  <Editor />
                </Box>
              </Stack>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <Box
                  sx={{
                    padding: "6px",
                    border: "1px solid black",
                    height: "15px",
                    borderRadius: "50%",
                    background: "#D9D9D9",
                    marginRight: "20px",
                    flex: 1,
                  }}
                >
                  D
                </Box>
                <Box sx={{ marginTop: "-10px", flex: 1 }}>
                  <FormControlLabel value="female" control={<Radio />} />
                </Box>
                <Box sx={{ flex: 70 }}>
                  <Editor />
                </Box>
              </Stack>
            </form>
          </Box>
        </Grid>
      </Grid>
      {/* Modal Popup */}
    </Box>
  );
};

export default OneAnswer;
