import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Img1 from "../../assets/images/Image1.jpeg";
import Img2 from "../../assets/images/Image2.jpeg";
import Img3 from "../../assets/images/Image3.jpeg";

const imageSections = [
  {
    image: Img1,
    title: "نگاهی روشن‌تر به تصمیم‌های مالی",
    description:
      "تصمیم‌گیری مالی زمانی ارزشمند است که بر پایه شناخت درست و دیدگاهی روشن نسبت به مسیر پیش رو انجام شود.",
  },
  {
    image: Img2,
    title: "همراه شما در مسیر مالی",
    description:
      "هر مسیر مالی شرایط و اهداف خاص خود را دارد. ما تلاش می‌کنیم راهکارهایی متناسب با نیازها و اهداف شما ارائه دهیم.",
  },
  {
    image: Img3,
    title: "برای آینده‌ای مطمئن‌تر",
    description:
      "با بررسی دقیق‌تر فرصت‌ها و انتخاب‌های پیش رو، می‌توان قدم‌های آگاهانه‌تری برای ساختن آینده مالی برداشت.",
  },
];

function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: {
            xs: "auto",
            md: "calc(100vh - 80px)",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: {
              xs: 8,
              sm: 10,
              md: 12,
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: {
                xs: "100%",
                sm: 700,
                md: 800,
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                mt: 0,
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
              با{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                }}
              >
                تصمیم‌های مالی هوشمندانه،
              </Box>{" "}
              آینده‌ای مطمئن‌تر بسازید.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: { xs: 3, sm: 4 },
                maxWidth: { xs: "100%", sm: 600 },
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.05rem",
                },
                lineHeight: 1.9,
              }}
            >
              درود، به سایت مشاوره مالی پرژاد خوش آمدید. ما در پرژاد با ارائه
              خدمات تخصصی مشاوره مالی و سرمایه‌گذاری، در مسیر مدیریت بهتر
              دارایی‌ها و دستیابی به اهداف مالی در کنار شما هستیم.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                gap: 2,
                mt: { xs: 4, sm: 5 },
              }}
            >
              <Button
                component={Link}
                to="/services"
                variant="contained"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "auto",
                  },
                }}
              >
                خدمات ما
              </Button>

              <Button
                component={Link}
                to="/about"
                variant="outlined"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "auto",
                  },
                }}
              >
                درباره ما
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: {
            xs: 3,
            md: 0,
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "1px",
            backgroundColor: "divider",
          }}
        />

        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "primary.main",
          }}
        />

        <Box
          sx={{
            flex: 1,
            height: "1px",
            backgroundColor: "divider",
          }}
        />
      </Box>

      {/* Image Sections */}
      <Container
        maxWidth="lg"
        sx={{
          pb: {
            xs: 8,
            md: 12,
          },
        }}
      >
        {imageSections.map((section, index) => {
          const imageOnRight = index % 2 === 0;

          return (
            <Box
              key={section.title}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: imageOnRight ? "row-reverse" : "row",
                },
                alignItems: "center",
                gap: {
                  xs: 4,
                  md: 8,
                },
                py: {
                  xs: 6,
                  md: 10,
                },
              }}
            >
              <Box
                component="img"
                src={section.image}
                alt=""
                sx={{
                  width: {
                    xs: "100%",
                    md: "50%",
                  },
                  height: {
                    xs: 260,
                    sm: 350,
                    md: 420,
                  },
                  objectFit: "cover",
                  borderRadius: 2,
                  display: "block",
                }}
              />

              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "50%",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                    },
                  }}
                >
                  {section.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 3,
                    lineHeight: 2,
                    maxWidth: 500,
                  }}
                >
                  {section.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}

export default HomePage;
