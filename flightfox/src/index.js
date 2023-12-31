import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Checkout from './Checkout';
import reportWebVitals from './reportWebVitals';
import ButtonAppBar from './ButtonAppBar';
import LinearWithValueLabel from './LinearWithValueLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturedPost';

const root = ReactDOM.createRoot(document.getElementById('root'));


const mainFeaturedPost = {
      title: 'Wurde auch Ihr Flug gestrichen?',
      description:
      "Egal ob Sie einen geschäftlichen Termin verpasst haben, ihren Freund nicht getroffen haben oder ihre Hochzeitsreise umdisponieren mussten.",
      image: 'womanwaiting.jpg',
      imageText: 'main image description',
      linkText: '',
    };
    
const featuredPosts = [
      {
        title: 'Wurde auch Ihr Flug gestrichen?',
        date: '',
        description:
          'Egal ob Sie einen geschäftlichen Termin verpasst haben, ihren Freund nicht getroffen haben oder ihre Hochzeitsreise umdisponieren mussten.',
        image: 'womanwaiting.jpg',
        imageLabel: 'Image Text',
      },
    ];
    
    const underneathPosts = [
      {
        title: 'Für Sie völlig kostenlos und ohne Arbeit!',
        date: '',
        description:
          'Egal ob die Absage kurz oder langfristig war. Unsere spezialisierte Kanzlei prüft Ihre Ansprüche gerne sorgfältig und fordert direkt bei der Fluglinie bis zu 600€ (abzüglich Erfolgsprämie) zurück. Bei Erfolg, und glauben Sie uns wir haben meistens Erfolg, treten Sie ein kleines Honorar anteilsmäßig ab',
        image: 'happywoman.jpg',
        imageLabel: 'Image Text',
      },
      {
            title: 'Fluglienien schütten gerne üppige Dividenden für ihre Aktionäre aus.',
            date: '',
            description:
                  'Flughlinien nehmen gerne bei Corona riesige Staatshilfen in Anspruch. Dabei nehmen Fluglinien gerne in Kauf, dass ihre Fluggäste Verspätungen und Ausfälle erdulden müssen. Deswegen haben Sie als Passagier von der EU das Recht bekommen für diese Verspätungen und Ausfälle entschädigt zu werden. Holen Sie sich Ihr Geld jetzt gerne zurück.',
            image: 'countingdollars.jpg',
            imageLabel: 'Image Text',
      },
    ];

root.render(
  <React.StrictMode>
      <ButtonAppBar />

      <Grid container spacing={4}>
      
      {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
      </Grid>

      
 

    <Checkout />

    <Grid container spacing={4} alignItems="center" justifyContent="center"
    
    
    >
<Grid item xs={13}>
            {underneathPosts.map((post) => (
                        <FeaturedPost key={post.title} post={post} />
                        ))}
                        </Grid>
      </Grid>



          <MainFeaturedPost post={mainFeaturedPost} />

  



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
