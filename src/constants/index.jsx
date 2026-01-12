import project1 from "../assets/Projects/project-1.jpg";
import project2 from "../assets/Projects/project-2.jpg";
import project3 from "../assets/Projects/project-3.jpg";
import project4 from "../assets/Projects/project-4.avif";
import project5 from "../assets/Projects/project-5.png";
import project6 from "../assets/Projects/project-6.jpg";

export const Hero_Content = `I am an AI & Full Stack Developer with strong expertise in Machine Learning, along with hands-on experience in developing scalable and interactive web applications. Skilled in Python, Django, Node.js/Express.js, PHP, SQL, and modern front-end technologies, I build intelligent, user-focused solutions that combine AI capabilities with practical software engineering. I have worked on impactful projects such as infant cry classification, automated portfolio generation, and full CRUD-based student management systems. With a strong foundation in AI, data science, and full-stack development, I am passionate about creating innovative, secure, and data-driven applications that solve real-world problems. `;

export const About_Me = `I am an AI & Full Stack Developer with strong expertise in Machine Learning, Deep Learning, NLP, and Computer Vision, along with hands-on experience building dynamic web applications using Django, Node.js/Express.js, PHP, and SQL databases. I have worked on real-world AI and development projects such as infant cry classification, automated portfolio generation, and full-feature student management systems. Skilled in Python, TensorFlow, PyTorch, and modern web technologies, I enjoy building scalable, secure, and user-focused applications that blend the power of AI with practical software engineering. I am passionate about continuous learning, exploring new technologies, and creating innovative solutions that deliver real-world impact.`;

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
    title: "Expense Tracker",
    image: project5,
    shortDesc: "Web app to track income, expenses and monthly budget",
    description:
      "A full-stack Expense Tracker web application built using Django and PostgreSQL that allows users to record income and expenses, categorize transactions, view monthly spending summaries, and manage budgets through a clean and responsive interface.",
    technologies: ["Django", "PostgreSQL", "Bootstrap"],
    tags: ["Web App", "Finance", "CRUD"],
    github: "https://github.com/mayurk11/EXPENCE_TRACKER",
  },
  {
    title: "E-Commerce Project",
    image: project4,
    shortDesc: "Online shopping web app with products, cart and admin panel",
    description:
      "A full-stack E-Commerce web application built using Django for the backend and React with Tailwind CSS for the frontend. The system allows users to browse products, manage their shopping cart, place orders, and includes an admin panel for managing products, categories, and users with a modern responsive UI.",
    technologies: ["React", "Tailwind CSS", "Django"],
    tags: ["Web App", "E-Commerce", "Full Stack"],
    github: "https://github.com/mayurk11/ECOMMERCE_PROJECT",
  },
  {
    title: "Prime Logic Solutions",
    image: project6, 
    shortDesc: "Live freelancing website built for a real business client",
    description:
      "A production-level freelancing business website developed and deployed for Prime Logic Solutions. The platform showcases services, captures client inquiries, and delivers a modern, fast, and responsive user experience. Built using a full-stack architecture and used by a real company in production.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    tags: ["Freelancing", "Production App", "Business Website", "Full Stack"],
    github:
      "https://github.com/mayurk11/mayurk11-Primelogic-Solutions_frontend",
  },
  {
    title: "Student Management System",
    image: project1,
    shortDesc: "Web app to manage students, records & authentication",
    description:
      "A complete student management system built using PHP and MySQL with features like user registration, login/logout, and full CRUD operations for student records. Ensured secure session management and smooth integration between front-end and back-end.",
    technologies: ["PHP", "MySQL", "Bootstrap", "CRUD"],
    tags: ["Web App", "PHP", "MySQL", "CRUD"],
    github: "https://github.com/mayurk11/Student-Management-System",
  },
  {
    title: "Infant Cry Classification System",
    image: project3,
    shortDesc: "AI system to detect infant health issues from cry audio",
    description:
      "A deep learning-based system designed to classify infant cry sounds to detect possible problems. Used feature extraction, sound analysis, and model optimization to enhance classification accuracy.",
    technologies: ["Python", "Deep Learning", "ML"],
    tags: ["AI", "Deep Learning", "Audio", "Python"],
    github:
      "https://github.com/mayurk11/Infant-problem-prediction-by-there-cry-sound",
  },
  {
    title: "Automated Portfolio Generation",
    image: project2,
    shortDesc: "System that creates dynamic personal portfolios automatically",
    description:
      "An automated portfolio generator that creates personalized portfolios using dynamic templates and user inputs. Implemented data handling, content rendering, and responsive UI using HTML, CSS, JavaScript, and PHP.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    tags: ["Web App", "Automation", "JavaScript"],
    github: "https://github.com/mayurk11/automated-portfolio",
  },
];

export const CONTACT = {
  address: "Chh.sambhajinagar         Maharashtra",
  phoneNo: "+91 8767274928",
  email: "mayurkale1105@gmail.com",
};
