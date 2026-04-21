export const coursesDB: Record<string, any> = {
  mba: {
    title: "Master in Business Administration (MBA)",
    code: "MBA",
    feeStructureImage: "/courses/mba_fee_structure.png",
    category: "Postgraduate",
    duration: "2 Years",
    semesters: 4,
    credits: 60, // Approx based on standard MBA (60-72)
    intake: "March / July / November",
    image:
      "/courses/mba.svg", // Local image path for MBA course
    description:
      "A professional master’s degree that builds leadership, analytical, and strategic skills needed for success in modern business organizations.",
    stats: {
      placementRate: "95%",
      startingSalary: "NPR 70k+",
      partners: "Corporate & Banking Sector",
    },
    overview: [
      "Develop MBA-level quantitative and qualitative analysis skills to solve real-world business problems using proven models and strategies.",
      "Strengthen expertise in business research and technology integration to create impactful presentations and professional reports.",
      "Apply core MBA concepts like finance, marketing, operations, and strategy for effective business decision-making and analysis.",
      "Prepare to become industry-ready leaders, management professionals, and entrepreneurs with the vision to lead organizations and build successful long-term ventures.",
    ],
    highlights: [
      "Industry mentorship from experienced business leaders",
      "Research-based and practical learning approach",
      "Real-world corporate case study analysis",
      "7 specialized career tracks for focused expertise",
      "Strong focus on leadership and strategic management skills",
      "Career-oriented curriculum aligned with industry needs"
    ],
    curriculum: [
      {
        year: "Year 01",
        focus: "Management Fundamentals",
        semesters: [
          {
            semester: "Semester I",
            subjects: [
              "BUS501 Introduction to Modern Management",
              "MGT523 Organizational Human Resource Management",
              "FIB523 Financial Management Accounting in the Digital Era",
              "BUS525 Organizational Transformation for Management",
              "MKT526 Digital Marketing Management",
            ],
          },
          {
            semester: "Semester II",
            subjects: [
              "ECN522 Economic & Data Analysis for Decision Making",
              "IMG528 Operation Management & Supply Chain",
              "Elective Module/Subject-1 (From Core Elective Group)",
              "Elective Module/Subject-2 (From Core Elective Group)",
              "Elective Module/Subject-3 (From Core Elective Group)",
            ],
            // Note: Groups are defined here for display
            electiveLabel: "Core Elective Clusters (Select 1 Track)",
            electiveGroups: [
              {
                title: "1. Modern Organization Management",
                subjects: [
                  "Industrial and Organizational Psychology in Digital Age",
                  "Creativity and Business Innovation Management",
                  "Human Resource Management in Digital Era",
                  "Change Crisis Management in Perspective",
                  "Ethics for Management, Good Governance Social Responsibility",
                  "Strategic in Modern Organization Management",
                  "Seminar in Modern Organization Management Problem Issues",
                  "Enterprise Risk Management and Internal Control",
                ],
              },
              {
                title: "2. Digital Business Management",
                subjects: [
                  "Business in Digital Platform",
                  "Digital Infrastructure",
                  "E-Commerce",
                  "Metaverse System and Business",
                  "Digital Asset",
                  "Data Storage and Analytics",
                  "Personal Data Protection Act and Cyber Security",
                  "Social Gaming Platform",
                ],
              },
              {
                title: "3. Digital Marketing",
                subjects: [
                  "Digital Social Media Marketing",
                  "New Product and Service Innovation Management",
                  "Digital Marketing channels of Distributions Supply Chain",
                  "Digital Marketing Communication",
                  "The Digital Customer Journey",
                  "Big Data for Marketing Analysis",
                  "Strategic Management for Marketers in Digital Era",
                  "Seminar on Business Management Issues for Marketers in Digital Era",
                ],
              },
              {
                title: "4. Accounting Management",
                subjects: [
                  "Accounting Theory and Financial Reporting Standards",
                  "Financial Reporting Analysis and Valuation",
                  "Accounting System Analysis and Design",
                  "Taxation Policy and Planning",
                  "Strategic Management for Investors",
                  "Seminar in Business Management Issues for Investors",
                  "Strategic Cost Management",
                  "Accounting Information System Management",
                ],
              },
            ],
          },
        ],
      },
      {
        year: "Year 02",
        focus: "Specialization & Strategy",
        semesters: [
          {
            semester: "Semester III",
            subjects: [
              "BUS521 Business Research Methods",
              "Elective Module/Subject-4 (From Core Elective Group)",
              "Elective Module/Subject-5 (From Core Elective Group)",
              "Elective Module/Subject-6 (From Core Elective Group)",
              "Elective Module/Subject-7 (From Core Elective Group)",
            ],
            electiveLabel: "Continued Specialization Tracks (Remaining Groups)",
            // Splitting groups between Sem 2 and 3 for UI balance,
            // or you can repeat all groups. Here showing the remaining ones.
            electiveGroups: [
              {
                title: "5. Information Technology Management",
                subjects: [
                  "Information Systems Analysis & Design",
                  "IT Entrepreneurship and Innovation",
                  "Digital Inclusion for Business Development",
                  "Information Security and Cyber Laws in Business",
                  "Software Design and Development",
                  "Artificial Intelligence for Business Management",
                  "Business Intelligence & Data Mining",
                  "Seminar on Problems and Issues Related to IT Management",
                ],
              },
              {
                title: "6. Fashion Design Management",
                subjects: [
                  "Fashion Buying and Merchandise Management",
                  "Brand and Communication in Fashion",
                  "Fashion Design Technology",
                  "Design Thinking and Innovation",
                  "New Product Development",
                  "Fashion Brand Management",
                  "Children's Fashion Theory",
                  "Contemporary Consumers in Fashion Design Management",
                ],
              },
              {
                title: "7. Graphic Design Management",
                subjects: [
                  "Package and Publication Design",
                  "Programming for Designers",
                  "Design Technology",
                  "Design Thinking and Innovation",
                  "Design Management",
                  "Design Studio",
                  "Typography and Interaction Design",
                  "Contemporary Consumers in Graphic Design Management",
                ],
              },
            ],
          },
          {
            semester: "Semester IV",
            subjects: [
              "Elective Module/Subject-8 (Seminar on Elective Group)",
              "SIR698 Special Project/Internship Report",
              "BUS699 Master's Thesis",
            ],
          },
        ],
      },
    ],
    future_opportunities: [
    "An MBA degree unlocks global career opportunities in top multinational companies and fast-growing industries. Graduates can pursue leadership roles in management, consulting, finance, marketing, operations, and entrepreneurship."
    ],
    careers: [
      "Business Manager",
      "Project Leader",
      "Operations Lead",
      "Business Analyst",
    ],
  },

  bhm: {
    title: "BA (Hotel & MICE Management) ~ BHM",
    code: "BHM",
    feeStructureImage: "/courses/bhm_fee_structure.pdf",
    category: "Undergraduate",
    duration: "4 Years",
    semesters: 8,
    credits: 130,
    intake: "March / July / November",
    image:
      "/courses/bhm.svg", // Local image path for BHM course
    description:
      "The Bachelor of Hotel Management (BHM) is a hospitality program focused on hotel operations, MICE, and industry training, preparing students for global careers in the hotel and tourism industry.",
    stats: {
      placementRate: "90%",
      startingSalary: "NPR 30k+",
      partners: "International Hotel Groups",
    },
    overview: [
      "Gain strong knowledge in business, economics, and hospitality management to develop well-rounded managers and executives ready for the global hospitality industry.",
      "Develop the ability to integrate and apply modern technology in hotel and hospitality operations for improved service quality and efficiency.",
      "Prepare industry-ready graduates for careers in hotel management, tourism, and hospitality sectors across both private and public organizations.",
      "Contribute to national development by producing skilled professionals who meet the growing demands of the Bachelor of Hotel Management (BHM) and hospitality industry worldwide.",
          ],
    highlights: [
      "Hotel Operations (BHM Career Path)",
      "Food & Beverage Management",
      "International Hospitality Opportunities",
      "Event Planning & Management",
      "Cruise Line Hospitality Careers",
      "Sales & Marketing in Hospitality",
    ],
    curriculum: [
      {
        year: "Year 01",
        focus: "Hospitality Foundations",
        semesters: [
          {
            semester: "Semester I",
            subjects: [
              "Intermediate English",
              "Use of Computers in Business",
              "Tools For the Digital Age",
              "Personality for Service Work",
              "Food and Beverage Service and Operation",
              "Introduction to Kitchen Management & International Food",
              "Principles of Management(Business  & Risk Management in Hotel Business)",
            ],
          },
          {
            semester: "Semester II",
            subjects: [
              "Advanced English",
              "Introduction to Economics",
              "Future Skills",
              "Nepalese/Thai Cultural Heritage",
              "Front Office Operation and Room Service",
              "Bar and Beverage Operations and Management",
              "Work Integrated Learning 1- Food Production",
            ],
          },
        ],
      },
      {
        year: "Year 02",
        focus: "Advanced Operations",
        semesters: [
          {
            semester: "Semester III",
            subjects: [
              "General Psychology",
              "English for the Hospitality Industry",
              "Modern Hospitality Industry and Tourist Behavior",
              "Open up a Career Path in Hospitality Industry",
              "Coffee Shop & Bakery Business Operations & Management",
              "Work Integrated Learning 2- Food Production",
              "Housekeeping Operation and Personalized Service",
            ],
          },
          {
            semester: "Semester IV",
            subjects: [
              "Nutrition and Healthy Food",
              "Entrepreneurship in Hospitality Industry",
              "Marketing and Innovation Strategies for  Hotel and MICE",
              "English for Hotel and Tourism Business",
              "Meeting, Exhibition and Incentive Tourism Management",
              "Restaurant and Banquet Management",
              "Health Tourism Management",
            ],
          },
        ],
      },
      {
        year: "Year 03",
        focus: "Management & Strategy",
        semesters: [
          {
            semester: "Semester V",
            subjects: [
              "Technology for Service",
              "Customer Experience Management for the Hospitality Industry",
              "Sustainable Management in Hotel and Tourism Business",
              "Special Issues in Tourism and Hotel Industry",
              "Spa and Wellness Resort Management",
              "Business Planning and Menu Design",
            ],
          },
          {
            semester: "Semester VI",
            subjects: [
              "Introduction to Statistics",
              "Tourist Guides and Local Storytellers",
              "Independent Study",
              "Tourism Experience Design (Nepalese Culture and Society)",
              "Festival and Special Events Management",
            ],
          },
        ],
      },
      {
        year: "Year 04",
        focus: "Industrial Exposure",
        semesters: [
          {
            semester: "Final Year",
            subjects: [
              "Pre-Cooperative and Work-Integrated Education for Hotel and Tourism Business)",
              "Work Integrated Learning (Internship)",
            ],
          },
          
        ],
      },
    ],
    future_opportunities: [
    "The Bachelor of Hotel Management (BHM) program focuses on practical hospitality training with expertise in hotel and MICE management. Students gain hands-on experience through the Hotel Information System (HIS) Lab and industry-oriented learning to build essential skills for modern hoteliers. With guidance from industry experts and academic professionals, the program develops problem-solving, analytical, and service skills, preparing students for real-world hospitality careers and global opportunities."
    ],
    careers: [
      "Bachelor of Hotel Management (BHM) Program",
      "Hotel & MICE Management Training",
      "Hotel Information System (HIS) Lab",
      "Industry Expert-Led Learning",
      "Real-World Hospitality Experience",
      "Global Hospitality Career Opportunities",
    ],
  },

  babm: {
    title: "BA (Airlines Business Management) ~ BABM",
    code: "BABM",
    feeStructureImage: "/courses/babm_fee_structure.pdf",
    category: "Undergraduate",
    duration: "4 Years",
    semesters: 8,
    credits: 130,
    intake: "March / July / November",
    image:
      "/courses/babm.svg", // Local image path for BABM course
    description:
      "The course focuses on airline operations, aviation business management, marketing, customer service, logistics, and aviation regulations, while also developing analytical and decision-making skills.",
    stats: {
      placementRate: "93%",
      startingSalary: "NPR 40k+",
      partners: "Airlines & Ground Handling Companies",
    },
    overview: [
      "Bachelor of Airline Business Management (BABM) at Yeti International College – Nepal’s first aviation business program",
      "Develop strong understanding of the global airline and aviation industry",
      "Gain expertise in airline business management, operations, and logistics",
      "Learn airline marketing and customer service management skills",
      "Build knowledge in aviation regulations, policies, and industry standards",
      "Strengthen business analysis and decision-making skills in aviation sector",
      "Understand global aviation trends, challenges, and opportunities"
    ],
    point: [
    'The First BABM College in Nepal'
    ],
    highlights: [
      "Airline Industry & Aviation Business Management",
      "Airline Operations, Airport Management & Logistics",
      "Aviation Marketing & Customer Service",
      "Aviation Regulations & Global Standards",
      "Business Analysis & Aviation Decision-Making",
      "Global Aviation Trends & Industry Challenges",
      "Airline Operations, Airport Management & Aviation Leadership",
    ],
    curriculum: [
      {
        year: "Year 01",
        focus: "Aviation Basics",
        semesters: [
          {
            semester: "Semester I",
            subjects: [
              "Intermediate English",
              "Use of Computers in Business",
              "Tools For the Digital Age",
              "Personality and Identity Development",
              "Principle of Management",
              "Knowledge forthe Aviation Industry",
              "Aviation Terminology-I"
            ],
          },
          {
            semester: "Semester II",
            subjects: [
              "Advanced English",
              "Introduction to Economics",
              "Future Skills",
              "Ground Passenger  Service",
              "Reservation and Ticketing",
              "Aviation Terminology-II",
              "Work Integrated Learning 1(Practical-Reservation and Ticketing)",
            ],
          },
        ],
      },
      {
        year: "Year 02",
        focus: "Airport Services",
        semesters: [
          {
            semester: "Semester III",
            subjects: [
              "General Psychology",
              "CareerPath in the Aviation Industry",
              "Consumer Behavior",
              "Service Psychology and Cross-cultural Communication",
              "Aviation Terminology-III",
              "Fare and Tickets",
              "Work Integrated Learning 2(Practical-Fare and Ticketing)",
            ],
          },
          {
            semester: "Semester IV",
            subjects: [
              "Nutrition and Airline Catering",
              "Principle of Marketing",
              "Human Resource Management",
              "Airport Operation Management",
              "Aviation Laws",
              "Aviation Safety and Security",
              "Budget Airline Management",
            ],
          },
        ],
      },
      {
        year: "Year 03",
        focus: "Airline Management",
        semesters: [
          {
            semester: "Semester V",
            subjects: [
              "Customer Relationship Management in Airline Business",
              "MarketingStrategy for the Hospitality Industry",
              "Airport Ramp Service",
              "Air Traffic Service and Scheduling Management",
              "Crew Resource Management",
              "In-flight Service",
            ],
          },
          {
            semester: "Semester VI",
            subjects: [
              "Introduction to Statistics",
              "Organizational Behavior",
              "Strategic Management for the Hospitality Industry",
              "Basic Load Control",
              "Career Preparation for Aviation Industry",
            ],
          },
        ],
      },
      {
        year: "Year 04",
        focus: "Professional Practice",
        semesters: [
          {
            semester: "Final Year",
            subjects: [
              "Pre-Cooperative and Work-Integrated Education for Aviation Industry",
              "Work Integrated Learning (Internship)",
            ],
          },
          
        ],
      },
    ],
    future_opportunities: [
    "Graduates of the Bachelor of Airline Business Management (BABM) at Yeti International College can build successful careers in the global aviation and airline industry. This program opens opportunities in airline operations, airport management, aviation marketing, customer service, and aviation logistics. Students can pursue roles in both domestic and international airlines, airports, and aviation companies, with strong demand for skilled professionals in the fast-growing aviation sector worldwide."
    ],
   careers: [
  "Airline Operations Officer",
  "Airport Ground Staff Executive",
  "Cabin Crew (Air Hostess / Flight Steward)",
  "Airline Customer Service Agent",
  "Aviation Business Manager",
  "Airport Operations Manager",
]
  },

  bamm: {
    title: "BA(MICE(Event) Management) ~ BAMM",
    code: "BAMM",
    feeStructureImage: "/courses/bmm_fee_structure.pdf",
    category: "Undergraduate",
    duration: "4 Years",
    semesters: 8,
    credits: 130,
    intake: "March / July / November",
    image:
      "/courses/bamm.svg", // Local image path for BAMM course
    description:
      "The Bachelor of MICE Management (BMM) at Yeti International College is a specialized program focused on Meetings, Incentives, Conferences, and Exhibitions (MICE) industry, offering practical training in event planning, hospitality management, and real-world industry exposure for global career opportunities.",
     stats: {
      placementRate: "91%",
      startingSalary: "NPR 30k+",
      partners: "Event Companies & Tourism Boards",
    },
   overview: [
      "Bachelor of MICE Management (BMM) at Yeti International College – Focused on global hospitality, tourism, and MICE industry careers",
      "Develop strong knowledge in business, economics, hospitality, and MICE management for global competitiveness",
      "Build expertise in Meetings, Incentives, Conferences, and Exhibitions (MICE) industry operations",
      "Gain skills in hospitality technology integration and modern event management systems",
      "Prepare industry-ready graduates for tourism, hospitality, and MICE sectors (public and private industries)",
      "Develop well-rounded managers and executives for global hospitality and MICE leadership roles"
    ],

    highlights: [
      "Industry-led Hospitality & MICE Training",
      "Live Event Planning & Management Experience",
      "Digital Event Management & Hospitality Tools",
      "Client Presentation & Communication Skills",
      "Real-World MICE Industry Exposure",
      "Expert Guidance from Industry Professionals"
    ],
  curriculum: [
      {
        year: "Year 01",
        focus: "Hospitality Foundations",
        semesters: [
          {
            semester: "Semester I",
            subjects: [
              "Intermediate English",
              "Use of Computers in Business",
              "Tools For the Digital Age",
              "Personality for Service Work",
              "Food and Beverage Service and Operation",
              "Introduction to Kitchen Management & International Food",
              "Principles of Management(Business  & Risk Management in Hotel Business)",
            ],
          },
          {
            semester: "Semester II",
            subjects: [
              "Advanced English",
              "Introduction to Economics",
              "Future Skills",
              "Nepalese/Thai Cultural Heritage",
              "Front Office Operation and Room Service",
              "Bar and Beverage Operations and Management",
              "Work Integrated Learning 1- Food Production",
            ],
          },
        ],
      },
      {
        year: "Year 02",
        focus: "Advanced Operations",
        semesters: [
          {
            semester: "Semester III",
            subjects: [
              "General Psychology",
              "English for the Hospitality Industry",
              "Modern Hospitality Industry and Tourist Behavior",
              "Open up a Career Path in Hospitality Industry",
              "Coffee Shop & Bakery Business Operations & Management",
              "Work Integrated Learning 2- Food Production",
              "Housekeeping Operation and Personalized Service",
            ],
          },
          {
            semester: "Semester IV",
            subjects: [
              "Nutrition and Healthy Food",
              "Entrepreneurship in Hospitality Industry",
              "Marketing and Innovation Strategies for  Hotel and MICE",
              "English for Hotel and Tourism Business",
              "Meeting, Exhibition and Incentive Tourism Management",
              "Restaurant and Banquet Management",
              "Health Tourism Management",
            ],
          },
        ],
      },
      {
        year: "Year 03",
        focus: "Management & Strategy",
        semesters: [
          {
            semester: "Semester V",
            subjects: [
              "Technology for Service",
              "Customer Experience Management for the Hospitality Industry",
              "Sustainable Management in Hotel and Tourism Business",
              "Special Issues in Tourism and Hotel Industry",
              "Spa and Wellness Resort Management",
              "Business Planning and Menu Design",
            ],
          },
          {
            semester: "Semester VI",
            subjects: [
              "Introduction to Statistics",
              "Tourist Guides and Local Storytellers",
              "Independent Study",
              "Tourism Experience Design (Nepalese Culture and Society)",
              "Festival and Special Events Management",
            ],
          },
        ],
      },
      {
        year: "Year 04",
        focus: "Industrial Exposure",
        semesters: [
          {
            semester: "Final Year",
            subjects: [
              "Pre-Cooperative and Work-Integrated Education for Hotel and Tourism Business)",
              "Work Integrated Learning (Internship)",
            ],
          },
          
        ],
      },
    ],
    future_opportunities: [
  "The Bachelor of MICE Management (BMM) at Yeti International College is a career-focused program designed for the global hospitality, tourism, and MICE industry. It provides practical training in Meetings, Incentives, Conferences, and Exhibitions (MICE) management, event planning, and hospitality operations. "
],

careers: [
  "MICE Event Manager (Meetings, Incentives, Conferences & Exhibitions)",
  "Event Planning & Coordination Specialist",
  "Conference & Exhibition Manager",
  "Hospitality & Tourism Manager",
  "Corporate Event Executive",
],
  },

  bttm: {
    title: "BA (Tourism & MICE Management) ~ BTMM",
    code: "BTTM",
    feeStructureImage: "/courses/bttm_fee_structure.pdf",
    category: "Undergraduate",
    duration: "4 Years",
    semesters: 8,
    credits: 130,
    intake: "March / July / November",
    image:
      "/courses/bttm.svg", // Local image path for BTTM course
    description:
      "A comprehensive degree designed to produce future leaders in the global hospitality and tourism industry, combining practical exposure with classroom studies.",
    stats: {
      placementRate: "94%",
      startingSalary: "NPR 35k+",
      partners: "50+ Hotels",
    },
    overview: [
      "Provides a deep understanding of hospitality, tourism, and event sectors.",
      "Includes field trips, industrial internships, and project work.",
      "Covers airline operations, ticketing, tourism marketing, and MICE management.",
    ],
    highlights: [
      "International Internship Options",
      "IATA Certification Support",
      "Tourism & Event Tech Focus",
      "Chinese & French Language Training",
    ],
    curriculum: [
      {
        year: "Year 01",
        focus: "Tourism Foundations",
        semesters: [
          {
            semester: "Semester I",
            subjects: [
              "General Psychology",
              "Future Skills",
              "Intermediate English",
              "Intro to IT and Applications",
              "Tools For the Digital Age",
              "Tour Operators & Travel Agents Mgmt",
              "Nepalese Heritage for Tourism",
            ],
          },
          {
            semester: "Semester II",
            subjects: [
              "Advanced English",
              "Principle of Marketing",
              "Introduction to Economics",
              "Personality & Identity Development",
              "Bar and Beverage Operations",
              "Kitchen Operations (Intermediate)",
              "Front Office Management",
            ],
          },
        ],
      },
      {
        year: "Year 02",
        focus: "Operational Excellence",
        semesters: [
          {
            semester: "Semester III",
            subjects: [
              "English Presentation Skills",
              "Consumer Behavior",
              "Introduction to Statistics",
              "Principles of Management",
              "Hotel Business Operations",
              "Coffee Shop & Bakery Operations",
              "Kitchen Operations (Advanced)",
            ],
          },
          {
            semester: "Semester IV",
            subjects: [
              "Organizational Behavior",
              "Accounting & Financial Mgmt",
              "Food and Beverage Cost Control",
              "Tourism and Hospitality Industry",
              "MICE Management for Hotel",
              "Housekeeping Operations",
              "Banquet and Catering Management",
            ],
          },
        ],
      },
      {
        year: "Year 03",
        focus: "Strategic Tourism",
        semesters: [
          {
            semester: "Semester V",
            subjects: [
              "Intro to Human Resource Mgmt",
              "Service Psychology",
              "Digital Marketing for Hospitality",
              "Florist & Room Operations",
              "The Basic of Baked Pastry",
              "Tourist Behavior & Cross-cultural Comm",
            ],
          },
          {
            semester: "Semester VI",
            subjects: [
              "Independent Learning",
              "Research Methods for Hospitality",
              "Special Project on Hospitality",
              "Festivals & Special Event Mgmt",
              "Hotel Planning and Development",
              "Art of Engraving on Veg/Fruit",
            ],
          },
        ],
      },
      {
        year: "Year 04",
        focus: "Industrial Placement",
        semesters: [
          {
            semester: "Semester VII",
            subjects: [
              "Seminar on Hotel and MICE",
              "Hotel & MICE Pre-Cooperative Edu",
            ],
          },
          {
            semester: "Semester VIII",
            subjects: ["Undergraduate Project - Internship"],
          },
        ],
      },
    ],
    future_opportunities: [
  "The Bachelor of MICE Management (BMM) at Yeti International College is a career-focused program designed for the global hospitality, tourism, and MICE industry. It provides practical training in Meetings, Incentives, Conferences, and Exhibitions (MICE) management, event planning, and hospitality operations. "
],
    careers: [
      "Tour Manager",
      "Airline Operations",
      "Travel Consultant",
      "Tourism Officer",
    ],
  },

  // ... (Other courses like MBA, BHM etc remain unchanged) ...

  // bca: {
  //   title: "Bachelor of Computer Application ~ BCA",
  //   code: "BCA",
  //   category: "Undergraduate",
  //   duration: "4 Years",
  //   semesters: 8,
  //   credits: 130,
  //   intake: "March / July",
  //   image:
  //     "/courses/bca.svg", // Local image path for BCA course
  //   description:
  //     "A professional IT program preparing students for careers in software development, networking, automation, and modern digital technologies.",
  //   stats: {
  //     placementRate: "96%",
  //     startingSalary: "NPR 45k+",
  //     partners: "IT Companies & Dev Agencies",
  //   },
  //   overview: [
  //     "Focus on programming, system design, data management, and application development.",
  //     "Includes hands-on projects, lab sessions, and industry-level software development training.",
  //     "Students gain practical experience through internships and project delivery.",
  //   ],
  //   highlights: [
  //     "Coding–focused Degree",
  //     "Project Development Every Semester",
  //     "Strong Networking & Security Foundations",
  //     "Internship Guarantee",
  //   ],
  //   // Curriculum updated to match the image provided
  //   curriculum: [
  //     {
  //       year: "Year 01",
  //       focus: "Computing Fundamentals",
  //       semesters: [
  //         {
  //           semester: "Semester I",
  //           subjects: [
  //             "BCA101 Computer Fundamentals & Applications",
  //             "BCA102 Programming in C",
  //             "BCA103 Digital Logic",
  //             "BCA104 Mathematics I",
  //             "BCA104 Professional Communication & Ethics",
  //             "BCA106 Hardware Workshop",
  //           ],
  //         },
  //         {
  //           semester: "Semester II",
  //           subjects: [
  //             "BCA151 Descrete Structures",
  //             "BCA152 Microprocessor & Computer Architecture",
  //             "BCA153 OOP in Java",
  //             "BCA154 Mathematics II",
  //             "BCA155 UX/UI Design",
  //             "BCA156 Principles of Management",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       year: "Year 02",
  //       focus: "Software Core",
  //       semesters: [
  //         {
  //           semester: "Semester III",
  //           subjects: [
  //             "BCA201 Data Structures and Algorithms",
  //             "BCA202 Database Management System",
  //             "BCA203 Web Technology I",
  //             "BCA204 System Analysis and Design",
  //             "BCA205 Probability and Statistics",
  //             "BCA206 Applied Economics",
  //           ],
  //         },
  //         {
  //           semester: "Semester IV",
  //           subjects: [
  //             "BCA251 Operating System",
  //             "BCA252 Software Engineering",
  //             "BCA253 Numerical Methods",
  //             "BCA254 Python Programming",
  //             "BCA255 Web Technology II",
  //             "BCA256 Project I",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       year: "Year 03",
  //       focus: "Advanced Technologies",
  //       semesters: [
  //         {
  //           semester: "Semester V",
  //           subjects: [
  //             "BCA301 Computer Network",
  //             "BCA302 Artificial Intelligence",
  //             "BCA303 Advanced Java Programming",
  //             "BCA304 MIS and e-Business",
  //             "BCA305 Society and Technology",
  //             "BCA306 Project II",
  //           ],
  //         },
  //         {
  //           semester: "Semester VI",
  //           subjects: [
  //             "BCA351 Computer Graphics & Animation",
  //             "BCA352 Mobile Programming",
  //             "BCA353 Cryptography and Network Security",
  //             "BCA354 Technical Writing",
  //             "BCA355 Distributed Systems",
  //             "BCA356 Project III",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       year: "Year 04",
  //       focus: "Specialization & Research",
  //       semesters: [
  //         {
  //           semester: "Semester VII",
  //           subjects: [
  //             "BCA401 Cyber Security & Ethical Hacking",
  //             "BCA402 Software Project Management",
  //             "BCA403 Financial Accounting",
  //             "BCA404 Project IV",
  //             "BCA405 Elective I",
  //             "BCA406 Elective II",
  //           ],
  //           // Added Specific Elective List for Sem VII
  //           electiveLabel: "Choose 2 Electives (Sem VII)",
  //           electives: [
  //             "BCA404-I Machine Learning",
  //             "BCA404-II E-Commerce",
  //             "BCA404-III Database Administration",
  //             "BCA404-IV Linex",
  //             "BCA405-I Dotnet Technology",
  //             "BCA405-II Business Intelligence",
  //             "BCA405-III Software Testing & Quality Assurance",
  //             "BCA405-IV Data Visualization",
  //           ],
  //         },
  //         {
  //           semester: "Semester VIII",
  //           subjects: [
  //             "BCA451 Cloud Computing",
  //             "BCA452 Internship",
  //             "BCA453 Elective III",
  //             "BCA454 Elective IV",
  //           ],
  //           // Added Specific Elective List for Sem VIII
  //           electiveLabel: "Choose 2 Electives (Sem VIII)",
  //           electives: [
  //             "BCA453-I Network Administration",
  //             "BCA453-II E-Governance",
  //             "BCA453-III Database Programming",
  //             "BCA453-IV Geographical Information System",
  //             "BCA454-I Digital Marketing & SEO",
  //             "BCA454-II Image Processing",
  //             "BCA454-III Internet of Things",
  //             "BCA454-IV Data Mining & Data Warehouse",
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   careers: [
  //     "Software Developer",
  //     "Database Administrator",
  //     "Network Engineer",
  //     "Systems Analyst",
  //   ],
  // },

  bsccssdi: {
    title:
      "B.Sc. (Computer Science and Software Development Innovation) ~ B.Sc. CSSDI",
    code: "B.Sc. CSSDI",
    feeStructureImage: "/courses/bsccsdi_fee_structure.pdf",
    category: "Undergraduate",
    duration: "4 Years",
    semesters: 8,
    credits: 136,
    intake: "March / July / November",
    image:
      "/courses/bsccsdi.svg", // Local image path for BSc ICTC course
    description:
      "The Bachelor of Science in Information and Communication Technology (BSc ICT) at Yeti International College is a career-focused IT degree designed to build expertise in software development, system analysis, networking, cloud computing, and data security. The program combines theoretical knowledge with hands-on practical training, preparing students for high-demand careers in the global information technology industry.",
 stats: {
      placementRate: "96%",
      startingSalary: "NPR 45k+",
      partners: "IT Companies & Dev Agencies",
    },
    overview: [
  "Comprehensive BSc CSDI program covering programming, system design, database management, and software development",
  "Hands-on training with real-world IT projects, internships, and industry-based learning",
  "Strong foundation in computer science, networking, cybersecurity, and cloud technologies",
  "Develop skills in ethical hacking, penetration testing, and information security",
  "Focus on problem-solving, analytical thinking, and modern IT tools for global careers"
],
   highlights: [
  "Industry-Oriented IT Degree Program",
  "Practical Labs & Real-World Project Development",
  "Cybersecurity & Ethical Hacking Training",
  "Internship & Global Career Opportunities",
  "Advanced Networking, Cloud & Data Security Skills"
],
    // Curriculum updated to match the image provided
    curriculum: [
      {
        year: "Year 01",
        focus: "Computing Fundamentals",
        semesters: [
          {
            semester: "Semester I",
            subjects: [
              "GEC122 Intermediate English",
              "HUM132 Fuure Skill",
              "GEC112 General Psychology",
              "BUS101 Introductory Business for Digital Generation",
              "ICT100 Fundamental of Information Technology",
              "MAT119 Mathematics for Information Technology",
              "CSC101 Fundamentals of Programming & Laboratory",
            ],
          },
          {
            semester: "Semester II",
            subjects: [
              "HUM131 Design Thinking for Creative Work",
              "GEC223 Advance English",
              "BCS114 Using Technology in Digital Society",
              "GEC101 Tools for the Digital Age",
              "MAT231 Descrete Mathematics",
              "CSC151 C Programming",
              "CSC155 Microprocessor & Computer Architecture",
            ],
          },
        ],
      },
      {
        year: "Year 02",
        focus: "Software Core",
        semesters: [
          {
            semester: "Semester III",
            subjects: [
              "ENG209 English Presentation Skills for Careers",
              "GSC156 Fundamentals of Multimedia",
              "BSC119 Social Media for Modern Communication",
              "CSC115 Data Structures Laboratory and Algorithms",
              "CSC403 Web System and Technology",
              "CSC303 Database System and Laboratory",
              "CSC467 Computer Network Technology and Cloud Computing",
            ],
          },
          {
            semester: "Semester IV",
            subjects: [
              "SOC136 Digital Literacy",
              "CSC364 Software Engineering",
              "CSC251 Operating System",
              "CSC121 Object Oriented Programming",
              "CSC207 Numerical Methods",
              "CSC316 Cryptography",
              "CSC209 Computer Graphics",
            ],
          },
        ],
      },
      {
        year: "Year 03",
        focus: "Advanced Technologies",
        semesters: [
          {
            semester: "Semester V",
            subjects: [
              "CSC112 Cyber Law and Ethics in Information Technology",
              "Specialization Area-1",
              "Specialization Area-2",
              "Specialization Area-3",
              "Specialization Area-4",
              "Specialization Area-5",
              "Specialization Area-6",
            ],
          },
          {
            semester: "Semester VI",
            subjects: [
              "Specialization Area-7",
              "Specialization Area-8",
              "Specialization Area-9",
              "Specialization Area-10",
              "Specialization Area-11",
              "Specialization Area-12",
            ],
          },
        ],
      },
      {
        year: "Year 04",
        focus: "Specialization & Research",
        semesters: [
          {
            semester: "Semester VII",
            subjects: [
              "Specialization Area-13",
              "CSC415 Research Methods for Engineering",
              "SDM434 Project Work on Specialization Area",
              "SDM299 Bachelor Thesis on Specialization Area",
              "GAD499 Cooperative Education/Internship",
            ],
          },
        ],
      },

      {
        year: "Specialization Areas",
        focus: "Specialization & Research",
        semesters: [
          {
            semester: "Cyber Security Group (Compulsory)",
            subjects: [
              "CSC447 Commercial Operating System for Administration",
              "CSC448 Commercial Operating System for Network Administration",
              "CSC449 Commercial Operating System for Secutiry Administration",
              "CSC460 Information Technology System Analysis and Design",
              "ICT465 Information Security Management",
              "CT468 Cyber Crime",
              "ICT469 Hacking and Penetrate Security Testing",
              "ICT476 Special Topics in Cyber Security",
            ],
          },

          {
            semester: "Cyber Security Group (Elective)",
            subjects: [
              "ICT480 Network Programming",
              "CSC411 Network System Management",
              "CSC412 Computer Networkinig Security",
              "CSC413 Professional Development",
              "CSC414 Advanced Network Security",
              "CSC416 Desing and Implementation (Cyber Security)",
              "CSC417 Project Testing and Implementatin (Cyber Security)",
              "CSC418 Network Operating System",
            ],
          },

          {
            semester: "Artificial Intelligence (AI) Group (Compulsory)",
            subjects: [
              "CSD211 Introduction to Interaction Desing",
              "CSC434 Human Interaction Design",
              "CSD234 AI and Intelligent Agent",
              "ICT300 Human-Computer Interaction",
              "ICT312 System Integratin and Architecture",
              "AIT312 AI Applications",
              "AIT313 Data Warehousing and Mining",
              "AIT416 Introduction to AI",
            ],
          },

          {
            semester: "Artificial Intelligence (AI) Group (Elective)",
            subjects: [
              "AIT418 Introduction to Machine Learning",
              "AIT419 Soft Computing",
              "AIT421 Algorithms in AI",
              "AIT422 Machine Learning Techniques",
              "AIT423 Ethics and Social Implications of AI",
              "AIT425 Digital Image Processing",
              "AIT426 Internet of Things and Robotics",
              "AIT427 Data Science with R Programming for AI",
            ],
          },

          {
            semester: "Computer Science & S/W Innovation Group (Compulsory)",
            subjects: [
              "CSD211 Introduction to Interaction Design",
              "CSD221 Software Development-1",
              "CSD223 Software Development-2",
              "CSD252 Introduction to Computer System",
              "CSD333 Web Design and Database",
              "CSD334 Programming Language",
              "CSD338 Web Programming",
              "CSD461 Hardware-Software Interface",
            ],
          },
          {
            semester: "Computer Science & S/W Innovation Group (Elective)",
            subjects: [
              "CSD233 Software Desing",
              "CSD234 AI and Intelligent Agent",
              "CSD236 Operative System and Concurrency",
              "CSD413 Professional Development",
              "CSD415 Research Methods for Engineering",
              "CSD416 Desing & Implementation",
            ],
          },
          {
            semester: "Mobile Application Development Group (Compulsory)",
            subjects: [
              "CSC237 Mobile Application Development-1",
              "CSC238 Mobile Application Development-2",
              "CSC242 Web Service",
              "CSC245 Mobile Programming-1",
              "CSC246 Mobile Programming-2",
              "CSC234 Human Intraction Desing for Mobile Device",
              "CSC235 Frameworks for Mobile Application Development",
              "CSC236 Special Topics Mobile Application Development",
            ],
          },
          {
            semester: "Mobile Application Development Group (Electives)",
            subjects: [
              "IGD236 Computer Games Programming",
              "CSD234 AI & Intelligent Agent",
              "CSD235 Software Engineering",
              "CSC413 Professional Development",
              "CSC416 Design & Implementation",
              "CSC414 Advanced Network Security",
            ],
          },
          {
            semester: "Multimedia Technology Group (Compulsory)",
            subjects: [
              "MMT221 Technical Desing & Art Drawing",
              "MMT222 Digital Media Development",
              "MMT321 2D Computer Animation Laboratory",
              "MMT322 Video and Audio Production",
              "MMT351 3D Modelling",
              "MMT352 3D Animation",
              "MMT371 Instructional Multimedia",
              "MMT373 Digital Publisher Development",
            ],
          },
          {
            semester: "Multimedia Technology Group (Elective)",
            subjects: [
              "MMT442 Game Multimedia Development",
              "MMT480 Special Topics for Multimedia Technology-1",
              "MMT481 Special Topics for Multimedia Technology-2",
              "CSD234 AI & Intelligent Agent",
              "CSD413 Professional Developement",
              "CSD416 Desing and Implementation",
            ],
          },
          {
            semester: "Imformation Communicatin Technology Group (Compulsory)",
            subjects: [
              "ICT446 Introduction to Commercial Operating System",
              "BCS478 Information Technology Entrepreneurship",
              "ICT300 Human-Computer Interaction",
              "ICT306 Information Management & Security",
              "ICT312 System Integration & Architecture",
              "ICT313 Integrative Programming and Technology",
              "ICT401 System Administration and Maintenance",
              "ICT311 Computer and Communication System",
            ],
          },
          {
            semester: "Imformation Communicatin Technology Group (Elective)",
            subjects: [
              "ICT323 Data Communication and Network",
              "BCS474 Network Design, Implementation, and Case Study",
              "ICT493 Technology Innovation",
              "ICT495 Special Topics in Information Technology-1",
              "ICT495 Special Topics in Information Technology-2",
            ],
          },
        ],
      },
    ],
    // Curriculum updated to match the image provided

    future_opportunities: [
  "The BSc ICT program at Yeti International College prepares graduates for high-demand careers in the global IT industry. Students gain expertise in software development, networking, cybersecurity, data analysis, and cloud computing, opening opportunities in multinational companies, tech startups, and government sectors with strong career growth and international job prospects."
],

careers: [
  "Software Developer / Full Stack Developer",
  "Ethical Hacker & Cybersecurity Specialist",
  "Network Engineer & System Administrator",
  "Database Administrator (DBA)",
  "Information System Analyst & IT Consultant",
  "Data Analyst / IT Project Manager"
],
  },
};
