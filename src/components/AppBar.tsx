import * as React from "react";
import { FormattedMessage } from "react-intl";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pages = [
  window.location.pathname !== "/"
    ? {
        id: 1,
        title: <FontAwesomeIcon icon={faLeftLong} />,
        url: "/",
      }
    : null,
  {
    id: 2,
    title: <FormattedMessage id="resume" />,
    url: "https://gitconnected.com/bolatah/resume",
  },
  { id: 3, title: <FormattedMessage id="interests" />, url: "interests" },
  { id: 4, title: <FormattedMessage id="projects" />, url: "projects" },
  {
    id: 5,
    title: <FormattedMessage id="blogs" />,
    url: "https://blog.bolatah.com/#/bolatah-blogs",
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#E98074",
    },
    secondary: {
      main: "#E85A4F",
    },
  },
  typography: {
    fontSize: 18,
  },
});

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="secondary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Ahmet Bolat
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ p: 0, zIndex: 999 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) =>
                  page !== null ? (
                    <MenuItem
                      component={Button}
                      key={page.id}
                      href={page.url}
                      onClick={handleCloseNavMenu}
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        sx={{
                          textTransform: "none",
                        }}
                        textAlign="center"
                      >
                        {page?.title}
                      </Typography>
                    </MenuItem>
                  ) : null
                )}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Ahmet Bolat
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) =>
                page !== null ? (
                  <Button
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    href={page.url}
                    size="large"
                    fullWidth
                    sx={{
                      my: 2,
                      color: "white",
                      display: "flex",

                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 999,
                      textTransform: "none",
                    }}
                  >
                    {page.title}
                  </Button>
                ) : null
              )}
            </Box>

            <Avatar alt="Ahmet Bolat" src="ahmet_bolat.png" />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
