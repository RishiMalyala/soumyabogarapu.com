/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Soumya Bogarapu",
  title: "Hi all, I'm Soumya",
  subTitle: emoji(
    "Global Network Transformation Leader (20+ Years) | SD-WAN & Data Center Architecture | Telecom Infrastructure Resilience & Secure Hybrid Network Design Architect."
  ),
  resumeLink: "/files/Soumya_Bogarapu_Resume.pdf",
  awardsLink: "/files/Soumya_Bogarapu_Awards.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/soumya-bogarapu-1796919a",
  facebook: "https://www.facebook.com/soumya.bogarapu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am a senior network architect with extensive experience leading global-scale network modernization programs for telecom operators and multinational enterprises. I sppecialize in designing secure, scalable, and high-availability network architectures across data centers, cloud, and hybrid environments with a proven track record in directing network transformation initiatives, SDWAN strategy, and service delivery operations supporting mission-critical communication infrastructures across multiple regions. Nationally recognized for driving operational excellence, building high-performing teams, and enabling secure digital connectivity at national and enterprise scale.",
  skills: [
    emoji(
      "⚡ Networking Architecture & Protocols: BGP, OSPF, MPLS, VXLAN, IPSec, QoS, Traffic Engineering across global WAN backbones"
    ),
    emoji("⚡ SD-WAN & Data Center: Versa SD-WAN Strategy & Deployment (200+ Sites), Cisco ACI Spine-Leaf Fabric, Hybrid On-Prem/Cloud Connectivity"),
    emoji(
      "⚡ Hardware & Infrastructure Systems: Cisco Catalyst 9300/3850, Nexus 5K/7K/9K, ISR 4K, High-Availability DC Network Design & Lifecycle Governance"
    ),
    emoji(
      "⚡ Application Delivery & Security: F5 LTM/GTM, Cisco ISE, DNAC, Zero-Trust Access Policies, Enterprise Secure VPN & Remote Access Architecture"
    ),
    emoji(
      "⚡ Network Operations & Tooling: Zabbix, NIMSOFT, SolarWinds, Infoblox DDI, Riverbed WAN Optimization, SLA/Latency/Performance Analytics"
    ),
    emoji(
      "⚡ Leadership & Delivery: Global Team Leadership (30+ Engineers and Managers), Cross-Functional Program Delivery, Cost & Capacity Optimization, L3 Escalation Authority"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
      { skillName: "Cisco", icon: "/icons/cisco.svg" },
      { skillName: "Cisco ACI", icon: "/icons/cisco-aci.svg" },
      { skillName: "Versa SD-WAN", icon: "/icons/versa.svg" },
      { skillName: "F5 (LTM/GTM)", icon: "/icons/f5.svg" },
      { skillName: "Infoblox DDI", icon: "/icons/infoblox.svg" },
      { skillName: "Riverbed", icon: "/icons/riverbed.svg" },
      { skillName: "Zabbix", icon: "/icons/zabbix.svg" },
      { skillName: "SolarWinds", icon: "/icons/solarwinds.svg" },
      { skillName: "ITIL", icon: "/icons/itil.svg" }
    ],
      display: true
    };

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Birla Institute of Technology and Science (BITS), Pilani",
      logo: require("./assets/images/bitsPilaniLogo.png"),
      subHeader: "Master of Science (M.Sc.) – Software Systems",
      duration: "Pilani, India",
      desc:
        "Postgraduate program focused on software systems, enterprise computing, and applied systems engineering, complementing a strong foundation in telecommunications and network architecture.",
      descBullets: [
        "Advanced studies in software systems and enterprise-scale computing",
        "Applied learning supporting large-scale network transformation and service delivery roles"
      ]
    },
    {
      schoolName: "Andhra University",
      logo: require("./assets/images/andhraUniversityLogo.png"),
      subHeader: "Bachelor of Engineering (B.E.) – Electronics & Communications Engineering",
      duration: "Visakhapatnam, India",
      desc:
        "Undergraduate engineering degree in electronics and communications, forming the technical foundation for a career in telecommunications, data networks, and enterprise infrastructure.",
      descBullets: [
        "Core focus on communication systems, electronics, and network fundamentals"
      ]
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// Work experience section
const workExperiences = {
  display: true,
  experience: [
      {
        role: "Deputy General Manager – Global Network Architecture & Transformation",
        company: "Tata Communications Ltd",
        companylogo: require("./assets/images/tataLogo.png"),
        date: "April 2025 – Present | Chennai, India",
        desc:
          "Provides executive leadership for global network architecture, transformation strategy, and large-scale service delivery across Tata Communications’ enterprise and carrier-grade infrastructure portfolio.",
        descBullets: [
          "Leads and mentors a multidisciplinary team of 27 senior network architects, engineers, and operations leads across WAN, SD-WAN, data centre, and security domains",
          "Owns end-to-end architectural governance for global network modernisation programs, including SD-WAN, hybrid cloud interconnect, and multi-region data centre fabrics",
          "Drives technical strategy, standards, and design assurance for carrier-grade MPLS, BGP, VXLAN, IPSec, and zero-trust network architectures",
          "Partners with executive stakeholders to align network transformation roadmaps with business growth, resilience, security, and cost-optimisation objectives",
          "Oversees operational excellence initiatives, improving network availability, scalability, and incident response across mission-critical enterprise environments"
        ]
      },
      {
      role: "Senior Manager – Global Network Architecture & Service Delivery",
      company: "Tata Communications Ltd",
      companylogo: require("./assets/images/tataLogo.png"), // add this logo file
      date: "2016 – Present | Chennai, India",
      desc:
        "Leads enterprise-wide network transformation and operational governance across multi-region data centres and distributed WAN environments; manages a 30+ person global engineering team.",
      descBullets: [
        "Directed multi-phase SD-WAN rollout across 200+ sites; improved latency ~35% and enabled secure hybrid connectivity",
        "Led data-centre fabric uplift to Cisco ACI spine–leaf and strengthened segmentation through policy-based controls",
        "Improved resilience via proactive monitoring & incident playbooks (Zabbix/NIMSOFT/Riverbed); reduced MTTR ~28%"
      ]
    },
    {
      role: "Manager – Network Engineering & Service Transition",
      company: "Tata Communications Ltd",
      companylogo: require("./assets/images/tataLogo.png"),
      date: "2011 – 2016 | Chennai, India",
      desc:
        "Owned delivery of large-scale network upgrade programs across MPLS WANs, data centres, and enterprise communication environments.",
      descBullets: [
        "Designed and implemented multi-region WAN topologies for global enterprise clients",
        "Supported early hybrid-cloud routing frameworks to improve cross-site performance and reliability",
        "Acted as L3 escalation lead during critical incidents affecting global service clusters"
      ]
    },
    {
      role: "Assistant Systems Technician (AST)",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcsLogo.png"), // add this logo file
      date: "2007 – 2010 | New Jersey, USA",
      desc:
        "Supported high-availability enterprise WAN and data-centre environments; coordinated with global teams on cutovers, acceptance testing, and operational readiness.",
      descBullets: [
        "Seconded onsite to U.S. operations under intra-company transfer (L1) for coordination and knowledge transfer",
        "Supported Cisco WLC deployments, AP provisioning, RF tuning and site survey review",
        "Handled L2/L3 escalations for WAN performance, QoS prioritisation and failover scenarios"
      ]
    },
    {
      role: "Technical Support Executive",
      company: "CMC Ltd",
      companylogo: require("./assets/images/cmcLogo.png"), // add this logo file
      date: "2004 – 2007 | Hyderabad, India",
      desc:
        "Supported enterprise and public-sector network environments in an SLA-driven managed services model.",
      descBullets: [
        "Supported LAN/WAN deployments: switch configs, VLAN segmentation, routing basics, redundancy testing",
        "Assisted Wi-Fi rollout: AP provisioning, SSID configuration, RF validation and performance tuning",
        "Performed routine firewall policy/VPN changes and remote access troubleshooting"
      ]
    },
    {
      role: "Graduate Trainee Engineer / Test Engineer",
      company: "CMC Ltd",
      companylogo: require("./assets/images/cmcLogo.png"), // or remove logo line
      date: "1997 – 2004 | India",
      desc:
        "Early-career engineering and testing roles supporting telecom/network environments.",
      descBullets: [
        "Graduate Training and probationary period at CMC Ltd",
        "Specialized training involving Government of India's telecommunication assets and roll-out deployement"
      ]
    }
  ]
};


// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle:
    "Selected large-scale transformation and infrastructure programs delivered across global telecom and enterprise environments.",
  projects: [
    {
      image: require("./assets/images/LAProject.png"),
      projectName: "Los Angeles (Alameda L90) Site Exit & Remediation",
      projectDesc:
        "Led and supported the successful, ahead-of-time exit of the Los Angeles (Alameda L90) site, completing a complex multi-year program and delivering an estimated ~$2.4M USD annual savings through site remediation and landlord acceptance."
    },
    {
      image: require("./assets/images/PIDProject.png"),
      projectName: "Project PID005042 – Marseille Exit (High-Critical Traffic Migration)",
      projectDesc:
        "Supported a highly complex, high-volume traffic migration as part of the Marseille Exit program spanning 3+ years, helping drive execution focus and technical continuity through a long-running, mission-critical transformation."
    },
    {
      image: require("./assets/images/CIENA.png"),
      projectName: "CIENA MCP Server Migration (200+ Nodes)",
      projectDesc:
        "Delivered the Ethernet CIENA MCP server migration for Pune and Chennai, moving 200+ CIENA nodes from the legacy CIENA One Control Server to the new CIENA MCP server with strong execution and collaboration."
    },
    {
      image: require("./assets/images/SDWAN.png"),
      projectName: "SD-WAN Enablement for India T1 Offices",
      projectDesc:
        "Drove SD-WAN enablement across all T1 offices in India, building momentum for broader international rollout and improving standardisation, delivery velocity, and operational readiness."
    },
    {
      image: require("./assets/images/DRdrill.png"),
      projectName: "Optimus DR Environment (Chennai) – DR Drill Execution",
      projectDesc:
        "Led setup and documentation of the Optimus DR environment in Chennai, ensuring standalone functionality and successfully executing DR switch-over and switch-back during the DR drill with detailed runbooks."
    },
    {
      image: require("./assets/images/Keycloak.png"),
      projectName: "Keycloak High Availability via Separate Domain + GSLB",
      projectDesc:
        "Enabled Keycloak to operate under a separate domain and integrated it with GSLB to deliver high availability across two locations (Pune and Chennai), reducing downtime risk for dependent applications."
    },
    {
      image: require("./assets/images/TCLnewoffice.png"),
      projectName: "TCL Chennai New Office Network Delivery (RMZ)",
      projectDesc:
        "Coordinated cross-functional delivery for the TCL New Office project in RMZ Chennai—driving vendor alignment, stakeholder coordination, and internal execution under rigid timelines to support a best-in-class office build."
    }
  ],
  display: true
};

