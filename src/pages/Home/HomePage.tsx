import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ width: 800 }}>
            <Typography variant="overline" color="text.secondary">
              Financial Management
            </Typography>

            <Typography variant="h1" sx={{ mt: 2 }}>
              We make financial management simple.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 4,
                maxWidth: 600,
              }}
            >
              We help businesses and individuals understand, manage, and improve
              their financial performance through simple and powerful solutions.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mt: 5 }}>
              <Button component={Link} to="/services" variant="contained">
                Explore Services
              </Button>

              <Button component={Link} to="/about" variant="outlined">
                About Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
