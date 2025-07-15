import * as React from "react";
import {
  Tab,
  Tabs,
  Box,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBlog,
  faAddressBook,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import { faAndroid, faJava } from "@fortawesome/free-brands-svg-icons";

function TabPanel(props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  const { children, value, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div style={{marginBottom: "15px"}}>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Projects = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: 1,
          borderColor: "divider",
          marginTop: 2,
          width: {
            xs: "100%",
            sm: "200px",
            md: "250px",
          },
          maxWidth: "250px",
          flexShrink: 0,
        }}
      >
        <Tab
          label={
            <div style={{marginBottom: "15px"}}>
              🪺 Copy Nest
            </div>
          }
          {...a11yProps(0)}
        />
          <Tab
          label={
            <div style={{marginBottom: "15px"}}>
              <FontAwesomeIcon
                icon={faCloud}
                style={{ marginRight: "0.5rem" }}
              />
              Word Cloud App 
            </div>
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <div style={{marginBottom: "15px"}}>
              <FontAwesomeIcon
                icon={faAndroid}
                style={{ marginRight: "0.5rem" }}
              />
              Personnel-Management
            </div>
          }
          {...a11yProps(2)}
        />
        <Tab
          label={
            <div style={{marginBottom: "15px"}}>
              <FontAwesomeIcon
                icon={faAndroid}
                style={{ marginRight: "0.5rem" }}
              />
              Smart Converter
            </div>
          }
          {...a11yProps(3)}
        />
        <Tab
          label={
            <div style={{marginBottom: "15px"}}>
              <FontAwesomeIcon
                icon={faBolt}
                style={{ marginRight: "0.5rem" }}
              />
              Flashcard-Session
            </div>
          }
          {...a11yProps(4)}
        />
        <Tab
          label={
            <div style={{marginBottom: "15px"}}>
              <FontAwesomeIcon
                icon={faJava}
                style={{ marginRight: "0.5rem" }}
              />
              Turkish-Verb-Conjugator
            </div>
          }
          {...a11yProps(5)}
        />
        <Tab
          label={
            <div style={{marginBottom: "15px"}}>
              <FontAwesomeIcon
                icon={faBlog}
                style={{ marginRight: "0.5rem" }}
              />
              Open-Blog-v2
            </div>
          }
          {...a11yProps(6)}
        />
        <Tab
          label={
            <div style={{marginBottom: "15px"}}>
              <FontAwesomeIcon
                icon={faBlog}
                style={{ marginRight: "0.5rem" }}
              />
              Open-Blog
            </div>
          }
          {...a11yProps(7)}
        />
        <Tab
          label={
            <div style={{marginBottom: "15px"}}>
              <FontAwesomeIcon
                icon={faAddressBook}
                style={{ marginRight: "0.5rem" }}
              />
              Contact Manager
            </div>
          }
          {...a11yProps(8)}
        />
      </Tabs>
      

      <TabPanel value={value} index={0}>
        <h3>Copy Nest</h3>
        <div style={{marginBottom: "15px"}}>
          <FormattedMessage id="copy_nest" />
        </div>

        <Button
          size="small"
          variant="outlined"
          href="https://copy-nest-frontend-0eb215f6fc6a.herokuapp.com/"
          sx={{ marginRight: 2 }}
        >
          <FormattedMessage id="start_button" />
        </Button>
        <Button
          size="small"
          variant="contained"
          href="https://github.com/bolatah/copy-nest"
        >
          Github
        </Button>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h3>Word Cloud App</h3>
        <div style={{marginBottom: "15px"}}>
          <FormattedMessage id="word_cloud_app" />
        </div>

        <Button
          size="small"
          variant="outlined"
          href="https://github.com/bolatah/word-cloud-app/releases"
          sx={{ marginRight: 2 }}
        >
          <FormattedMessage id="download" />
        </Button>
        <Button
          size="small"
          variant="contained"
          href="https://github.com/bolatah/word-cloud-app"
        >
          Github
        </Button>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <h3>Personnel-Management</h3>
        <div style={{marginBottom: "15px"}}>
          <FormattedMessage id="personnel_management" />
        </div>

        <Button
          size="small"
          variant="outlined"
          href="https://personnel-management-08584936e9f3.herokuapp.com"
          sx={{ marginRight: 2 }}
        >
          <FormattedMessage id="start_button" />
        </Button>
        <Button
          size="small"
          variant="contained"
          href="https://github.com/bolatah/personnel-management"
        >
          Github
        </Button>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <h3>Smart Image-to-PDF Converter</h3>
        <div style={{marginBottom: "15px"}}>
          <FormattedMessage id="smart_image_to_pdf_converter" />
        </div>

        <Button
          size="small"
          variant="outlined"
          href="https://play.google.com/store/apps/details?id=com.bolatah.smartImageToPDFConverter"
          sx={{ marginRight: 2 }}
        >
          <FormattedMessage id="start_button" />
        </Button>
        <Button
          size="small"
          variant="contained"
          href="https://github.com/bolatah/Smart-Image-to-PDF-Converter"
        >
          Github
        </Button>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <h3>Flashcard-Session</h3>
        <div style={{marginBottom: "15px"}}>
          <FormattedMessage id="flashcard_session_description" />
        </div>

        <Button
          size="small"
          variant="outlined"
          href="https://flashcard-session-25f1181f9aa5.herokuapp.com/"
          sx={{ marginRight: 2 }}
        >
          <FormattedMessage id="start_button" />
        </Button>
        <Button
          size="small"
          variant="contained"
          href="https://github.com/bolatah/flashcard-session"
        >
          Github
        </Button>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <h3>Turkish-Verb-Conjugator</h3>
        <div style={{marginBottom: "15px"}}>
          <FormattedMessage id="turkish_verb_conjugator_description" />
        </div>

        <Button
          size="small"
          variant="outlined"
          href="https://turkish-verb-conjugator-d35eb8c56040.herokuapp.com/"
          sx={{ marginRight: 2 }}
        >
          <FormattedMessage id="start_button" />
        </Button>
        <Button
          size="small"
          variant="contained"
          href="https://github.com/bolatah/turkish-verb-conjugator"
        >
          Github
        </Button>
      </TabPanel>

      <TabPanel value={value} index={6}>
        <h3>Open-Blog-v2</h3>

        <div style={{marginBottom: "15px"}}>
          <FormattedMessage id="open_blog_v2_description" />
        </div>

        <Button
          size="small"
          variant="outlined"
          href="https://blog-app-with-nextjs.herokuapp.com"
          sx={{ marginRight: 2 }}
        >
          <FormattedMessage id="start_button" />
        </Button>

        <Button
          size="small"
          variant="contained"
          href="https://github.com/bolatah/blog-app/tree/nextjs"
        >
          Github
        </Button>
      </TabPanel>

      <TabPanel value={value} index={7}>
        <h3>Open-Blog</h3>

        <div style={{marginBottom: "15px"}}>
          <FormattedMessage id="open_blog_description" />
        </div>

        <Button
          size="small"
          variant="outlined"
          href="https://bolatah-blog-app.herokuapp.com"
          sx={{ marginRight: 2 }}
        >
          <FormattedMessage id="start_button" />
        </Button>

        <Button
          size="small"
          variant="contained"
          href="https://github.com/bolatah/typescript-blog-app"
        >
          Github
        </Button>
      </TabPanel>

      <TabPanel value={value} index={8}>
        <h3>Contact Manager</h3>

        <div style={{marginBottom: "15px"}}>
          <FormattedMessage id="contact_manager_description" />
        </div>

        <Button
          size="small"
          variant="outlined"
          href="https://bolatah-contact-manager.herokuapp.com/"
          sx={{ marginRight: 2 }}
        >
          <FormattedMessage id="start_button" />
        </Button>

        <Button
          size="small"
          variant="contained"
          href="https://github.com/bolatah/contact-manager-backend-API"
        >
          Github
        </Button>
      </TabPanel>
    </Box>
  );
};

export default Projects;