// Achievement Section
// Include certifications, recognitions and leadership accomplishments

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Professional certifications, leadership recognition, and major career accomplishments across global telecom and enterprise networks.",

  achievementsCards: [
    {
      title: "Cisco Certified Network Professional (CCNP) – Data Center",
      subtitle:
        "Advanced professional certification validating deep expertise in data center networking, spine–leaf architectures, virtualization, automation, and secure infrastructure design.",
      image: require("./assets/images/ciscoLogo.png"),
      imageAlt: "Cisco Logo",
      footerLink: []
    },
    {
      title: "Cisco Enterprise Infrastructure Specialist",
      subtitle:
        "Specialist certification covering enterprise routing, switching, SD-WAN, wireless, and automation across large-scale production networks.",
      image: require("./assets/images/ciscoLogo.png"),
      imageAlt: "Cisco Logo",
      footerLink: []
    },
    {
      title: "Versa SD-WAN Certified Professional",
      subtitle:
        "Certified expert in Versa SD-WAN architecture, deployment, security integration, and large-scale enterprise rollout programs across multi-region WAN environments.",
      image: require("./assets/images/versaLogo.png"),
      imageAlt: "Versa Networks Logo",
      footerLink: []
    },
    {
      title: "ITIL V3 & V4 Certified",
      subtitle:
        "Certified in IT Service Management frameworks, driving operational excellence, service governance, incident management, and enterprise-scale delivery assurance.",
      image: require("./assets/images/itilLogo.png"),
      imageAlt: "ITIL Logo",
      footerLink: []
    },
    {
      title: "Global Network Transformation Leader (20+ Years)",
      subtitle:
        "Recognised for leading multi-billion-dollar global telecom and enterprise network modernisation programs, delivering high-availability, secure, and scalable digital infrastructure across continents.",
      image: require("./assets/images/tataLogo.png"),
      imageAlt: "Tata Communications Logo",
      footerLink: []
    },
    {
      title: "Executive Leadership & Global Delivery Excellence",
      subtitle:
        "Built and led global engineering organisations of 30+ senior architects and engineers, driving network resilience, cloud integration, SD-WAN adoption, and mission-critical service delivery for Fortune 500 enterprises.",
      image: require("./assets/images/tataLogo.png"),
      imageAlt: "Global Network Icon",
      footerLink: []
    }
  ],
  display: true
};
const openSource = {
  display: false,
  showGithubProfile: "false"
};

