export const PROFILE = {
  name: 'Sridhar S',
  initials: 'SS',
  photo: '/profile.jpg',
  headlineRole: 'Software Developer & ML Researcher',
  tagline:
    'M.Sc Software Systems student building software applications, cloud automation, and medical imaging AI.',
  aboutSummary:
    'M.Sc Software Systems student with a strong interest in software development, machine learning, and emerging technologies. Passionate about developing innovative solutions, solving technical problems, and applying programming skills to real-world applications. Possess strong analytical thinking, adaptability, and a commitment to continuous learning and professional growth.',
  resumeFile: '/Sridhar_S_Resume.pdf',
  resumeDownloadName: 'Sridhar_S_Resume.pdf',
  contact: {
    phone: '7397188275',
    email: 'sridharkumar2306@gmail.com',
    address: '32/2, Pasumai Nagar, Erode Road, Perundurai',
    shortLocation: 'Perundurai, Erode',
    github: 'https://github.com/Sridhar-6528',
    githubHandle: 'Sridhar-6528',
    leetcode: 'https://leetcode.com/Sridhar_2306/',
    leetcodeHandle: 'Sridhar_2306',
  },
  quickStats: [
    { label: 'Degree Program', value: 'M.Sc Software Systems', detail: '2023 – 2028' },
    { label: 'Academic Standing', value: '6.81 CGPA', detail: 'Up to 6th Semester' },
    { label: 'Problem Solving', value: '150+ Solved', detail: 'LeetCode DSA' },
    { label: 'Primary R&D', value: 'MRI + DaTSCAN', detail: "Parkinson's Classification" },
  ],
};

