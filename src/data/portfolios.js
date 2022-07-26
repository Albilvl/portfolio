import img1 from "../img/portImages/Screen Shot 2022-06-27 at 1.16.24 PM.png";
import img2 from "../img/portImages/Screen Shot 2022-06-27 at 3.25.36 PM.png";
import img3 from "../img/portImages/Screen Shot 2022-06-27 at 3.32.01 PM.png";
import img4 from "../img/portImages/Screen Shot 2022-07-26 at 6.34.10 PM.png";

const portfolios = [
  {
    id: 1,
    category: "Front-End",
    image: img1,
    link1: "https://github.com/Albilvl/Freedle",
    link2: "https://www.google.com",
    title: "Freedle",
    text: "Built with HTML, CSS, Javascript, ReactJS. Created a worldle-like game only its free with unlimited plays!. Created using data structures and algorithms to make a dynamic app",
  },
  {
    id: 2,
    category: "Back-End",
    image: img2,
    link1:
      "https://github.com/howsilence/Squad-Builder-1/tree/main/squad-builder-backend",
    link2: "https://www.google.com",
    title: "Squad Builder (Back-End)",
    text: "A squad builder game, where users can create game squads. Built with HTML, CSS, Javascript, ReactJS, and Ruby. Designed custom controllers on Rack middleware, displaying comprehension of the request-response cycle. This portion of the website, is solely the backend, built with Ruby and SQLite.",
  },
  {
    id: 3,
    category: "Full-Stack",
    image: img3,
    link1: "https://github.com/Albilvl/sole-shop",
    link2: "https://www.google.com",
    title: "Sole Shop",
    text: "Built with HTML, CSS, Javascript, ReactJS, Ruby on Rails, Redux. My final, capstone project built for buying, selling, and trading sneakers. Utilized CRUD capabilities. Created my very own API. Also used the Twitter API. Designed custom rails methods, and implemented custom rails validations. Designed authentication using JWT token and custom authorization in the backend.",
  },

  {
    id: 4,
    category: "Full-Stack",
    image: img4,
    link1: "https://github.com/Albilvl/kloset",
    link2: "https://www.google.com",
    title: "Kloset",
    text: "Welcome to Kloset! The only closet manager you'll ever need, complete with its own laundry, grail section and app customization! Built with Ruby on Rails backend and React Frontend",
  },
];

export default portfolios;
