/**
 * ============================================================================
 * Centralized Portfolio Data Source (Single Source of Truth)
 * Abhranil Pal – Backend Developer | Software Engineer
 * ============================================================================
 * Contains verified professional information, education history, work experience,
 * teaching experience, technical skills, projects, publications, certifications,
 * achievements, leadership, hobbies, and contact details.
 */

export const portfolioData = {
  // --------------------------------------------------------------------------
  // 1. Personal & Contact Information
  // --------------------------------------------------------------------------
  personalInfo: {
    fullName: "Abhranil Pal",
    title: "Backend Developer | Software Engineer",
    shortBio:
      "Backend Developer with professional experience developing scalable backend applications, REST APIs, database-driven systems, and enterprise application modules. Experienced in Python, FastAPI, Go, Gin, PostgreSQL, Redis, MongoDB, and backend architecture. Interested in distributed systems, system design, database architecture, API development, and building reliable software solutions.",
    email: "abhranil.pal03@gmail.com",
    phone: "+91 7003205884",
    location: "Kolkata, West Bengal, India",
    profileImage: "/assets/profile/profile-photo.svg",
    resume: "https://drive.google.com/file/d/1C7JVx2lnraRY2A6j8XkeNmubfLndd8pn/view?usp=drivesdk",
    linkedin: "https://www.linkedin.com/in/abhranil-pal-519baa24b/",
    github: "https://github.com/abhranil1113",
    portfolioUrl: "https://abhranilpal.dev",
    nationality: "Indian",
    languages: [
      { name: "English", level: "Professional Working Proficiency" },
      { name: "Bengali", level: "Native / Bilingual" },
      { name: "Hindi", level: "Fluent" }
    ],
    availabilityStatus: "Backend Developer at Transmogrify Global Pvt. Ltd."
  },

  // --------------------------------------------------------------------------
  // 2. About Me – Professional Positioning
  // --------------------------------------------------------------------------
  about: {
    summary:
      "My name is Abhranil Pal. I completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Techno India University, Kolkata, in 2025. I am currently working as a Backend Developer at Transmogrify Global Pvt. Ltd., where I specialize in backend development, scalable APIs, database architecture, and enterprise software solutions.",
    careerObjective:
      "I have published a research paper titled 'A Novel Approach towards Weighted Consensus Clustering Ensemble', exploring ensemble learning techniques for improving clustering performance, which received the Best Paper Award at ICSSAI-2025. I am passionate about Data Structures and Algorithms (DSA), competitive programming, system design, backend engineering, and learning new technologies. I regularly practice problem-solving to strengthen my analytical and logical thinking, while actively building practical software projects and mastering scalable architectures.",
    currentRole: "Backend Developer at Transmogrify Global Pvt. Ltd.",
    experience: "Professional Backend Engineering & Enterprise Module Development",
    primaryFocus: "Backend Engineering, System Design, DSA & API Architecture",
    areasOfInterest: [
      "Data Structures & Algorithms (DSA)",
      "Competitive Programming & Problem Solving",
      "Backend Engineering & REST APIs",
      "System Design & Distributed Systems",
      "Database Architecture & Query Optimization",
      "Cloud Technologies & Microservices",
      "Machine Learning & Ensemble Clustering",
      "Scalable Software Architecture"
    ],
    metrics: [
      { label: "Production APIs Developed", value: "240+" },
      { label: "Backend Modules Engineered", value: "10+" },
      { label: "Active Platform Users", value: "1,000+" },
      { label: "Clustering Precision Lift", value: "3.5%" }
    ]
  },

  // --------------------------------------------------------------------------
  // 3. Education History (Reverse Chronological Order)
  // --------------------------------------------------------------------------
  education: [
    {
      id: "edu-btech",
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science and Engineering",
      institution: "Techno India University, Kolkata",
      board: "Techno India University",
      duration: "2021 – 2025",
      passingYear: "2025",
      score: "8.30 / 10 CGPA",
      scoreType: "CGPA",
      isPrimary: true,
      status: "Graduated 2025",
      location: "Kolkata, West Bengal, India",
      highlights: [
        "Comprehensive training in Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks, and System Architecture.",
        "Authored and published original research in Machine Learning and Ensemble Clustering receiving the Best Paper Award at ICSSAI-2025."
      ]
    },
    {
      id: "edu-class12",
      degree: "Higher Secondary Education (Class XII)",
      branch: "Pure Science",
      institution: "",
      board: "West Bengal Council of Higher Secondary Education (WBCHSE)",
      passingYear: "2021",
      score: "84.48%",
      scoreType: "Percentage",
      isPrimary: false,
      status: "Completed",
      location: "West Bengal, India",
      highlights: [
        "Rigorous foundation in Mathematics, Physical Sciences, and Analytical Reasoning.",
        "Graduated with distinction under the State Higher Secondary Education Council."
      ]
    },
    {
      id: "edu-class10",
      degree: "Secondary Education (Class X)",
      branch: "General Curriculum",
      institution: "",
      board: "West Bengal Board of Secondary Education (WBBSE)",
      passingYear: "2019",
      score: "80.57%",
      scoreType: "Percentage",
      isPrimary: false,
      status: "Completed",
      location: "West Bengal, India",
      highlights: [
        "First-division distinction with high marks in Mathematics and Physical Sciences."
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 4. Professional Work Experience
  // --------------------------------------------------------------------------
  experience: [
    {
      id: "exp-transmogrify",
      company: "Transmogrify Global Pvt. Ltd.",
      designation: "Backend Developer",
      employmentType: "Work From Office",
      location: "Kolkata, India",
      startDate: "January 2026",
      endDate: "Present",
      isCurrent: true,
      technologies: [
        "Go (Golang)",
        "Gin",
        "GORM",
        "PostgreSQL",
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "Redis",
        "TypeScript",
        "JWT Authentication",
        "Swagger",
        "REST APIs",
        "CI/CD"
      ],
      responsibilities: [
        "Supported 1,000+ users by developing 150+ APIs across 10+ backend modules for a CPO platform, including CPO, hub, charging station, charger, connector, OCPP, authentication, user, tariff, and charging session management using Go, Gin, GORM, and PostgreSQL.",
        "Enhanced backend performance, scalability, and reliability through Redis caching, database optimization, CI/CD pipelines, and Swagger API documentation.",
        "Implemented real-time communication between OCPP chargers, session management, JWT authentication, and withdrawal workflows for CPOs.",
        "Developed 75+ APIs for an EV Rental platform using Python, FastAPI, SQLAlchemy, PostgreSQL, and Redis.",
        "Implemented user management, vehicle and rental workflows, payments, transactions, and RESTful services.",
        "Engineered 15+ APIs for the Transmogrify website using TypeScript and PostgreSQL, implementing payment processing and card payment functionality."
      ],
      achievements: [
        "Architected and shipped over 240+ production-grade APIs across 10+ core modules supporting 1,000+ active enterprise users.",
        "Seamlessly deployed OCPP charger real-time telemetry, session state tracking, and wallet withdrawal workflows with zero downtime."
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 5. Teaching Experience (Part-Time Private Tutoring)
  // --------------------------------------------------------------------------
  teachingExperience: [
    {
      id: "teach-private-tutor",
      role: "Private Tutor – Computer Science & Mathematics",
      designation: "Part-time Private Tutor",
      employmentType: "Part-time Tutoring",
      duration: "2023 – Present",
      location: "Kolkata, India",
      isCurrent: true,
      responsibilities: [
        "Teaching school students in Computer Science and Mathematics, fostering deep conceptual understanding.",
        "Helping students understand fundamental concepts, solve complex problems, and consistently improve their academic performance.",
        "Explaining technical and mathematical concepts through practical examples, visual intuition, and structured problem-solving approaches."
      ],
      highlights: [
        "Focus on algorithmic thinking, programming fundamentals, and structured mathematical problem-solving."
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 6. Virtual Internships (Hidden if empty)
  // --------------------------------------------------------------------------
  internships: [],

  // --------------------------------------------------------------------------
  // 7. Research Publication
  // --------------------------------------------------------------------------
  publications: [
    {
      id: "pub-weighted-consensus",
      title: "A Novel Approach towards Weighted Consensus Clustering Ensemble",
      researchArea: "Machine Learning / Ensemble Clustering",
      authors: ["Abhranil Pal"],
      publicationName:
        "Proceedings of the 1st Global Challenges and Solutions of AI Techniques for Sustainable Development (GCSAISD)",
      publisher: "SciTePress",
      pages: "266–272",
      publicationDate: "2025",
      doi: "10.5220/0014844300004938",
      officialLink: "https://www.scitepress.org/PublicationsDetail.aspx?ID=pZLQbeMcjug=&t=1",
      doiLink: "https://doi.org/10.5220/0014844300004938",
      githubRepo: "",
      abstract:
        "Developed a Weighted Consensus Clustering method combining K-Means, Fuzzy C-Means (FCM), Gaussian Mixture Models (GMM), DBSCAN, OPTICS, and Spectral Clustering. Implemented Silhouette Score-based weighting across 20 benchmark datasets. The proposed ensemble achieved up to 3.5% higher Silhouette Score compared with the best-performing K-Means, FCM, and GMM baselines.",
      outcome: "Achieved up to 3.5% higher Silhouette Score compared with the best-performing K-Means, FCM, and GMM baselines.",
      methodologies: [
        "Python",
        "Google Colab",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Machine Learning",
        "Clustering Algorithms",
        "Ensemble Methods",
        "Silhouette Score"
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 8. Projects
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "proj-bike-management",
      name: "Bike Management System",
      image: "/assets/projects/project-microservices.svg",
      category: "Full Stack Development / Backend Development",
      status: "Completed",
      duration: "Production Ready",
      shortDescription:
        "An integrated bike rental and fleet management platform with administrative, owner, and driver modules.",
      problemStatement:
        "Managing multi-role bike rental operations, driver verifications, owner settlements, and wallet transactions requires complex relational workflows, strict role-based access control, and real-time state synchronization.",
      solutionOverview:
        "Engineered an integrated fleet platform using Python, FastAPI, and PostgreSQL with Redis caching. Built modular Admin, Owner, and Driver modules with JWT-based RBAC, real-time Socket.IO notifications, and automated CI/CD verification.",
      majorFeatures: [
        "Admin, Owner, and Driver modules with role-specific operational permissions",
        "JWT Authentication and fine-grained Role-Based Access Control (RBAC)",
        "Real-time Socket.IO notifications and wallet balance management",
        "Complete booking, dispatch, and rental workflows across 30+ relational database entities",
        "Asynchronous background job scheduling for recurring tasks and payment statuses",
        "Docker-based containerization and automated GitHub Actions CI/CD pipeline (linting, migrations, testing, build verification)"
      ],
      architectureHighlights:
        "30+ relational entities modeled in PostgreSQL with connection pooling. FastAPI provides asynchronous request handling with Redis caching. Fully containerized with automated CI/CD test gates.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "JavaScript",
        "Docker",
        "GitHub Actions",
        "JWT",
        "RBAC",
        "Socket.IO"
      ],
      githubUrl: "https://github.com/abhranil1113/Bike_management_system.git",
      liveDemoUrl: ""
    },
    {
      id: "proj-incident-ops",
      name: "IncidentOps – Incident Management Platform",
      image: "/assets/projects/project-stream.svg",
      category: "Backend Development / DevOps",
      status: "Completed",
      duration: "Production Ready",
      shortDescription:
        "An incident management backend designed to manage incidents, track their lifecycle, handle alert ingestion, and provide real-time notifications.",
      problemStatement:
        "When mission-critical systems experience outages, engineering teams face fragmented communication, missed alert notifications, and lack of structured incident triage workflows.",
      solutionOverview:
        "Built a resilient incident management backend in Python and FastAPI utilizing SQLAlchemy 2.0 and Alembic. Incorporates a five-stage incident lifecycle, webhook alert ingestion, automated escalation, and real-time Socket.IO broadcasts.",
      majorFeatures: [
        "Incident lifecycle tracking across a five-stage operational workflow",
        "Secure JWT Authentication, team organization, and service ownership mapping",
        "Automated incident escalation policies for unacknowledged alerts",
        "Webhook-based alert ingestion from external observability systems",
        "Real-time Socket.IO incident notification broadcasts to on-call engineers",
        "Razorpay billing integration for enterprise tier subscriptions",
        "Containerized with Docker, deployed to Kubernetes, and monitored via Prometheus and Grafana"
      ],
      architectureHighlights:
        "Engineered with FastAPI and SQLAlchemy 2.0 on PostgreSQL with Alembic schema versioning. Packaged into Docker images and orchestrated on Kubernetes with Prometheus metrics scraping and Grafana dashboards.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy 2.0",
        "Alembic",
        "JWT Authentication",
        "Socket.IO",
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "Razorpay"
      ],
      githubUrl: "https://github.com/abhranil1113/Incident-ops.git",
      liveDemoUrl: ""
    }
  ],

  // --------------------------------------------------------------------------
  // 9. Technical Skills (Categorized from verified resume)
  // --------------------------------------------------------------------------
  technicalSkills: {
    languages: [
      { name: "Python", proficiency: "Advanced", icon: "code" },
      { name: "Golang (Go)", proficiency: "Advanced", icon: "code" },
      { name: "JavaScript", proficiency: "Proficient", icon: "code" },
      { name: "Java", proficiency: "Proficient", icon: "code" }
    ],
    backend: [
      { name: "FastAPI", proficiency: "Advanced", icon: "server" },
      { name: "Gin", proficiency: "Advanced", icon: "server" },
      { name: "REST APIs", proficiency: "Advanced", icon: "network" },
      { name: "Socket.IO", proficiency: "Proficient", icon: "cpu" },
      { name: "Node.js", proficiency: "Proficient", icon: "server" },
      { name: "Express.js", proficiency: "Proficient", icon: "server" },
      { name: "JSON", proficiency: "Advanced", icon: "file-text" }
    ],
    databases: [
      { name: "PostgreSQL", proficiency: "Advanced", icon: "database" },
      { name: "MySQL", proficiency: "Proficient", icon: "database" },
      { name: "MongoDB", proficiency: "Proficient", icon: "database" }
    ],
    orm: [
      { name: "GORM", proficiency: "Advanced", icon: "database" },
      { name: "SQLAlchemy", proficiency: "Advanced", icon: "database" },
      { name: "Prisma", proficiency: "Proficient", icon: "database" },
      { name: "Alembic", proficiency: "Advanced", icon: "refresh" },
      { name: "Aerich", proficiency: "Working Knowledge", icon: "refresh" }
    ],
    apiDev: [
      { name: "Swagger / OpenAPI", proficiency: "Advanced", icon: "file-text" },
      { name: "API Testing", proficiency: "Advanced", icon: "shield" }
    ],
    messaging: [
      { name: "Redis", proficiency: "Advanced", icon: "database" },
      { name: "Kafka", proficiency: "Proficient", icon: "cpu" }
    ],
    aiMl: [
      { name: "Machine Learning", proficiency: "Proficient", icon: "cpu" },
      { name: "Scikit-learn", proficiency: "Proficient", icon: "cpu" },
      { name: "NumPy", proficiency: "Advanced", icon: "code" },
      { name: "Pandas", proficiency: "Advanced", icon: "code" },
      { name: "Data Preprocessing", proficiency: "Proficient", icon: "layers" },
      { name: "Data Visualization", proficiency: "Proficient", icon: "layers" },
      { name: "Matplotlib", proficiency: "Proficient", icon: "layers" },
      { name: "Seaborn", proficiency: "Proficient", icon: "layers" },
      { name: "Power BI", proficiency: "Proficient", icon: "layers" }
    ],
    tools: [
      { name: "Git", proficiency: "Advanced", icon: "git" },
      { name: "GitHub", proficiency: "Advanced", icon: "git" },
      { name: "Visual Studio Code", proficiency: "Advanced", icon: "terminal" },
      { name: "Bruno", proficiency: "Proficient", icon: "terminal" },
      { name: "Google Colab", proficiency: "Advanced", icon: "terminal" }
    ]
  },

  // --------------------------------------------------------------------------
  // 10. Certifications
  // --------------------------------------------------------------------------
  certifications: [
    {
      id: "cert-infosys-ml",
      name: "Introduction to Machine Learning",
      issuingOrganization: "Infosys",
      certificateLink: "https://drive.google.com/file/d/1aPS6ANYbPyJvxWBGLV32sG2eKiD5J-dm/view?usp=drive_link",
      organizationType: "infosys"
    },
    {
      id: "cert-opencv-bootcamp",
      name: "OpenCV Bootcamp",
      issuingOrganization: "OpenCV.org",
      certificateLink: "https://drive.google.com/file/d/129mm8QYR2zFg-xioyoBrOEcyyo4AJQ8i/view?usp=drivesdk",
      organizationType: "opencv"
    },
    {
      id: "cert-infosys-powerbi",
      name: "Microsoft Power BI",
      issuingOrganization: "Infosys",
      certificateLink: "https://drive.google.com/file/d/1LYE5VfYUMGj_wuEHNKx49_YchG0LOycB/view?usp=drive_link",
      organizationType: "infosys"
    },
    {
      id: "cert-oracle-agentic-ai",
      name: "Agentic AI Certification",
      issuingOrganization: "Oracle",
      certificateLink: "https://drive.google.com/file/d/1S143_1IRWUnnGyVCLOmtz_4soDu5-z1K/view?usp=drive_link",
      organizationType: "oracle"
    },
    {
      id: "cert-linkedin-ba-pm",
      name: "Business Analyst and Project Manager",
      issuingOrganization: "LinkedIn",
      certificateLink: "https://drive.google.com/file/d/1PlWw4198skaq9UQZSV1ev4UXD0ZSbHLf/view?usp=drive_link",
      organizationType: "linkedin"
    }
  ],

  // --------------------------------------------------------------------------
  // 11. Achievements and Recognition
  // --------------------------------------------------------------------------
  achievements: [
    {
      id: "ach-best-paper",
      title: "Best Paper Award – ICSSAI-2025",
      organization: "ICSSAI-2025 Conference Committee",
      date: "2025",
      category: "Research Achievement",
      description:
        "Honored with the Best Paper Award for the research publication 'A Novel Approach towards Weighted Consensus Clustering Ensemble' presented at ICSSAI-2025.",
      documentUrl: "https://drive.google.com/file/d/1mTarmZy3nQ_Jvtu1-lpJN96K2q2hVB07/view?usp=drivesdk",
      link: "https://drive.google.com/file/d/1mTarmZy3nQ_Jvtu1-lpJN96K2q2hVB07/view?usp=drivesdk"
    },
    {
      id: "ach-et-hackathon",
      title: "ET AI Hackathon Participation",
      organization: "The Economic Times & AI Hackathon Consortium",
      date: "Verified Participation",
      category: "Technical / Hackathon Participation",
      description:
        "Participated in the ET AI Hackathon developing applied machine learning and artificial intelligence prototypes to solve real-world industry challenges.",
      documentUrl: "https://drive.google.com/file/d/1QVlzoe3QmrXP1l_mDA5dpvuQrP0rFfDl/view?usp=sharing",
      link: "https://drive.google.com/file/d/1QVlzoe3QmrXP1l_mDA5dpvuQrP0rFfDl/view?usp=sharing"
    },
    {
      id: "ach-sports-football",
      title: "University Football Representation",
      organization: "Techno India University Sports Council",
      date: "Inter-College Tournaments",
      category: "Sports / Extracurricular Activities",
      description:
        "Represented Techno India University in competitive inter-college football tournaments, cultivating teamwork, discipline, and quick strategic decision-making.",
      documentUrl: "",
      link: ""
    }
  ],

  // --------------------------------------------------------------------------
  // 12. Leadership and Volunteering
  // --------------------------------------------------------------------------
  leadership: [
    {
      id: "lead-css-volunteering",
      title: "CSS Community Volunteering",
      organization: "CSS Volunteer Wing",
      period: "5-Year Active Volunteer",
      description:
        "Served as an active community volunteer for 5 years contributing across social welfare and education drives.",
      activities: [
        "Organized community donation drives supporting underprivileged families",
        "Conducted orphanage welfare initiatives and child mentorship programs",
        "Created science-awareness content to promote STEM education",
        "Provided free private tutoring in foundational mathematics and science"
      ]
    },
    {
      id: "lead-sports-rep",
      title: "University Sports Representation",
      organization: "Techno India University Football Team",
      period: "Collegiate Athlete",
      description:
        "Represented the university in football tournaments, demonstrating sportsmanship, team resilience, and high-pressure tactical execution.",
      activities: [
        "Competed in university football tournaments",
        "Fostered collaborative team spirit and athletic discipline"
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 13. Professional Social Profiles (Only verified URLs)
  // --------------------------------------------------------------------------
  socialProfiles: [
    {
      id: "soc-gh",
      platform: "GitHub",
      username: "abhranil1113",
      profileUrl: "https://github.com/abhranil1113",
      description: "Explore open-source backend repositories, microservices, and FastAPI codebases."
    },
    {
      id: "soc-li",
      platform: "LinkedIn",
      username: "abhranil-pal-519baa24b",
      profileUrl: "https://www.linkedin.com/in/abhranil-pal-519baa24b/",
      description: "Professional background, backend engineering updates, and career connections."
    }
  ],

  // --------------------------------------------------------------------------
  // 14. Hobbies & Interests (Simple, Visually Attractive)
  // --------------------------------------------------------------------------
  hobbies: [
    {
      id: "hob-football",
      name: "Football",
      icon: "football",
      description: "Playing competitive football, following global tactical leagues, and representing university sports teams."
    },
    {
      id: "hob-cricket",
      name: "Cricket",
      icon: "cricket",
      description: "Watching and playing cricket, analyzing match strategies, and participating in local matches."
    },
    {
      id: "hob-coding",
      name: "Competitive Coding",
      icon: "terminal",
      description: "Practicing algorithms and data structures to continuously strengthen logical reasoning and analytical problem-solving."
    },
    {
      id: "hob-travel",
      name: "Travelling & Planning Trips",
      icon: "compass",
      description: "Exploring new destinations, planning itineraries, and discovering regional landscapes and cultures."
    }
  ],

  // --------------------------------------------------------------------------
  // 15. Contact Information & Integration
  // --------------------------------------------------------------------------
  contact: {
    email: "abhranil.pal03@gmail.com",
    phone: "+91 7003205884",
    location: "Kolkata, West Bengal, India",
    linkedin: "https://www.linkedin.com/in/abhranil-pal-519baa24b/",
    github: "https://github.com/abhranil1113",
    availabilityNote: "Backend Developer at Transmogrify Global Pvt. Ltd. Open to engineering discussions and professional collaborations.",
    
    // Configurable endpoint (FormSubmit or EmailJS)
    formSubmitEndpoint: "",
    emailJsConfig: {
      serviceId: "",
      templateId: "",
      publicKey: ""
    }
  }
};
