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
      company: "<<Same company as per CV>>",
      companylogo: require("./assets/images/companyLogo.png"), // or remove logo line
      date: "1997 – 2004 | India",
      desc:
        "Early-career engineering and testing roles supporting telecom/network environments.",
      descBullets: [
        "Replace these bullets with what you want highlighted from 1997–2004 (2–3 strong points is enough)",
        "Keep it outcome-focused (uptime, rollout support, test cycles, customer environments, etc.)"
      ]
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
