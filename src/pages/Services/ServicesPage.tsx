import { Container, Typography, Box } from "@mui/material";

function ServicesPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 12 }}>
        <Typography variant="h1">Our Services</Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
          We provide financial management solutions designed to help you make
          better financial decisions.
        </Typography>
      </Box>
    </Container>
  );
}

export default ServicesPage;
