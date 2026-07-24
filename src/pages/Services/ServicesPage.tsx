import { Container, Typography, Box } from "@mui/material";

const services = [
  {
    title: "مشاوره مالی",
    description:
      "ما به شما کمک می‌کنیم تا وضعیت مالی خود را تجزیه و تحلیل کنید و راهکارهای بهینه برای مدیریت دارایی‌ها و سرمایه‌گذاری‌هایتان ارائه دهیم. با مشاوره ما، می‌توانید تصمیمات مالی بهتری بگیرید و از فرصت‌های سرمایه‌گذاری بهره‌مند شوید.",
  },
  {
    title: "مدیریت پورتفوی",
    description:
      "تیم ما با استفاده از تحلیل‌های دقیق و استراتژی‌های متنوع، پورتفوی شما را مدیریت می‌کند. ما به شما کمک می‌کنیم تا با توجه به ریسک‌ها و فرصت‌های موجود، بهترین ترکیب دارایی‌ها را انتخاب کنید.",
  },
  {
    title: "آبیتراژ",
    description:
      "آبیتراژ به معنای خرید و فروش همزمان یک دارایی در بازارهای مختلف به منظور کسب سود از تفاوت قیمت‌ها می باشد.به عبارت دیگر، اگر یک دارایی در یک بازار با قیمت پایین‌تری نسبت به بازار دیگر فروخته شود، می‌توانید آن را از بازار ارزان‌تر خریداری کرده و در بازار گران‌تر بفروشید. این استراتژی به سرمایه‌گذاران این امکان را می‌دهد که با ریسک بسیار کم، از نوسانات قیمت‌ها سود ببرند. آربیتراژ می‌تواند در بازارهای مالی مختلف، از جمله خرید و فروش طلا،نقره ، دلار و ارزهای دیجیتال انجام شود و به عنوان یک روش موثر برای کسب سود در بازار های نوین مالی نظر گرفته می‌شود.",
  },
];

function ServicesPage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: {
            xs: 8,
            md: 14,
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            maxWidth: 700,
            mb: {
              xs: 6,
              md: 10,
            },
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
            سرویس‌های ما
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 3,
              fontSize: {
                xs: "0.95rem",
                md: "1.05rem",
              },
              lineHeight: 2,
            }}
          >
            ما راهکارهای مدیریت مالی ارائه می‌دهیم که برای کمک به شما در اتخاذ
            تصمیمات مالی بهتر طراحی شده‌اند.
          </Typography>
        </Box>

        {/* Services */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: {
              xs: 3,
              md: 4,
            },
          }}
        >
          {services.map((service, index) => (
            <Box
              key={service.title}
              sx={{
                position: "relative",
                p: {
                  xs: 3,
                  sm: 4,
                  md: 5,
                },
                minHeight: {
                  md: index === 2 ? 320 : 300,
                },
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "1.7rem",
                      md: "2.1rem",
                    },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 2.1,
                    fontSize: {
                      xs: "0.95rem",
                      md: "1rem",
                    },
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default ServicesPage;
