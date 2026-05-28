export const personalInfo = {
  name: "Lata Dewangan",
  firstName: "Lata",
  lastName: "Dewangan",
  title: "Full Stack Web Developer",
  tagline: "Crafting Digital Experiences\nWith Precision & Elegance",
  email: "lata04951@gmail.com",
  phone: "+91 8827563077",
  location: "Raipur Chhattisgarh India",
  github: "https://github.com/Lata2",
  linkedin: "https://www.linkedin.com/in/lata-dewangan",
resume: "/lataD_resume.pdf",
  bio: "Passionate full-stack developer with 2 years of experience building scalable web applications. I specialize in creating seamless digital experiences from concept to deployment.",

};

export const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Next.js Expert",
  "Node.js Developer",
  "UI/UX Enthusiast",
];

export const skills = {
  frontend: [
    { name: "React.js", level: 92 },
    { name: "Next.js", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Framer Motion", level: 78 },
    { name: "Redux", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 87 },
    { name: "Express.js", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 82 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 72 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Figma", level: 78 },
    { name: "Prisma ORM", level: 82 },
    { name: "Jest", level: 76 },
  ],
};

export const techMarquee = [
  "React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "Django", "Python", "Docker",  "Tailwind CSS",
  "Express.js", "Redux",
];
export const projects = [
  {
    id: 1,
    title: "Funday TV",
    category: "Full Stack",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment integration, and an admin dashboard.",
    longDescription:
      "Built with Next.js 14, TypeScript, PostgreSQL, and Stripe integration. Features include product search, filtering, cart management, and order tracking.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    related: ["OTT Platform", "Streaming App", "Entertainment App"],
    github: "#",
    live: "#",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "Court Case Monitoring System",
    category: "Full Stack",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop kanban boards, and team collaboration features.",
    longDescription:
      "Developed using React, Node.js, Socket.io, and MongoDB. Supports real-time collaboration, file uploads, and deadline tracking.",
    tags: ["Angular", "Node.js", "PostgreSQL"],
    related: ["Legal Tech", "Case Tracking", "Monitoring System"],
    github: "#",
    live: "#",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "Billzap Billing System",
    category: "Frontend",
    description:
      "A headless CMS-powered developer blog with MDX support, syntax highlighting, and SEO optimization.",
    longDescription:
      "Built with Next.js, MDX, and a custom CMS. Features dark/light mode, reading progress, and newsletter subscription.",
    tags: ["React","Django","Tailwind","Redux","PostgreSQL"],
    related: ["Billing App", "Invoice System", "Finance Dashboard"],
    github: "#",
    live: "#",
    featured: false,
    year: "2023",
  },
];
export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Blazeads",
    location: "Raipur CG India",
    period: "May 2026 – Present",
    type: "Full-time",
    related: [
      "OTT Platform",
      "Streaming Application",
      "Next.js",
      "Node.js",
      "Video Streaming",
      "Full Stack Development"
    ],
    description:
      "OTT application development and maintenance. Collaborate with cross-functional teams to design and implement new features, optimize performance, and ensure a seamless user experience.",
    highlights: [
      "Architected a microservices backend serving 100k+ daily requests",
      "Mentored 3 junior developers and conducted weekly code reviews",
      "Integrated third-party APIs including Stripe, Twilio, and AWS S3",
      "Achieved 99.9% uptime through robust error handling and monitoring",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "National Informatics Centre (NIC)",
    location: "Raipur CG India",
    period: "Jan 2025 – July 2025",
    type: "Internship",
    related: [
      "Government Projects",
      "Court Case Monitoring System",
      "Angular",
      "Node.js",
      "MySQL",
      "e-Governance"
    ],
    description:
      "Developed and maintained web applications for government services, collaborating with cross-functional teams to enhance user experience and optimize performance.",
    highlights: [
      "Built a 20+ component React library used across multiple projects",
      "Improved mobile performance scores from 60 to 92 (Lighthouse)",
      "Implemented WCAG 2.1 AA accessibility standards",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Yashvitech IT Solutions",
    location: "Raipur CG India",
    period: "June 2024 – Dec 2024",
    type: "Full-time",
    related: [
      "Billzap Billing System",
      "Frontend Development",
      "React",
      "JavaScript",
      "Responsive Design",
      "UI/UX"
    ],
    description:
      "Billing system development and maintenance. Collaborate with cross-functional teams to design and implement new features, optimize performance, and ensure a seamless user experience.",
    highlights: [
      "Built 15+ client websites from scoping to production deployment",
      "Managed full project lifecycle independently",
      "Maintained consistent 5-star client satisfaction rating",
    ],
  },
  {
    id: 4,
    role: "Full Stack Developer Intern",
    company: "Yashvitech IT Solutions",
    location: "Raipur CG India",
    period: "Nov 2023 – May 2024",
    type: "Internship",
    related: [
      "Web Development",
      "Client Projects",
      "MERN Stack",
      "Full Stack Development",
      "Business Applications",
      "Custom Solutions"
    ],
    description:
      "Delivered custom web solutions for  clients across diverse industries including retail, education, and healthcare.",
    highlights: [
      "Built client's websites from scoping to production deployment",
      "Managed full project lifecycle independently",
      "Maintained consistent 5-star client satisfaction rating",
    ],
  },
];
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
