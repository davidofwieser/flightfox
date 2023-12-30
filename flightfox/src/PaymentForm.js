import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Abchluss
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="email"
            label="email"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Ich habe die AGBs gelesen und trete meinen Fall an flightfox ab. Ich erhalte eine Bestätigungsemail von flightfox über die Annahme des Auftrags. Im email erhalte ich einen Link mit dem ich einen weiteren Flug reklamieren kann und sofort profitiere."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
