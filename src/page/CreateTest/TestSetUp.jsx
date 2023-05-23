import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GroupIcon from "@mui/icons-material/Group";
import React from "react";
import Header from "../../component/Header";

const TestSetUp = () => {
  const data = [
    {
      id: 1,
      name: "Phòng nhân sự ",
      member: 5,
    },
    {
      id: 2,
      name: "Phòng công nghệ ",
      member: 15,
    },
    {
      id: 3,
      name: "Phòng tài chính ",
      member: 4,
    },
    {
      id: 4,
      name: "Phòng kế toán ",
      member: 2,
    },
    {
      id: 5,
      name: "Phòng bán hàng ",
      member: 7,
    },
  ];
  const data1 = [
    {
      id: 1,
      name: "Khuất Đình Sáng",
    },
    {
      id: 2,
      name: "Khuất Đình Sáng",
    },
    {
      id: 3,
      name: "Khuất Đình Sáng",
    },
    {
      id: 4,
      name: "Khuất Đình Sáng",
    },
  ];
  return (
    <Box>
      <Header />
      <Box sx={{ margin: "90px 150px 0 150px" }}>
        <Grid container>
          <Grid xs={8} sx={{ color: "#525252" }} item>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "18px",
                marginBottom: "30px",
              }}
            >
              Thiết lập bài kiểm tra
            </Typography>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography variant="span" sx={{ fontWeight: "600" }}>
                Tên bài kiểm tra:
              </Typography>
              <input
                placeholder="Nhập tên bài kiểm tra"
                style={{
                  height: "25px",
                  padding: "5px 10px ",
                  marginLeft: "10px",
                  width: "400px",
                  outline: "none",
                  fontSize: "16px",
                }}
              />
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography variant="span" sx={{ fontWeight: "600" }}>
                Thời gian đóng:
              </Typography>
              <input
                type="time"
                style={{
                  height: "25px",
                  padding: "5px 10px",
                  margin: "0 10px 0 15px ",
                  outline: "none",
                  fontSize: "16px",
                }}
              />
              <input
                type="date"
                style={{
                  height: "25px",
                  padding: "5px 10px ",
                  //   width: "100px",
                  margin: "0 10px ",
                  outline: "none",
                  fontSize: "16px",
                }}
              />
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography variant="span" sx={{ fontWeight: "600" }}>
                Thời gian mở:
              </Typography>
              <input
                type="time"
                style={{
                  height: "25px",
                  padding: "5px 10px ",
                  margin: "0 10px 0 28px ",
                  outline: "none",
                  fontSize: "16px",
                }}
              />
              <input
                type="date"
                style={{
                  height: "25px",
                  padding: "5px 10px ",
                  //   width: "100px",
                  margin: "0 10px ",
                  outline: "none",
                  fontSize: "16px",
                }}
              />
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="span" sx={{ fontWeight: "600" }}>
                Thời gian làm bài:
              </Typography>
              <input
                type="number"
                min={0}
                style={{
                  height: "25px",
                  padding: "5px 10px ",
                  width: "50px",
                  margin: "0 10px ",
                  outline: "none",
                  fontSize: "16px",
                }}
              />
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <Grid container>
                <Grid item xs={6}>
                  <Box sx={{ marginBottom: "20px" }}>
                    <input type="radio" />
                    <Typography
                      variant="span"
                      sx={{ fontWeight: "600", marginLeft: "5px" }}
                    >
                      Đảo câu hỏi
                    </Typography>
                  </Box>
                  <Box>
                    <input type="radio" />
                    <Typography
                      variant="span"
                      sx={{ fontWeight: "600", marginLeft: "5px" }}
                    >
                      Hiển thị điểm sau khi làm bài
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ marginBottom: "20px" }}>
                    <input type="radio" />
                    <Typography
                      variant="span"
                      sx={{ fontWeight: "600", marginLeft: "5px" }}
                    >
                      Cho phép người dùng làm lại bài thi
                    </Typography>
                  </Box>
                  <Box>
                    <input type="radio" />
                    <Typography
                      variant="span"
                      sx={{ fontWeight: "600", marginLeft: "5px" }}
                    >
                      Hiển thị đáp án sau khi làm bài
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ margin: "30px 0" }}>
                <Typography variant="span" sx={{ fontWeight: "600" }}>
                  Lượt thi tối đa:
                </Typography>
                <input
                  type="number"
                  min={0}
                  style={{
                    height: "25px",
                    padding: "5px 10px ",
                    width: "50px",
                    margin: "0 10px ",
                    outline: "none",
                    fontSize: "16px",
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "600" }}>
                Hướng dẫn làm bài:
              </Typography>
              <textarea
                style={{
                  outline: "none",
                  fontSize: "16px",
                  padding: "10px",
                  height: "100px",
                  width: "80%",
                }}
              />
            </Box>
            <Box sx={{ textAlign: "right", margin: "20px 150px 0 0 " }}>
              <Button
                sx={{
                  width: 150,
                  marginRight: "20px",
                  bgcolor: "#121843",
                  color: "white",
                  "&:hover": {
                    opacity: 0.8,
                    backgroundColor: "#121843",
                  },
                }}
                variant="contained"
              >
                Hủy tạo đề
              </Button>
            </Box>
          </Grid>
          <Grid xs={4} item>
            <Box
              sx={{
                marginTop: "200px",
                marginLeft: "50px",
                position: "relative",
              }}
            >
              <Button
                sx={{ marginRight: "10px", width: "150px" }}
                variant="contained"
              >
                Phòng ban
              </Button>
              <Button variant="outlined" sx={{ width: "150px" }}>
                Nhân viên
              </Button>
              <Box
                sx={{
                  width: "310px",
                  border: "1px solid #ccc",
                  boxShadow: " 2px 2px 10px #1976d2 ",
                }}
              >
                <List>
                  <ListItem>
                    <ListItemText>
                      <input
                        placeholder="Chọn phòng ban"
                        style={{
                          width: "200px",
                          outline: "none",
                          border: "none",
                          fontSize: "16px",
                        }}
                      />
                    </ListItemText>
                    <SearchIcon sx={{ cursor: "pointer" }} />
                  </ListItem>
                  {data.map((item) => {
                    return (
                      <ListItem
                        key={item.id}
                        sx={{ padding: "0", color: "#3577CD" }}
                      >
                        <ListItemButton>
                          <ListItemText>{item.name}</ListItemText>
                          <GroupIcon />
                          <Typography variant="span" sx={{ margin: " 0 10px" }}>
                            {item.member}
                          </Typography>
                          <input type="checkbox" style={{ padding: "1px" }} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                  <Divider />
                  <ListItem sx={{ padding: "0", color: "#3577CD" }}>
                    <ListItemButton>
                      <ListItemText>Tất cả</ListItemText>
                      <GroupIcon />
                      <Typography variant="span" sx={{ margin: " 0 10px" }}>
                        50
                      </Typography>
                      <input type="checkbox" style={{ padding: "1px" }} />
                    </ListItemButton>
                  </ListItem>
                </List>
                <List
                  sx={{
                    position: "absolute",
                    top: "50%",
                    border: "1px solid #ccc",
                    right: "-98px",
                    width: "320px",
                    background: "white",
                    zIndex: "100",
                    boxShadow: " 2px 2px 10px #1976d2",
                  }}
                >
                  {data1.map((item) => {
                    return (
                      <ListItem
                        key={item.id}
                        sx={{ padding: "0", color: "#3577CD" }}
                      >
                        <ListItemButton>
                          <ListItemText>{item.name}</ListItemText>
                          <input type="checkbox" />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TestSetUp;
