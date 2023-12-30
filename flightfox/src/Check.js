import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
 
export default function Check() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Haben Sie bereits Kontakt?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <FormControl>
            <FormLabel id="gotmoneyback-radio-buttons-group-label">Haben Sie bereits eine Entschädigungszahlung erhalten?</FormLabel>
            <RadioGroup
              aria-labelledby="gotmoneyback-radio-buttons-group-label"
              defaultValue="none"
              name="radio-buttons-group"
            >
              <FormControlLabel value="none" control={<Radio />} label="Nein" />
              <FormControlLabel value="airline" control={<Radio />} label="Entschädigung durch Fluglinie erhalten" />
              <FormControlLabel value="traveloffice" control={<Radio />} label="Entschädigung durch den Reiseveranstalter erhalten" />
              <FormControlLabel value="other" control={<Radio />} label="Andere" />

            </RadioGroup>
          </FormControl>     


          <FormControl>
            <FormLabel id="directcontact-radio-buttons-group-label">Sind Sie in direktem Kontakt mit der Fluglinie?</FormLabel>
            <RadioGroup
              aria-labelledby="directcontact-radio-buttons-group-label"
              defaultValue="none"
              name="radio-buttons-group"
            >
              <FormControlLabel value="none" control={<Radio />} label="Nein" />
              <FormControlLabel value="yes" control={<Radio />} label="Ja" />

            </RadioGroup>
          </FormControl>   

          <FormControl>
            <FormLabel id="portalcontact-radio-buttons-group-label">Sind Sie in Kontakt mit einem anderem Fluggast Portal?</FormLabel>
            <RadioGroup
              aria-labelledby="portalcontact-radio-buttons-group-label"
              defaultValue="none"
              name="radio-buttons-group"
            >
              <FormControlLabel value="none" control={<Radio />} label="Nein" />
              <FormControlLabel value="yes" control={<Radio />} label="Ja ich habe den Fall bereits abgetreten an ein anderes Portal" />

            </RadioGroup>
          </FormControl> 
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
