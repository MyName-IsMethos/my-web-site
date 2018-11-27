/**
 * this file contains the styles used throughout the web page. It's just a
 * javascript file, so everything below is an object.
 * @author Luis Chavarriaga
 * @license MIT
 */

//----//----//

// main backgrounds
import mapBkg from '../src/media/map-backgrnd.jpg';
import africaMapBkg from '../src/media/africa_map_backgrnd.jpg';
import vintageMyspaceBkg from '../src/media/vintage-myspace-backgrnds.jpg';
import vidPoster from '../src/media/vidCover.png';
import vid from './media/stockDef.webm';

// backgrounds for the tiles
import bkGrass from '../src/media/backgrounds/grass.png';
import bkGround from '../src/media/backgrounds/ground.png';

// source for the sprites
import sprGoomba from '../src/media/enemies/goomba/SMWEnemies-0-0-00-00.png';
import sprKoopaTroopa
from '../src/media/enemies/koopa/blue/SMWEnemies-00-010.png';

// images for the skills
import htmlIcon from './media/html5-icon.png';
import cssIcon from './media/css3-icon.jpg';
import gitIcon from './media/git-icon.png';
import javascriptIcon from './media/javascript-icon.png';
import pythonIcon from './media/python-icon.png';
import mysqlIcon from './media/mysql-icon.png';
import postgresqlIcon from './media/python-icon.png';
import reactIcon from './media/react-icon.svg';

// constants
const duration = 300;

/**
 * This contains the section settings, mainly the backgrounds.
 */
const sectionConf = {
    home: null,
    skills: mapBkg,
    projects: africaMapBkg,
    contact: vintageMyspaceBkg,
};

/**
 * sections for the navbar.
 */
const sections = [
  {
    text: "home",
    url: "#home",
    id: "home",
  },
  {
    text: "skills",
    url: "#skills",
    id: "skills",
  },
  {
    text: "projects",
    url: "#projects",
    id: "projects",
  },
  {
    text: "contact",
    url: "#contact",
    id: "contact",
  },
];

/**
 * box component configuration (just transition duration for now.)
 */
const boxConf = {
    duration: duration,
};

/**
 * project configuration for the video player.
 */
const videoPlayerConf = {
    poster: vidPoster,
    video: vid,
};

/**
 * tile background images.
 */
const tileGridConf = {
  grass: bkGrass,
  ground: bkGround,
};

/**
 * sprites
 */


/**
 * background for the skills
 */
const cubeColors = [
  "yellow", "blue", "red", "cyan", "green", "magenta"
];

/**
 * images for the skills
 */
const cubeImages = {
  html: htmlIcon,
  css: cssIcon,
  javascript: javascriptIcon,
  git: gitIcon,
  postgresql: postgresqlIcon,
  mysql: mysqlIcon,
  react: reactIcon,
  python: pythonIcon,
};

/**
 * colors for the cube faces
 */

export {sectionConf, videoPlayerConf, boxConf, tileGridConf, sections,
        sprGoomba, sprKoopaTroopa, cubeImages, cubeColors};