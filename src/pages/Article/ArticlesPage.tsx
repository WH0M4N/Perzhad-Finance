import {
  Box,
  Container,
  Typography,
  IconButton,
  Collapse,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { articles } from "../../data/articles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

function ArticlesPage() {
  const [openArticle, setOpenArticle] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenArticle((current) => (current === id ? null : id));
  };

  return (
    <Box
      sx={{
        py: {
          xs: 7,
          md: 13,
        },

        "& ::selection": {
          backgroundColor: "#d6d6d6",
          color: "#171717",
        },
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box
          sx={{
            mb: {
              xs: 6,
              md: 9,
            },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2.8rem",
                sm: "4rem",
                md: "5rem",
              },
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-1px",
            }}
          >
            مقالات
          </Typography>

          <Typography
            sx={{
              mt: 3,
              maxWidth: 700,
              color: "text.secondary",
              fontSize: {
                xs: "1rem",
                md: "1.1rem",
              },
              lineHeight: 2,
            }}
          >
            مقالات و مطالب کاربردی درباره سرمایه‌گذاری، مدیریت سرمایه و
            تصمیم‌گیری‌های مالی.
          </Typography>
        </Box>

        {/* Articles */}
        <Box>
          {articles.map((article, index) => {
            const isOpen = openArticle === article.id;

            return (
              <Box
                key={article.id}
                sx={{
                  position: "relative",
                  mb: 2,

                  border: "1px solid",
                  borderColor: isOpen ? "text.primary" : "divider",

                  borderRadius: 3,

                  backgroundColor: "background.paper",

                  overflow: "hidden",

                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",

                  boxShadow: isOpen ? "0 12px 35px rgba(0,0,0,0.07)" : "none",
                }}
              >
                {/* Accent line */}
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    backgroundColor: "text.primary",

                    transform: isOpen ? "scaleY(1)" : "scaleY(0)",

                    transformOrigin: "center",

                    transition: "transform 0.35s ease",
                  }}
                />

                {/* Header */}
                <Box
                  onClick={() => handleToggle(article.id)}
                  sx={{
                    p: {
                      xs: 2.5,
                      sm: 3.5,
                      md: 4,
                    },

                    display: "flex",
                    alignItems: "center",
                    gap: 3,

                    cursor: "pointer",

                    "&:hover .article-title": {
                      opacity: 0.65,
                    },
                  }}
                >
                  {/* Number */}
                  <Typography
                    sx={{
                      flexShrink: 0,
                      fontSize: {
                        xs: "1rem",
                        md: "1.1rem",
                      },
                      fontWeight: 700,
                      color: "text.disabled",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  {/* Main info */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      className="article-title"
                      sx={{
                        fontSize: {
                          xs: "1.05rem",
                          md: "1.25rem",
                        },
                        fontWeight: 700,
                        lineHeight: 1.7,

                        transition: "opacity 0.2s ease",
                      }}
                    >
                      {article.title}
                    </Typography>

                    <Box
                      sx={{
                        mt: 1,

                        display: "flex",
                        alignItems: "center",
                        gap: 0.7,

                        color: "text.secondary",
                      }}
                    >
                      <AccessTimeOutlinedIcon
                        sx={{
                          fontSize: 15,
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: 12,
                        }}
                      >
                        {article.estimated_reading_time}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Expand button */}
                  <IconButton
                    sx={{
                      flexShrink: 0,

                      width: 40,
                      height: 40,

                      border: "1px solid",
                      borderColor: "divider",

                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",

                      transition: "transform 0.3s ease",

                      "&:hover": {
                        backgroundColor: "action.hover",
                      },
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </Box>

                {/* Content */}
                <Collapse in={isOpen} timeout={400}>
                  <Divider />

                  <Box
                    sx={{
                      px: {
                        xs: 3,
                        sm: 5,
                        md: 7,
                      },

                      py: {
                        xs: 3,
                        md: 5,
                      },

                      maxWidth: 850,
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: {
                          xs: "1rem",
                          md: "1.08rem",
                        },
                        lineHeight: 2.35,
                        color: "text.secondary",
                      }}
                    >
                      {article.content
                        .split(/\n\s*\n/)
                        .map((paragraph, paragraphIndex) => (
                          <Typography
                            key={paragraphIndex}
                            component="p"
                            sx={{
                              fontSize: "inherit",
                              lineHeight: "inherit",
                              color: "inherit",
                              mb:
                                paragraphIndex ===
                                article.content.split(/\n\s*\n/).length - 1
                                  ? 0
                                  : 3,
                            }}
                          >
                            {paragraph.trim()}
                          </Typography>
                        ))}
                    </Box>
                    {/* Close */}
                    <Box
                      onClick={() => handleToggle(article.id)}
                      sx={{
                        mt: 4,

                        display: "inline-flex",
                        alignItems: "center",

                        cursor: "pointer",

                        color: "text.primary",

                        "&:hover": {
                          opacity: 0.6,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: 700,
                        }}
                      >
                        بستن مقاله
                      </Typography>
                    </Box>
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default ArticlesPage;
