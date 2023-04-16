import { FormattedMessage } from "react-intl";
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
import { Card } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAddressBook, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

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

const ProjectCard = styled(Card)(
  () => `       
background-color: #EAE7DC;
max-width: 80%;

`
);

const TabPanel = styled(TabPanelUnstyled)(
  () => `
  font-size: 0.875rem;
  padding: 20px 12px;
  opacity: 0.6;
  display:contents;
 
  `
);
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

const TabsList = styled(TabsListUnstyled)(
  () => `
  border-radius: 12px;
  margin-bottom: 16px;
  margin-top: 16px;
  display: inline-flex; 
  flex-flow: initial;
  flex-direction: column;
  `
);

const Tabs = styled(TabsUnstyled)(
  () => `
  margin-bottom: 16px;
  margin-top: 16px;
  display: inline-flex; 
  flex-flow: initial;
  gap: 20px 20px;
  height: 100%;
  justify-content:space-evenly;
  `
);

const Projects = () => {
  return (
    <>
      <Tabs defaultValue={0}>
        <TabsList>
          <Tab>
            <FontAwesomeIcon
              icon={faAndroid}
              style={{ marginRight: "0.5rem" }}
            />
            Smart Converter
          </Tab>
          <Tab>
            <FontAwesomeIcon icon={faBlog} style={{ marginRight: "0.5rem" }} />
            Open-Blog-v2
          </Tab>
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
        <TabPanel value={0}>
          <ProjectCard>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Smart Image-to-PDF Converter
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                paragraph
              >
                <FormattedMessage id="smart_image_to_pdf_converter" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                href="https://play.google.com/store/apps/details?id=com.bolatah.smartImageToPDFConverter"
              >
                <FormattedMessage id="start_button" />
              </Button>
              <Button
                size="small"
                variant="contained"
                href="https://github.com/bolatah/Smart-Image-to-PDF-Converter"
              >
                Github Codes
              </Button>
            </CardActions>
          </ProjectCard>
        </TabPanel>

        <TabPanel value={1}>
          <ProjectCard>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Open-Blog-v2
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                paragraph
              >
                <FormattedMessage id="open_blog_v2_description" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                href="https://blog-app-with-nextjs.herokuapp.com"
              >
                <FormattedMessage id="start_button" />
              </Button>
              <Button
                size="small"
                variant="contained"
                href="https://github.com/bolatah/blog-app/tree/nextjs"
              >
                Github Codes
              </Button>
            </CardActions>
          </ProjectCard>
        </TabPanel>
        <TabPanel value={2}>
          <ProjectCard>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Open-Blog
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                paragraph
              >
                <FormattedMessage id="open_blog_description" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                href="https://bolatah-blog-app.herokuapp.com"
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
          </ProjectCard>
        </TabPanel>
        <TabPanel value={3}>
          <ProjectCard>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contact Manager
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                paragraph
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
          </ProjectCard>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Projects;
