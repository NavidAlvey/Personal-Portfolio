import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Navid",
  lastName: "Alvey",
  name: `Navid Alvey`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "navidalvey@gmail.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [
    {
      language: "English",
      flag: "🇺🇸",
    },
    {
      language: "Bangla",
      flag: "🇧🇩",
    }
  ], 
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/NavidAlvey",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/navid-alvey/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/navidalvey/",
  },
  {
    name: "Yelp",
    icon: "yelp",
    link: "https://www.yelp.com/user_details_reviews_self?userid=oxPbe4rm1Zd0glvI4gq0LQ",
  },
  {
    name: "Spotify",
    icon: "spotify",
    link: "https://open.spotify.com/user/navidalvey?si=e2c3e0af9c254a30"
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi! Welcome to my personal portfolio</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Alvey, a software engineer crafting custom and intuitive solutions for clients. 
      After hours, I build my own projects and enjoy learning about new advancements in technology
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Dallas, TX, USA`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a software engineer with a passion for transforming comlex challenges intro
        simple, elegant solutions using tools like Java and Python. I've worked with 
        industry leading companies to deliver innovative software that serves millions of users worldwide. 
        <br /><br />
        Beyond code, I'm driven by curiosity and growth; whether that's exploring emerging technologies, 
        discovering new foods, or immersing myself in new cultures through travel. My 
        portfolio captures both my technical journey and the experiences that fuel my creativity and 
        perspective as an engineer.
      </>
    ),
    images: [
      {
        src: "/images/gallery/Us-in-canoe.jpg",
        alt: "Canoeing in Austin, TX",
        width: 9,
        height: 9,
      },
      {
        src: "/images/gallery/Fam-selfie.jpg",
        alt: "Alvey's Family",
        width: 12,
        height: 9,
      },
      {
        src: "/images/gallery/GrandCanyon.jpg",
        alt: "Sightseeing at Grand Canyon, AZ",
        width: 9,
        height: 9,
      },
    ]
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "University of Texas at Dallas",
        timeframe: "January - May 2025",
        workLocation: "Richardson, TX",
        role: "AI/ML Researcher - Human Genome Sequencing",
        logo: "/trademarks/UTD-Logo.svg",
        link: "https://caiml.utdallas.edu/",
        achievements: [
          <>
            Built <strong>scalable data pipelines</strong> in <strong>Python & Linux</strong> to 
            automate processing of <strong>large-scale</strong> genomic datasets for DNA sequencing 
            <strong> error-detection</strong>; reducing runtime by <strong>20%</strong> using
            <strong> parallelization, optimized I/O,</strong> and <strong>memory management</strong>

            {/*
            Developed scalable Python/Linux data pipelines, cutting DNA sequencing error detection runtime by 20% for terabyte-scale datasets. 
            Fine-tuned HuggingFace transformer models, improving model precision by 28% and raising F1 scores from 0.7 → 0.9. 
          */}
          </>,
          <>
           Experimented with <strong>HuggingFace transformer models</strong>; focusing on fine-tuning 
            <strong> hyperparameters</strong> and <strong>embeddings</strong> to capture sequence dependencies;
            improving base model precision by <strong>28%</strong> and <strong>0.7 - 0.9 F1</strong> score benchmarks
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/AppliedAI_ML.png",
            alt: "Center For Applied AI & Machine Learning | University of Texas at Dallas",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/UTDCS.png",
            alt: "UTD CS Logo",
            width: 9,
            height: 9,
          },
          {
            src: "/images/projects/project-01/UTDCSBUILDING.jpg",
            alt: "The Erik Johnson School of Engineering and Computer Science | University of Texas at Dallas",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/technology-ai.jpg",
            alt: "Center for Machine Learning | University of Texas at Dallas",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Charles Schwab",
        timeframe: "June - August 2024",
        workLocation: "Southlake, TX",
        role: "Software Engineering Intern - Wealth Asset Management",
        logo: "/trademarks/Schwab-Logo.svg",
        link: "https://www.schwabjobs.com/internship-academy",
        achievements: [
          <>
            {/*
            Built and optimized REST APIs with Java/Spring Boot, contributing to 12+ completed features across 5 Agile sprints. Reduced API latency by 25%, positively impacting thousands of active wealth management clients daily. 
            Strengthened code quality by implementing comprehensive unit testing and API validation with Postman. 
          */}
            Developed backend <strong>RESTful APIs</strong> with <strong>Java/Spring Boot </strong> 
            integrating <strong>UI features</strong> for web apps within the Schwab Wealth Asset Management domain; 
            closing <strong>12+ Jira tickets</strong> across <strong>5 sprints</strong> averaging
            <strong> 6-8 story points</strong> each sprint
          </>,
          <>
            Optimized <strong>backend</strong> performance using <strong>DevTools</strong> to identify 
            <strong> API bottlenecks</strong> and high-traffic <strong>endpoints</strong>; resolving 
            with solutions like implementing <strong>caching</strong> improvements resulting in 
            <strong> ~25% latency</strong> reduction based on benchmark tests 
          </>,
          <>
            Validated <strong>backend</strong> changes through comprehensive <strong>Java unit tests </strong> 
            for service logic and  <strong>Postman HTTPS RESTful API endpoint testing</strong>, 
            while documenting results in <strong>Jira's Zephyr</strong>, for traceability & compliance 
            with <strong>Agile</strong> development  
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/Schwabbies.jpg",
            alt: "Fellow Schwabbie 'Schwinterns'",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/NavidAlveyTable.jpg",
            alt: "Intro Day",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/MeNSiddy.JPEG",
            alt: "Fellow Schwabbie on Volunteer Day",
            width: 9,
            height: 16,
          },
          {
            src: "/images/projects/project-01/SchwabMerch.jpg",
            alt: "Intern Merch",
            width: 9,
            height: 16,
          },
          {
            src: "/images/projects/project-01/SchwabOffice.jpg",
            alt: "Charles Schwab Office | Southlake, TX",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Toyota Financial Services",
        timeframe: "May - August 2023",
        workLocation: "Plano, TX",
        role: "Software Engineering Intern - Consumer Pricing & Finance Programs",
        logo: "/trademarks/Toyota-Logo.svg",
        link: "https://careers.toyota.com/us/en/students",
        achievements: [
          <>
          {/*
          Developed a deterministic pricing engine in Python, reducing pricing error rates by ~10% and supporting 
          1000s of financial product calculations. 
          Automated ingestion pipelines processing 100+ external JSON payloads per run, streamlining workflows 
          and saving hours of manual work. 
          Optimized SQL queries in PostgreSQL to enhance pipeline performance and reduce report generation time. 
        */}
            Developed a deterministic financial pricing engine, in <strong>Python</strong> using 
            <strong> Pandas & NumPy</strong>, implementing a parameterized algorithm from buyer & market 
            parameters to provide product estimates; reducing pricing error by <strong>~10%</strong> based 
            on the root mean squared error <strong>(RMSE)</strong> & mean absolute percentage error 
            <strong>(MAPE)</strong> calculations compared against prior methods
          </>,
          <>
            Implemented <strong>data ingestion</strong> & <strong>pipelining</strong> to authenticate external 
            <strong>JSON RESTful APIs</strong>; ingesting <strong>100+ JSON payloads</strong> (per run) containing 
            parameters - <strong>normalized & mapped</strong> to feature categories in a <strong>PostgreSQL </strong> 
            database via  <strong>SQLAlchemy</strong> 
          </>,
          <>
            Extracted parameters from database using <strong>SQL queries</strong> - joining & loading
            into pricing pipeline for final product estimate
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/ToyotaInterns.jpg",
            alt: "List of IDS Departments Toyota Interns",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/KaizenInterns.jpg",
            alt: "Interns with Tetsuo Ogawa, CEO of Toyota North America",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/DestinyInterns.JPEG",
            alt: "Interns with Destiny Whitaker",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/Toyota-Main.jpg",
            alt: "Toyota Office | Plano, TX",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  education: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Texas at Dallas",
        description: <>
        <a href="https://catalog.utdallas.edu/2021/undergraduate/programs/ecs/computer-science" target="_blank" rel="noopener noreferrer">Bachelor of Science, Computer Science</a> 
        <br></br>
        <br></br>
        <a href="https://jonsson-framework.utdallas.edu/" target="_blank" rel="noopener noreferrer">Erik Jonsson School of Engineering & Computer Science</a>
        <br></br>
        <a href="https://enroll.utdallas.edu/affordability/freshman-scholarships/academic-excellence-scholarship/" target="_blank" rel="noopener noreferrer">UTD Academic Excellence Scholarship</a></>,
        logo: "/trademarks/UTD-Logo.svg",
        institutionLocation: "Dallas, TX",
        timeframe: "2021 - 2025",
        link: "https://cs.utdallas.edu/",
        images: [
          {
            src: "/images/projects/project-01/Diploma.png",
            alt: "Navid Alvey UTD BS CS Diploma",
            width: 9,
            height: 9,
          },
          {
          src: "/images/projects/project-01/UTDArial.jpg",
          alt: "UTD Campus",
          width: 16,
          height: 9,
          },
          {
            src: "/images/projects/project-01/UTDCSBUILDING.jpg",
            alt: "UTD CS Building",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/UTDECSW.jpg",
            alt: "UTD ECSW Building",
            width: 16,
            height: 9,
          },
        ]
      },
      {
        name: "Relevant Coursework",
        description: <>
        <a href="https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/909/files/2023/07/4YEAR-CS-2021.pdf" target="_blank" rel="noopener noreferrer">DEGREE FLOW CHART</a>
        <br></br>
        <br></br>
        <a href="https://catalog.utdallas.edu/2021/undergraduate/courses/cs4349" target="_blank" rel="noopener noreferrer">• Advanced Data Structures & Algorithms</a> 
        <br></br>
        <a href="https://catalog.utdallas.edu/2021/undergraduate/courses/se4381" target="_blank" rel="noopener noreferrer">• Project Management & Planning</a> 
        <br></br>
        <a href="https://catalog.utdallas.edu/2021/undergraduate/courses/cs4395" target="_blank" rel="noopener noreferrer">• Natural Language Processing</a> 
        <br></br>
        <a href="https://catalog.utdallas.edu/2021/undergraduate/courses/cs3354" target="_blank" rel="noopener noreferrer">• Software Engineering</a>
        <br></br>
        <a href="https://catalog.utdallas.edu/2021/undergraduate/courses/cs4365" target="_blank" rel="noopener noreferrer">• Artifical Intelligence</a>
        <br></br>
        <a href="https://catalog.utdallas.edu/2021/undergraduate/courses/cs4348" target="_blank" rel="noopener noreferrer">• Operating Systems</a> 
        <br></br>
        <a href="https://catalog.utdallas.edu/2021/undergraduate/courses/cs4375" target="_blank" rel="noopener noreferrer">• Machine Learning</a> 
        <br></br>
        <a href="https://catalog.utdallas.edu/2021/undergraduate/courses/cs4336" target="_blank" rel="noopener noreferrer">• Advanced Java</a>
        <br></br>
        <a href="https://catalog.utdallas.edu/2021/undergraduate/courses/cs3377" target="_blank" rel="noopener noreferrer">• Linux/Unix</a>
        </>,
        logo: "",
        institutionLocation: "",
        timeframe: "",
        link: "",
      },
      {
        name: "Organizations",
        description: <>
        <a href="https://www.acmutd.co/" target="_blank" rel="noopener noreferrer">• ACM Projects/Research</a>
        <br></br>
        <a href="https://hackutd.co/" target="_blank" rel="noopener noreferrer">• HackUTD</a>
        <br></br>
        <a href="https://epics.utdallas.edu/" target="_blank" rel="noopener noreferrer">• UTD EPICS</a>
        <br></br>
        <a href="https://www.uxutd.com/" target="_blank" rel="noopener noreferrer">• UI/UX Club</a>
        <br></br>
        <a href="https://www.instagram.com/aajanachledtx/?hl=en" target="_blank" rel="noopener noreferrer">• Aaja Nachle</a>
        <br></br>
        <a href="https://www.instagram.com/depsi_utd/?hl=en" target="_blank" rel="noopener noreferrer">• Delta Epsilon Psi</a>
        </>,
        logo: "",
        institutionLocation: "",
        timeframe: "",
        link: "",
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    // Add in a message about how the following are skills, languages, and technologies I've learned in the classroom and through personal projects
    skills: [
      {
        title: "Languages",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [ // Java, Python, SQL, JavaScript, TypeScript, HTML/CSS
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "SQL",
            icon: "sql",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: (
          <><strong>Java</strong></>
        ),
        tags: [// Java: Spring Boot, Javalin, Maven, Swagger,
          {
            name: "Spring Boot",
            icon: "springboot",
          },
          {
            name: "Maven",
            icon: "maven",
          },
          {
            name: "Javalin",
            icon: "javalin",
          },
          {
            name: "Swagger",
            icon: "swagger",
          },
        ],
        images: [],
      },
      {
        title: "",
        description: (
          <><strong>Python</strong></>
        ),
        tags: [ 
        // Python: NLTK, Beautiful Soup, PyTorch, TensorFlow, Keras, Scikit-learn, Matplotlib, Pandas, SciPy
          {
            name: "NLTK",
            icon: "nltk",
          },
          {
            name: "Beautiful Soup",
            icon: "beautifulsoup",
          },
          {
            name: "PyTorch",
            icon: "pytorch",
          },
          {
            name: "TensorFlow",
            icon: "tensorflow",
          },
          {
            name: "Keras",
            icon: "keras",
          },
          {
            name: "Scikit-learn",
            icon: "scikitlearn",
          },
          {
            name: "Matplotlib",
            icon: "matplotlib",
          },
          {
            name: "Pandas",
            icon: "pandas",
          },
          {
            name: "SciPy",
            icon: "scipy",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      }, 
      {
        title: "",
        description: (
          <><strong>JavaScript</strong></>
        ),
        tags: [// Javascript: TypeScript, React.js, Next.js, Node.js, NPM, Angular
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "React.js",
            icon: "reactjs",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "NPM",
            icon: "npm",
          },
          {
            name: "Angular",
            icon: "angular",
          },
        ],
        images: [],
      },
      {
        title: "",
        description: (
          <><strong>RDBMS</strong></>
        ),
        tags: [// SQL: SQL, SQLite, PostgreSQL
          {
            name: "SQL",
            icon: "sql",
          },
          {
            name: "SQLite",
            icon: "sqlite",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        images: [],
      },
      {
        title: "Additional Developer Tools",
        description: (
          <><strong>Developement Tools & IDE</strong></>
        ),
        tags: [// Tools: VS Code, GitHub, Git, Jira, Agile, Scrum, Confluence, 
                // BitBucket, DevTools, Docker, Kubernetes, Kafka, Postman, cURL, Jupyter Notebook, Anaconda, HuggingFace
          {
            name: "VS Code",
            icon: "vscode",
          },
          {
            name: "DevTools",
            icon: "devtools",
          },
        ],
        images: [],
      },
      {
        title: "",
        description: (
          <><strong>Version Control & Repository Management</strong></>
        ),
        tags: [
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "BitBucket",
            icon: "bitbucket",
          },
        ],
        images: [],
      },
      {
        title: "",
        description: (
          <><strong>Project Management & SDLC</strong></>
        ),
        tags: [
          {
            name: "Jira",
            icon: "jira",
          },
          {
            name: "Agile-Scrum",
            icon: "agilescrum",
          },
          {
            name: "Confluence",
            icon: "confluence",
          },
        ],
        images: [],
      },
      {
        title: "",
        description: (
          <><strong>DevOps & Infrastructure</strong></>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kafka",
            icon: "kafka",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
        ],
        images: [],
      },
      {
        title: "",
        description: (
          <><strong>Microsoft Office Suite</strong></>
        ),
        tags: [
          {
            name: "Word",
            icon: "word",
          },
          {
            name: "Excel",
            icon: "excel",
          },
          {
            name: "PowerPoint",
            icon: "powerpoint",
          },
          {
            name: "Outlook",
            icon: "outlook",
          },
          {
            name: "OneDrive",
            icon: "onedrive",
          },
          {
            name: "Teams",
            icon: "teams",
          },
          {
            name: "Power BI",
            icon: "powerbi",
          },
          {
            name: "SSRS",
            icon: "ssrs",
          },
        ],
        images: [],
      }
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

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/Fam-selfie.jpg",
      alt: "Alvey's Family",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/HatThrow.JPEG",
      alt: "High School Graduation Hat Throw",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/TimeSquare.jpg",
      alt: "Time Square, NY",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/GrandStatue.jpg",
      alt: "Grand Central Terminal Statue, NY",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Alvey-grad.jpg",
      alt: "High School Graduation",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Rolex.jpg",
      alt: "Rolex Building, NY",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ReunionTower.jpg",
      alt: "Reunion Tower, Dallas, TX",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/CanoeView.jpg",
      alt: "Canoeing View in Austin, TX",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Depsi-FA.JPG",
      alt: "Fall Formal",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/JetSki.jpg",
      alt: "JetSkis in Hudson River, NY",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/GrandCanyon.jpg",
      alt: "Sightseeing at the Grand Canyon, AZ",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Utopia.jpg",
      alt: "Utopia Pkway, NY",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Pier17NY.jpg",
      alt: "Pier 17 NY",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Snow-Leo.jpg",
      alt: "Alvey's cat in the snow",
      orientation: "vertical",
    },
    //-------------------------------------------
    {
      src: "/images/gallery/FB-Pic.JPG",
      alt: "2nd Family",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/PepsiCola.jpg",
      alt: "PepsiCola Sign in NY",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/CanoePoint.jpg",
      alt: "Canoeing in Austin, TX",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Nasa.JPG",
      alt: "NASA Family Vaca, Houston, TX",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/StoneFace.jpg",
      alt: "Stone Face, The Colony, TX",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Us-in-canoe.jpg",
      alt: "Alvey and his brother canoeing in Austin, TX",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Hasif-wedding.jpg",
      alt: "Cousin's Wedding in NY",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Skelligs.jpg",
      alt: "Skelligs in Greenville, Dallas, TX",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/GrandClock.jpg",
      alt: "Grand Central Station, NY",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Brothers-TimeSquare.jpg",
      alt: "Alvey and his brother in Time Square, NY",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Leo-floor.jpg",
      alt: "Alvey's cat Leo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Promi-wedding.jpg",
      alt: "Friend's Wedding, McKinney, TX",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Nola.jpg",
      alt: "Nola, LA",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Peeyal-Bday-Dinner.jpg",
      alt: "3 Musketeers",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
