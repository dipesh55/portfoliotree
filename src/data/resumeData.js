/**
 * Resume Data - Dipesh Bhatta
 * Computer Engineer
 */

export const resumeData = {
  personal: {
    name: "Dipesh Bhatta",
    title: "Computer Engineer",
    email: "dipeshbhatta44@gmail.com",
    phone: "9865746770",
    location: "Kathmandu, Nepal, 44600",
    permanentAddress: "Dhangadhi, Nepal",
    summary: "Experienced Software Engineer specializing in BPM solutions, full-stack development, and machine learning. Proven track record of delivering high-impact solutions that improve efficiency and reduce costs for major clients.",
    profileImage: "/images/img.jpg",
    social: {
      github: "https://github.com/dipesh55",
      linkedin: "https://linkedin.com/in/dipeshbhatta4",
      twitter: "https://twitter.com/dipeshbhatta55",
      instagram: "https://www.instagram.com/dipesh.90s/"
    }
  },

  experience: [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Bitskraft Pvt. Ltd",
      location: "Kathmandu, Nepal",
      period: "Aug 2021 - Present",
      description: "Leading development of BPM solutions and large-scale applications, resulting in significant efficiency improvements and cost savings for clients.",
      achievements: [
        "Developed and implemented a BPM solution for a major client, resulting in a 45% increase in process efficiency and saving the client an estimated $1 million annually",
        "Successfully led a team of 5 developers in the design and deployment of a large-scale Nintex & K2 application for a financial services firm, leading to a 50% reduction in manual tasks and a 20% improvement in overall productivity",
        "Conducted a comprehensive BPM assessment for a Banking and Healthcare organization, identifying opportunities for automation and optimization, which led to a 30% reduction in processing time and a 25% cost reduction in administrative tasks",
        "Designed and delivered customized Nintex training programs for over 100 users across multiple organizations, leading to increased user adoption rates and a 90% satisfaction rate from clients"
      ],
      technologies: ["Nintex", "K2", "BPM", "Business Process Design", "Azure"]
    },
    {
      id: 2,
      title: "Associate Software Engineer",
      company: "Acies Consulting LLP India",
      location: "Mumbai, India",
      period: "Jun 2020 - May 2021",
      description: "Developed no-code data management solutions and integrated data pipelines for seamless data integration across multiple systems.",
      achievements: [
        "Developed a no-code data management solution facilitating seamless data integration and streaming from diverse sources, enhancing data management capabilities within the application",
        "Designed and implemented an integrated data pipeline and transformation layer, enabling efficient data aggregation and management across multiple systems",
        "Leveraged Django framework to construct an API management layer, fostering seamless connections with other applications within the ecosystem"
      ],
      technologies: ["Django", "REST API", "Python", "Data Integration", "API Management"]
    },
    {
      id: 3,
      title: "Software Engineering Intern",
      company: "Kameda Infologics Pvt. Ltd.",
      location: "Delhi, India",
      period: "May 2019 - July 2019",
      description: "Contributed to frontend development of HIMS project using modern web technologies and Agile methodologies.",
      achievements: [
        "Designed the UI using HTML5, CSS3, and JavaScript and contributed towards the front end of the application of the HIMS project",
        "Exposure to working on Agile software development methodology using Scrum",
        "Used GitHub for Continuous integration of code and continuous deployment and reduced the deployment times by 20%"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub", "Agile", "Scrum"]
    },
    {
      id: 4,
      title: "Technical Team Member",
      company: "Microsoft Campus Club",
      location: "NIT Rourkela, India",
      period: "May 2016 - July 2020",
      description: "Handled event websites and servers for technical events and workshops, helping students develop their technical skills.",
      achievements: [
        "Handled event websites and servers for Microsoft Campus Club technical events",
        "Organized Eastern India's biggest tech event called TREASHERLOCKED",
        "Received Certificate of appreciation for Innovative Technical member"
      ],
      technologies: ["Web Development", "Server Management", "Event Management"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor's of Technology in Computer Science and Engineering",
      school: "National Institute Of Technology",
      location: "Rourkela, India",
      year: "July 2016 – July 2020",
      honors: null,
      description: "Specialized in Computer Science and Engineering with focus on software development and machine learning"
    },
    {
      id: 2,
      degree: "Higher Secondary School: Science",
      school: "Liverpool International Higher Secondary School",
      location: "Kathmandu, Nepal",
      year: "Jul 2013 – Jun 2015",
      honors: null,
      description: null
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 90 },
      { name: "R", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 85 }
    ],
    technologies: [
      { name: "React.js", level: 85 },
      { name: "Django", level: 80 },
      { name: "REST API", level: 85 },
      { name: "Business Process Design", level: 90 },
      { name: "Nintex", level: 90 },
      { name: "K2", level: 85 }
    ],
    databases: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 }
    ],
    libraries: [
      { name: "Pandas", level: 90 },
      { name: "Numpy", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Matlab", level: 75 }
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Azure", level: 75 },
      { name: "Linux", level: 80 },
      { name: "Arduino", level: 75 },
      { name: "Raspberry Pi", level: 70 },
      { name: "Postman", level: 85 },
      { name: "SSMS", level: 80 },
      { name: "Nintex", level: 90 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "ECG Data Analysis and Heart Disease Prediction using Machine Learning Algorithms",
      description: "Final Year Project supervised by Asst. Prof. Sujata Mohanty. Designed a model using supervised machine learning Classification Algorithms (SVM and KNN) that can find anomalies in one's ECG report by analyzing it. Predicted the chances of a patient suffering from a certain heart disease with 98% Accuracy where SVM performs the best.",
      technologies: ["Python", "Machine Learning", "SVM", "KNN", "Pandas", "Numpy", "Matplotlib"],
      link: "#",
      github: "https://github.com/dipesh55",
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      title: "TV-Show Recommendation System",
      description: "A recommendation system that predicts what kind of items the user may prefer, built using ML techniques including Collaborative filtering, Genre Based Prediction, and Content Based Prediction.",
      technologies: ["Python", "Machine Learning", "Collaborative Filtering", "Content-Based Filtering"],
      link: "#",
      github: "https://github.com/dipesh55",
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      title: "Digital Home Security",
      description: "Product Development Lab project. Developed a digital door lock product that can help in the digital security of the building using Arduino and Sensors (MCQ & PIR).",
      technologies: ["Arduino", "Sensors", "MCQ", "PIR", "Embedded Systems"],
      link: "#",
      github: "https://github.com/dipesh55",
      image: "/images/project3.jpg"
    },
    {
      id: 4,
      title: "Legistify",
      description: "Built an Online Law firm Dashboard, flexible for appointing and tracking Lawyer status. The appointed lawyer can also accept or reject the proposal on the basis of his schedule.",
      technologies: ["React.js", "Django", "REST API", "MySQL"],
      link: "#",
      github: "https://github.com/dipesh55",
      image: "/images/project4.jpg"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Microsoft Campus Club, Technical Society Certificate",
      issuer: "NIT Rourkela",
      year: "2018",
      credential: "Certificate of appreciation for Innovative Technical member for organizing Eastern India's biggest Tech event called TREASHERLOCKED"
    },
    {
      id: 2,
      name: "Hackathon Winner",
      issuer: "Innovision, NIT Rourkela",
      year: "Nov 2019",
      credential: "Awarded for One of the top 3 winners among the 500 participants in the coding Hackathon"
    }
  ],

  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Nepali", proficiency: "Native" },
    { name: "Hindi", proficiency: "Fluent" }
  ],

  achievements: [
    {
      id: 1,
      title: "Hackathon participation.",
      organization: "Innovision, NIT Rourkela",
      year: "Nov 2019",
      description: "Awarded for One of the top 3 winners among the 500 participants in the coding Hackathon which is held for two days"
    },
    {
      id: 2,
      title: "Technical Society Certificate",
      organization: "Microsoft Campus Club, NIT Rourkela",
      year: "2018",
      description: "Certificate of appreciation for Innovative Technical member for organizing Eastern India's biggest Tech event called TREASHERLOCKED"
    }
  ]
}
