export const content = {
  aboutMe: {
    firstPart:
      "Hi! My name is Giorgi and I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I decided to try Python and make a simple tic tac toe game in the terminal.",
    secondPart:
      "— Turns out, hacking together a simple Python script taught me a lot about programming and definitely changed my life.",
  },

  experience: [
    {
      position:
        "Senior Software Engineer",
      companyTitle: "Epam",
      dateRange: "05/2024 - current",
      description:
        "- Currently working a Senior Software Engineer at EPAM working on DataPortal, building backend services and cloud infrastructure that power large-scale DataLake environments on AWS S3 and Azure Blob Storage. Focused on creating systems that make big data accessible, reliable, and ready for analysis, integrating with SQL databases and tools like Power BI, while collaborating closely with cross-functional teams to deliver scalable, secure, and efficient data solutions. Passionate about designing robust infrastructure that keeps complex data pipelines running smoothly and reliably.",
    },
    {
      position:
        "Senior Backend Engineer",
      // position:
      //   "Senior Backend Engineer (Node/Nest/Postgresql/AWS/Kafka/Elastic)",
      companyTitle: "Syniotec",
      dateRange: "07/2022 - 03/2024",
      description:
        "- Built and maintained backend microservices with Kafka, Elasticsearch, and AWS, creating features like dynamic forms, PDF/Excel generation, and notifications. Collaborated with the mobile team.",
      // description:
      //   "- Created, maintained and updated features of their backend services, company used microservice architecture, utilizing kafka, elasticsearch, kubernetes and AWS service (Like Ec2, S3, RDS, IAM, Cloudwatch, API Gateway, etc). Created multiple feature like dynamic form builder, pdf/excel generation on big data. Created notification service, worked on multiple big data sets that included transportation, equipment, organization and some other services. Collaborated with mobile team as well.",
    },
    {
      position: "Fullstack Developer",
      // position: "Fullstack Developer (Node/Nest/React/Mysql/AWS)",
      companyTitle: "Citycom",
      dateRange: "04/2022 - 06/2022",
      description:
        "- Maintained and updated features of their inside admin web application, also updated messaging system and transaction microservices.",
    },
    {
      position: "Fullstack Developer",
      // position: "Fullstack Developer (Node/React/Laravel/Mysql)",
      companyTitle: "WebApp LLC",
      dateRange: "05/2021 - 01/2022",
      description:
        "- Created CRM-style project from scratch, which is used till this day by company managers, for day to day use, Created multiple admin panel...",
    },
    // {
    //   position: "Fullstack Developer (Node/Nest/React)",
    //   companyTitle: "StrangeElo",
    //   dateRange: "07/2021 - 12/2021",
    //   description:
    //     "- Roles: System architect, partially front-end (react, typescript, nextjs), backend (nodejs, nestjs, typescript), DB architect (postgresql), devops (linux, shell, nginx)",
    // },
    {
      position: "Frontend Developer",
      // position: "Frontend Developer (Vue)",
      companyTitle: "Fertimo",
      dateRange: "01/2020 - 11/2020",
      description:
        "- Making ORM system for wellness business Worked on Frontend Building project’s view and business logic (mainly on analytics)",
    },
  ],

  projects: [
    {
      title: "Beastz Vault",
      description:
        "The secure file storage, go to solution inspired by the user-friendliness of Google Drive, enhanced with robust features like encryption and public file sharing",
      link: "https://vault.beastz.dev",
      githubLink: "https://github.com/beastzdotdev/beastz-vault",
      serverApiLink: "https://github.com/beastzdotdev/beastz-api",
      tags: ["React", "TS", "Blueprint", "Zod", "Formik"],
    },
    {
      title: "Beastz Document",
      description:
        "Minimalist collaborative editing tool with moden document editor inspired by Google Docs",
      link: "https://document.beastz.dev",
      githubLink: "https://github.com/beastzdotdev/beastz-document",
      serverApiLink: "https://github.com/beastzdotdev/beastz-api",
      tags: ["Next", "TS", "Shadcn", "Socket.io"],
    },
    {
      title: "Http Client GUI",
      description:
        "Cool looking insomnia, postman like http client gui desktop application built with passion, can only send and receive JSON and still in progress of perfection, all components are custom and can be found on my github",
      link: null,
      githubLink:
        "https://github.com/GiorgiKumelashviliPersonalProjects/javafx-http-client",
      serverApiLink: null,
      tags: ["Java", "Javafx", "Jdbc", "Sqlite"],
    },
  ],

  skills: [
    {
      title: "Languages",
      data: [
        { name: "JS/TS", type: "default" },
        { name: "HTML/CSS/SASS", type: "default" },
        // { name: "CSS", type: "default" },
        { name: "SQL", type: "default" },
        // { name: "Dart", type: "default" },
        // { name: "Bash", type: "default" },
        { name: "C#", type: "amateur" },
        { name: "Java", type: "amateur" },
        { name: "Python", type: "amateur" },
        { name: "Rust", type: "amateur" },
        // { name: "Elixir", type: "learning" },
      ],
    },
    {
      title: "Frameworks",
      // title: "Frameworks & Runtimes (Front)",
      data: [
        { name: "React/Next", type: "default" },
        { name: "Express/Nest", type: "default" },
        // { name: "Next", type: "default" },
        // { name: "Solid", type: "default" },
        // { name: "Vue", type: "default" },
        // { name: "Flutter", type: "default" },
        // { name: "", type: "default" },
        { name: "Kafka", type: "default" },
        { name: "Elastic", type: "default" },
        { name: "React Native/Expo", type: "amateur" },
        { name: "Docker", type: "amateur" },
      ],
    },
    // {
    //   title: "Frameworks & Runtimes (Server)",
    //   data: [
    //     { name: "Express", type: "default" },
    //     { name: "Nest", type: "default" },
    //     { name: "Kafka", type: "default" },
    //     { name: "Elastic", type: "default" },
    //     { name: "Docker", type: "learning" },
    //   ],
    // },
    {
      title: "Databases",
      data: [
        { name: "Postgresql", type: "default" },
        { name: "Mysql", type: "default" },
        { name: "Mongodb", type: "default" },
        { name: "Redis", type: "default" },
      ],
    },
    {
      title: "Cloud",
      data: [
        { name: "AWS", type: "default" },

      ],
      // title: "Cloud (e.g. aws)",
      // data: [
      //   { name: "EC2", type: "default" },
      //   { name: "Cloudwatch", type: "default" },
      //   { name: "Gateway", type: "default" },
      //   { name: "Lambda", type: "default" },
      //   { name: "S3", type: "default" },
      //   { name: "IAM", type: "default" },
      // ],
    },
    {
      title: "Other",
      data: [
        { name: "Jest", type: "default" },
        { name: "Testcontainer", type: "default" },
        // { name: "k9s", type: "default" },
        { name: "Linux", type: "default" },
        // { name: "Prisma", type: "default" },
        // { name: "Tauri", type: "default" },
        // { name: "Shell", type: "default" },
        { name: "Git", type: "default" },
        { name: "Nginx", type: "amateur" },
      ],
    },
  ],

  misc: "Other than the backend, I have a passion for game development, so I am planning to learn Unity, game development, and physics simulations. My interests also include Flutter Mobile, data structures, and algorithms.",
};
