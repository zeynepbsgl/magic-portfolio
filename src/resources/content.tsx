import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Zeynep",
  lastName: "Basoglu",
  name: `Zeynep Basoglu`,
  role: "Computer Engineer | Full-Stack Developer",
  avatar: "/images/vize.jpg",
  email: "esrazeynepbasoglu@gmail.com",
  location: "Türkiye/İzmir", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Turkish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Contact with me </>,
  description: <>esrazeynepbasoglu@gmail.com</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/zeynepbsgl",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/zeynep-ba%C5%9Fo%C4%9Flu-181872229/",
    essential: true,
  },
  
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@zeynepbsgl078",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
 headline: <>Full-Stack Mastery: Architecting Scalable Systems from End-to-End</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Zeynep Başoğlu</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Portfolio
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
 subline: (
  <>
    Freshly graduated <Text as="span"  weight="strong">Computer Engineer </Text> from Manisa Celal Bayar University . I specialize in building highly scalable, full-stack applications with
    <Text as="span" size="xl" weight="strong"> .NET Core & React.js</Text>
    .
  </>
), 
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "/zeynepcv.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Zeynep Başoğlu is an İzmir-based Full Stack Software Engineer with a passion for transforming complex technical challenges into scalable, user-centric end-to-end solutions. Her work spans robust .NET Core architecture, modern React interfaces, and the convergence of engineering discipline with technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Zirve Deri",
        timeframe: "07/2025 - 11/2025",
        role: "Freelance Full-Stack Developer",
        achievements: [
          <>
            Technical Infrastructure and Architecture: End-to-end, full-stack application. The backend implemented secure identity and JWT-based authentication systems using .NET Core APIs. The frontend implemented performance-oriented state management and caching using React/TypeScript and the Redux Toolkit.

          </>,
          <>
           E-Commerce Functionality: All real-world e-commerce processes were made functional with PayTR payment integration, product management with variants (such as size/color), and a fully comprehensive Admin Panel.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/zirve.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Karya SMD Bilişim",
        timeframe: "02/2025 - 06/2025",
        role: "Full-Stack Developer Intern",
        achievements: [
          <>
            Full Stack Application Development: Executed end-to-end frontend and backend development using React and ASP.NET Core within enterprise projects.
          </>,
          <>
           System Competencies: Actively participated in team-based development and code review processes, focusing on RESTful API integration, data modeling, form validation, and professional error handling.
          </>,
        ],
        images: [],
      },
       {
        company: "Orhun Teknoloji",
        timeframe: "08/2024 - 09/2024",
        role: "Frontend Developer Intern",
        achievements: [
          <>
            UI Development & Quality Assurance: Provided technical contribution to user interface development processes, including code review and the
          </>,
          <>
          Agile Methodology: Actively contributed to achieving sprint goals by fulfilling tasks within the framework of Agile working principles.
          </>,
        ],
        images: [],
      },
      {
        company: "Kalahari Hotel",
        timeframe: "06/2023 - 10/2023",
        role: "Work and Travel - USA / Ohio",
        achievements: [
          <>
           Advanced Communication: Gained advanced English communication and cross-cultural collaboration experience within an international work environment.
          </>,
          <>
          Adaptation & Problem Solving: Demonstrated strong cultural adaptability and developed independent problem-solving skills through experience in the USA (Ohio)
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Manisa Celal Bayar University",
        description: <>Graduated from Computer Engineering with <Text as="span"  weight="strong">Honors. GPA : 3.19</Text></>,
      },
      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
   skills: [
  // 1. PRIMARY STACK FOCUS: .NET Core (Backend & Architecture)
  {
    title: ".NET Core (Full Stack)",
    description: (
      <>Expertise in developing scalable APIs using .NET Core and implementing secure authentication systems via Identity and JWT for end-to-end applications.</>
    ),
    tags: [
      { name: "C#", icon: "csharp" },
      { name: ".NET Core", icon: "dotnet" }, 
      { name: "Python", icon: "python" },
    ],
    images: [],
  },
  
  // 2. PRIMARY STACK FOCUS: React & TypeScript (Frontend & State Management)
  {
    title: "React.js & TypeScript",
    description: (
      <>Developing modern, high-performance web interfaces with TypeScript and React. Proficient in global state management and performance caching using Redux Toolkit.</>
    ),
    tags: [
      { name: "React.js", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Redux", icon: "redux" },
    ],
    images: [],
  },

  // 3. DATABASE AND DATA MANAGEMENT
  {
    title: "Database Management & Querying",
    description: (
      <>Proficiency in data modeling and writing performance-oriented queries for both MSSQL and MySQL relational database environments.</>
    ),
    tags: [
      { name: "MSSQL", icon: "mssql" }, 
      { name: "MySQL", icon: "mysql" }, 
    ],
    images: [],
  },

  // 4. FOUNDATIONAL & DESIGN SKILLS
  {
    title: "Foundational Frontend & Design",
    description: (
      <>Mastery of modern HTML/CSS standards to ensure responsive and accessible UI development. Able to translate Figma prototypes into clean code.</>
    ),
    tags: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Figma", icon: "figma" },
    ],
    images: [],
  },
],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};



export { person, social, newsletter, home, about, blog, work };
