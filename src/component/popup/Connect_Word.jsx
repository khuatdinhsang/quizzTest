import {
  Box,
  Button,
  Grid,
  Icon,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Editor from "../../page/library/Editor";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import ManagerQuestion from "../ManagerQuestion";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const Connect_Word = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "1200px",
    height: "700px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 7,
    borderRadius: "5px",
    overflow: "auto",
  };
  return (
    <Modal open={true} aria-labelledby="modal-modal-title">
      <Box sx={style}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 20,
            marginBottom: "20px",
            color: "#525252",
          }}
        >
          Tạo câu hỏi mới
        </Typography>
        <CloseIcon
          sx={{
            display: "block",
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        />
        <Typography
          sx={{
            color: "#484848",
            fontWeight: "600",
            position: "relative",
            marginBottom: "10px",
          }}
        >
          Nội dung câu hỏi:
          <StarIcon
            sx={{ color: "red", fontSize: "10px", position: "absolute" }}
          />
        </Typography>
        <Editor />
        <ManagerQuestion />

        <Box>
          <Typography
            sx={{
              color: "#525252",
              fontWeight: "700",
              marginTop: "50px",
              marginBottom: "20px",
            }}
          >
            Đáp án:
          </Typography>

          <Stack flexDirection="row" justifyContent="center">
            <Stack sx={{ width: "500px" }}>
              <Typography
                sx={{
                  height: "45px",
                  textAlign: "center",
                  background: "#D9D9D9",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid black",
                }}
              >
                Mục
              </Typography>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
            </Stack>
            <Stack sx={{ width: "500px" }}>
              <Typography
                sx={{
                  height: "45px",
                  textAlign: "center",
                  background: "#D9D9D9",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid black",
                }}
              >
                Nối
              </Typography>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  height: "40px",
                  padding: "5px",
                  textAlign: "center",
                  lineHeight: "45px",
                  fontWeight: "600",
                  border: "1px solid #C0C0C0",
                  marginBottom: "5px",
                }}
              >
                <Typography textAlign="left" fontSize="14px" color="#484848">
                  Beautiful
                </Typography>
                <Box>
                  <DeleteIcon
                    sx={{
                      display: "block",
                      color: "#E15454",
                      fontSize: "19px",
                      cursor: "pointer",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{
                      display: "block",
                      color: "#A3A3A3",
                      fontSize: "16px",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Box mt={3} align="right">
          <Button
            sx={{
              width: 150,
              marginRight: "20px",
              bgcolor: "#0C8CE9",
              color: "white",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "#0C8CE9",
              },
            }}
            variant="contained"
          >
            Chỉnh sửa
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
            Lưu
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Connect_Word;
