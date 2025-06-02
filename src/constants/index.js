const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Problems", imgPath: "/images/problems.png" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Dreams", imgPath: "/images/dreams.png" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Mockups", imgPath: "/images/mockups.png" },
  { text: "Plans", imgPath: "/images/plans.png" },
  // { text: "Requirements", imgPath: "/images/requirements.png" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/tech.png",
    title: "Full-Stack Expertise",
    desc: "Proficient in both frontend and backend technologies, building seamless, end-to-end solutions with modern frameworks like React, Node.js, and more.",
  },
  {
    imgPath: "/images/time.png",
    title: "Timely Execution",
    desc: "Dedicated to ensuring projects are completed on time without compromising quality, adhering to deadlines while maintaining meticulous attention to detail.",
  },
  {
    imgPath: "/images/secure.png",
    title: "Security-First Approach",
    desc: "Ensuring the security of applications and data with best practices in encryption, authentication, and secure coding techniques.",
  },
  {
    imgPath: "/images/optimization.png",
    title: "Performance Optimization",
    desc: "Expert in optimizing applications for performance, scalability, and efficiency, ensuring a smooth user experience even under heavy loads.",
  },
  {
    imgPath: "/images/agile.png",
    title: "Agile Methodology",
    desc: "Skilled in agile practices, delivering iterative and incremental value through sprints, ensuring flexibility and adaptability to changing requirements.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Effective Communication",
    desc: "Proactively keeping clients informed throughout the development process, ensuring clarity, transparency, and alignment with project goals.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Precision Engineering",
    desc: "Committed to delivering exceptional, high-quality solutions while focusing on every intricate detail for flawless execution.",
  },
  {
    imgPath: "/images/innovation.png",
    title: "Innovative Problem Solving",
    desc: "Bringing creative, forward-thinking solutions to complex challenges, driving continuous improvement and innovation in all aspects of development.",
  },
  {
    imgPath: "/images/collaboration.png",
    title: "Collaborative Team Player",
    desc: "Collaborating effectively with cross-functional teams, leveraging collective expertise to achieve superior results and drive project success.",
  },
];

const techStackImgs = [
  // {
  //   name: "React Developer",
  //   imgPath: "/images/logos/react.png",
  // },

  {
    name: "Next Js Developer",
    imgPath: "/images/logos/nextjs2.png",
  },
  // {
  //   name: "Python Developer",
  //   imgPath: "/images/logos/python.svg",
  // },

  // {
  //   name: "Backend Developer",
  //   imgPath: "/images/logos/node.png",
  // },
  // {
  //   name: "Interactive Developer",
  //   imgPath: "/images/logos/three.png",
  // },
  // {
  //   name: "Project Manager",
  //   imgPath: "/images/logos/git.svg",
  // },
];

