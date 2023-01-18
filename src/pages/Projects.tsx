import { FormattedMessage } from "react-intl";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faBlog } from "@fortawesome/free-solid-svg-icons";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const Tab = styled(TabUnstyled)`
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[300]};
  }

  /* &:focus {
    color: #;
    outline: 3px solid ${blue[200]};
  } */

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[800]};
    color: ${grey[50]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  () => `
  width: 100%;
  font-size: 0.875rem;
  padding: 20px 12px;
  opacity: 0.6;
  `
);

const TabsList = styled(TabsListUnstyled)(
  () => `
  
  min-width: 400px;
  border-radius: 12px;
  margin-bottom: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;

  `
);

const Projects = () => {
  return (
    <>
      <TabsUnstyled orientation="vertical" defaultValue={0}>
        <TabsList>
          <Tab>
            <FontAwesomeIcon icon={faBlog} style={{ marginRight: "0.5rem" }} />
            Open-Blog
          </Tab>
          <Tab>
            <FontAwesomeIcon
              icon={faAddressBook}
              style={{ marginRight: "0.5rem" }}
            />
            Contact Manager
          </Tab>
        </TabsList>
        <Divider />
        <TabPanel value={0}>
          <Card
            sx={{
              backgroundColor: "#EAE7DC",
              marginBottom: "5rem",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Open-Blog
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                <FormattedMessage id="open_blog_description" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                href="https://blog.bolatah.com/"
              >
                <FormattedMessage id="start_button" />
              </Button>
              <Button
                size="small"
                variant="contained"
                href="https://github.com/bolatah/typescript-blog-app"
              >
                Github Codes
              </Button>
            </CardActions>
          </Card>
        </TabPanel>
        <TabPanel value={1}>
          <Card
            sx={{
              margin: "0 auto",
              backgroundColor: "#EAE7DC",
              marginBottom: "5rem",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Contact Manager
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                <FormattedMessage id="contact_manager_description" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                href="https://bolatah-contact-manager.herokuapp.com/"
              >
                <FormattedMessage id="start_button" />
              </Button>
              <Button
                size="small"
                variant="contained"
                href="https://github.com/bolatah/contact-manager-backend-API"
              >
                Github Codes
              </Button>
            </CardActions>
          </Card>
        </TabPanel>
      </TabsUnstyled>
    </>
  );
};

export default Projects;
