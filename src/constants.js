import bookshopURL from './imgs/bookshop.png';
import todayURL from './imgs/today-i-learned.png';
import forkifyURL from './imgs/forkify.png';
import trafficURL from './imgs/traffic-light.png';
import counterURL from './imgs/counter-app.png';

export const projectsData = [
  {
    title: 'Bookshop',
    imageURL: bookshopURL,
    description:
      'React e-commerce application. Users can search throught the available books, add/remove them from cart and increase the number of items in cart. Technologies: HTML, CSS, React.js, React Router, Node.js, Express.js, Node.js.',
    projectURL: 'https://amucenic-bookshop.netlify.app/',
  },
  {
    title: 'Today-I-Learned',
    imageURL: todayURL,
    description:
      'React application that permits uploading facts based on certain topic categories, which can then be voted as correct, mind-blowing and false. Technologies: HTML, CSS, React.js, Supabase.',
    projectURL: 'https://amucenic-today-i-learned.netlify.app',
  },
  {
    title: 'Forkify',
    imageURL: forkifyURL,
    description:
      'JavaScript recipe application with MVC architecture. Implemented features as: search, add new recipes, bookmark recipes and increase number of servings. Final app from the Complete JavaScript course by Jonas Schmedtmann ',
    projectURL: 'https://amucenic-forkify.netlify.app',
  },
  {
    title: 'Traffic-Light',
    imageURL: trafficURL,
    description:
      'First part calculates the gcd & lcm for 2 numbers.  Second part is a trafficlight with 2 different light patterns: day - all 3 colors & night - intermittent yellow. Technologies: HTML, CSS, JS',
    projectURL: 'https://amucenic-trafficlight.netlify.app/',
  },
  {
    title: 'Counter',
    imageURL: counterURL,
    description:
      'Manual counter that changes the background of the page once you are getting close to one of the limits. Technologies: HTML, CSS, React.js',
    projectURL: 'https://amucenic-counter-app.netlify.app/',
  },
];
