import { Box, Stack, Typography } from "@mui/material";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: "0",
        bottom: "0",
        padding: "4rem 0rem",
      }}
    >
      <Stack direction="row" spacing={4}>
        <img src={facebook} alt="facebook" width={"25px"} />
        <img src={twitter} alt="twitter" width={"25px"} />
        <img src={instagram} alt="instagram" width={"25px"} />
        <img src={linkedin} alt="linkedin" width={"25px"} />
      </Stack>
      <Box sx={{ paddingTop: "1rem", textAlign: "center" }}>
        <Typography>©2023 All content on this website is protected by copyright laws.</Typography>
      </Box>

      <Box sx={{ paddingTop: "1rem", textAlign: "center" }}>
        <Typography>
          By accessing and using this website, you agree to our Terms and Conditions.
        </Typography>
        <Typography>All users of this website are subject to our Terms and Conditions.</Typography>
      </Box>
    </Box>
  );
}
