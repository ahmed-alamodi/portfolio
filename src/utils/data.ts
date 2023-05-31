import { ContactMe, Experience, Projects, Skill } from "typing";
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import Html5Original from 'devicons-react/lib/icons/Html5Original';
import Css3Original from 'devicons-react/lib/icons/Css3Original';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import TypescriptOriginal from 'devicons-react/lib/icons/TypescriptOriginal';
import TailwindcssPlain from 'devicons-react/lib/icons/TailwindcssPlain';

export const socials: string[] = [
  "https://linkedin.com/in/ahmed-al-amodi",
  "https://twitter.com/a_amodi96",
  "https://www.instagram.com/a_amodi96/",
  "https://github.com/ahmed-alamodi",
  "https://www.facebook.com/profile.php?id=100002581021312",
  "https://wa.me/967770696833",
];

export const experiences: Experience[] = [
  {
    companyImage: "jisr.jpeg",
    technologies: [
      ReactOriginal,
      Html5Original,
      Css3Original,
      JavascriptOriginal,
      TypescriptOriginal,
    ],
    points: [
      "Front-end Development: Proficient in HTML, CSS, and JavaScript to develop and design beautiful front-end interfaces for websites and web applications.",
      "Frameworks and Libraries: Experience using popular front-end libraries like React.js to build dynamic and interactive front-end functionalities.",
      "Libraries of React JS: Experience using the most popular React JS libraries, including React Router, Redux, Material UI, React Hook, Framer Motion, Tailwind CSS, and React Bootstrap.",
      "Responsive Design: Skilled in creating responsive and adaptive interfaces that seamlessly adapt to different screen sizes and devices, including mobile phones, tablets, and desktops.",
      "Version Control: Proficient in using version control systems like Git to manage and track changes in source code.",
      "Testing and Debugging: Capable of testing and debugging interfaces, identifying and resolving potential issues and errors.",
    ],
    dateStarted: new Date("2021/1/10"),
    dateEnded: new Date(),
    isCurrentlyWorkingHero: true,
  },
];

export const skills: Skill[] = [
  {
    image: Html5Original,
    progress: 100,
    title: "HTML5",
  },
  {
    image: Css3Original,
    progress: 80,
    title: "CSS3",
  },
  {
    image: JavascriptOriginal,
    progress: 75,
    title: "JS",
  },
  {
    image: TypescriptOriginal,
    progress: 50,
    title: "TS",
  },
  {
    image: TailwindcssPlain,
    progress: 50,
    title: "TS",
  },
];

export const dataInfo: { name: string; role: string } = {
  name: "Ahmed Al-amodi",
  role: "Software Engineer",
};

export const backgroundInformation: string =
  "An experienced and highly organized individual with 2 years of hands-on IT and programming experience. Seeking a challenging role to utilize my technical and management skills for organizational growth. Committed to staying updated with emerging trends to enhance knowledge and skills.";

export const projects: Projects[] = [
  {
    title: "JISR HR",
    link: 'https://www.jisr.net',
    summary: "",
    icon: 'jisr.jpeg',
    technologies: [Html5Original, Css3Original, JavascriptOriginal, TypescriptOriginal],
  },
];

export const contactMe: ContactMe = {
  phoneNumber: "+967 / 77696833 - 700200781",
  address: "Yemen - Hadramout - Mukalla",
  email: "amodi.ahmedaziz@gmail.com",
};
