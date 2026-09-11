import fs from 'fs';

const p = 'd:/Fprojects/portfolio/rishikesh-portfolio/src/pages/HomePage.jsx';
let s = fs.readFileSync(p, 'utf8');

s = s.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
s = s.replace(
  /data-background-image="assets\//g,
  'data-background-image="/assets/'
);

function escapeReg(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const experienceRows = [
  {
    year: '2023',
    org: 'Awwwards',
    title: 'Site Of The Day - Luxe Beauty',
    newOrg: 'Infosys',
    newTitle: 'Software Development Intern — Springboard 6.0',
    newYear: '2025',
  },
  {
    year: '2022',
    org: 'FWA',
    title: 'Motion Design and Animation',
    newOrg: 'Gamotech',
    newTitle: 'Associate Software Developer Intern',
    newYear: '2025',
  },
  {
    year: '2021',
    org: 'CSSDA',
    title: 'Motion Design and Animation',
    newOrg: 'Sumago',
    newTitle: 'Full Stack Development Intern',
    newYear: '2024',
  },
  {
    year: '2020',
    org: 'CSSDA',
    title: 'Motion Design and Animation',
    newOrg: 'Oracle',
    newTitle: 'OCI DevOps Professional Credential',
    newYear: '2025',
  },
  {
    year: '2019',
    org: 'Awwwards',
    title: 'Motion Design and Animation',
    newOrg: 'AWS / GFG',
    newTitle: 'Cloud Practitioner Specialization',
    newYear: '2025',
  },
  {
    year: '2018',
    org: 'Awwwards',
    title: 'Motion Design and Animation',
    newOrg: 'Amrut Expo',
    newTitle: 'Innovation Expo Winner Certificate',
    newYear: '2024',
  },
];

for (const row of experienceRows) {
  const blockRe = new RegExp(
    `(>\\s*)${escapeReg(row.org)}(\\s*<[\\s\\S]{0,400}?>\\s*)${escapeReg(row.title)}(\\s*<[\\s\\S]{0,400}?>\\s*)${row.year}(\\s*<)`,
    ''
  );
  s = s.replace(
    blockRe,
    `$1${row.newOrg}$2${row.newTitle}$3${row.newYear}$4`
  );
}

s = s.replace(
  /Honest testimonials from clients highlighting my commitment\s+to quality, performance, & user-focused design that delivers\s+real results/,
  'Highlights from my journey — industry internships, production platforms, and credentials that reflect commitment to quality engineering'
);

s = s.replace(
  /Nemo enim ipsam voluptatem quia voluptas sit\s+aspernatur aut odit aut fugit sed quia\s+consequuntur magni dolores eos qui ratione\s+voluptatem sequi nesciunt\./g,
  'Rishikesh delivers production-ready MERN applications with clean architecture, strong cloud practices, and thoughtful UI craftsmanship across live client platforms.'
);

s = s.replace(
  /Loved by Teams Around the World/g,
  'Trusted Tech Across My Stack'
);

let brandCount = 0;
const tagPairs = [
  ['MERN', 'AWS'],
  ['MERN', 'Cloud'],
  ['MERN', 'Payments'],
  ['React', 'UI/UX'],
];
s = s.replace(/>BRANDING</g, () => {
  const i = Math.min(brandCount, 3);
  const t = tagPairs[i][0];
  brandCount += 1;
  return `>${t}<`;
});
let designCount = 0;
s = s.replace(/>web DESIGN</g, () => {
  const i = Math.min(designCount, 3);
  const t = tagPairs[i][1];
  designCount += 1;
  return `>${t}<`;
});

s = s.replace(/\{""\}/g, '{"\\u00A0"}');

// Fix StrictMode double-init issues later; also fix /5 leftover
s = s.replace(/>\s*\/5\s*</g, '>+<');
s = s.replace(/>\s*k\+\s*</g, '>+<');

fs.writeFileSync(p, s);

console.log({
  Awwwards: (s.match(/Awwwards/g) || []).length,
  Infosys: (s.match(/Infosys/g) || []).length,
  Gamotech: (s.match(/Gamotech/g) || []).length,
  Rishikesh: (s.match(/Rishikesh/g) || []).length,
  classAttr: (s.match(/\bclass=/g) || []).length,
  htmlComments: (s.match(/<!--/g) || []).length,
  DynamicWorld: (s.match(/Dynamic World/g) || []).length,
});