// Family Section (reusing Blog section UI)

// Family Section

const familySection = {
  display: true,
  title: "Family",
  subtitle:
    "Beyond work, I’m grounded by family — the people who keep me humble, motivated, and grateful.",

  description: `
Aside from my very busy and demanding career, I am deeply supported by my family — the people who keep me humble, motivated, and grateful every single day. My husband owns and runs an IT consultancy in the United States, and together we have built a home grounded in ambition, resilience, and strong values.

I am a proud mother of four remarkable boys. My eldest is an Electrical Engineer and researcher at UNSW Sydney. My second son is also an Electrical Engineer, a graduate of IIT Madras after cracking the IIT-JEE — arguably India’s most competitive engineering entrance exam — and previously worked as a Software Development Engineer at Microsoft. Today, he leads his own AI-FinTech startup in Bangalore.

My younger twin boys are just as driven and talented, currently on track to become an engineer and a doctor.

And of course, I am also a proud mum to two cats — Kiki and Maggi — who firmly believe they run the household and keep everyone (including me) in line.

Above all, aside from my high-powered career, I am most proud of my family and the values we share — integrity, discipline, curiosity, and the courage to dream big.
  `,

  image: require("./assets/images/family.png")
};
// Talks Sections

const blogSection = { display: false, blogs: [], displayMediumBlogs: "false" };

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "soumya.bogarapu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  familySection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
