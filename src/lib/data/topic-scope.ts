export const TOPIC_ALIASES: Record<string, string> = {
  'primary-language-one': 'language-teaching-foundations',
  'primary-language-two': 'language-teaching-foundations',
  'punjab-history-deep': 'sst-punjab-history-deep',
  'hindi-grammar-deep': 'hindi-vyakaran',
  'cdp-htet-l1': 'child-development-pedagogy',
  'cdp-htet-l2': 'cdp-adolescent',
  'computer-it-basics': 'computer-awareness',
  'delhi-police-computer-apps': 'computer-awareness',
  'ett-child-pedagogy': 'child-development-pedagogy',
  'child-pedagogy': 'child-development-pedagogy',
  'russian-revolution': 'sst-world-history-modern',
  'uno': 'sst-world-history-modern',
  'cold-war': 'sst-world-history-modern',
  'soil': 'sst-india-geography',
  'rivers': 'sst-india-geography',
  'green-revolution': 'sst-india-geography',
  'niti-aayog': 'sst-indian-economy-deep',
  'rbi': 'sst-indian-economy-deep',
  'delhi-sultanate': 'sst-medieval-india',
  'mughal': 'sst-medieval-india',
  'sufi': 'sst-medieval-india',
  'bhakti': 'sst-medieval-india',
  'ranjit-singh': 'sst-punjab-history-deep',
  'misals': 'sst-punjab-history-deep',
  'banda-singh': 'sst-punjab-history-deep',
  'ancient-india': 'sst-harappa',
  'medieval-india': 'sst-medieval-india',
  'punjab-history': 'sst-punjab-history-deep',
  'modern-india': 'sst-national-movement',
  'fundamental-rights': 'sst-fundamental-rights',
  'parliament': 'sst-legislature',
  'judiciary': 'sst-judiciary',
  'local-govt': 'sst-federal-local',
  'indian-economy': 'sst-indian-economy-deep',
  'world-history': 'sst-world-history-modern',
  'punjab-geography': 'sst-geo-punjab',
  'physical-geography': 'sst-india-geography',
  'motion': 'physics-concepts',
  'cell': 'biology-concepts',
  'electricity': 'physics-concepts',
  'constitution': 'sst-constitution',
  'agreement': 'english-grammar-lit',
  'sandhi': 'hindi-vyakaran',
  'computer': 'computer-awareness',
  'psssb-computer-it': 'computer-awareness',
  'computer-it': 'computer-awareness',
  'psssb-raavi-typing': 'punjabi-grammar-lit',
  'punjabi-clerk-prep': 'punjabi-grammar-lit',
  'ett-evs-science': 'environment-ecology',
  'series': 'ssc-cgl-reasoning',
  'punjabi-grammar': 'punjabi-grammar-lit',
  'english-practice': 'english-grammar-lit',
  'ett-primary-math': 'mathematics-core',
};


/** Explicit broader-topic -> eligible source-topic families. Never infer from exam tags. */
export const TOPIC_FAMILIES: Record<string, string[]> = {
  'clerk-gk-fast-practice': ['gk-polity-foundation','gk-history-foundation','gk-geography-foundation','gk-science-foundation','gk-punjab-foundation'],
  'english-grammar-lit': ['english-grammar-syntax'],
  'ancient-india': ['sst-harappa', 'sst-buddhism-jainism', 'sst-maurya'],
  'punjab-history': ['sst-punjab-history-deep', 'sst-punjab-sikh'],
  'punjab-history-deep': ['sst-punjab-history-deep', 'sst-punjab-sikh'],
  'medieval-india': ['sst-medieval-india'],
  'fundamental-rights': ['sst-fundamental-rights', 'sst-constitution'],
  'parliament': ['sst-legislature', 'sst-executive'],
  'indian-economy': ['sst-indian-economy-deep', 'sst-economic-sectors', 'sst-national-income', 'sst-demand-supply', 'sst-inflation-employment', 'sst-development', 'sst-trade'],
  'world-history': ['sst-world-history-modern', 'sst-renaissance', 'sst-french-revolution', 'sst-industrial-revolution', 'sst-world-wars'],
  'physical-geography': ['sst-india-geography', 'sst-geo-earth', 'sst-geo-atmosphere', 'sst-geo-tectonics', 'sst-geo-landforms', 'sst-geo-oceans', 'sst-geo-environment'],
  'punjab-geography': ['sst-geo-punjab', 'sst-geo-monsoon'],
  'general-science-concepts': ['physics-concepts', 'chemistry-concepts', 'biology-concepts'],
  'raj-history-police': ['raj-history-pratap', 'rajasthan-heritage-forts'],
  'cdp-htet-l2': ['child-development-pedagogy'],
  'ict-net': ['computer-awareness'],
  'science-tech-police': ['physics-concepts', 'chemistry-concepts', 'biology-concepts', 'computer-awareness'],
  'subject-specific-htet-l2': ['mathematics-core', 'physics-concepts', 'chemistry-concepts', 'biology-concepts', 'social-studies-p2'],
  'social-studies-p2': ['ancient-india', 'medieval-india', 'modern-india', 'physical-geography', 'fundamental-rights', 'parliament', 'judiciary', 'local-govt', 'indian-economy'],
  'gk-agniveer': ['ancient-india', 'medieval-india', 'modern-india', 'physical-geography', 'fundamental-rights', 'army-military-heritage'],
  'science-agniveer': ['general-science-concepts', 'elementary-mathematics'],
};
export function canonicalTopicId(id: string): string { return TOPIC_ALIASES[id] || id; }
export function topicSourceIds(topicId: string, visited = new Set<string>()): Set<string> {
  if (visited.has(topicId)) return new Set();
  const next = new Set(visited); next.add(topicId);
  const ids = new Set([canonicalTopicId(topicId)]);
  for (const child of TOPIC_FAMILIES[topicId] || TOPIC_FAMILIES[canonicalTopicId(topicId)] || []) for (const id of topicSourceIds(child, next)) ids.add(id);
  return ids;
}
export function topicIncludes(requestedTopic: string, questionTopic: string): boolean {
  return topicSourceIds(requestedTopic).has(canonicalTopicId(questionTopic));
}
