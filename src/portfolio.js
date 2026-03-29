

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
    "https://drive.google.com/drive/folders/1ngBnuaV9gzwij5RqsA-4mP9yDwP3EZ-j?usp=sharing",
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
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },

  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  }, 
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
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
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node-js"
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
    Stack: "Cloud & DevOps (AWS, Linux, Docker, CI/CD)",
    progressPercentage: "85%"
    
  },
  {
    Stack: "Full Stack Web Development",
    progressPercentage: "75%"
  },
  {
    Stack: "Programming & Systems (Java, Python, Linux, Git)",
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
  role: "GoHype – Influencer & Event Management Platform",
  company: "Full Stack Web Application",
  companylogo: require("./assets/images/Gohype_logo.jpg"),
  date: "2024",

  desc: "Full-stack platform built for Hype Unlimited to connect brands with celebrities and influencers while managing events, collaborations and PR campaigns.",

  descBullets: [
    "Developed responsive frontend using React for brand and influencer interaction",
    "Built backend APIs using Node.js for campaign, booking and event management",
    "Integrated SQL database for storing brand, influencer and collaboration data",
    "Implemented full stack architecture connecting frontend, backend and database"
  ],

  footerLink: [
    {
      name: "GitHub",
      url: "https://github.com/parthbais/GoHype_Site"
    },

    {
      name: "Live",
      url: "https://gohypeevents.vercel.app/"
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
                 url: "https://github.com/parthbais/locally.git"
          },

           {     name: "Live",
                 url: "https://roadcoally.vercel.app/"
           },
                // https://roadcoally.vercel.app/
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
        name: "View Project",
        url: "https://colab.research.google.com/drive/1XsVP6ZGGe5ix6yt2W9bOXFPkyBDkl0OX?usp=sharing"
      },
    ]

   
  },

{
  role: "CI/CD Pipeline with Docker & AWS",
  company: "Docker · AWS EC2 · GitHub Actions · Linux",
  companylogo: require("./assets/images/AIsum.png"),
  date: "2025",
  desc: "Automated CI/CD pipeline that builds and deploys a Dockerized portfolio site to AWS EC2 on every GitHub push.",
  descBullets: [
    "Containerized React app using multi-stage Docker build with Nginx",
    "Launched and configured AWS EC2 instance with security groups and IAM",
    "Built GitHub Actions workflow to automatically SSH into EC2 and redeploy on push",
    "Configured Elastic IP for stable server access and Docker for consistent deployments"
  ],
  footerLink: [
    {
      name: "View Live on EC2",
      url: "http://3.7.36.58/"
    },
  ]
}
]


}

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
      footerLink: [{ name: "Project Details", url: "https://drive.google.com/file/d/1b5fqVWPbt4N3jxHoGCs4mIa_-ou_eZLa/view?usp=drive_link" }]

    }
  ],

  certificates: [
    { name: "AWS Cloud Machine Learning", org: "Amazon Academy", link: "https://drive.google.com/file/d/1Zu6HUuhIn9IaXT7BGB4QHPEFcVfAjoHU/view?usp=sharing" }, 
    
    { name: "Introduction to DevOps", org: "IBM – Coursera", link: "https://drive.google.com/file/d/1atvmgMpD1hsdj471F6J5edwhtYA0rJHk/view?usp=sharing" },


    { name: "Python for Data Science, AI & Development ", org: "IBM – Coursera", link: "https://drive.google.com/file/d/17Ejp_3IxVN7Tc-4X1FpCDqLC9K0slcqM/view?usp=sharing" },


    { name: " Introduction to Data Analysis Using Excel", org: "Rice University | Coursera", link: "https://drive.google.com/file/d/1-AfPNjFpi-8zNOKO4V7DJ4J7AGEqgx4M/view?usp=sharing" },


    { name: "NLP Deep Learning with Classification and Vector Spaces", org: "DeepLearning.AI | Coursera", link: "https://drive.google.com/file/d/1uy-Ho-LPkiteWZkMnSo-KMZRchEGAxL2/view?usp=sharing" },


    { name: "NLP with Probabilistic Models DEEP LEARNING Fundamentals", org: "DeepLearning.AI | Coursera", link: "https://drive.google.com/file/d/1Bfen6h7U6uELwwr8euAfYJO1nc0HyQ45/view?usp=sharing" }
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

  display: true // Set false to hide this section, defaults to true
};

  const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
    "Eager to contribute and grow. 📈 Open to Full-time & Internship opportunities. 🚀",
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
