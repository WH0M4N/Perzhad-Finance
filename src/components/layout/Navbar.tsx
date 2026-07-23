import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 80,
            justifyContent: "space-between",
          }}
        >
          <Typography
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            Finance
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button component={Link} to="/">
              Home
            </Button>

            <Button component={Link} to="/services">
              Services
            </Button>

            <Button component={Link} to="/about">
              About Us
            </Button>

            <Button component={Link} to="/contact" variant="contained">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
