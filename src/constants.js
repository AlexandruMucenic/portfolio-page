import todayURL from './imgs/today-i-learned.png';
import forkifyURL from './imgs/forkify.png';
import bookshopURL from './imgs/bookshop.png';
import trafficURL from './imgs/traffic-light.png';
import counterURL from './imgs/counter-app.png';

export const projectsData = [
  {
    title: 'Today-I-Learned',
    imageURL: todayURL,
    description:
      'React application that permits uploading facts based on certain topic categories, which can then be voted as correct, mind-blowing and false.',
    projectURL: 'https://amucenic-today-i-learned.netlify.app',
  },
  {
    title: 'Forkify',
    imageURL: forkifyURL,
    description:
      'JavaScript recipe application with MVC architecture. Implemented features as: search, add new recipes, bookmark recipes and increase number of servings.',
    projectURL: 'https://amucenic-forkify.netlify.app',
  },
  {
    title: 'Bookshop',
    imageURL: bookshopURL,
    description:
      'React e-commerce application. Users can search throught the available books, add/remove them from cart and increase the number of items in cart.',
    projectURL: 'https://amucenic-bookshop.netlify.app/',
  },
  {
    title: 'Traffic-Light',
    imageURL: trafficURL,
    description: 'A simple traffic light, made with HTML, CSS and Javascript.',
    projectURL: 'https://amucenic-trafficlight.netlify.app/',
  },
  {
    title: 'Counter',
    imageURL: counterURL,
    description:
      'React manual counter that changes the background of the page once you are getting close to one of the limits.',
    projectURL: 'https://amucenic-counter-app.netlify.app/',
  },
];
