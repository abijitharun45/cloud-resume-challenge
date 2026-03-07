import { Project, SkillCategory, Experience, Certification, Achievement, SocialLink } from '@/types'

export const personalInfo = {
  name: 'Abijith Arun',
  title: 'Cloud & Systems Enthusiast',
  subtitle: 'Cloud Infrastructure & Systems Engineer',
  bio: "Final-year Computer Science Engineering student with hands-on experience in AWS cloud infrastructure, AI-based security systems, and automation. I have successfully architected serverless applications on AWS and developed machine learning models for network threat detection. Certified in AWS Cloud Practitioner and CompTIA Security+, I am eager to apply my practical engineering skills to solve complex challenges in a professional production environment.",
  email: 'abijitharun45@gmail.com',
  location: 'Kerala, India',
  college: 'Sahrdaya College of Engineering and Technology',
  university: 'APJ Abdul Kalam Technological University',
  graduation: 'April 2026',
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/abijitharun45',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/abijith-arun',
    icon: 'Linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:abijitharun45@gmail.com',
    icon: 'Mail',
  },
]

export const projects: Project[] = [
  {
    id: 'cloud-resume',
    title: 'Cloud Resume Challenge',
    description: 'A full-stack, serverless resume built and hosted entirely on AWS utilizing modern cloud engineering practices.',
    longDescription: 'Implemented the Cloud Resume Challenge by deploying a static Next.js website to an AWS S3 bucket distributed via CloudFront. Built a serverless visitor counter backend using API Gateway, AWS Lambda (Python), and DynamoDB. Automated deployment using GitHub Actions CI/CD pipelines.',
    image: '/projects/cloud-resume.png',
    tags: ['AWS S3', 'CloudFront', 'Lambda', 'Next.js', 'CI/CD'],
    github: 'https://github.com/abijitharun45/cloud-resume-challenge',
    featured: true,
    details: [
      'Configured secure static hosting with S3 and CloudFront CDN',
      'Developed serverless API backend with API Gateway and Lambda',
      'Implemented database interactions using DynamoDB with Boto3',
      'Automated AWS infrastructure deployment using CI/CD pipelines',
    ],
  },
  {
    id: 'ai-ids',
    title: 'AI-Powered Intrusion Detection System',
    description: 'Machine learning-based network security system to detect and classify cyber threats in real-time with 85% accuracy.',
    longDescription: 'Developed a machine learning system using various algorithms to detect and classify cyber threats in real-time. Achieved 85% accuracy on the CIC-IDS2017 dataset and validated scalability on CIC-IoT 2023 dataset.',
    image: '/projects/securenet-ai.png',
    tags: ['Python', 'Machine Learning', 'Linux', 'Network Security'],
    github: 'https://github.com/abijitharun45/SecureNet_AI',
    details: [
      'Configured Linux environment with deep learning dependencies',
      'Implemented feature engineering and model optimization',
      'Tested model scalability on IoT security datasets',
      'Achieved 85% accuracy on CIC-IDS2017 dataset',
    ],
  },
  {
    id: 'rag-assistant',
    title: 'RAG-Based Campus Knowledge Assistant',
    description: 'Conversational AI using Retrieval-Augmented Generation to provide instant access to campus information.',
    longDescription: 'Built a conversational AI system using RAG architecture to provide instant access to campus information. Integrated LangChain with Groq AI for natural language understanding.',
    image: '/projects/rag-assistant.png',
    tags: ['Python', 'LangChain', 'Groq AI', 'ChromaDB'],
    details: [
      'Developed Python web crawler to collect campus data',
      'Implemented vector database using ChromaDB',
      'Managed API integration with Groq AI service',
      'Built natural language interface for queries',
    ],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    icon: 'Cloud',
    title: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS (S3, CloudFront, EC2)' },
      { name: 'IAM & Security Groups' },
      { name: 'Serverless (Lambda, API Gateway)' },
      { name: 'Azure Fundamentals' }
    ],
  },
  {
    icon: 'Terminal',
    title: 'Scripting & OS',
    skills: [
      { name: 'Linux (Ubuntu/Fedora)' },
      { name: 'Python' },
      { name: 'Bash / Shell Scripting' },
      { name: 'System Administration' }
    ],
  },
  {
    icon: 'Server',
    title: 'Automation & CI/CD',
    skills: [
      { name: 'GitHub Actions' },
      { name: 'Git & Version Control' },
      { name: 'Infrastructure as Code (Basics)' },
      { name: 'Deployment Pipelines' }
    ],
  },
  {
    icon: 'Network',
    title: 'Networking',
    skills: [
      { name: 'TCP/IP Suite & Subnetting' },
      { name: 'Firewall Configuration' },
      { name: 'Network Traffic Analysis' },
      { name: 'OSI Model' }
    ],
  },
  {
    icon: 'Shield',
    title: 'Cybersecurity & Defense',
    skills: [
      { name: 'Ethical Hacking' },
      { name: 'Nessus Vulnerability Scanning' },
      { name: 'Threat & Log Analysis' },
      { name: 'Intrusion Detection (IDS)' }
    ],
  },
  {
    icon: 'Brain',
    title: 'Data & AI/ML Tools',
    skills: [
      { name: 'Scikit-learn & Pandas' },
      { name: 'LangChain & GenAI APIs' },
      { name: 'ChromaDB (Vector DB)' }
    ],
  },
]

