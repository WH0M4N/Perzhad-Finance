import { Box, Container, Typography } from "@mui/material";
import Img1 from "../../assets/images/Image1.jpeg";
import Img2 from "../../assets/images/Image2.jpeg";
import Img3 from "../../assets/images/Image3.jpeg";

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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.5fr 1fr",
            },
            gap: {
              xs: 4,
              md: 6,
            },
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
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
              درود، به سایت مشاوره مالی پرژاد خوش آمدید. ما در پرژاد با ارائه
              خدمات تخصصی مشاوره مالی و سرمایه‌گذاری، در مسیر مدیریت بهتر
              دارایی‌ها و دستیابی به اهداف مالی در کنار شما هستیم.
            </Typography>
          </Box>

          {/* FIRST IMAGE */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={Img1}
              alt=""
              sx={{
                display: "block",
                width: "100%",
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 6,
            md: 10,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 450px))",
            },
            justifyContent: "center",
            gap: {
              xs: 3,
              md: 4,
            },
          }}
        >
          <Box
            component="img"
            src={Img2}
            alt=""
            sx={{
              width: "100%",
              height: {
                xs: 280,
                sm: 400,
              },
              objectFit: "cover",
              borderRadius: 2,
            }}
          />

          <Box
            component="img"
            src={Img3}
            alt=""
            sx={{
              width: "100%",
              height: {
                xs: 280,
                sm: 400,
              },
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
