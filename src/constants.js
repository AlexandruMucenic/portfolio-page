import todayURL from './imgs/today-i-learned.png';
import forkifyURL from './imgs/forkify.png';
import bookshopURL from './imgs/bookshop.png';
import trafficURL from './imgs/traffic-light.png';
import eventsURl from './imgs/react-events.png';
import challengesURL from './imgs/react-challenges.png';
import pukuURL from './imgs/puku.png';
import bciUrl from './imgs/bci.png';

export const personalProjectsData = [
  {
    title: 'Bookshop',
    imageURL: bookshopURL,
    description:
      'Book shop made in React. Users can search throught the available books, add/remove them from cart and increase the number of items in cart.',
    projectURL: 'https://amucenic-bookshop.netlify.app/',
  },
  {
    title: 'React Events',
    imageURL: eventsURl,
    description:
      'Event mangement app made using React and tanstack/react-query. Users can create, view, edit, search, and delete events.',
    projectURL: 'https://amucenic-tanstack.netlify.app/',
  },
  {
    title: 'React Challenges',
    imageURL: challengesURL,
    description:
      'Challenge management app made with React. Users can create, view, edit, search, and delete challenges.',
    projectURL: 'https://amucenic-react-animations.netlify.app/',
  },
  {
    title: 'Forkify',
    imageURL: forkifyURL,
    description:
      'JavaScript recipe app with MVC architecture. Implemented features as: search, add new recipes, bookmark recipes and increase number of servings.',
    projectURL: 'https://amucenic-forkify.netlify.app',
  },
  {
    title: 'Today-I-Learned',
    imageURL: todayURL,
    description:
      'React page that permits uploading facts based on certain topic categories, which can then be voted as correct, mind-blowing and false.',
    projectURL: 'https://amucenic-today-i-learned.netlify.app',
  },
  {
    title: 'Traffic-Light',
    imageURL: trafficURL,
    description: 'A simple traffic light, made with HTML, CSS and Javascript.',
    projectURL: 'https://amucenic-trafficlight.netlify.app/',
  },
];

export const workProjectsData = [
  {
    title: 'Puku Network',
    imageURL: pukuURL,
    description: 'Landing page made with Next.js, Typescript, and Material UI.',
    projectURL: 'https://puku.network/',
  },
  {
    title: 'BCI Romania',
    imageURL: bciUrl,
    description: 'Landing page made with React and Sass.',
    projectURL: 'https://bciromania.com/',
  },
];
