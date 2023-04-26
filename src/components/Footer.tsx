import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormattedMessage } from "react-intl";
import { Select } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faLanguage } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ContactMe from "./ContactMe";
import { LOCALES } from "../i18n/locales";

const profiles = [
  {
    id: 1,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ahmet-b-01196183/",
    avatar: "iconsLinkedin.svg",
  },
  {
    id: 2,
    title: "GitHub",
    url: "https://github.com/bolatah",
    avatar: "iconsGithub.svg",
  },
  {
    id: 3,
    title: "kaggle",
    url: "https://www.kaggle.com/kurban81",
    avatar: "iconsKaggle.svg",
  },
];

const languages = [
  { id: 1, name: "EN", code: LOCALES.ENGLISH },
  { id: 2, name: "DE", code: LOCALES.GERMAN },
  { id: 3, name: "TR", code: LOCALES.TURKISH },
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
    fontSize: 14,
  },
});

function Footer(props: any) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        color="secondary"
        sx={{ position: "fixed", bottom: "0px", zIndex: "1205" }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "#000",
                textDecoration: "none",
              }}
            >
              <FormattedMessage id="all_rights_reserved" />
            </Typography>
            <Link href="/privacy">
              <Button variant="contained">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1rem"
                  height="1rem"
                  fill="#000"
                >
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"></path>
                  <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
                </svg>
                <Box
                  sx={{
                    ml: 1,
                    display: { xs: "none", md: "flex", textTransform: "none" },
                  }}
                >
                  <FormattedMessage id="privacy" />
                </Box>
              </Button>
            </Link>
            <Link href="/imprint">
              <Button variant="contained">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1rem"
                  height="1rem"
                  fill="#000"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                </svg>
                <Box
                  sx={{
                    ml: 1,
                    display: { xs: "none", md: "flex", textTransform: "none" },
                  }}
                >
                  <FormattedMessage id="imprint" />
                </Box>
              </Button>
            </Link>
            <ContactMe />

            <Select
              variant="standard"
              onChange={props.handleChange}
              value={props.currentLocale}
              sx={{
                backgroundColor: "#E98074",
                borderRadius: "0.3rem",
                padding: "0 0.5rem",
                height: { xs: "1.8rem", md: "2.3rem" },
              }}
            >
              {languages.map((language) => (
                <MenuItem
                  key={language.id}
                  onClick={handleCloseUserMenu}
                  defaultValue={props.currentLocale}
                  value={language.code}
                >
                  <Button disabled component="span">
                    <FontAwesomeIcon
                      icon={faLanguage}
                      color="#000"
                      style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
                    />
                    <Typography
                      sx={{
                        marginRight: "-1.2rem",
                        fontSize: "0.8rem",
                        color: "#000",
                      }}
                    >
                      {language.name}
                    </Typography>
                  </Button>
                </MenuItem>
              ))}
            </Select>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Social Media Profiles">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <FontAwesomeIcon
                    icon={faUsers}
                    color="#000"
                    style={{ width: "2rem", height: "1.4rem" }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {profiles.map((profile) => (
                  <MenuItem
                    component={Button}
                    href={profile.url}
                    key={profile.id}
                    onClick={handleCloseUserMenu}
                  >
                    <Avatar src={profile.avatar} />
                    <Typography
                      sx={{
                        textTransform: "none",
                      }}
                      textAlign="center"
                    >
                      {profile.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Footer;
