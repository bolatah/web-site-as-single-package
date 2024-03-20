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
import styles from "../styles/custom.module.css";
import {
  faAddressBook,
  faAddressCard,
  faAtlas,
  faBlog,
  faBolt,
  faBuilding,
  faFile,
  faFileWord,
  faLanguage,
  faSdCard,
} from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faJava } from "@fortawesome/free-brands-svg-icons";

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
max-width: 85vw;
min-height: 80vh; 
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
  margin-right: 16px;
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
            Personnel-Management
          </Tab>
          <Tab>
            <FontAwesomeIcon
              icon={faAndroid}
              style={{ marginRight: "0.5rem" }}
            />
            Smart Converter
          </Tab>
          <Tab>
            <FontAwesomeIcon icon={faBolt} style={{ marginRight: "0.5rem" }} />
            Flashcard-Session
          </Tab>
          <Tab>
            <FontAwesomeIcon icon={faJava} style={{ marginRight: "0.5rem" }} />
            Turkish-Verb-Conjugator
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
                Personnel-Management
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                paragraph
              >
                <FormattedMessage id="personnel_management" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                href="https://personnel-management-08584936e9f3.herokuapp.com"
              >
                <FormattedMessage id="start_button" />
              </Button>
              <Button
                size="small"
                variant="contained"
                href="https://github.com/bolatah/personnel-management"
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

        <TabPanel value={2}>
          <ProjectCard className={styles.openBlogv2}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Flashcard-Session
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                paragraph
              >
                <FormattedMessage id="flashcard_session_description" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                href="https://flashcard-session-25f1181f9aa5.herokuapp.com/"
              >
                <FormattedMessage id="start_button" />
              </Button>
              <Button
                size="small"
                variant="contained"
                href="https://github.com/bolatah/flashcard-session"
              >
                Github Codes
              </Button>
            </CardActions>
          </ProjectCard>
        </TabPanel>

        <TabPanel value={3}>
          <ProjectCard className={styles.openBlogv2}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Turkish-Verb-Conjugator
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                paragraph
              >
                <FormattedMessage id="turkish_verb_conjugator_description" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                href="https://turkish-verb-conjugator-d35eb8c56040.herokuapp.com/"
              >
                <FormattedMessage id="start_button" />
              </Button>
              <Button
                size="small"
                variant="contained"
                href="https://github.com/bolatah/turkish-verb-conjugator"
              >
                Github Codes
              </Button>
            </CardActions>
          </ProjectCard>
        </TabPanel>

        <TabPanel value={4}>
          <ProjectCard className={styles.openBlogv2}>
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

        <TabPanel value={5}>
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

        <TabPanel value={6}>
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
