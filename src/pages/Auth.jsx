import { Box, Container } from "@mui/material";
import "./auth.module.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Slider from "../components/slider/slider.component";
import Register from "../components/register-form/Register";
const Auth = () => {
  return (
    <>
      <Box sx={{display:"flex", justifyContent:"center" , alignItems:"center"}}>
        <Container>
          <Box  >
            <Grid container spacing={2}>
              <Grid xs={12} md={6} lg={6}>
                <Slider />
              </Grid>
                   {/* login or register */}
              <Grid xs={12} md={6} lg={6}>
                <Register />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Auth;