export const experiences: Experience[] = [
  {
    title: 'Cybersecurity Training',
    company: 'Structured Learning Program',
    location: 'Remote',
    period: 'Feb 2024 - Apr 2024',
    description: [
      'Completed structured training on Network Security and Ethical Hacking',
      'Practiced vulnerability scanning using Nessus',
      'Learned incident response workflows and defense strategies',
    ],
    technologies: ['Nessus', 'Network Security', 'Incident Response', 'Ethical Hacking'],
  },
]

export const certifications: Certification[] = [
  {
    id: 'aws-ccp',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Feb 2026',
    credentialId: 'e8e632b7a9ec4674a134975177938eef',
    credentialUrl: 'https://www.credly.com/badges/6ede3d8b-f8ed-4741-a16f-dbc755a31e14/public_url',
    icon: 'Cloud',
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'comptia-security',
    name: 'CompTIA Security+ ce Certification',
    issuer: 'CompTIA',
    date: 'Aug 2025',
    credentialId: 'COMP001021469145', // Standard CompTIA format
    credentialUrl: 'https://www.credly.com/badges/10674c19-77cf-405e-9ad7-66ebc67e175e/',
    icon: 'Shield',
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'ibm-agentic-ai',
    name: 'Agentic AI: From Learner to Builder',
    issuer: 'IBM',
    date: 'Aug 2025',
    credentialId: 'AAJ2025CSRBOX4745',
    credentialUrl: '',
    icon: 'Brain',
    color: 'from-blue-600 to-blue-700',
  },
  {
    id: 'google-cybersecurity',
    name: 'Google Cybersecurity Specialization',
    issuer: 'Google',
    date: 'Jun 2024',
    credentialId: 'QSL334H7DSYH',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/QSL334H7DSYH',
    icon: 'ShieldCheck',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'oracle-genai',
    name: 'OCI 2024 Generative AI Certified Professional',
    issuer: 'Oracle',
    date: 'Jul 2024',
    credentialUrl: '',
    icon: 'Database',
    color: 'from-red-600 to-red-700',
  },
  {
    id: 'google-it',
    name: 'Google IT Support',
    issuer: 'Google',
    date: 'Jun 2024',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/8TKWUXG4KXAR',
    icon: 'Laptop',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'nptel-ethical',
    name: 'Ethical Hacking',
    issuer: 'NPTEL',
    date: 'Oct 2024',
    credentialUrl: '',
    icon: 'Bug',
    color: 'from-purple-500 to-purple-600',
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Google Cloud Arcade Facilitator',
    description: 'Selected as facilitator for Google Cloud Arcade Program',
    year: '2023 - 2024',
    icon: 'Trophy',
  },
  {
    title: 'Google Solution Challenge 2024',
    description: 'Regional Qualifier - Developed innovative tech solution',
    year: '2024',
    icon: 'Award',
  },
]

export const stats = [
  { label: 'Professional Certifications', value: 7 },
  { label: 'Cloud & Tech Projects', value: 3 },
  { label: 'Months Cloud Experience', value: 6 },
]
