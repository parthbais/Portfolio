

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 


const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2500 
};

// Summary And Greeting Section

const illustration = {
  animated: true 
};

const greeting = {
  username:"P Bais",
  title: "Hi, I'm Parth ",
  subTitle: emoji(
    "Full-Stack & Cloud enthusiast 🚀 experienced with Java, Python, SQL, React, and AWS. I enjoy building real-world web applications and deploying them using modern cloud and DevOps practices. Actively seeking entry-level Software or Cloud Engineering roles to contribute and grow. 😎"
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1ngBnuaV9gzwij5RqsA-4mP9yDwP3EZ-j?usp=drive_link",
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/parthbais",
  linkedin: "https://linkedin.com/in/parth-b-98b9712ba",
  gmail: "parthbais710@gmail.com",
  instagram: "https://www.instagram.com/parth_biased/", 
  // Instagram is also supported in the links!
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:emoji (" 🔥 Full Stack Developer with Cloud & DevOps exposure"),
  skills: [
    emoji("⚡ Build responsive web applications using React and modern JavaScript"),
    emoji("⚡ Develop backend APIs with Node.js and connect databases using SQL"),
    emoji("⚡ Deploy applications on AWS using Docker, Linux servers, and CI/CD pipelines"),
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

   softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
  }

  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shri Ramdeobaba University, Nagpur",
      logo: require("./assets/images/RBU_logo.jpg"),
      subHeader: "B.Tech in Electronics and Communication Engineering",
      duration: "Nov 2022 - June 2026",
      desc: "Currently pursuing B.Tech with focus on software development, cloud technologies, and data analytics.",
      descBullets: [
        "CGPA: 8/10",
        "Relevant interests: Full Stack Development, Cloud Computing, DevOps",
        "Co Caricullar Activities: Member of TRIDENT Club, Football Team and ROTARACT Club"
      ]
    },
    {
      schoolName: "Mt Litera Zee School, Nagpur",
      logo: require("./assets/images/MLZS_logo.png"),
      subHeader: "HSC in Math",
      duration: "June 2020 - May 2022",
      desc: "Completed Higher Secondary Education with a focus on mathematics and science.",
      descBullets: ["Prepared for JEE and MHT CET entrance exams securing" + "  80% and 82% respectively"]
    }
  ]
};

//  stacks/tech experience

const techStack = {
  viewSkillBars: true, 
 experience: [
  {
    Stack: "Cloud & DevOps (AWS, Docker, CI/CD)",
    progressPercentage: "85%"
    
  },
  {
    Stack: "Full Stack Web Development",
    progressPercentage: "75%"
  },
  {
    Stack: "Programming & Systems (Java, Linux, Git)",
    progressPercentage: "70%"
  }
],
  displayCodersrank: false // badges and ranks in coding show
};


// Work experience section

const workExperiences = {
  display: true,
 experience: [
  {
    role: "GoHype – Apparels ",
    company: "Full Stack Project",
    companylogo: require("./assets/images/Gohype_logo.jpg"),
    date: "2024",
    desc: emoji("Developed a full stack e-commerce web app for concert, apparel, events and more 👚👠 with React frontend and Node.js backend."),
    descBullets: [
      "Developed responsive UI using React components",
      "Implemented backend APIs using Node.js",
      "Connected frontend and backend with REST APIs",
    ],
    footerLink: [
      {
        name: "GitHub",
        url: "https://github.com/parthbais/GoHype_Site.git"
      },

      {
        name: " Live ",
        url: "https://github.com/parthbais/GoHype_Site.git"
      } 
    ]

  },
  
  {
    role: "Locall-E Startup Web Application",
    company: "Startup Project",
    companylogo: require("./assets/images/Locally_logo.jpg"),
    date: "2025",
    desc: "Worked on development and deployment of a startup web application with cloud infrastructure.",
    descBullets: [
      "Developed frontend features using React",
      "Implemented backend APIs with Node.js",
      "Deployed application on AWS EC2",
      "Used Docker for containerized deployment",
    ],
    footerLink:[ 
           {     name: "GitHub",
                url: "https://github.com/parthbais/locally.git"}
  ]
  },

  {
    role: "Equipment Fault Detection ML",
    company: "Machine Learning Project",
    companylogo: require("./assets/images/AImodel.png"),
    date: "2024",
    desc: "Machine learning model to detect faulty equipment using sensor data.",
    descBullets: [
      "Implemented XGBoost classification model",
      "Applied Isolation Forest anomaly detection",
      "Evaluated model using ROC, precision, recall",
      "Visualized results using matplotlib and seaborn"
    ],
    footerLink: [
      {
        name: "Collab",
        url: "https://colab.research.google.com/drive/1XsVP6ZGGe5ix6yt2W9bOXFPkyBDkl0OX?usp=sharing"
      },
    ]

    
  },

  {
    role: "AI Chat Summarizer Extension",
    company: "AI + Browser Extension",
    companylogo: require("./assets/images/AIsum.png"),
    date: "2024",
    desc: "Browser extension that summarizes WhatsApp Web conversations using AI.",
    descBullets: [
      "Extracted chat messages using DOM parsing",
      "Integrated Google Gemini API for summarization",
      "Implemented Chrome Extension Manifest V3",
      "Displayed summarized conversation in browser UI"
    ],
    footerLink: [
      {
        name: "GitHub",
        url: "https://github.com/parthbais/GoHype_Site"
      },
    ]
  }
]
};



const openSource = {
  showGithubProfile: "false", 
  display: false // Set false  section
};


// Some big projects you have worked on
const bigProjects = {
 
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "health",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://google.com/"
        }
        //  you can add extra buttons here.
      ],
    },
  ],
  display: false // Set false to hide this section, defaults to true
};



// Achievement Section
// Include certificates

const achievementSection = {
  title: "Embedded Systems Project & Certifications🔋⚡📝",
  subtitle: "ACHIEVEMENTS, CERTIFICATIONS AND SOME STUFF THAT I HAVE DONE !",

  achievementsCards: [
    {
      title: "Embedded Health Monitoring System",
      subtitle:
        "STM32 based healthcare monitoring system acquiring ECG, SpO₂ and motion data using AD8232, MAX30102 and MPU6050 sensors.",
      image: require("./assets/images/AImodel.png"),
      imageAlt: "Healthcare Project",
      footerLink: [{ name: "Project Details", url: "#" }]
    }
  ],

  certificates: [
    { name: "AWS Cloud Practitioner Essentials", org: "Amazon Web Services", link: "#" },
    { name: "Introduction to DevOps", org: "IBM – Coursera", link: "#" },
    { name: "SQL for Data Science", org: "IBM – Coursera", link: "#" },
    { name: "Power BI Data Visualization", org: "Microsoft / Coursera", link: "#" },
    { name: "Python for Data Analysis", org: "Coursera", link: "#" },
    { name: "Embedded Systems Fundamentals", org: "Udemy", link: "#" }
  ],

  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: !true // Set false to hide this section, defaults to true
};
 



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

  const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
    "Actively seeking opportunities for Fulltime and Internship roles! 🚀",
    number: "+91-7709914297",
    email_address: "parthbais710@gmail.com",

  };
  

// Twitter Section

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
