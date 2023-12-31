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

    <Typography component="h4" variant="h10" align="center">
          <br></br> Fluglienien schütten gerne üppige Dividenden für ihre Aktionäre aus. <br></br> 
          Flughlinien nehmen gerne bei Corona riesige Staatshilfen in Anspruch. <br></br> 
          <br></br> 
          </Typography>
          <Typography component="h1" variant="h4" align="center">
          Dabei nehmen Fluglinien gerne in Kauf,
          </Typography>
          <Typography component="h4" variant="h10" align="center">
          <br></br> dass ihre Fluggäste Verspätungen und Ausfälle erdulden müssen.<br></br> 
          Deswegen haben Sie als Passagier von der EU das Recht bekommen <br></br>für diese Verspätungen und Ausfälle entschädigt zu werden.
          <br></br> 
          <br></br> 
          Holen Sie sich Ihr Geld jetzt gerne zurück.
          <br></br> 
          <br></br> 

          </Typography>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
