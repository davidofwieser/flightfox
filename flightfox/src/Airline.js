import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
 
export default function Airline() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Mit welcher Fluglinie wollten Sie fliegen?
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="airline"
            name="airline"
            label="Airline"
            fullWidth
            autoComplete="airline"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="flightNumber"
            name="flightnumber"
            label="Flugnummer"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
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
