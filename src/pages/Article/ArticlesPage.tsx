import { Container, Typography, Box } from "@mui/material";

function ArticlesPage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: {
            xs: 8,
            md: 14,
          },
          textAlign: "left",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2.5rem",
              sm: "3.5rem",
              md: "5rem",
            },
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          مقالات
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 4,
            maxWidth: 800,
            lineHeight: 2.2,
            fontSize: {
              xs: "1rem",
              md: "1.1rem",
            },
          }}
        >
          در بلاگ ما، مقالات و نکات مفیدی در زمینه مشاوره مالی، مدیریت
          سرمایه‌گذاری و استراتژی‌های آربیتراژ منتشر می‌کنیم. هدف ما این است که
          با ارائه اطلاعات به‌روز و مفید، به شما در تصمیم‌گیری‌های مالی کمک
          کنیم. با ما همراه باشید و از تجربیات و دانش ما بهره‌مند شوید.
        </Typography>
      </Box>
    </Container>
  );
}

export default ArticlesPage;