export const SKILL_CATEGORIES = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core languages for systems, DSA, and AI workflows',
    items: [
      { name: 'Python', source: 'Core Skill', note: 'Machine learning & scripting' },
      { name: 'C++', source: 'Core Skill', note: 'Certified · Problem solving & DSA' },
      { name: 'C', source: 'Core Skill', note: 'Foundational systems programming' },
      { name: 'Java', source: 'Certified Stack', note: 'Java Foundation & DSA in Java' },
    ],
  },
  {
    id: 'web-db',
    title: 'Web & Databases',
    subtitle: 'Modern frontend interfaces and document data modeling',
    items: [
      { name: 'React', source: 'Core Skill', note: 'Component-driven UI development' },
      { name: 'MongoDB', source: 'Core Skill', note: 'NoSQL document database' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    subtitle: 'Automated provisioning, containers, and delivery pipelines',
    items: [
      { name: 'AWS', source: 'Project & Certified', note: 'AWS Cloud Essentials & provisioning' },
      { name: 'Terraform', source: 'Project Stack', note: 'Infrastructure as Code' },
      { name: 'Docker', source: 'Project Stack', note: 'Containerized app deployment' },
      { name: 'Jenkins CI/CD', source: 'Project Stack', note: 'Automated build & release pipelines' },
      { name: 'GitHub', source: 'Project Stack', note: 'Version control & CI integration' },
    ],
  },
  {
    id: 'testing-research',
    title: 'Testing & Research Domains',
    subtitle: 'Quality engineering and applied machine learning',
    items: [
      { name: 'Multimodal Deep Learning', source: 'R&D Focus', note: 'MRI & DaTscan SPECT analysis' },
      { name: 'Incremental Learning', source: 'R&D Focus', note: 'Knowledge retention across updates' },
      { name: 'Selenium', source: 'Certified Stack', note: 'Automated browser testing' },
      { name: 'API Testing', source: 'Certified Stack', note: 'FutureSkills Prime (NASSCOM)' },
    ],
  },
];

export const PROJECTS = [
  {
    id: 'parkinsons-rd',
    featured: true,
    badge: 'Flagship R&D Project',
    title: "An Incremental Learning Framework for Parkinson's Disease Classification Using Multimodal Analysis",
    summary:
      "Developed a multimodal deep learning framework that analyzes MRI and DaTscan SPECT images to classify Control, Prodromal, and Parkinson's Disease cases while retaining previously learned knowledge.",
    problem:
      "Parkinson's Disease diagnosis benefits from complementary structural and functional neuroimaging, while clinical AI models also need to adapt to new patient cohorts without forgetting prior diagnostic knowledge.",
    methodology:
      'Designed a multimodal deep learning pipeline combining structural MRI and DaTscan SPECT neuroimaging paired with incremental learning so the classifier retains previously acquired representations as new cases are learned.',
    outcomes:
      "Enables multi-class distinction across Control, Prodromal, and Parkinson's Disease stages while preserving previously learned diagnostic knowledge.",
    tags: ['Multimodal Deep Learning', 'MRI', 'DaTSCAN SPECT', 'Incremental Learning', 'Python'],
    githubUrl: 'https://github.com/Sridhar-6528',
    hasDeepDive: true,
  },
  {
    id: 'terraform-aws',
    featured: false,
    badge: 'Cloud & DevOps',
    title: 'Infrastructure Provisioning and Automated Deployment Using Terraform',
    summary:
      'Automated AWS infrastructure provisioning and web application deployment using Terraform, Docker, Jenkins CI/CD, and GitHub for scalable and consistent cloud deployments.',
    problem:
      'Manual cloud server setup and deployment steps are error-prone and difficult to reproduce reliably across environments.',
    methodology:
      'Defined AWS infrastructure declaratively using Terraform, packaged the web application in Docker containers, and connected GitHub to Jenkins CI/CD pipelines for automated provisioning and release.',
    outcomes:
      'Achieved repeatable, scalable, and consistent cloud infrastructure provisioning and web application deployments.',
    tags: ['Terraform', 'AWS', 'Docker', 'Jenkins CI/CD', 'GitHub'],
    githubUrl: 'https://github.com/Sridhar-6528',
    hasDeepDive: false,
  },
  {
    id: 'sign-language-translator',
    featured: false,
    badge: 'Accessibility Concept',
    title: 'Sign Language Translator',
    summary:
      'Designed a sign language translation application concept supporting sign-to-text and text-to-sign communication to improve accessibility and bridge communication gaps.',
    problem:
      'Everyday digital communication tools rarely support seamless two-way translation between sign language users and text-based interfaces.',
    methodology:
      'Architected a bidirectional application concept bridging sign-to-text interpretation and text-to-sign output workflows.',
    outcomes:
      'Established an accessibility-centered communication concept aimed at reducing everyday communication barriers.',
    tags: ['Sign-to-Text', 'Text-to-Sign', 'Accessibility Design', 'Application Architecture'],
    githubUrl: 'https://github.com/Sridhar-6528',
    hasDeepDive: false,
  },
];

export const RESEARCH_WORKFLOW = [
  {
    step: '01',
    id: 'acquisition',
    shortTitle: 'Multimodal Inputs',
    title: 'Multimodal Neuroimaging Inputs (MRI & DaTSCAN SPECT)',
    description:
      'Integrates complementary neuroimaging modalities: structural MRI captures anatomical brain features, while DaTscan SPECT captures dopaminergic transporter activity relevant to neurodegeneration.',
    highlights: ['Structural MRI Modality', 'DaTscan SPECT Imaging', 'Complementary Biomarker Fusion'],
  },
  {
    step: '02',
    id: 'multimodal-dl',
    shortTitle: 'Multimodal Representation',
    title: 'Multimodal Deep Learning Analysis',
    description:
      'Jointly processes MRI and DaTscan SPECT images within a unified deep learning framework to learn discriminative patterns across structural and functional brain data.',
    highlights: ['Cross-Modal Feature Learning', 'Unified Analysis Pipeline', 'Neuroimaging Pattern Extraction'],
  },
  {
    step: '03',
    id: 'incremental',
    shortTitle: 'Incremental Learning',
    title: 'Incremental Learning & Knowledge Retention',
    description:
      'Incorporates an incremental learning mechanism so the framework can continuously accommodate new diagnostic patterns while retaining previously learned knowledge.',
    highlights: ['Continual Adaptation', 'Knowledge Retention', 'Mitigates Knowledge Loss'],
  },
  {
    step: '04',
    id: 'classification',
    shortTitle: '3-Class Output',
    title: "Control, Prodromal & Parkinson's Disease Classification",
    description:
      "Distinguishes among Control subjects, Prodromal (early-stage) cases, and established Parkinson's Disease cases to support multi-stage diagnostic research.",
    highlights: ['Control Class', 'Prodromal Stage', "Parkinson's Disease Class"],
  },
];

export const EDUCATION = [
  {
    degree: 'M.Sc Software Systems',
    institution: 'Kongu Engineering College, Perundurai',
    period: '2023 – 2028',
    score: 'CGPA: 6.81 (Up to 6th semester)',
    current: true,
    details:
      'Integrated postgraduate program focused on software engineering, data structures, databases, cloud technologies, and applied machine learning.',
  },
  {
    degree: 'HSC (Higher Secondary Certificate)',
    institution: 'Bharathi Matric Hr Sec School, Vijayamangalam',
    period: '2022 – 2023',
    score: '76%',
    current: false,
    details: 'Completed higher secondary education with 76% aggregate.',
  },
  {
    degree: 'SSLC (Secondary School Leaving Certificate)',
    institution: 'Bharathi Matric Hr Sec School, Vijayamangalam',
    period: '2020 – 2021',
    score: null,
    current: false,
    details: 'Completed secondary school education.',
  },
];

export const CERTIFICATIONS_AND_ACHIEVEMENTS = [
  {
    id: 'leetcode-150',
    type: 'Achievement',
    title: 'Solved 150+ Problems on LeetCode',
    issuer: 'LeetCode',
    description:
      'Consistent algorithmic problem solving across data structures and competitive programming challenges.',
    link: 'https://leetcode.com/Sridhar_2306/',
    linkLabel: 'View LeetCode Profile',
  },
  {
    id: 'nasscom-selenium',
    type: 'Certification',
    title: 'Selenium with Java, Python & API Testing',
    issuer: 'FutureSkills Prime (NASSCOM)',
    description:
      'Hands-on training in automated browser testing with Selenium, Python/Java test scripting, and API testing.',
  },
  {
    id: 'aws-cloud',
    type: 'Certification',
    title: 'AWS Cloud Essentials',
    issuer: 'Cloud Certification',
    description:
      'Foundational knowledge of Amazon Web Services core cloud concepts, compute, storage, and deployment fundamentals.',
  },
  {
    id: 'java-global',
    type: 'Certification',
    title: 'Java Foundation (Global Certification)',
    issuer: 'Global Certification',
    description:
      'Validated core Java programming concepts, object-oriented design principles, and language fundamentals.',
  },
  {
    id: 'cpp-greylearn',
    type: 'Certification',
    title: 'C++ Programming Certification',
    issuer: 'Grey Learn',
    description:
      'Certified proficiency in C++ programming syntax, memory concepts, and structured problem solving.',
  },
  {
    id: 'dsa-java',
    type: 'Certification',
    title: 'Data Structures using Java',
    issuer: 'Technical Certification',
    description:
      'Core algorithmic data structures and implementation patterns using Java.',
  },
];
