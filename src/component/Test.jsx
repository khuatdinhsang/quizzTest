import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Toolbar,
} from "@mui/material";
import Grid from "@mui/material/Grid";
const Test = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            MUI-5 App
          </Typography>
          <Button variant="contained">Login</Button>
          <Button variant="contained">Sign Up</Button>
        </Toolbar>
      </AppBar>
      {/* Box  */}
      <Box mt={5}>
        <h1>MUI-5 App</h1>
        <Typography variant="h1">MUI-5 App</Typography>
        <Typography variant="h3">MUI-3 App</Typography>
      </Box>

      {/* Grid  */}
      <Grid container>
        <Grid item xs={4} p={5} align="justify">
          <Typography paragraph={true}>
            Những người này có liên quan đến các đầu mối giao, nhận ma tuý từ
            nước ngoài về Việt Nam. Chúng tôi sẽ sớm thông tin về kết quả điều
            tra ban đầu, hành vi cụ thể của đường dây tội phạm xuyên quốc gia
            này", nguồn tin của VnExpress cho biết, chiều 25/4. Họ bị điều tra
            về tội Mua bán trái phép chất ma tuý và Vận chuyển trái phép chất ma
            tuý.
          </Typography>
          <Accordion disabled={false}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>BootStrap5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Sang dep t rai vcl </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>BootStrap1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Sang dep trai vcl 1</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={8} p={5} align="justify">
          <Typography paragraph={true}>
            Những người này có liên quan đến các đầu mối giao, nhận ma tuý từ
            nước ngoài về Việt Nam. Chúng tôi sẽ sớm thông tin về kết quả điều
            tra ban đầu, hành vi cụ thể của đường dây tội phạm xuyên quốc gia
            này", nguồn tin của VnExpress cho biết, chiều 25/4. Họ bị điều tra
            về tội Mua bán trái phép chất ma tuý và Vận chuyển trái phép chất ma
            tuý.
          </Typography>
        </Grid>
      </Grid>
      {/* Button  */}
      <Stack direction="row" spacing={4} paddingTop={15} paddingLeft={15}>
        <Button variant="text">Click me</Button>
        <Button variant="contained">Submit</Button>
        <Button variant="outlined">Sign In</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="outlined" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button>Delete</Button>
      </Stack>
    </div>
  );
};

export default Test;
