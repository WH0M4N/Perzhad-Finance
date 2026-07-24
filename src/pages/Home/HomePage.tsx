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
          <Box
            sx={{
              width: "100%",
              maxWidth: 800,
            }}
          >
            <Typography variant="h1" sx={{ mt: 2 }}>
              با
              <Box component="span" sx={{ color: "#666666", fontWeight: 600 }}>
                تصمیم‌های مالی هوشمندانه،
              </Box>
              آینده‌ای مطمئن‌تر بسازید.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 4,
                maxWidth: 600,
              }}
            >
              درود، به سایت مشاوره مالی پرژاد خوش آمدید. ما در پرژاد با ارائه
              خدمات تخصصی مشاوره مالی و سرمایه‌گذاری، در مسیر مدیریت بهتر
              دارایی‌ها و دستیابی به اهداف مالی در کنار شما هستیم. با بهره‌گیری
              از تحلیل‌های تخصصی و استراتژی‌های متنوع سرمایه‌گذاری، از جمله
              آربیتراژ، به شما کمک می‌کنیم تا فرصت‌های مالی را بهتر شناسایی کرده
              و تصمیم‌های آگاهانه‌تری برای آینده خود بگیرید. هدف ما ارائه
              راهکارهای متناسب با شرایط و اهداف مالی شماست.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mt: 5 }}>
              <Button component={Link} to="/services" variant="contained">
                سرویس ها
              </Button>

              <Button component={Link} to="/about" variant="outlined">
                درباره ما
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
