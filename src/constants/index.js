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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fsoft,
  skillcetera,
  VNA
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Three JS",
    icon: threejs,
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
    title: ".Net Developer",
    company_name: "FSoft",
    icon: fsoft,
    iconBg: "#383E56",
    date: "Sep 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using .Net and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing RESTful APIS and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ReactJS/Flutter Developer",
    company_name: "FPT University",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2021 - Present",
    points: [
      "Developing and maintaining web applications using PHP laravel, C# .Net, Java MVC, ReactJS, React Typescript, Flutter and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "President - Non-permanent supervisor",
    company_name: "Skillcetera",
    icon: skillcetera,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Manage and organize club activities and events in English and soft-skill aspects.",
      "Manage, develop, and train club Personnel in English and soft skill aspects.",
      "Evaluate the development and qualities of the club and its members.",
    ],
  },
  {
    title: "Flight Attendant Trainee",
    company_name: "Vietnam Airlines",
    icon: VNA,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - May 2024",
    points: [
      "Aviation Training including Safety, Security, and Service for 4 months",
      "A321 Flight attendant trainee, Top scorer in class, Excelled in Service and Safety subjects",
      "Domestic routes",
    ],
  },
  {
    title: "Flight Attendant",
    company_name: "Vietnam Airlines",
    icon: VNA,
    iconBg: "#E6DEDD",
    date: "May 2024 - Dec 2024",
    points: [
      "Giving the best experience to the customers onboard, ensuring their safety and security",
      "A321 Flight attendant, B787  Flight attendant trainee, A350 Flight attendant trainee",
      "Domestic routes and turnaround International routes",
    ],
  },{
    title: "Flight Attendant",
    company_name: "Vietnam Airlines",
    icon: VNA,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Giving the best experience to the customers onboard, ensuring their safety and security",
      "A321, B787, A350 Flight attendant, Best flight attendant of the month (June 2025)",
      "Domestic routes and International routes",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Fatsfish proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Fatsfish does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Fatsfish optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
