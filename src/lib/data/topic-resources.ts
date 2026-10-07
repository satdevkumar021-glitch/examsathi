import type { DocumentResource } from './lessons/types';
const history = { title: 'NCERT Class 10 — The Rise of Nationalism in Europe (chapter PDF)', url: 'https://ncert.nic.in/textbook/pdf/jess301.pdf', language: 'English', type: 'textbook' };
const economy = { title: 'NCERT Class 10 — Development (chapter PDF)', url: 'https://ncert.nic.in/textbook/pdf/jess201.pdf', language: 'English', type: 'textbook' };
const geography = { title: 'NCERT Class 10 — Resources and Development (chapter PDF)', url: 'https://ncert.nic.in/textbook/pdf/jess101.pdf', language: 'English', type: 'textbook' };
const chapter = (title: string, code: string): DocumentResource => ({ title: `NCERT Class 10 — ${title} (chapter PDF)`, url: `https://ncert.nic.in/textbook/pdf/${code}.pdf`, language: 'English', type: 'textbook' });
const nationalism = chapter('Nationalism in India', 'jess302');
const reactions = chapter('Chemical Reactions and Equations', 'jesc101');
const acids = chapter('Acids, Bases and Salts', 'jesc102');
const life = chapter('Life Processes', 'jesc105');
const light = chapter('Light — Reflection and Refraction', 'jesc109');
const numbers = chapter('Real Numbers', 'jemh101');
const democracy = chapter('Power-sharing', 'jess401');
/** Chapter titles and publisher URLs checked on 7 October 2026; links, not rehosted copies. */
export const TOPIC_DOCUMENTS: Record<string, DocumentResource[]> = {
  'world-history': [history], 'sst-world-history-modern': [history],
  'indian-economy': [economy], 'sst-indian-economy-deep': [economy],
  'physical-geography': [geography], 'sst-india-geography': [geography],
  soil: [geography], 'environment-ecology': [geography],
  'modern-india': [nationalism], 'sst-modern-india': [nationalism],
  'chemistry-concepts': [reactions, acids], 'biology-concepts': [life],
  'physics-concepts': [light], 'science-concepts': [reactions, acids, life, light],
  'mathematics-core': [numbers], 'elementary-mathematics': [numbers], 'ett-primary-math': [numbers],
  'indian-polity': [democracy], 'sst-indian-polity': [democracy],
};
