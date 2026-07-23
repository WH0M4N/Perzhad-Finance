import { Box, Container, Typography, Divider } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F5F5F5",
        mt: 10,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "2fr 1fr 1fr",
            },
            gap: 5,
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Finance
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 350 }}>
              Simple financial management solutions for better decisions and
              better results.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 600 }}>Contact Us</Typography>

            <Typography color="text.secondary" sx={{ mt: 2 }}>
              +98 21 1234 5678
            </Typography>

            <Typography color="text.secondary">info@example.com</Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 600 }}>Office</Typography>

            <Typography color="text.secondary" sx={{ mt: 2 }}>
              Tehran, Iran
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        <Typography variant="body2" color="text.secondary">
          © 2026 Finance. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
