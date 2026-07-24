import { Box, Container, Typography, Divider } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F5F5F5",
        py: {
          xs: 5,
          md: 8,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "2fr 1fr 1fr",
            },

            gap: {
              xs: 4,
              md: 5,
            },
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              پرژاد
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 2,
                maxWidth: 350,
              }}
            >
              راهکارهای تخصصی برای مدیریت بهتر دارایی‌ها و تصمیم‌گیری‌های مالی
              هوشمندانه.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 600 }}>تماس با ما</Typography>

            <Typography color="text.secondary" sx={{ mt: 2 }}>
              ۰۲۱-۱۲۳۴۵۶۷۸
            </Typography>

            <Typography color="text.secondary">info@parzhad.ir</Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 600 }}>دفتر ما</Typography>

            <Typography color="text.secondary" sx={{ mt: 2 }}>
              تهران، ایران
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        <Typography variant="body2" color="text.secondary">
          © ۲۰۲۶ پرژاد. تمامی حقوق محفوظ است.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
