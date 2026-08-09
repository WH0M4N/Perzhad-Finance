import { useState } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Later this will send the data to your backend.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          py: 10,
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              textAlign: "center",
              p: {
                xs: 4,
                md: 6,
              },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "2.5rem",
                },
                fontWeight: 700,
                mb: 2,
              }}
            >
              درخواست شما ثبت شد
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 2,
                mb: 4,
              }}
            >
              درخواست مشاوره شما با موفقیت ثبت شد. در اولین فرصت با شما تماس
              خواهیم گرفت.
            </Typography>

            <Button variant="outlined" onClick={() => setSubmitted(false)}>
              ثبت درخواست جدید
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        py: {
          xs: 7,
          md: 12,
        },
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box
          sx={{
            mb: {
              xs: 5,
              md: 7,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "0.85rem",
                md: "0.95rem",
              },
              fontWeight: 700,
              color: "text.secondary",
              mb: 2,
            }}
          >
            مشاوره مالی
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2.7rem",
                sm: "3.8rem",
                md: "4.8rem",
              },
              fontWeight: 800,
              lineHeight: 1.25,
              mb: 3,
            }}
          >
            درخواست مشاوره
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 650,
              fontSize: {
                xs: "1rem",
                md: "1.1rem",
              },
              lineHeight: 2.1,
            }}
          >
            اگر درباره سرمایه‌گذاری، مدیریت سرمایه یا مسائل مالی خود نیاز به
            راهنمایی دارید، درخواست خود را برای ما ارسال کنید.
          </Typography>
        </Box>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 3,
            p: {
              xs: 3,
              sm: 4,
              md: 5,
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: 2.5,
            }}
          >
            <TextField
              required
              fullWidth
              label="نام و نام خانوادگی"
              name="name"
            />

            <TextField
              required
              fullWidth
              label="شماره تماس"
              name="phone"
              type="tel"
            />

            <TextField fullWidth label="ایمیل" name="email" type="email" />

            <TextField
              required
              fullWidth
              select
              label="موضوع مشاوره"
              name="subject"
              defaultValue=""
            >
              <MenuItem value="">انتخاب کنید</MenuItem>

              <MenuItem value="investment">سرمایه‌گذاری</MenuItem>

              <MenuItem value="capital-management">مدیریت سرمایه</MenuItem>

              <MenuItem value="financial-planning">برنامه‌ریزی مالی</MenuItem>

              <MenuItem value="arbitrage">آربیتراژ</MenuItem>

              <MenuItem value="other">سایر</MenuItem>
            </TextField>
          </Box>

          <TextField
            required
            fullWidth
            multiline
            minRows={6}
            label="توضیحات درخواست"
            name="description"
            placeholder="لطفاً موضوع یا سوال خود را با جزئیات توضیح دهید..."
            sx={{
              mt: 2.5,
            }}
          />

          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.4,
                borderRadius: 2,
                fontWeight: 700,
              }}
            >
              ارسال درخواست
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ConsultationPage;
