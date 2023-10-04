import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  upwork,
  ap,
  exped,
  carrent,
  lago,
  jobit,
  tripguide,
  nestjs,
  chat,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Frontend Engineer",
    icon: web,
  },
  {
    title: "Full Stack Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "nest JS",
    icon: nestjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: upwork,
    iconBg: "#383E56",
    date: "December 2019 - now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Exped",
    icon: exped,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Backend Engineer",
    company_name: "ALGERIA PARTNERS",
    icon: ap,
    iconBg: "#383E56",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Developing and maintaining web server applications using Node js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " have had the pleasure of working closely with Djaafar in our roles as leaders of the front-end and backend development teams. I wholeheartedly recommend him as a talented and dedicated backend developer.",
    name: "Bourhaneddine BOUDIAF",
    designation: "Lead Frontend Engineer",
    company: "ALGERIA PARTNERS",
    image: "https://media.licdn.com/dms/image/D4E03AQHxwBhs0PaWjg/profile-displayphoto-shrink_100_100/0/1676575698055?e=1701907200&v=beta&t=VQzRZgHoKTIDQY16UmAecMSE5mVp-egHhabfCGki8TQ",
  },
  {
    testimonial:
      "Djaafar Hamri Thank you for always giving the best of yourself at work as a team leader of the BACK END DEPARTMENT and a LEAD BACKEND DEVELOPER.",
    name: "Mustapha Farouro",
    designation: "CEO",
    company: "ALGERIA PARTNERS",
    image: "https://media.licdn.com/dms/image/D4E03AQFhuBnNvk-68A/profile-displayphoto-shrink_100_100/0/1670542258518?e=1701907200&v=beta&t=I46DapyLCyZqsHl_wccfynxSOuleNWVNS3CIuW57uXc",
  },
  {
    testimonial:
      "Djaafar Hamri is an exceptional backend developer, consistently delivering high-quality work. His professionalism, technical prowess, and teamwork make him an asset to any project. I highly recommend him.",
    name: "Bentabet Ismail",
    designation: "Senior Software Engineer",
    company: "Freelance",
    image: "https://media.licdn.com/dms/image/C4D03AQFoX9rACV-Pig/profile-displayphoto-shrink_100_100/0/1627305112046?e=1701907200&v=beta&t=v_E_Tswfrs2xk2Ur2h2qj1Dsdd-9lriZVCZ-gM_Oks0",
  },
];

const projects = [
  {
    name: "Lago Chess",
    description:
      "Web-based real-time multiplayer chess game that allows users to play against each other in a browser.",
    tags: [
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: lago,
    source_code_link: "https://github.com/djaafarhamri/Lago",
  },
  {
    name: "chat app",
    description:
      "Web application that allows users to chat with each other in real-time using web sockets.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "socketio",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/djaafarhamri/chat-app",
  },
  {
    name: "Ecommerce API",
    description:
      "REST API for an ecommerce application that allows admins to create, read, update, and delete products, and users to browse through products and place orders.",
    tags: [
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: nestjs,
    source_code_link: "https://github.com/djaafarhamri/Ecommerce-API-nestjs-",
  },
];

export { services, technologies, experiences, testimonials, projects };
