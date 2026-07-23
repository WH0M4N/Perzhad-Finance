import { Container, Typography, Box } from "@mui/material";

function AboutPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 12 }}>
        <Typography variant="h1">About Us</Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 3,
            maxWidth: 700,
          }}
        >
          We believe financial management should be clear, accessible, and
          simple. Our goal is to help people and businesses make better
          decisions with their money.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutPage;
