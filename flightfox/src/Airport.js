import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
 
export default function Airport() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Flughafen
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="airportDeparture"
            label="Abflug von"
            fullWidth
            autoComplete="Abflug von"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="airportDestination"
            label="Flug nach"
            fullWidth
            autoComplete="Flug nach"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAirport" value="yes" />}
            label="Flughafen fürs nächste mal merken"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
