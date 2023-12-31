import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Airport from './Airport';
import FlightDate from './FlightDate';
import FlightTime from './FlightTime';
import Airline from './Airline';
import Reason from './Reason';
import Review from './Review';
import Check from './Check';
import StepContent from '@mui/material/StepContent';
import FlightTakeoffTwoToneIcon from '@mui/icons-material/FlightTakeoffTwoTone';
import EuroTwoToneIcon from '@mui/icons-material/EuroTwoTone';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '} 
      <Link color="inherit" href="https://mui.com/">
        flightfox 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Flughafen', 'Flugdatum', 'Flugzeit', 'Flug', 'Begründung', 'Prüfung', 'Adresse', 'Zusammenfassung', 'Geld zurück'];

function getStepContent(step) {
  switch (step) {
    
    case 0:
      return <Airport />;      
    case 1:
      return <FlightDate />;    
    case 2:
      return <FlightTime />;             
    case 3:
      return <Airline />; 
    case 4:
      return <Reason />;           
    case 5:
      return <Check />;                 
    case 6:
      return <AddressForm />;
    case 7:
      return <Review />;
    case 8:
      return <PaymentForm />;

    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  

  const handleNext = () => {
    
    setActiveStep(activeStep + 1);
    //localStorage.setItem('airportDeparture', airportDeparture);
    //alert(localStorage.getItem('airportDeparture'))
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    
  };

  return (
    <React.Fragment>
      <CssBaseline />
      

      
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Geld zurück <EuroTwoToneIcon />
          </Typography>
          <Typography component="h4" variant="h10" align="center">
            Reklamieren Sie einen weiteren Flug für ein Familienmitglied und sie profitieren sofort.
          </Typography>
          <Stepper activeStep={activeStep} orientation="vertical" sx={{ pt: 1, pb: 3 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  
                          
                        {activeStep === steps.length ? (
                    <React.Fragment>
                      <Typography variant="h5" gutterBottom>
                        Thank you for your order.
                      </Typography>
                      <Typography variant="subtitle1">
                        Your order number is #2001539. We have emailed your order
                        confirmation, and will send you an update when your order has
                        shipped.
                      </Typography>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>

                        {getStepContent(activeStep)}
                                                
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {activeStep !== 0 && (
                          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                            Zurück            
                          </Button>
                        )}

                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 3, ml: 1 }}
                        >
                          {activeStep === steps.length - 1 ? 'Abschließen' : 'Weiter'}
                        </Button>
                      </Box> 
                    </React.Fragment>
                  )}                  
                  
               
                
                
                </StepContent>
                
              </Step>
            ))}
          </Stepper>

        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}