const techStackIcons = [
    {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Python Developer",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },

  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Challelign brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/abayBank.png",
    logoPath: "/images/abay-logo.png",
    title: "Full Stack Developer",
    date: "March 2023 - Present",
    responsibilities: [
      "Biller Pyament Integration Like M-PESA Ethiopia.",
     "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
      "Payment Integration for third-party API integrations",
    ],
  },
  {
    review:
      "Challelign’s contributions to web applications at Ameco have been outstanding. He consistently approaches challenges with a proactive, problem-solving mindset",
    imgPath: "/images/ameco.jpg",
    logoPath: "/images/ameco-logo.png",
    title: "Software Developer",
    date: "November 10, 2020 - March 2023",
    responsibilities: [
      "Led Plan and Field Allowance Management System .",
      "Developing a comprehensive web application to manage employee plans, transportation, field allowances, car receipts, and financial transactions.",
      "Aims to centralize and streamline internal operations with user role management and secure data handling.",
      "Designed and implemented a system for managing online streaming schedules for TV, FM, and Radio programs.",
      "Significantly reduced paper usage by 50%, time wastage by 70%, and improved centralized data organization and maintainability by 80%.",
      "Built a task-tracking platform for the video editing team to log daily activities such as editing news, programs, transitions, etc.",
      "Enabled managers to approve and monitor daily work and generate detailed reports by user, date, or period (monthly, yearly).",
 
    ],
  },
  {
    review:
      "As a self-employed developer, I design, build, and deliver end-to-end software solutions tailored to client needs. I collaborate directly with small businesses, startups, and organizations to understand their requirements, propose technical solutions, and implement scalable systems that drive digital transformation.",
    imgPath: "/images/app-development.png",
    logoPath: "/images/code.png",
    title: "Self Employed and Freelancer",
    date: "September 2018 - May 2020",
    responsibilities: [
      "Developed dynamic web applications using the MERN (MongoDB, Express, React, Node.js) stack tailored to client needs and business goals.",
      "Improved app performance and user experience through code optimization and testing.",
      "Specialized in building RESTful APIs and integrating third-party APIs for payment gateways, messaging services, and data providers",
      "Focused on scalable backend architecture, clean front-end UI/UX, and secure API design",
      "Designed and delivered customer-centric web applications with responsive design, real-time updates, and optimized performance.",
      "Plasma Network Setup: Designed and installed educational plasma display network infrastructure for 6 Woredas (districts) across schools in the Amhara region, spanning a 6-month deployment",
      "Hotel WiFi Configuration: Installed and configured Wi-Fi networks for hospitality clients, ensuring optimal signal coverage, secure access, and seamless guest connectivity."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Abebe Gietaneh",
    mentions: "@Peerage Technologies Plc",
    review:
      "I can’t speak highly enough of Challelign. He transformed our complex project requirements into a seamless, fully functional website with exceptional skill and precision. His problem-solving abilities are truly outstanding.",
    imgPath: "/images/client1.png",
  },

  {
    name: "Ermiyas Fentaye",
    mentions: "@boostsoftwaredevelopment",
    review:
      "Collaborating with Challelign was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Challelign's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Challelign is the ideal partner.",
    imgPath: "/images/defaul-client.png",
  },
  
  {
    name: "Zeru Denekew (Executive Director) ",
    mentions: "@agradoethiopia",
    review:
      "Challelign was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client3.png",
  },
  //   {
  //   name: "Wade Warren",
  //   mentions: "@wadewarren",
  //   review:
  //     "Working with Challelign was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  //   imgPath: "/images/client3.png",
  // },
  // {
  //   name: "Marvin McKinney",
  //   mentions: "@marvinmckinney",
  //   review:
  //     "Challelign was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
  //   imgPath: "/images/client5.png",
  // },
  // {
  //   name: "Floyd Miles",
  //   mentions: "@floydmiles",
  //   review:
  //     "Challelign’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
  //   imgPath: "/images/client4.png",
  // },
  // {
  //   name: "Albert Flores",
  //   mentions: "@albertflores",
  //   review:
  //     "Challelign was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
  //   imgPath: "/images/client6.png",
  // },
];

const socialImgs = [
  // {
  //   name: "insta",
  //  urlLing: "",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  // urlLing: "",
  //   imgPath: "/images/fb.png",
  // },
  {
    name: "tg",
    urlLing: "https://t.me/code_rookie23",
    imgPath: "/images/telegram-1.png",
  },
  {
    urlLing: "https://www.linkedin.com/in/challelign-tilahun-95190611a/",
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    urlLing: "https://www.linkedin.com/in/challelign-tilahun-95190611a/",
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
  {
    urlLing: "https://github.com/challelign",
    name: "github",
    imgPath: "/images/git.png",
  },
];

const eventsShowcase = [
  { imgPath: "/images/event/home.png", alt: "Home" },
  { imgPath: "/images/event/events.png", alt: "Events" },
  { imgPath: "/images/event/event-detail.png", alt: "Event Detail" },
  { imgPath: "/images/event/payment.jpg", alt: "Payment" },
  { imgPath: "/images/event/my-ticket.png", alt: "My Ticket" },
  { imgPath: "/images/event/order-list.png", alt: "Order List" },
  // { imgPath: "/images/event/mob1.png", alt: "mobile home" },
  // { imgPath: "/images/event/mob2.png", alt: "mobile e detail" },
  // { imgPath: "/images/event/mob3.png", alt: "Order List" },
];
const lmsShowcase = [
  { imgPath: "/images/lms/home.png", alt: "Home" },
  // { imgPath: "/images/lms/home2.png", alt: "home" },
  { imgPath: "/images/lms/home3.png", alt: "home" },
  { imgPath: "/images/lms/home4.png", alt: "home filter" },
  // { imgPath: "/images/lms/home5.png", alt: "home filter" },
  { imgPath: "/images/lms/home6.png", alt: "course" },
  { imgPath: "/images/lms/homep.png", alt: "course" },
  { imgPath: "/images/lms/coursestart.png", alt: "course" },
  { imgPath: "/images/lms/courseratting.png", alt: "course" },
  { imgPath: "/images/lms/coursehome.png", alt: "course" },
  { imgPath: "/images/lms/coursed.png", alt: "course" },
  { imgPath: "/images/lms/coursecreation.png", alt: "coursecreation" },
  { imgPath: "/images/lms/coursanalysis.png", alt: "coursanalysis" },
];

const chatShowcase = [
  { imgPath: "/images/chat/1.png", alt: "chat app" },
  { imgPath: "/images/chat/2.png", alt: "chat app" },
  { imgPath: "/images/chat/3.png", alt: "chat app" },
  { imgPath: "/images/chat/4.png", alt: "chat app" },
  { imgPath: "/images/chat/5.png", alt: "chat app" },
  { imgPath: "/images/chat/6.png", alt: "chat app" },
];

const youtubeShowcase = [
  { imgPath: "/images/ytube/home.png", alt: "youtube RAPID API app" },
  { imgPath: "/images/ytube/next.png", alt: "youtube RAPID API app" },
  { imgPath: "/images/ytube/nextd.png", alt: "youtube RAPID API app" },
  { imgPath: "/images/ytube/s.png", alt: "youtube RAPID API app" },
  { imgPath: "/images/ytube/sdetail.png", alt: "youtube RAPID API app" },
];
const nikeShowcase = [
  { imgPath: "/images/nike/home.png", alt: "Nike Landing page" },
  { imgPath: "/images/nike/popular.png", alt: "Nike Landing page" },
  { imgPath: "/images/nike/quality.png", alt: "Nike Landing page" },
];


const ecommercehowcase = [
  { imgPath: "/images/ecommerce/1.PNG", alt: "Ecommerce MERN Stack app" },
  { imgPath: "/images/ecommerce/2.PNG", alt: "Ecommerce MERN Stack app" },
  { imgPath: "/images/ecommerce/3.PNG", alt: "Ecommerce MERN Stack app" },
  { imgPath: "/images/ecommerce/4.PNG", alt: "Ecommerce MERN Stack app" },
  { imgPath: "/images/ecommerce/5.PNG", alt: "Ecommerce MERN Stack app" },
  { imgPath: "/images/ecommerce/6.PNG", alt: "Ecommerce MERN Stack app" },
  { imgPath: "/images/ecommerce/7.PNG", alt: "Ecommerce MERN Stack app" },
  { imgPath: "/images/ecommerce/8.PNG", alt: "Ecommerce MERN Stack app" },
  { imgPath: "/images/ecommerce/9.PNG", alt: "Ecommerce MERN Stack app" },
  { imgPath: "/images/ecommerce/10.PNG", alt: "Ecommerce MERN Stack app" },
  { imgPath: "/images/ecommerce/11.PNG", alt: "Ecommerce MERN Stack app" },
  { imgPath: "/images/ecommerce/12.PNG", alt: "Ecommerce MERN Stack app" },
];
export {
  nikeShowcase,
  youtubeShowcase,
  chatShowcase,
  lmsShowcase,
  eventsShowcase,
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  ecommercehowcase
};
