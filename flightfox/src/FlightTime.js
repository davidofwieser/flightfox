import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
 
export default function FlightTime() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Um welche Uhrzeit hätte Ihr Flug starten sollen?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker label="Abflugzeit" />
            </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
