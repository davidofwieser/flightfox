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
 
export default function Reason() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Warum hat die Fluglinie den Flug ausfallen lassen?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Begründung</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Technischer Fehler" />
              <FormControlLabel value="male" control={<Radio />} label="Corona" />
              <FormControlLabel value="crew" control={<Radio />} label="Probleme mit Piloten und Flugbegleitern" />
              <FormControlLabel value="weather" control={<Radio />} label="Schlechtwetter" />
              <FormControlLabel value="flash" control={<Radio />} label="Blitz" />
              <FormControlLabel value="birds" control={<Radio />} label="Vogelschlag" />
              <FormControlLabel value="medical" control={<Radio />} label="medizinischer Notfall" />
              <FormControlLabel value="other" control={<Radio />} label="Sonstige" />              
            </RadioGroup>
          </FormControl>     
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAirport" value="yes" />}
            label="Fluglinie (und Flugnummer) merken"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
