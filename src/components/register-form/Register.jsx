import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { blue, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const Root = styled("div")(({ theme }) => ({
  marginTop: "18px",
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));
function Register() {
  return (
    <>
      <Box sx={{ paddingY: "10px", paddingX: "10px" , mt:"10px" }}>
        <Box component={"form"}>
          <Typography
            variant="h4"
            color="initial"
            sx={{
              weight: "900",
              fontFamily: "Poppins, sans-seri",
              fontSize: "28px",
            }}
          >
            Create Account To
            <span style={{ color: "#1976D2" }}> Solution Challenge</span>
          </Typography>

          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ color: grey[600], mt: "6px", fontSize: "16px" }}
          >
            Join To Our Commity Today{" "}
          </Typography>
          {/* Name */}
          <Box>
            <Grid container spacing={1} sx={{ mt: "35px" }}>
              <Grid xs={12} md={12}>
                <Typography
                  variant="h5"
                  sx={{ weight: "900", fontFamily: "Poppins, sans-seri" }}
                  color="initial"
                >
                  Fill Name
                </Typography>
                <TextField
                  label="Enter your Fill Name"
                  type="text"
                  autoComplete="off"
                  fullWidth
                  sx={{ mt: "12px" }}
                />
              </Grid>
            </Grid>
          </Box>
          {/* email */}
          <Box>
            <Grid container spacing={1} sx={{ mt: "13px" }}>
              <Grid xs={12} md={6}>
                <Typography
                  variant="h5"
                  sx={{ weight: "900", fontFamily: "Poppins, sans-seri" }}
                  color="initial"
                >
                  Email
                </Typography>
                <TextField
                  label="Enter your Email"
                  type="email"
                  autoComplete="off"
                  fullWidth
                  sx={{ mt: "12px" }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Typography
                  variant="h5"
                  sx={{ weight: "900", fontFamily: "Poppins, sans-seri" }}
                  color="initial"
                >
                  Confirm Email
                </Typography>
                <TextField
                  label="Enter your Confirm Email"
                  type="email"
                  autoComplete="off"
                  fullWidth
                  sx={{ mt: "12px" }}
                />
              </Grid>
            </Grid>
          </Box>
          {/* Password */}
          <Box>
            <Grid container spacing={1} sx={{ mt: "13px" }}>
              <Grid xs={12} md={6}>
                <Typography
                  variant="h5"
                  sx={{ weight: "900", fontFamily: "Poppins, sans-seri" }}
                  color="initial"
                >
                  Password
                </Typography>
                <TextField
                  label="Enter your Password"
                  type="email"
                  autoComplete="off"
                  fullWidth
                  sx={{ mt: "12px" }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Typography
                  variant="h5"
                  sx={{ weight: "900", fontFamily: "Poppins, sans-seri" }}
                  color="initial"
                >
                  Confirm Password
                </Typography>
                <TextField
                  label="Enter your Confirm Password"
                  type="email"
                  autoComplete="off"
                  fullWidth
                  sx={{ mt: "12px" }}
                />
              </Grid>
            </Grid>
          </Box>
          <Stack spacing={2} sx={{ mt: "10px" }}>
            <Button type="Submit" sx={{ height: "35px" }} variant="contained">
              Craete An Account
            </Button>
            <Button type="Submit" variant="outlined" sx={{ height: "35px" }}>
              Login
            </Button>
          </Stack>
        </Box>

        <Root>
          <Divider
            sx={{
              "&::before, &::after": {
                borderColor: blue[100],
              },
            }}
          >
            <Typography variant="h6" color="initial">
              Or Continue with
            </Typography>
          </Divider>
        </Root>
        <Stack
          spacing={2}
          sx={{ mt: "20px", justifyContent: "center" }}
          direction={"row"}
        >
          <Button
            variant="outlined"
            sx={{ height: "60px", width: "65px", borderRadius: "10px" }}
          >
            <img
              src="/img/google-logo-search-new-svgrepo-com (4).png"
              alt="google"
              style={{ width: "30px", height: "30px" }}
            />
          </Button>
          <Button
            variant="outlined"
            sx={{ height: "60px", width: "65px", borderRadius: "10px" }}
          >
            <img
              src="/img/facebook-svgrepo-com.png"
              alt="facebook"
              style={{ width: "30px", height: "30px" }}
            />
          </Button>
          <Button
            variant="outlined"
            sx={{ height: "60px", width: "65px", borderRadius: "10px" }}
          >
            <img
              src="/img/apple-173-svgrepo-com.png"
              alt="apple"
              style={{ width: "30px", height: "30px" }}
            />
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Register;
