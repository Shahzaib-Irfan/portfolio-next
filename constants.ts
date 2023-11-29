export const METADATA = {
  title: "Portfolio | Shahzaib Irfan",
  description:
    "I serve as the link between development and automation, shouldering the responsibility to engineer sophisticated solutions that seamlessly integrate artificial intelligence into modern frontend architecture, enhancing the overall user experience.",
  siteUrl: "",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I develop and automate things",
  "I develop modern AI automated apps",
  "I design dynamic user experience",
  "I design and develop full stack apps",
];

export const EMAIL = "shahzaibirfan1012@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/shahzaib-irfan-b48125223/",
  github: "https://github.com/Shahzaib-Irfan",
  medium: "https://medium.com/@shahzaibirfan1012",
  instagram: "https://www.instagram.com/ssup_shahzaib/",
  facebook: "https://www.facebook.com/shahzaib.chaudary.50",
  twitter: "https://twitter.com/ShahzaibIrfan14",
  topmate: "https://topmate.io/shahzaib_irfan",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "DMS - Shortest Path to Destination",
    image: "/projects/DMS.png",
    blurImage: "/projects/blur/DMS blur.jpg",
    description: "Delivery Application with DSA made in Windows Form C#",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://gitlab.com/buttafraz22/cs261f22finalpid01",
    tech: ["C#"],
  },
  {
    name: "Minimal Search App",
    image: "/projects/Search Algos App.png",
    blurImage: "/projects/blur/Search Algos App blur.jpg",
    description: "A search app made in python with DSA by using 1 million data scrapped from API's",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://gitlab.com/buttafraz22/cs261f22pid01",
    tech: ["python"],
  },
  {
    name: "Students Evaluation App",
    image: "/projects/Students Evaluation App.png",
    blurImage: "/projects/blur/Students Evaluation App blur.jpg",
    description: "Student's assignments checking app made in WPF Forms using MS SQL Database",
    gradient: ["#245B57", "#004741"],
    url: "https://gitlab.com/shahzaibirfan1012/students-evaluation-app",
    tech: ["C#"],
  },
  {
    name: "Health Management System",
    image: "/projects/Health Management System.png",
    blurImage: "/projects/blur/Hotel Management System blur.jpg",
    description: "Built a product for the medical insurance of employees. The app links doctors on the panel with patients.",
    gradient: ["#003052", "#167187"],
    url: "https://gitlab.com/HamzaCarsEnthusiast/db2021finalprojectg-48",
    tech: ["react", "C#", ".NET CORE"],
  },
  {
    name: "Comfy Sloth Clone",
    image: "/projects/comfy sloth.png",
    blurImage: "/projects/blur/comfy sloth blur.jpg",
    description: "A simple Point of Sale Application",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://react-productsapp.netlify.app/",
    tech: ["react", 'javascript', 'html', 'css'],
  },
  {
    name: "Cocktails DB Clone",
    image: "/projects/cocktails.png",
    blurImage: "/projects/blur/cocktails blur.jpg",
    description: "A simple CRUD App",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://temp-cocktails-project.netlify.app/",
    tech: ["javascript", 'react', 'html', 'css'],
  },
  {
    name: "Beverli Hills",
    image: "/projects/beverli-hills.png",
    blurImage: "/projects/blur/beverli-hills blur.jpg",
    description: "A flagship Hotel Reservation Web App built using MERN Stack",
    gradient: ["#5E4C06", "#746528"],
    url: "https://www.akgec.ac.in/",
    tech: ['react',"javascript", "html", "css"],
  },
  {
    name: "Musculoskeletal Fracture Detection App",
    image: "/projects/mura.png",
    blurImage: "/projects/blur/mura-blur.jpg",
    description: "In progress web app made in cross-tech languages to detect fractures in bones using x-ray's",
    gradient: ["#172839", "#334659"],
    url: "https://gitlab.com/buttafraz22/mura_xray_f23",
    tech: ["python", "javascript", "react"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "html",
    "css",
    "bootstrap",
    "next",
    'nodejs'
  ],
  backend:["nodejs", "express"],
  database:["mongodb", "sql", "mysql"],
  ai:['tensor-flow', 'pytorch', 'scikit-learn'],
  userInterface: ["figma",  "photoshop"],
  other: ["git", "lightroom"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Intern at Tiers Limited",
    size: ItemSize.SMALL,
    subtitle:
      "Worked as a SDE Intern at Tiers Limited (June 23 - August 23)",
    image: "/timeline/tierslimited.jpg",
    slideImage: "/timeline/tierslimited.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Director Web Development",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering @ Core team",
    image: "/timeline/hackclub.jpg",
    slideImage: "/timeline/hackclub.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "FSc Pre Engineering High Achiever",
    size: ItemSize.SMALL,
    subtitle:
      "Selected in high achievers at Concordia Colleges from all over Pakistan",
    image: "/timeline/high-achievers.jpg",
    slideImage: "/timeline/high-achievers.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2020",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.DIVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI Engineer (freelance)",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Built solutions for employee engagement, productivity and performance 🎯",
  //   image: "/timeline/huminos.svg",
  //   slideImage: "/timeline/huminos-freelance.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Motion Graphics (freelance)",
  //   size: ItemSize.SMALL,
  //   subtitle: "Motion Graphics content for Product Launch 🚀",
  //   image: "/timeline/octanner.svg",
  //   slideImage: "/timeline/aftereffects.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CONVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2019",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
  //   image: "/timeline/dltlabs.svg",
  //   slideImage: "/timeline/dlt-website.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UX Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
  //   image: "/timeline/huminos.svg",
  //   slideImage: "/timeline/huminos-website.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Graduated from College 🎓",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
  //   image: "/timeline/akgec.svg",
  //   slideImage: "/timeline/farewell.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2018",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.DIVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Student lead at SDC-SI",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
  //   image: "/timeline/si.svg",
  //   slideImage: "/timeline/si-head.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on SVG animations",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

  //   slideImage: "/timeline/svg-lecture.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2017",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Designing, IMSU",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed against 20+ teams for design and development of web project from scratch",
  //   slideImage: "/timeline/ims-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Javascript",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
  //   slideImage: "/timeline/js-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Design, ABES ACM",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed in web and graphic design challenge with 100+ participants.",
  //   slideImage: "/timeline/abes-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Web Technologies",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
  //   slideImage: "/timeline/web-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2016",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Designing, IMSU",
  //   size: ItemSize.SMALL,
  //   subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
  //   slideImage: "/timeline/ims-16.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CONVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI/UX, Frontend Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
  //   image: "/timeline/si.svg",
  //   slideImage: "/timeline/si-start.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2014",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Recognized Themer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
  //   image: "/timeline/xda.svg",
  //   slideImage: "/timeline/xda-rt.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
