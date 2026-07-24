import { Container, Typography, Box } from "@mui/material";

function ServicesPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 12 }}>
        <Typography variant="h1">سرویس های ما</Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
          ما راهکارهای مدیریت مالی ارائه می‌دهیم که برای کمک به شما در اتخاذ
          تصمیمات مالی بهتر طراحی شده‌اند.
        </Typography>
      </Box>
    </Container>
  );
}

export default ServicesPage;
