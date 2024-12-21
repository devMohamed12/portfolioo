import jsImg2 from "./assets/js.png";
import htmlImg from "./assets/skills/html2.png";
import cssImg from "./assets/skills/css2.png";
import jsImg from "./assets/skills/js2.png";
import reactImg from "./assets/skills/react22.png";
import reduxImg from "./assets/skills/redux2.png";
import twImg from "./assets/skills/tw2.png";
import muiImg from "./assets/skills/materialui.png";
import supabaseImg from "./assets/skills/supabase.png";

// projects imgs
import dashImg from "./assets/projects/dashborad/dash.jpg";
import furnitureStoreImg from "./assets/projects/furnitureStore/furnitureStore.jpg";
import foodBlogImg from "./assets/projects/foodBlog/foodBlog.png";
import nikeImg from "./assets/projects/nike/nike.png";
import msStoreImg from "./assets/projects/msStore/msStore.png";
import TravelingImg from "./assets/projects/traveling/traveling.png";
import CRUDSImg from "./assets/projects/cruds/cruds.png";


class Skill {
  constructor(name, backgroundColor, image, alt) {
    this.name = name;
    this.backgroundColor = backgroundColor;
    this.boxShadow = ` 1px 1px 15px 1px ${backgroundColor}`;
    this.image = image;
    this.alt = alt;
  }
}

const html = new Skill("HTML", "#E34C26", htmlImg, "html");
const css = new Skill("CSS", "#2965f1", cssImg, "css");
const js = new Skill("JavaScript", "#D4A017", jsImg, "javascript");
const react = new Skill("React", "#1f8ead", reactImg, "react");
const redux = new Skill("Redux", "#764ABC", reduxImg, "redux");
const tailwindCss = new Skill("Tailwind CSS", "#0a508a", twImg, "tailwind css");
const mui = new Skill("martial ui", "#007FFF", muiImg, "martial ui");
const supabase = new Skill(
  "basics of supabase",
  "#3ECF8E",
  supabaseImg,
  "basics of supabase"
);

export const skillsArray = [html, css, js, react, redux, tailwindCss , mui , supabase];

class Project {
  constructor(
    title,
    image,
    description,
    demoLink,
    githubLink,
    category,
    usedSkills
  ) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.demoLink = demoLink;
    this.githubLink = githubLink;
    this.category = category;

    this.usedSkills = usedSkills;
  }
}

const dashBoard = new Project(
  "Dashboard",
  dashImg,
  "Dashboard project that helps in cotroilling the data of Furniture store that i have created using react and supabase make me can add or remove or update the data with modern looking home page to give overview of the finical status , orders and visitors of the store ",
  "https://github.com/devMohamed12/dashboard",
  "https://devmohamed12.github.io/dashboard/#/",
  "reactProject",
  [react, supabase, reduxImg, mui]
);

const furnitureStore = new Project(
  "Furniture Store ",
  furnitureStoreImg,
  "Furniture Store project for buying and selling furnitures",
  "https://github.com/devMohamed12/furniture",
  "https://devmohamed12.github.io/furniture/#/",
  "reactProject",
  [react,supabase, reduxImg , tailwindCss]
);

const foodBlogProject = new Project(
  "Food Blog",
  foodBlogImg,
  "Food blog project",
  "https://devmohamed12.github.io/eatingEmpire/#",
  "https://github.com/devMohamed12/eatingEmpire",
  "reactProject",
  [react, tailwindCss]
);

const nikeLandingPage = new Project(
  "Nike Landing Page",
  nikeImg,
  "Nike Landing Page project",
  "https://devmohamed12.github.io/nike/",
  "https://github.com/devMohamed12/nike",
  "reactProject",
  [react, tailwindCss]
);

const msStore = new Project(
  "store",
  msStoreImg,
  "E-commerce Store",
  "https://devmohamed12.github.io/ms-Store/",
  " https://github.com/devMohamed12/ms-Store",
  "jsProject",
  [html, css, js]
);

const Traveling = new Project(
  "Traveling Company Landing Page",
  TravelingImg,
  "Traveling Company Landing Page",
  "https://devmohamed12.github.io/traveling/",
  "https://github.com/devMohamed12/traveling",
  "jsProject",
  [html, css, js]
);
const CRUD = new Project(
  "Simple CRUD Project",
  CRUDSImg,
  "Simple CRUD Project",
  "https://devMohamed12.github.io/crud/",
  "https://github.com/devMohamed12/crud",
  "jsProject",
  [html, css, js]
);

export const projectsData = [
  dashBoard,
  furnitureStore,
  foodBlogProject,
  nikeLandingPage,
  msStore,
  Traveling,
  CRUD,
];
