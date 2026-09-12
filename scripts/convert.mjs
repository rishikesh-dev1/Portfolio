import fs from 'fs';
import path from 'path';

const htmlPath = 'd:/Fprojects/portfolio/shan-portfolio/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) {
  console.error('no body');
  process.exit(1);
}
let body = bodyMatch[1];
body = body.replace(/<script[\s\S]*?<\/script>/gi, '');

body = body
  .replace(/\bclass=/g, 'className=')
  .replace(/\bfor=/g, 'htmlFor=')
  .replace(/stroke-width=/g, 'strokeWidth=')
  .replace(/stroke-linecap=/g, 'strokeLinecap=')
  .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
  .replace(/fill-rule=/g, 'fillRule=')
  .replace(/clip-rule=/g, 'clipRule=')
  .replace(/tabindex=/g, 'tabIndex=')
  .replace(/src="assets\//g, 'src="/assets/')
  .replace(/href="assets\//g, 'href="/assets/')
  .replace(/href="index\.html"/g, 'href="/"')
  .replace(/href="about\.html"/g, 'href="#about"')
  .replace(/href="contact\.html"/g, 'href="#contact"')
  .replace(/href="service-details\.html"/g, 'href="#services"')
  .replace(/href="portfolio-details\.html"/g, 'href="#portfolio"')
  .replace(/href="[a-z0-9-]+\.html"/g, 'href="#"')
  .replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />')
  .replace(/<br\s*>/g, '<br />')
  .replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />')
  .replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />')
  .replace(/&nbsp;/g, '{""}');

// Fix accidental strokeLinejoin=/
body = body.replace(/strokeLinejoin=\//g, 'strokeLinejoin=');

const reps = [
  [/Shan Logo/g, 'Rishikesh Logo'],
  [
    /Hello! I'm Shan <br \/>\s*\n\s*a digital designer and creative developer\./g,
    "Hello! I'm Rishikesh <br />\n                        a Full Stack Software Engineer.",
  ],
  [/a digital designer and creative developer\./g, 'a Full Stack Software Engineer.'],
  [
    /Design, branding and web development made better\./g,
    'Full-stack platforms, cloud systems and intelligent apps.',
  ],
  [/Client Satisfaction Rate/g, 'Project Delivery Focus'],
  [/Projects Launched/g, 'Engineered Works'],
  [/Global Clients and Growing/g, 'Verified Credentials'],
  [/data-purecounter-end="98"/g, 'data-purecounter-end="100"'],
  [/data-purecounter-end="70"/g, 'data-purecounter-end="11"'],
  [/data-purecounter-end="96"/g, 'data-purecounter-end="12"'],
  [/data-purecounter-end="478"/g, 'data-purecounter-end="3"'],
  [/data-purecounter-end="115"/g, 'data-purecounter-end="11"'],
  [/In Client revenue growth/g, 'Deployed Platforms'],
  [/shan@gmail\.com/g, 'LinkedIn / GitHub'],
  [/\+44 20 3999 1245/g, 'Pune & Nashik, India'],
  [/Manchester 21, Zurich, CH/g, 'Pune & Nashik, Maharashtra, India'],
  [/omioinfo@mail\.com/g, 'github.com/Rishikesh5577'],
  [/techubinfo@mail\.com/g, 'github.com/Rishikesh5577'],
  [/\(\+00\) 678 345 98568/g, 'Open to opportunities'],
  [/© 2025/g, '© 2026'],
  [/>Shan</g, '>Rishikesh<'],
  [/download cv/g, 'download cv'],
  [/href="contact\.html"/g, 'href="https://drive.google.com/file/d/1nvwUxjR-vELyPWrxXe2T0HTFcv9fBm0t/view?usp=sharing"'],
];

for (const [a, b] of reps) body = body.replace(a, b);

// Hero skill list (first occurrences in banner)
body = body.replace(
  /(banner-three-list[\s\S]*?)Web Development/,
  '$1MERN Stack Development'
);
body = body.replace(
  /(banner-three-list[\s\S]*?)Branding & Identity/,
  '$1AWS Cloud & DevOps'
);
body = body.replace(
  /(banner-three-list[\s\S]*?)Creative Strategy/,
  '$1Machine Learning & AI'
);
body = body.replace(
  /(banner-three-list[\s\S]*?)UI\/UX Design/,
  '$1REST APIs & Microservices'
);
body = body.replace(
  /(banner-three-list[\s\S]*?)Digital Marketing/,
  '$1React & Scalable Systems'
);

body = body.replace(
  /I am dedicated to bringing your vision to life by crafting\s+unique, highly aesthetic, and impactful digital\s+experiences\. My work speaks louder than words—explore the\s+results\./,
  'I am dedicated to building scalable web ecosystems, resilient cloud architectures, and ML-powered products. My work speaks louder than words—explore the results.'
);

// About paragraphs
body = body.replace(
  /I’m a passionate digital designer and web developer\s+focused on creating modern, user-centered digital\s+experiences\. I blend creativity with clean, efficient\s+code to build websites that are not only visually\s+appealing but also functional, fast, and scalable\./,
  'I am Rishikesh Wakchaure, an Information Technology graduate and Full Stack Software Engineer committed to building scalable web ecosystems, resilient cloud architectures, and machine-learning powered products.'
);

body = body.replace(
  /With a strong eye for design & a solid technical\s+foundation, I transform complex ideas into simple\s+intuitive digital solutions\. I believe great design is\s+purposeful-every layout, interaction, and line of code\s+is crafted to enhance usability and deliver real value\./,
  'My approach unites systematic back-end engineering (clean API contracts, database optimizations, AWS hosting) with bespoke front-end refinement. Having engineered 11+ deployed platforms and completed 3 industry internships, I prioritize speed, accessibility, and maintainability.'
);

body = body.replace(
  /From concept to launch, I work closely with clients to\s+understand their goals, audience and brand vision\. my\s+collaborative approach ensures and project reflects the\s+client’s identity while business objectives and\s+performance standards\./,
  'As an Infosys Springboard 6.0 fellow and Associate Software Developer Intern at Gamotech, I build production React UIs, high-throughput REST APIs, and cloud deployments with rigorous software standards.'
);

// About image -> profile
body = body.replace(
  'src="/assets/images/thumbs/about-three-thumb.png"',
  'src="/assets/images/thumbs/profile.png"'
);

// Hero man image optional keep template look, or use profile - keep template for exact design

// Fix /5 and k+ counters for about section
body = body.replace(
  /(data-purecounter-end="3"[\s\S]{0,80}?><\/span)\s*\/5/,
  '$1>+'
);
body = body.replace(
  /(data-purecounter-end="11"[\s\S]{0,80}?><\/span)\s*k\+/,
  '$1>+'
);

// Services content
const services = [
  {
    title: 'Full Stack Development',
    tags: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Cloud & DevOps',
    tags: ['AWS', 'Docker', 'CI/CD'],
  },
  {
    title: 'MERN Applications',
    tags: ['Express.js', 'REST APIs', 'Auth'],
  },
  {
    title: 'AI & Machine Learning',
    tags: ['Python', 'YOLOv8', 'OpenCV'],
  },
];

const serviceTitles = [
  'Illustration Design',
  'Business Branding',
  'Web Development',
  'Application Design',
];
serviceTitles.forEach((old, i) => {
  body = body.replace(`>${old}<`, `>${services[i].title}<`);
});

// Replace first Creative Direction / Brand Identity / Graphic Design blocks in services (4 times)
for (let i = 0; i < 4; i++) {
  body = body.replace(
    />Creative Direction</,
    `>${services[i].tags[0]}<`
  );
  body = body.replace(/>Brand Identity</, `>${services[i].tags[1]}<`);
  body = body.replace(/>Graphic Design</, `>${services[i].tags[2]}<`);
}

// Portfolio items
const projects = [
  {
    title: 'Dynamic World',
    tags: ['MERN', 'AWS'],
    href: 'https://www.dynamicworld.in/',
    img: '/assets/images/thumbs/portfolio-three-thumb1.jpg',
  },
  {
    title: 'RestroBazaar',
    tags: ['MERN', 'Cloud'],
    href: 'https://restrobazaar.in/',
    img: '/assets/images/thumbs/portfolio-three-thumb2.jpg',
  },
  {
    title: 'SareeSansar',
    tags: ['MERN', 'Payments'],
    href: 'https://sareesansaaar-1.onrender.com/',
    img: '/assets/images/thumbs/portfolio-three-thumb3.jpg',
  },
  {
    title: 'One Cut\'s Salon',
    tags: ['React', 'UI/UX'],
    href: 'https://onecuts.vercel.app/',
    img: '/assets/images/thumbs/portfolio-three-thumb4.jpg',
  },
];

const oldProjects = [
  'Epic Strategy App',
  'Branding Identity',
  'PixelCraft Mobile UI',
  'Creative Studio',
];
oldProjects.forEach((old, i) => {
  body = body.replace(`>${old}<`, `>${projects[i].title}<`);
});

// Experience / awards -> real experience
const experiences = [
  {
    num: '01',
    org: 'Infosys',
    title: 'Software Development Intern — Springboard 6.0',
    year: '2025',
  },
  {
    num: '02',
    org: 'Gamotech',
    title: 'Associate Software Developer Intern',
    year: '2025',
  },
  {
    num: '03',
    org: 'Sumago',
    title: 'Full Stack Development Intern',
    year: '2024',
  },
  {
    num: '04',
    org: 'Oracle',
    title: 'OCI DevOps Professional Credential',
    year: '2025',
  },
  {
    num: '05',
    org: 'AWS',
    title: 'Cloud Practitioner Specialization',
    year: '2025',
  },
  {
    num: '06',
    org: 'Amrut',
    title: 'Innovation Expo Winner Certificate',
    year: '2024',
  },
];

// Testimonials
body = body.replace(/Sophia Reynolds/g, 'Hiring Managers');
body = body.replace(/Daniel Roberts/g, 'Project Leads');
body = body.replace(/>Founder</g, '>Open Roles<');
body = body.replace(/>CEO</g, '>Collaborators<');

// Let's create something meaningful - keep
body = body.replace(
  /Let’s create something meaningful|Let's create something meaningful/g,
  "Let's build something scalable"
);

// Footer giant name
body = body.replace(
  /(<h2 className="footer-three-bottom-title[^"]*">)[^<]*(<\/h2>)/,
  '$1Rishikesh$2'
);

// CV link for download buttons
body = body.replace(
  /className="tw-hover-btn bg-black text-white fw-bold tw-py-4 tw-px-10 d-inline-block hover-text-white text-uppercase tw-rounded-md"\s+href="#"/,
  'className="tw-hover-btn bg-black text-white fw-bold tw-py-4 tw-px-10 d-inline-block hover-text-white text-uppercase tw-rounded-md"\n                href="https://drive.google.com/file/d/1nvwUxjR-vELyPWrxXe2T0HTFcv9fBm0t/view?usp=sharing"\n                target="_blank"\n                rel="noreferrer"'
);

// Social links
body = body.replace(
  /(<div className="header-three-social[\s\S]*?<ul className="d-flex tw-gap-205">[\s\S]*?<a[\s\S]*?href=")#"([\s\S]*?ph-facebook-logo)/,
  '$1https://github.com/Rishikesh5577"$2'
);
body = body.replace(
  /(ph-facebook-logo[\s\S]*?<a[\s\S]*?href=")#"([\s\S]*?ph-x-logo)/,
  '$1https://linkedin.com/in/rishikesh-wakchaure-06055524b"$2'
);
body = body.replace(
  /(ph-x-logo[\s\S]*?<a[\s\S]*?href=")#"([\s\S]*?ph-instagram-logo)/,
  '$1https://rishikeshportfolio-alpha.vercel.app/"$2'
);
body = body.replace(
  /(ph-instagram-logo[\s\S]*?<a[\s\S]*?href=")#"([\s\S]*?ph-dribbble-logo)/,
  '$1https://github.com/Rishikesh5577"$2'
);

// Remove leftover template placeholder
body = body.replace(/@@brandipClass/g, '');

// Fix broken attributes from void tag regex on already closed tags
body = body.replace(/\/ \/>/g, ' />');
body = body.replace(/\/\/>/g, '/>');

const outDir = 'd:/Fprojects/portfolio/rishikesh-portfolio/src/pages';
fs.mkdirSync(outDir, { recursive: true });

const out = `export default function HomePage() {
  return (
    <>
${body}
    </>
  );
}
`;

fs.writeFileSync(path.join(outDir, 'HomePage.jsx'), out);
console.log('Wrote HomePage.jsx', out.length, 'chars');
