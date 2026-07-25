import { Box, Container, Typography } from "@mui/material";
import Img1 from "../../assets/images/Image1.jpeg";
import Img2 from "../../assets/images/Image2.jpeg";
import Img3 from "../../assets/images/Image3.jpeg";

const services = [
  {
    image: Img1,
    title: "مشاوره مالی",
    description:
      "ما به شما کمک می‌کنیم تا وضعیت مالی خود را تجزیه و تحلیل کنید و راهکارهای بهینه برای مدیریت دارایی‌ها و سرمایه‌گذاری‌هایتان ارائه دهیم. با مشاوره ما، می‌توانید تصمیمات مالی بهتری بگیرید و از فرصت‌های سرمایه‌گذاری بهره‌مند شوید.",
  },
  {
    image: Img2,
    title: "مدیریت پورتفوی",
    description:
      "تیم ما با استفاده از تحلیل‌های دقیق و استراتژی‌های متنوع، پورتفوی شما را مدیریت می‌کند. ما به شما کمک می‌کنیم تا با توجه به ریسک‌ها و فرصت‌های موجود، بهترین ترکیب دارایی‌ها را انتخاب کنید.",
  },
  {
    image: Img3,
    title: "آبیتراژ",
    description:
      "آبیتراژ به معنای خرید و فروش همزمان یک دارایی در بازارهای مختلف به منظور کسب سود از تفاوت قیمت‌ها می باشد. به عبارت دیگر، اگر یک دارایی در یک بازار با قیمت پایین‌تری نسبت به بازار دیگر فروخته شود، می‌توانید آن را از بازار ارزان‌تر خریداری کرده و در بازار گران‌تر بفروشید. این استراتژی به سرمایه‌گذاران این امکان را می‌دهد که با ریسک بسیار کم، از نوسانات قیمت‌ها سود ببرند. آربیتراژ می‌تواند در بازارهای مالی مختلف، از جمله خرید و فروش طلا، نقره، دلار و ارزهای دیجیتال انجام شود و به عنوان یک روش موثر برای کسب سود در بازارهای نوین مالی نظر گرفته می‌شود.",
  },
];

function HomePage() {
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 6,
            md: 10,
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2.4rem",
              sm: "3.5rem",
              md: "5rem",
            },
            lineHeight: {
              xs: 1.25,
              sm: 1.2,
              md: 1.1,
            },
          }}
        >
          با
          <Box
            component="span"
            sx={{
              fontWeight: 800,
              color: "primary.main",
            }}
          >
            تصمیم‌های مالی هوشمندانه،
          </Box>
          آینده‌ای مطمئن‌تر بسازید.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: { xs: 3, sm: 4 },
            fontSize: {
              xs: "0.95rem",
              sm: "1rem",
              md: "1.05rem",
            },
            lineHeight: 1.9,
          }}
        >
          درود، به سایت مشاوره مالی پرژاد خوش آمدید. ما در پرژاد با ارائه خدمات
          تخصصی مشاوره مالی و سرمایه‌گذاری، در مسیر مدیریت بهتر دارایی‌ها و
          دستیابی به اهداف مالی در کنار شما هستیم.
        </Typography>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          pb: {
            xs: 6,
            md: 10,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: {
              xs: 8,
              md: 12,
            },
          }}
        >
          {services.map((service, index) => (
            <Box
              key={service.title}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: {
                  xs: 4,
                  md: 8,
                },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  order: {
                    xs: 1,
                    md: index % 2 === 0 ? 1 : 2,
                  },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    display: "block",
                    width: "100%",
                    maxWidth: 500,
                    height: {
                      xs: 280,
                      sm: 400,
                    },
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </Box>

              <Box
                sx={{
                  order: {
                    xs: 2,
                    md: index % 2 === 0 ? 2 : 1,
                  },
                  textAlign: {
                    xs: "right",
                    md: "right",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      md: "3rem",
                    },
                    fontWeight: 700,
                    textAlign: "start",
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    mt: 3,
                    lineHeight: 2,
                    fontSize: {
                      xs: "0.95rem",
                      md: "1.05rem",
                    },
                    textAlign: "start",
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
