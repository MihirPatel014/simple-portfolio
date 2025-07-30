import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Mihir Patel",
  title: "React Developer & Team Lead",
  intro: "",
  contactEmail: "thisismihirpatel@gmail.com",
  experience: [
    {
      years: "",
      role: "React Developer & Team Lead",
      company: "Palsoft India",
      description: "Led a team of 3-5 developers to design, develop, and deploy responsive web and mobile applications using React.js, Redux, and Bootstrap, delivering scalable and user-friendly interfaces within strict deadlines. Built 30+ reusable and dynamic components, integrated RESTful APIs for key features such as user authentication, real-time data syncing, and notifications, and ensured seamless application functionality across platforms. Improved application performance by 25% by optimizing React components, implementing lazy loading, and refining state management techniques for better efficiency.",
      stack: ["React.js", "Redux", "Bootstrap"]
    },
    {
      years: "",
      role: "Software Developer",
      company: "ASP.NET MVC",
      description: "Designed and implemented robust, data-driven web applications using ASP.NET MVC, SQL Server, and RESTful APIs, streamlining operations such as order tracking, customer management, and payment processing for clients. Enhanced system performance by 30% through the optimization of database queries, implementation of caching strategies, and development of role-based access control features to ensure secure operations. Integrated multiple third-party APIs, including payment gateways and email services, to extend application functionality and improve overall user experience, delivering high-impact solutions to business challenges.",
      stack: ["ASP.NET MVC", "SQL Server", "RESTful APIs"]
    },
    {
      years: "",
      role: "API Developer",
      company: "Raytech",
      description: "Managed and developed backend APIs for mobile applications, ensuring seamless integration with frontend systems and maintaining high performance. Wrote and optimized over 25 APIs, including functionalities such as user authentication, data synchronization, and push notifications, enabling enhanced app usability. Collaborated closely with the mobile app development team to design scalable API architectures, reducing app load times and improving data consistency.",
      stack: ["APIs"]
    }
  ],
  projects: [
    {
      name: "Quiz App",
      description: "Developed a scalable Quiz Application featuring modules like DailyQuiz, Exam, and Contest, ensuring flexibility for diverse user needs and seamless model management. Integrated Hangfire to automate background tasks, such as result processing and performance analytics, and used Swagger for API documentation and testing to streamline development workflows. Designed a responsive, user-friendly interface with Bootstrap, enhancing usability and accessibility across devices.",
      stack: ["ASP.NET MVC", "Javascript", "Jquery", "HTML/CSS", "MY SQL"],
      link: "#"
    },
    {
      name: "Invoice4All",
      description: "Developed the Invoice4All client project, allowing users to scan, upload, and manage invoices efficiently while maintaining a complete, searchable record. Built an Accountant Panel to help accountants organize and tally customer invoices in one place, with features for sorting, filtering, and tracking invoice statuses. Designed a responsive and intuitive user interface with React and Tailwind, ensuring seamless navigation and an optimized user experience across devices.",
      stack: ["React", "Redux", "Tailwind", "MYSQL"],
      link: "#"
    }
  ],

  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/varadbhogayata'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/varadbhogayata'
    },
    {
      name: 'Email',
      url: 'mailto:thisismihirpatel@gmail.com'
    },
    {
      name: 'Resume',
      url: '#'
    }
  ],
  articles: []
};
