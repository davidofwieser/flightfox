import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
 
export default function FlightDate() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        An welchem Datum hätte Ihr Flug starten sollen?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
