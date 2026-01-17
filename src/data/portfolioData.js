import { FaCode, FaServer, FaDatabase, FaTools, FaChartLine } from 'react-icons/fa';

export const portfolioData = {
  personalInfo: {
    name: "GJ Pretorius",
    title: "Full Stack Developer",
    email: "Geejay097@gmail.com",
    phone: "0832516968",
    location: "Bloemfontein, South Africa",
    linkedin: "https://www.linkedin.com/in/gj-pretorius-243957275",
    github: "https://github.com/GJPretorius070",
    bio: "Driven by a passion for crafting seamless user experiences and a penchant for innovative design, I am a skilled Junior Full Stack Developer dedicated to transforming creative visions into functional realities. With a solid foundation in HTML, CSS, PHP and JavaScript, coupled with an eye for detail and a commitment to staying abreast of industry trends, I excel in bringing projects to life with both elegance and efficiency."
  },
  experience: [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Wirulink",
      period: "July 2024 - Current",
      description: "Full-stack web application development mainly using Laravel.",
      achievements: [
        "Architected and developed robust, full-stack web applications using the Laravel (PHP) framework, employing Eloquent ORM.",
        "Designed, built, and maintained secure and efficient RESTful APIs to facilitate seamless data communication between back-end and front-end (JavaScript/Vue.js).",
        "Implemented API authentication and authorization using Laravel Sanctum/Passport.",
        "Developed custom automation scripts (Bash/Python) and Artisan commands to streamline maintenance.",
        "Collaborated within an Agile/Scrum environment, participating in sprint planning and code reviews.",
        "Managed database schemas and migrations using Laravel's migration system.",
        "Integrated and managed front-end components using JavaScript, HTML5, and CSS3."
      ]
    },
    {
      id: 2,
      role: "Web Developer and Digital Marketing",
      company: "Carcass and Cleaver",
      period: "January 2024 - June 2024",
      description: "Web development with WordPress/WooCommerce and digital marketing.",
      achievements: [
        "Acquired practical experience using WordPress and WooCommerce for e-commerce functionalities.",
        "Employed Xampp for local development environment setup.",
        "Utilized Git for version control and project tracking.",
        "Maintained projects and servers for latest updates and bug fixes.",
        "Utilized integrations like Payfast and Google Analytics.",
        "Designed and published Facebook and Instagram ads using Adobe Express and Photoshop.",
        "Used Azure ML to predict consumer trends and optimize post targeting.",
        "utilized Meta's built-in analytics tools for user feedback."
      ]
    }
  ],
  education: [
    {
      id: 1,
      institution: "CTU Training Solutions",
      degree: "Software Development",
      year: "November 2024",
      details: ["C#", "Advanced Java", "Business Programming", "DevOps Engineering", "Software Development", "Microsoft AI-900 / AI-050 Certification"]
    },
    {
      id: 2,
      institution: "CTU Training Solutions",
      degree: "Systems Development",
      year: "November 2023",
      details: ["Python Developer", "HTML/CSS/JS", "Azure DP900", "A+ Skills", "Cyber Ethics", "Robotic Development"]
    },
    {
      id: 3,
      institution: "Grey College",
      degree: "NSC (National Senior Certificate)",
      year: "December 2022",
      details: ["Mathematics", "Accounting", "Computer Application Technology", "Physical Sciences", "English", "Afrikaans"]
    }
  ],
  skills: [
    {
      category: "Backend & Database",
      items: ["C#", "Java", "Python", "PHP", "SQL", "Azure SQL", "Eloquent ORM", "XML", "Database Management"]
    },
    {
      category: "Frontend & Web",
      items: ["HTML5", "CSS3", "JavaScript", "Vue.js", "React", "Laravel Blade", "ASP.NET MVC", "AJAX", "WordPress", "WooCommerce"]
    },
    {
      category: "DevOps & Cloud",
      items: ["Azure (AI-900, DP-900)", "Azure ML", "DevOps Engineering", "Git", "Bash Scripting", "Active Directory", "Solutions Deployment", "Embedded Systems"]
    },
    {
      category: "Professional & Agile",
      items: ["Agile/Scrum", "Project Management", "Analytical Problem-Solving", "Multidisciplinary Teamwork", "Documentation", "Training & Support"]
    },
    {
      category: "Design & Marketing",
      items: ["Adobe Photoshop", "Adobe Express", "Graphic Design", "Digital Marketing", "Google Analytics", "Meta Analytics", "SEO", "E-commerce Control"]
    }
  ]
};
