import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Checkout from './Checkout';
import reportWebVitals from './reportWebVitals';
import ButtonAppBar from './ButtonAppBar';
import LinearWithValueLabel from './LinearWithValueLabel';
import Typography from '@mui/material/Typography';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ButtonAppBar />
    <LinearWithValueLabel />
    <Typography component="h1" variant="h4" align="center">
            Wurde auch Ihr Flug gestrichen? 
          </Typography>
          <Typography component="h4" variant="h10" align="center">
          <br></br> Egal ob Sie einen geschäftlichebn Termin verpasst haben,<br></br> ihren Freund nicht getroffen haben <br></br> oder ihre Hochzeitsreise umdisponieren mussten. <br></br><br></br>Egal ob die Absage kurz oder langfristig war. <br></br><br></br> Unsere spezialisierte Kanzlei prüft Ihre Ansprüche gerne sorgfältig <br></br> und kann gerne direkt bei der Fluglinie bis zu 600€ zurückfordern.
          </Typography>
          <Typography component="h1" variant="h4" align="center">
          <br></br>  Für Sie völlig kostenlos und ohne Arbeit!
          </Typography>
          <Typography component="h4" variant="h10" align="center">
          <br></br>Bei Erfolg, und glauben Sie uns wir haben meistens Erfolg,<br></br> treten Sie ein kleines Honorar anteilsmäßig ab.
          </Typography>

    <Checkout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
