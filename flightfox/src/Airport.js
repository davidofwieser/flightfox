import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import FlightTakeoffTwoToneIcon from '@mui/icons-material/FlightTakeoffTwoTone';

 
export default function Airport() {

  const [airportDeparture, setairportDeparture] = React.useState(localStorage.getItem('airportDeparture'));
  const [airportDestination, setairportDestination] = React.useState(localStorage.getItem('airportDestination'));

  const handle = () => {

     localStorage.setItem('airportDeparture', airportDeparture);
     localStorage.setItem('airportDestination', airportDestination);
     //console.log(airportDeparture)
  };

  //const handleSubmit = (e) =>{
  //  alert("adf")
  //  e.preventDefault()
  //  console.log(airportDeparture)

  //}

  return (
    <React.Fragment >
      
      <Typography variant="h6" gutterBottom>
        Flughafen
        <FlightTakeoffTwoToneIcon />
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
            value={airportDeparture}
            onChange={(e) => setairportDeparture(e.target.value)}
            onBlur={handle}
            

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
            value={airportDestination}
            onChange={(e) => setairportDestination(e.target.value)}
            onBlur={handle}

          />
        </Grid>

      </Grid>

    </React.Fragment>



  );
}
