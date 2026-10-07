import type { DocumentResource } from './lessons/types';
const history = { title: 'NCERT Class 10 — The Rise of Nationalism in Europe (chapter PDF)', url: 'https://ncert.nic.in/textbook/pdf/jess301.pdf', language: 'English', type: 'textbook' };
const economy = { title: 'NCERT Class 10 — Development (chapter PDF)', url: 'https://ncert.nic.in/textbook/pdf/jess201.pdf', language: 'English', type: 'textbook' };
const geography = { title: 'NCERT Class 10 — Resources and Development (chapter PDF)', url: 'https://ncert.nic.in/textbook/pdf/jess101.pdf', language: 'English', type: 'textbook' };
/** Chapter titles and publisher URLs checked on 7 October 2026; links, not rehosted copies. */
export const TOPIC_DOCUMENTS: Record<string, DocumentResource[]> = {
  'world-history': [history], 'sst-world-history-modern': [history],
  'indian-economy': [economy], 'sst-indian-economy-deep': [economy],
  'physical-geography': [geography], 'sst-india-geography': [geography],
  soil: [geography], 'environment-ecology': [geography],
};
