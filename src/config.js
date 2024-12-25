import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLink, AiOutlineLinkedin} from "react-icons/ai";
import PROFILEPIC from "./assets/profPic.jpeg";
import {
    DiCss3, DiDotnet,
    DiExtjs, DiFirebase,
    DiHtml5,
    DiJavascript1,
    DiMongodb, DiMysql,
    DiNodejsSmall,
    DiReact, DiSqllite,
    DiWebplatform
} from "react-icons/di";
import {
    FaAngular,
    FaFigma,
    FaFlutter,
    FaGithub, FaJava,
    FaJenkins,
    FaJira,
    FaMicrosoft, FaNodeJs, FaPython,
    FaSwift,
    FaVuejs
} from "react-icons/fa6";
import {
    SiApachekafka,
    SiAwslambda,
    SiC,
    SiCplusplus,
    SiDjango,
    SiDocker,
    SiDotnet, SiFirebase,
    SiJenkins,
    SiKotlin,
    SiKubernetes, SiMlflow, SiRedis,
    SiSpring,
    SiSpringboot, SiSqlite
} from "react-icons/si";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";
import Exp1 from "./assets/company/1.png";
import Exp2 from "./assets/company/2.png";
import Exp3 from "./assets/company/3.jpeg";
import Exp4 from "./assets/company/4.png";
import { spring } from "framer-motion";


//background: radial-gradient(circle, rgba(178, 19, 202, 0.2), transparent 70%);

const shinyStyle = {
    background: 'radial-gradient(circle, rgba(178, 19, 202, 0.2), transparent 70%)',
    position: 'absolute',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 1,
}


const ProfileName = 'Isurika Arunodi';
const ProfileTitles = ['Fullstack Developer', 'Software Engineer', 'Tech Enthusiast', 'Web Designer'];
const ProfileEmail = 'isurikaarunodi@gmail.com';
const ProfilePhone = '+9471 123 4567';
const ProfileLocation = 'Colombo, Sri Lanka';
const ProfileBio = 'I am a passionate fullstack developer with over 1+ years of experience.';

const ProfileCV = 'https://dinushan-vimukthi.tiiny.site';
const ProfileSocials = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/isurika-arunodi-7b59881a9/',
        icon: AiOutlineLinkedin,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/ISURIKAARUNODI',
        icon: AiOutlineGithub,
    }
];

const ProfileTechStack = [

    {
        name: 'React',
        icon: DiReact,
        color: '#61dbfb',
    },
    {
        name: 'Spring Boot',
        icon: SiSpringboot,
        color: '#6db33f',
    },
    {
        name: 'ASP.NET',
        icon: SiDotnet,
        color: '#ffffff',
    },

    {
        name: 'Vue.js',
        icon: FaVuejs,
        color: '#41b883',
    }
];

const SkillsIntro = 'I worked on various frontend and fullstack projects. Check them there.';

const UserSkills = [
    {
        category: 'Languagues',
        technologies: [
            {
                name: ' C',
                icon: SiC,
                color: '#dedede',
            },
            {
                name: 'C++',
                icon: SiCplusplus,
                color: '#4fddf0',
            },
            {
                name: 'Java',
                icon: FaJava,
                color: '#e34c26',
            },
            {
                name: 'Python',
                icon: FaPython,
                color: '#f7df1e',
            },
        ],
    },
    {
        category: 'Backend Frameworks',
        technologies: [
            {name: 'Node Js', icon: DiNodejsSmall, color: '#3c873a'},
            {name: 'Spring ', icon: SiSpringboot, color: '#6db33f'},
            {name: 'Spring Webflux ', icon: SiSpring, color: '#6db33f'},
            {name: 'ASP.NET', icon: SiDotnet, color: '#ffffff'}
        ],
    },
    {
        category: 'Frontend Frameworks',
        technologies: [
            {name: 'React', icon: DiReact, color: '#61dbfb'},
            {name: 'Vue.js', icon: FaVuejs, color: '#41b883'}
        ],
    },
    {
        category: 'Database',
        technologies: [
            {name: 'SQL', icon: DiMysql, color: '#13aa52'},
            {name: 'MongoDB', icon: DiMongodb, color: '#13aa52'},

        ],
    },
    {
        category: 'DataOps',
        technologies: [
            {name: 'Kafka', icon: SiApachekafka, color: '#2496ed'},
            {name: 'Mlflow', icon: SiMlflow, color: '#d24939'}
        ],
    }

];

const Projects = [
    {
        img: project1,
        title: "Park Ease",
        description: "Parking Finder Application for Drivers & Earn Money for Landowners.",
        links: {
            site: "#",
            github: "#",
        },
    },
]

const UserExperiences = [
    {
        company: 'Qbitum Solutions',
        period: '2023 - Present',
        description: ' Serving as an Intern Software Engineer, contributing to the design and development of robust full-stack applications.',
        subDescription: 'Specializing in real-time data processing solutions for stock market platforms, leveraging cutting-edge technologies and frameworks to ensure scalability and performance.',
        logo: Exp1,
    },
    {
        company: 'University of Colombo School of Computing',
        period: '2020 - Present',
        description: 'Pursuing a Bachelor of Science (Hons) degree in Computer Science.',
        subDescription: 'Currently in the final year, gaining expertise in areas such as algorithms, software engineering, artificial intelligence, and distributed systems through both coursework and project work.',
        logo: Exp2,
    }
]

const AboutMe = "I’m a passionate software engineer with experience in full-stack development and real-time data solutions. Currently, I’m in the final year of my BSc (Hons) in Computer Science, focusing on cutting-edge technologies and problem-solving.\n" +
    "\n" +
    "I’ve worked as an intern , building web, mobile, and desktop applications that meet diverse client needs. I’m always eager to take on challenges and create innovative solutions."


const ProjectCount = 2;
const ExperienceCount = 1;
const HappyClients = 0;

const Github = 'https://github.com/ISURIKAARUNODI';
const LinkedIn = 'https://www.linkedin.com/in/isurika-arunodi-7b59881a9/';

const Resume = 'https://dinushan-vimukthi.tiiny.site';

export {
    shinyStyle,
    ProfileName,
    ProfileTitles,
    ProfileEmail,
    ProfilePhone,
    ProfileLocation,
    ProfileBio,
    ProfileSocials,
    ProfileCV,
    PROFILEPIC,
    ProfileTechStack,
    UserSkills,
    SkillsIntro,
    Projects,
    UserExperiences,
    AboutMe,
    ProjectCount,
    ExperienceCount,
    HappyClients,
    Github,
    LinkedIn,
    Resume
}