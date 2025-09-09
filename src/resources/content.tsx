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
  languages: ["English", "Bangla"], // optional: Leave the array empty if you don't want to display languages
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
        simple, elegant solutions using tools like Java and Python. I've worked with some
        of the biggest companies in the world, learning and striving to deliver top tier service
        and solutions to clients. 
        <br /><br />
        New experiences for my career, food, and travel are some of life's treasures I love to pursue.
        I've showcased them throughout my portfolio so you'll get a good impression of who I am!
      </>
    ),
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
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
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

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
