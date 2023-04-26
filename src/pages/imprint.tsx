import { Typography } from "@mui/material";
const Imprint = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" component="h2">
        Imprint
      </Typography>
      <Typography variant="h6" component="h3">
        Information according to § 5 TMG
      </Typography>
      <Typography variant="body1" paragraph>
        Ahmet Bolat
      </Typography>
      <Typography variant="h6" component="h3">
        Contact
      </Typography>
      <Typography variant="body1" paragraph>
        bolatah@bolatah.com
      </Typography>

      <Typography variant="h6" component="h3">
        VAT ID
      </Typography>
      <Typography variant="body1" paragraph>
        VAT identification number according to § 27a VAT law: DE2848831393
      </Typography>
      <Typography variant="h6" component="h3">
        Responsible for the content according to § 55 para. 2 RStV
      </Typography>
      <Typography variant="body1" paragraph>
        Ahmet Bolat
      </Typography>
    </div>
  );
};

export default Imprint;
