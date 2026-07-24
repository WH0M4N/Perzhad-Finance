import { Container, Typography, Box } from "@mui/material";

function AboutPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 12 }}>
        <Typography variant="h1">درباه ما</Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 3,
            maxWidth: 700,
          }}
        >
          تیم مشاوره مالی ما متشکل از کارشناسان با تجربه و متخصص در زمینه‌های
          مالی و سرمایه‌گذاری است. ما با سال‌ها تجربه در ارائه مشاوره مالی به
          افراد و کسب‌وکارها، به شما کمک می‌کنیم تا به اهداف مالی خود برسید. ما
          به اهمیت اعتماد و ارتباط نزدیک با مشتریان خود اعتقاد داریم و همواره در
          تلاشیم تا بهترین خدمات را ارائه دهیم..
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutPage;
