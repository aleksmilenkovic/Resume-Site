module.exports = {
  siteTitle: "Hi! I'm Aleksandar!",
  siteDescription: `Online resume`,
  keyWords: ["gatsbyjs", "react", "resume"],
  authorName: "Aleksandar Milenkovic",
  githubUsername: "aleksmilenkovic",
  authorAvatar: "/images/upworkPhoto.jpg",
  authorDescription: ` <br />
    I am an enthusiastic frontend web developer with rich previous experience in marketing and sales.
    Able to grasp new concepts quickly, I process and apply new skills and ideas efficiently. `,
  skills: [
    {
      name: "HTML5 CSS3 JavaScript",
    },
    {
      name: "ES6 Sass React",
    },
    {
      name: "Node.js NPM Git",
    },
    {
      name: "Wordpress MySQL PHP",
    },
  ],
  jobs: [
    {
      company: "Green Owl e-Scooters",
      begin: {
        month: "nov",
        year: "2019",
      },
      duration: "4 month",
      occupation: "Project Manager",
      description:
        "As a project manager, I had the overall responsibility for the successful initiation, planning, design, execution, monitoring, controlling, and closure of an electric scooter sharing platform app. I have worked closely with a team of 3 developers but also with investors, suppliers, and vendors.",
    },
    {
      company: "Support Adventure",
      begin: {
        month: "july",
        year: "2019",
      },
      duration: "2 month",
      occupation: "Web developer",
      description:
        "Frontend development of an online platform for company purposes.",
    },
    {
      company: "Gigatron",
      begin: {
        month: "June",
        year: "2019",
      },
      duration: "1 month",
      occupation: "Frontend Web Developer - INTERN",
      description:
        "As a part of a team, I had an opportunity to develop UX/UI with React-Redux for an e-commerce website.",
    },
    /* ... */
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/aleksandar-milenkovi%C4%87-1st/",
    github: "https://github.com/aleksmilenkovic",
    email: "aleksmilenkov@yahoo.com",
  },
  siteUrl: "localhost:8000",
  pathPrefix: "/resume-site-gatsby",
  siteCover: "/images/cover2.jpg",
  display: "minimal-ui",
  icon: "src/assets/gatsby-icon.png",
  headerLinks: [
    {
      label: "Aleksandar Milenkovic",
      url: "/",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Resume Page (This.page)",
      stack: "Gatsby.js, React",
      source: "https://github.com/aleksmilenkovic/Responsive-Web-Page",
      demo: "https://aleksandar.netlify.app/",
      image: "/images/Project2Img.png",
      text:
        "Personal web development portfolio made with Gatsby as a static website generator, for speed, SEO, and ease of modification as I add new projects and skills.",
    },

    {
      id: 2,
      title: "KNM - Responsive Webpage",
      stack: "HTML, CSS, JavaScript",
      source: "https://github.com/aleksmilenkovic/Responsive-Web-Page",
      demo: "https://aleksmilenkovic.github.io/Responsive-Web-Page/",
      image: "/images/KnmDesk1.png",
      text:
        "Static, fully responsive webpage built with HTML, CSS, and Javascript.",
    },

    {
      id: 3,
      title: "Bemastudio",
      stack: "PHP, MySQL, JavaScript, Wordpress, WP-cli",
      source: "",
      image: "/images/bemaDesc.png",
      text:
        "In progress - update client's old site from Wordpress 3.5.2 to 5.4, customization and redesign.",
    },
  ],
}
