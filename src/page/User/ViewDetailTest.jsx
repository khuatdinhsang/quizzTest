import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../../component/Header";
import NavBar from "../../component/NavBar";
import topic_icon from "../../img/topic.png";
import number_question_icon from "../../img/number_question.png";
import timeIcon from "../../img/time.png";
import day_create_icon from "../../img/day_create.png";
import day_close_icon from "../../img/day_close.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Bar } from "react-chartjs-2";
const ViewDetailTest = () => {
  const data = [
    {
      id: 1,
      img_url: "topic_icon",
      title: "Chủ đề",
      content: "Java Spring Boot, Database, Java core",
    },
    {
      id: 2,
      img_url: "number_question_icon",
      title: "Số câu hỏi",
      content: "15 câu",
    },
    {
      id: 1,
      img_url: "timeIcon",
      title: "Thời gian làm bài",
      content: "30 phút",
    },
    {
      id: 1,
      img_url: "day_create_icon",
      title: "Ngày tạo",
      content: "15/03/2022",
    },
    {
      id: 1,
      img_url: "day_close_icon",
      title: "Ngày đóng",
      content: "16/03/2022",
    },
  ];
  const data1 = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const plugin = {
    id: "customCanvasBackgroundColor",
    beforeDraw: (chart, args, options) => {
      const { ctx } = chart;
      ctx.save();
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = options.color || "#99ffff";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  };
  return (
    <Box>
      <Header />
      <Grid container sx={{ color: "#686868" }}>
        <NavBar />
        <Grid item xs={10}>
          <Box
            sx={{
              marginTop: "70px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                padding: "30px 100px",
                border: "1px solid #ccc",
                borderRadius: "20px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Typography
                sx={{
                  color: "#5A5A5A",
                  fontSize: "22px",
                  fontWeight: 600,
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                01. Bài test cho TTS Front-End React JS và Database
              </Typography>
              <Stack direction="row">
                {data.map((item) => {
                  return (
                    <Box
                      sx={{
                        color: "#5A5A5A",
                        width: "150px",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        style={{ width: "55px", height: "55px" }}
                        src={item.img_url}
                      />
                      <Typography sx={{ fontWeight: "600" }}>
                        {item.title}
                      </Typography>
                      <Typography>{item.content}</Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Box>
          <Stack flexDirection="row" sx={{ marginTop: "20px" }}>
            <Box
              sx={{
                border: "1px solid #ccc",
                position: "relative",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <AccessTimeIcon
                sx={{
                  paddingTop: "10px",
                  position: "absolute",
                  fontSize: "18px",
                  top: "10px",
                }}
              />
              <Typography
                variant="span"
                sx={{
                  fontWeight: "100",
                  fontStyle: "italic",
                  marginLeft: "20px",
                }}
              >
                Tổng thời gian
              </Typography>
              <Box sx={{ marginTop: "5px", marginBottom: "10px" }}>
                <Typography
                  variant="span"
                  sx={{
                    fontWeight: "100",
                    fontStyle: "italic",
                    marginLeft: "20px",
                  }}
                >
                  00:25:09/
                </Typography>
                <Typography
                  variant="span"
                  sx={{
                    fontWeight: "100",
                    fontStyle: "italic",
                    color: "#808D9D",
                  }}
                >
                  00:25:09
                </Typography>
              </Box>
              <Typography
                variant="span"
                sx={{ color: "#8292A1", marginRight: "10px" }}
              >
                Thời gian bắt đầu
              </Typography>
              <Typography
                variant="span"
                sx={{ color: "#000000", fontWeight: "600" }}
              >
                14:13:00
              </Typography>
              <Typography
                variant="span"
                sx={{ color: "#8292A1", margin: "0 10px" }}
              >
                Ngày
              </Typography>
              <Typography
                variant="span"
                sx={{ color: "#000000", fontWeight: "600" }}
              >
                16/03/2022
              </Typography>

              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  variant="span"
                  sx={{ color: "#8292A1", marginRight: " 10px" }}
                >
                  Thời gian kết thúc
                </Typography>
                <Typography
                  variant="span"
                  sx={{ color: "#000000", fontWeight: "600" }}
                >
                  14:38:09
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewDetailTest;
