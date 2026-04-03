import project1 from "../assets/Projects/project-1.jpg";
import project2 from "../assets/Projects/project-2.jpg";
import project3 from "../assets/Projects/project-3.jpg";
import project4 from "../assets/Projects/project-4.avif";
import project5 from "../assets/Projects/project-5.png";
import project6 from "../assets/Projects/project-6.jpg";
import project7 from "../assets/Projects/project-7.avif";

export const Hero_Content = `Backend & Full Stack Developer | Python | FastAPI | React | AWS

I build scalable RESTful APIs and full-stack web applications with secure authentication and cloud deployment. Experienced in developing production-ready systems using FastAPI, Django, React, and AWS. 

Focused on Backend Development | Open to Full Stack Roles`;

export const About_Me = `I am a developer with experience in both backend and full-stack development, specializing in building scalable applications using FastAPI, Django, and React.

I have developed RESTful APIs, implemented JWT-based authentication, and worked with databases like PostgreSQL and MongoDB. I have also built complete web applications with responsive frontends and secure backend systems.

My projects include a store visit management system and an expense tracking system, focusing on performance, scalability, and clean architecture. I am passionate about backend development, system design, and deploying applications on AWS.`;

export const EXPERIENCE = [
  {
    year: "July-2025 to Sep-2025 (Virtual)",
    role: "PhP Developer",
    company: "ApexPlanet software pvt ltd",
    discription: `Intern with PHP and MySQL, where I developed CRUD operations by updating, and managing web applications driven by 
    databases. My tasks involved create, read,  update, and delete records using PHP and     MySQL, while ensuring optimal and  
    great backend functionality and data    management.`,
    technologies: ["Javascript", "PHP", "MySql"],
  },
];

export const PROJECTS = [
  {
  title: "Store Visit Management System",
  image: project7, // add your image variable
  shortDesc: "Full-stack system with FastAPI, JWT auth, and AWS deployment",
  description:
    "A full-stack application built using FastAPI, React, and MongoDB to manage store visits with admin workflows. Developed 10+ RESTful APIs, implemented JWT-based authentication and role-based access control (RBAC), and optimized backend performance. Deployed on AWS EC2 using Nginx with production-ready configuration.",
  technologies: ["FastAPI", "React", "MongoDB", "AWS", "Nginx"],
  tags: ["Full Stack", "REST API", "Authentication", "AWS"],
  github: "https://github.com/mayurk11/Store_App", // update if needed
},
  {
  title: "Expense Tracker",
  image: project5,
  shortDesc: "Django-based app for managing income, expenses, and budgets",
  description:
    "Developed a Django-based backend system to manage financial data with CRUD operations. Designed database models using Django ORM, implemented secure authentication, and generated financial reports for tracking income and expenses efficiently.",
  technologies: ["Django", "PostgreSQL"],
  tags: ["Backend", "Finance", "CRUD"],
  github: "https://github.com/mayurk11/EXPENCE_TRACKER",
},
  {
  title: "E-Commerce Project",
  image: project4,
  shortDesc: "Full-stack e-commerce app with cart, orders, and admin panel",
  description:
    "Built a full-stack e-commerce application using Django and React. Implemented product management, shopping cart, and order processing features. Designed RESTful APIs for backend services and integrated a responsive frontend using Tailwind CSS.",
  technologies: ["React", "Tailwind CSS", "Django"],
  tags: ["Full Stack", "E-Commerce", "REST API"],
  github: "https://github.com/mayurk11/ECOMMERCE_PROJECT",
},{
  title: "Prime Logic Solutions",
  image: project6,
  shortDesc: "Production-level business website deployed for real client",
  description:
    "Developed and deployed a production-ready business website for a real client using React, Node.js, and PostgreSQL. Implemented responsive UI, backend APIs, and client inquiry handling system, ensuring high performance and scalability.",
  technologies: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
  ],
  tags: ["Production App", "Full Stack", "Client Project"],
  github:
    "https://github.com/mayurk11/mayurk11-Primelogic-Solutions_frontend",
},
  {
  title: "Student Management System",
  image: project1,
  shortDesc: "CRUD-based system for managing student records",
  description:
    "Built a web-based student management system using PHP and MySQL with secure authentication and full CRUD operations. Designed backend logic for managing student records and ensured smooth data handling and session management.",
  technologies: ["PHP", "MySQL"],
  tags: ["Backend", "CRUD", "Authentication"],
  github: "https://github.com/mayurk11/Student-Management-System",
},
  {
  title: "Infant Cry Classification System",
  image: project3,
  shortDesc: "Deep learning model to classify infant cry sounds",
  description:
    "Developed a deep learning model to classify infant cry sounds and detect potential issues. Performed feature extraction, audio processing, and model training to improve classification accuracy.",
  technologies: ["Python", "Deep Learning", "ML"],
  tags: ["AI", "Deep Learning", "Python"],
  github:
    "https://github.com/mayurk11/Infant-problem-prediction-by-there-cry-sound",
},
];

export const CONTACT = {
  address: "Chh.sambhajinagar         Maharashtra",
  phoneNo: "+91 8767274928",
  email: "mayurkale1105@gmail.com",
};
