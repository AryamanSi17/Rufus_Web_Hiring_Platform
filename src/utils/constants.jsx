import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';
import BusinessIcon from '@mui/icons-material/Business';
import BugReportIcon from '@mui/icons-material/BugReport';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import CloudIcon from '@mui/icons-material/Cloud';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import EditIcon from '@mui/icons-material/Edit';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';
import person5 from '../assets/person5.jpg';
import person6 from '../assets/person6.jpg';
import person7 from '../assets/person7.jpg';
import person8 from '../assets/person8.jpg';
import person9 from '../assets/person9.jpg';
import person10 from '../assets/person10.jpg';
import person11 from '../assets/person11.jpg';
const defaultApplicationDate = new Date().toISOString().split('T')[0]; // e.g., "2024-01-01"
const defaultInterviewDate = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0]; // 7 days later
const randomDate = () => {
  const start = new Date(2023, 0, 1); // Start date
  const end = new Date(); // Current date
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0]; // Ensure format is YYYY-MM-DD
};

const randomResumeLink = (name) => `https://drive.google.com/file/d/1KDuHds6fLuEDminT6wPa3p1RXZWSWdob/preview`;



const randomStatus = () => (Math.random() > 0.5 ? 'active' : 'inactive');

export const jobPostings = [
  {
    id: 1,
    title: 'Web Developer',
    description: 'Responsible for building and maintaining web applications.',
    candidates: [
      { name: 'Alice', resumeLink: randomResumeLink('Alice'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Bob', resumeLink: randomResumeLink('Bob'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <CodeIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Develop, test, and maintain web applications.',
      'Optimize applications for maximum speed and scalability.',
      'Collaborate with designers and product managers.'
    ],
    keySkills: ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js'],
    salaryRange: '500,000 - 700,000',
    jobType: 'Full-Time',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    description: 'Designs user interfaces with a focus on user experience.',
    candidates: [
      { name: 'Eve', resumeLink: randomResumeLink('Eve'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Frank', resumeLink: randomResumeLink('Frank'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <BrushIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs.',
      'Conduct user research and usability testing.',
      'Collaborate with developers to implement designs.'
    ],
    keySkills: ['Adobe XD', 'Figma', 'Photoshop', 'User Research', 'Prototyping'],
    salaryRange: '400,000 - 600,000',
    jobType: 'Full-Time',
  },
  {
    id: 3,
    title: 'Data Analyst',
    description: 'Analyzes data for business decisions.',
    candidates: [
      { name: 'Ivan', resumeLink: randomResumeLink('Ivan'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Jack', resumeLink: randomResumeLink('Jack'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <StorageIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Analyze data trends and insights for business improvements.',
      'Prepare data reports and visualizations.',
      'Work closely with departments to provide data insights.'
    ],
    keySkills: ['SQL', 'Data Visualization', 'Python', 'Power BI', 'Statistics'],
    salaryRange: '450,000 - 650,000',
    jobType: 'Full-Time',
  },
  {
    id: 4,
    title: 'Business Analyst',
    description: 'Improves efficiency through analysis.',
    candidates: [
      { name: 'Mark', resumeLink: randomResumeLink('Mark'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Nancy', resumeLink: randomResumeLink('Nancy'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <BusinessIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Identify business process improvements.',
      'Work with stakeholders to understand requirements.',
      'Document processes and solutions.'
    ],
    keySkills: ['Requirements Gathering', 'Documentation', 'Process Mapping', 'Excel', 'Communication'],
    salaryRange: '550,000 - 750,000',
    jobType: 'Full-Time',
  },
  {
    id: 5,
    title: 'QA Engineer',
    description: 'Ensures software quality through testing.',
    candidates: [
      { name: 'Quincy', resumeLink: randomResumeLink('Quincy'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Rachel', resumeLink: randomResumeLink('Rachel'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <BugReportIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Develop and execute test plans.',
      'Identify and document bugs.',
      'Collaborate with developers to resolve issues.'
    ],
    keySkills: ['Test Planning', 'Automation', 'Selenium', 'Bug Tracking', 'Manual Testing'],
    salaryRange: '400,000 - 600,000',
    jobType: 'Full-Time',
  },
  {
    id: 6,
    title: 'Cybersecurity Specialist',
    description: 'Protects systems and networks.',
    candidates: [
      { name: 'Victor', resumeLink: randomResumeLink('Victor'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Wendy', resumeLink: randomResumeLink('Wendy'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <SecurityIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Monitor and secure networks from cyber threats.',
      'Implement security protocols and solutions.',
      'Conduct regular security audits.'
    ],
    keySkills: ['Network Security', 'Risk Assessment', 'Firewall Management', 'Penetration Testing', 'Incident Response'],
    salaryRange: '600,000 - 800,000',
    jobType: 'Full-Time',
  },
  {
    id: 7,
    title: 'DevOps Engineer',
    description: 'Manages deployment pipelines.',
    candidates: [
      { name: 'Frank', resumeLink: randomResumeLink('Frank'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'George', resumeLink: randomResumeLink('George'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <BuildIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Automate deployment pipelines and monitor infrastructure.',
      'Collaborate with development and IT teams.',
      'Optimize CI/CD processes.'
    ],
    keySkills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Ansible'],
    salaryRange: '700,000 - 900,000',
    jobType: 'Full-Time',
  },
  {
    id: 8,
    title: 'Product Manager',
    description: 'Oversees product lifecycle.',
    candidates: [
      { name: 'Paul', resumeLink: randomResumeLink('Paul'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Quincy', resumeLink: randomResumeLink('Quincy'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <PeopleIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Define product strategy and roadmap.',
      'Work closely with stakeholders to gather requirements.',
      'Manage the product lifecycle from concept to launch.'
    ],
    keySkills: ['Product Management', 'Agile Methodology', 'Market Research', 'Communication', 'Project Management'],
    salaryRange: '600,000 - 800,000',
    jobType: 'Full-Time',
  },
  {
    id: 9,
    title: 'Cloud Engineer',
    description: 'Manages cloud infrastructure.',
    candidates: [
      { name: 'Zane', resumeLink: randomResumeLink('Zane'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Amy', resumeLink: randomResumeLink('Amy'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <CloudIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Deploy and manage cloud infrastructure.',
      'Optimize cloud-based applications for performance and cost.',
      'Implement cloud security best practices.'
    ],
    keySkills: ['AWS', 'Azure', 'Google Cloud', 'Infrastructure Management', 'Security Compliance'],
    salaryRange: '650,000 - 850,000',
    jobType: 'Full-Time',
  },
  {
    id: 10,
    title: 'Data Scientist',
    description: 'Develops data models for insights.',
    candidates: [
      { name: 'Jasper', resumeLink: randomResumeLink('Jasper'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Kara', resumeLink: randomResumeLink('Kara'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <InsertChartIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Analyze large datasets to generate insights.',
      'Develop predictive models to support decision-making.',
      'Collaborate with cross-functional teams for data-driven strategies.'
    ],
    keySkills: ['Machine Learning', 'Python', 'Statistics', 'Data Modeling', 'Big Data'],
    salaryRange: '700,000 - 1,000,000',
    jobType: 'Full-Time',
  },{
    id: 11,
    title: 'Machine Learning Engineer',
    description: 'Builds and optimizes machine learning models for various applications.',
    candidates: [
      { name: 'Sam', resumeLink: randomResumeLink('Sam'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Tina', resumeLink: randomResumeLink('Tina'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <BarChartIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Design and train machine learning models.',
      'Optimize models for production environments.',
      'Collaborate with data scientists and software engineers.'
    ],
    keySkills: ['TensorFlow', 'Python', 'Data Preprocessing', 'Model Optimization', 'Statistics'],
    salaryRange: '800,000 - 1,200,000',
    jobType: 'Full-Time',
  },
  {
    id: 12,
    title: 'Content Writer',
    description: 'Creates engaging written content for digital platforms.',
    candidates: [
      { name: 'Uma', resumeLink: randomResumeLink('Uma'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Vince', resumeLink: randomResumeLink('Vince'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <EditIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Write articles, blog posts, and social media content.',
      'Collaborate with marketing teams to align with brand voice.',
      'Conduct research to ensure factual accuracy and relevance.'
    ],
    keySkills: ['SEO', 'Content Writing', 'Editing', 'Research', 'Grammar'],
    salaryRange: '300,000 - 500,000',
    jobType: 'Full-Time',
  },
  {
    id: 13,
    title: 'Digital Marketing Specialist',
    description: 'Executes digital marketing strategies to increase brand visibility.',
    candidates: [
      { name: 'Will', resumeLink: randomResumeLink('Will'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Xena', resumeLink: randomResumeLink('Xena'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <TrendingUpIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Manage and execute digital campaigns across channels.',
      'Analyze performance metrics and optimize strategies.',
      'Collaborate with content and creative teams.'
    ],
    keySkills: ['SEO', 'Google Analytics', 'Social Media', 'Content Marketing', 'PPC'],
    salaryRange: '500,000 - 700,000',
    jobType: 'Full-Time',
  },
  {
    id: 14,
    title: 'Network Administrator',
    description: 'Manages and maintains network infrastructure.',
    candidates: [
      { name: 'Yara', resumeLink: randomResumeLink('Yara'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Zane', resumeLink: randomResumeLink('Zane'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <NetworkWifiIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Configure and maintain network equipment.',
      'Monitor network performance and security.',
      'Troubleshoot network issues and manage upgrades.'
    ],
    keySkills: ['Network Configuration', 'Firewall Management', 'Troubleshooting', 'VPN', 'Cisco'],
    salaryRange: '450,000 - 650,000',
    jobType: 'Full-Time',
  },
  {
    id: 15,
    title: 'Mobile App Developer',
    description: 'Designs and develops mobile applications.',
    candidates: [
      { name: 'Anna', resumeLink: randomResumeLink('Anna'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Brian', resumeLink: randomResumeLink('Brian'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <SmartphoneIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Develop mobile applications for Android and iOS.',
      'Optimize apps for performance and user experience.',
      'Collaborate with designers and backend developers.'
    ],
    keySkills: ['Swift', 'Kotlin', 'Java', 'React Native', 'UI/UX'],
    salaryRange: '550,000 - 750,000',
    jobType: 'Full-Time',
  },
  {
    id: 16,
    title: 'Sales Manager',
    description: 'Leads and manages the sales team to drive revenue.',
    candidates: [
      { name: 'Carl', resumeLink: randomResumeLink('Carl'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Dana', resumeLink: randomResumeLink('Dana'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <BusinessCenterIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Lead sales team to achieve targets.',
      'Develop sales strategies and track performance.',
      'Build and maintain client relationships.'
    ],
    keySkills: ['Sales Strategy', 'CRM', 'Leadership', 'Negotiation', 'Customer Relationship'],
    salaryRange: '600,000 - 800,000',
    jobType: 'Full-Time',
  },
  {
    id: 17,
    title: 'Financial Analyst',
    description: 'Analyzes financial data to support business decisions.',
    candidates: [
      { name: 'Edward', resumeLink: randomResumeLink('Edward'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Fiona', resumeLink: randomResumeLink('Fiona'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <AttachMoneyIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Analyze financial data and forecasts.',
      'Prepare financial reports and recommendations.',
      'Support budget planning and risk management.'
    ],
    keySkills: ['Financial Modeling', 'Excel', 'Data Analysis', 'Risk Assessment', 'Budgeting'],
    salaryRange: '500,000 - 700,000',
    jobType: 'Full-Time',
  },
  {
    id: 18,
    title: 'HR Generalist',
    description: 'Manages HR processes and employee relations.',
    candidates: [
      { name: 'Gina', resumeLink: randomResumeLink('Gina'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Hank', resumeLink: randomResumeLink('Hank'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <PeopleOutlineIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Manage recruitment, onboarding, and employee relations.',
      'Ensure compliance with HR policies.',
      'Support performance and benefits management.'
    ],
    keySkills: ['Recruitment', 'Employee Relations', 'Compliance', 'Payroll', 'Performance Management'],
    salaryRange: '450,000 - 650,000',
    jobType: 'Full-Time',
  },
  {
    id: 19,
    title: 'Backend Developer',
    description: 'Develops server-side logic for web applications.',
    candidates: [
      { name: 'Isla', resumeLink: randomResumeLink('Isla'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Jake', resumeLink: randomResumeLink('Jake'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <StorageIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Develop server-side logic and database interactions.',
      'Integrate backend with frontend requirements.',
      'Optimize applications for speed and efficiency.'
    ],
    keySkills: ['Node.js', 'Express', 'SQL', 'REST APIs', 'Database Management'],
    salaryRange: '550,000 - 750,000',
    jobType: 'Full-Time',
  },
  {
    id: 20,
    title: 'Customer Support Specialist',
    description: 'Provides support to customers and resolves their issues.',
    candidates: [
      { name: 'Laura', resumeLink: randomResumeLink('Laura'), applicationDate: randomDate(), interviewDate: randomDate() },
      { name: 'Manny', resumeLink: randomResumeLink('Manny'), applicationDate: randomDate(), interviewDate: randomDate() },
    ],
    icon: <SupportAgentIcon />,
    postedDate: randomDate(),
    candidateCount: Math.floor(Math.random() * 10) + 5,
    status: randomStatus(),
    responsibilities: [
      'Handle customer inquiries and support requests.',
      'Maintain product knowledge and assist troubleshooting.',
      'Log interactions and feedback for improvement.'
    ],
    keySkills: ['Customer Service', 'Troubleshooting', 'Product Knowledge', 'CRM Systems', 'Communication'],
    salaryRange: '300,000 - 450,000',
    jobType: 'Full-Time',
  }
];


export const candidates = [
  {
    name: 'Alice Johnson',
    profilePhoto: person1,
    contact: 'alice.johnson@example.com',
    skills: ['JavaScript', 'React', 'Node.js'],
    experience: '2 years as a Full-Stack Developer at XYZ Corp.',
    resumeLink: randomResumeLink('Alice Johnson'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Bob Marley',
    profilePhoto: person2,
    contact: 'bob.marley@example.com',
    skills: ['Python', 'Data Analysis', 'Machine Learning'],
    experience: '3 years as a Data Analyst at ABC Inc.',
    resumeLink: randomResumeLink('Bob Marley'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Priya Sharma',
    profilePhoto: person3,
    contact: 'priya.sharma@example.com',
    skills: ['Java', 'Spring Boot', 'SQL'],
    experience: '4 years as a Backend Developer at TCS',
    resumeLink: randomResumeLink('Priya Sharma'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Rajesh Gupta',
    profilePhoto: person4,
    contact: 'rajesh.gupta@example.com',
    skills: ['JavaScript', 'React', 'CSS'],
    experience: '2.5 years as a Front-End Developer at Infosys',
    resumeLink: randomResumeLink('Rajesh Gupta'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Maria Garcia',
    profilePhoto: person5,
    contact: 'maria.garcia@example.com',
    skills: ['Ruby', 'Rails', 'Git'],
    experience: '5 years as a Full-Stack Developer at Tech Innovations',
    resumeLink: randomResumeLink('Maria Garcia'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Anand Verma',
    profilePhoto: person6,
    contact: 'anand.verma@example.com',
    skills: ['Python', 'Data Science', 'Machine Learning'],
    experience: '3 years as a Data Scientist at Wipro',
    resumeLink: randomResumeLink('Anand Verma'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'John Doe',
    profilePhoto: person7,
    contact: 'john.doe@example.com',
    skills: ['C++', 'System Programming', 'Embedded Systems'],
    experience: '6 years as an Embedded Systems Engineer at Global Tech',
    resumeLink: randomResumeLink('John Doe'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Neha Patel',
    profilePhoto: person8,
    contact: 'neha.patel@example.com',
    skills: ['JavaScript', 'Angular', 'Node.js'],
    experience: '1 year as a Junior Developer at Accenture',
    resumeLink: randomResumeLink('Neha Patel'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Suresh Reddy',
    profilePhoto: person9,
    contact: 'suresh.reddy@example.com',
    skills: ['SQL', 'Database Management', 'Data Warehousing'],
    experience: '4 years as a Database Administrator at HCL Technologies',
    resumeLink: randomResumeLink('Suresh Reddy'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Sophia Williams',
    profilePhoto: person10,
    contact: 'sophia.williams@example.com',
    skills: ['Swift', 'iOS Development', 'UI/UX Design'],
    experience: '2 years as an iOS Developer at Apple',
    resumeLink: randomResumeLink('Sophia Williams'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Arjun Singh',
    profilePhoto: person11,
    contact: 'arjun.singh@example.com',
    skills: ['Java', 'Spring Boot', 'Microservices'],
    experience: '3 years as a Java Developer at Tech Mahindra',
    resumeLink: randomResumeLink('Arjun Singh'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Emily Brown',
    profilePhoto: person6,
    contact: 'emily.brown@example.com',
    skills: ['Ruby on Rails', 'React', 'PostgreSQL'],
    experience: '4 years as a Full-Stack Developer at Cloud Solutions',
    resumeLink: randomResumeLink('Emily Brown'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Amit Kumar',
    profilePhoto: person2,
    contact: 'amit.kumar@example.com',
    skills: ['PHP', 'Laravel', 'MySQL'],
    experience: '5 years as a Backend Developer at Mindtree',
    resumeLink: randomResumeLink('Amit Kumar'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  },
  {
    name: 'Samantha Lee',
    profilePhoto: person10,
    contact: 'samantha.lee@example.com',
    skills: ['JavaScript', 'Vue.js', 'UI/UX Design'],
    experience: '2 years as a Front-End Developer at Dev Solutions',
    resumeLink: randomResumeLink('Samantha Lee'),
    applicationDate: defaultApplicationDate,
    interviewDate: defaultInterviewDate,
  }
];
