import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: {
                xs: 64,
                md: 80,
              },

              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Typography
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontSize: {
                  xs: 20,
                  md: 24,
                },
                fontWeight: 700,
              }}
            >
              پرژاد
            </Typography>

            {/* Desktop Navbar */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                alignItems: "center",
                gap: 1,
              }}
            >
              <Button component={Link} sx={{ color: "inherit" }} to="/">
                خانه
              </Button>

              <Button component={Link} sx={{ color: "inherit" }} to="/articles">
                مقالات
              </Button>

              <Button
                disabled
                component={Link}
                sx={{
                  color: "#BDBDBD",

                  "&.Mui-disabled": {
                    color: "#BDBDBD",
                  },
                }}
                to="/about"
              >
                درخواست مشاوره
              </Button>

              <Button component={Link} sx={{ color: "inherit" }} to="/about">
                درباره ما
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                color: "inherit",
              }}
              aria-label="باز کردن منو"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={closeMenu}>
        <Box
          sx={{
            width: {
              xs: "80vw",
              sm: 320,
            },
          }}
          role="presentation"
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              پرژاد
            </Typography>

            <IconButton onClick={closeMenu}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* Navigation Links */}
          <List>
            <ListItemButton component={Link} to="/" onClick={closeMenu}>
              <ListItemText primary="خانه" />
            </ListItemButton>

            {/* <ListItemButton component={Link} to="/services" onClick={closeMenu}>
              <ListItemText primary="خدمات" />
            </ListItemButton> */}

            <ListItemButton component={Link} to="/about" onClick={closeMenu}>
              <ListItemText primary="درباره ما" />
            </ListItemButton>

            <ListItemButton disabled>
              <ListItemText primary="درخواست مشاوره" />
            </ListItemButton>

            <ListItemButton disabled>
              <ListItemText primary="شروع همکاری" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
