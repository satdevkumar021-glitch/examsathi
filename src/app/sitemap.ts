import type { MetadataRoute } from 'next';
import { ALL_EXAMS } from '@/lib/data/exams';
import { ALL_LESSONS, TOPIC_ALIASES } from '@/lib/data/lessons';
import { ALL_TOPIC_IDS } from '@/lib/data/curriculum';
import { STATES_CATALOG } from '@/lib/data/exams';
import { AVAILABLE_TEST_TOPICS } from '@/lib/data/exam-catalog';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? '').replace(/\/$/, '');

// The app uses trailingSlash: true, so a path without one would be a 308 redirect; list the final URL.
function url(path: string, priority: number, freq: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly') {
  return { url: `${siteUrl}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`, priority, changeFrequency: freq };
}

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  const staticRoutes: MetadataRoute.Sitemap = [
    url('/', 1, 'daily'),
    url('/exams', 0.9, 'weekly'),
    url('/mock-test', 0.85, 'weekly'),
    url('/library', 0.7, 'weekly'),
    url('/roadmap', 0.7, 'weekly'),
    url('/typing-practice', 0.6, 'monthly'),
    url('/syllabus', 0.8, 'monthly'),
    url('/syllabus/punjab-ett', 0.75, 'monthly'),
    url('/syllabus/punjab-master-cadre-science', 0.75, 'monthly'),
    url('/syllabus/punjab-master-cadre-sst', 0.75, 'monthly'),
    url('/about', 0.5, 'yearly'),
    url('/contact', 0.4, 'yearly'),
    url('/privacy-policy', 0.3, 'yearly'),
    url('/terms', 0.3, 'yearly'),
    url('/register', 0.6, 'monthly'),
  ];

  // State exam pages
  const stateRoutes: MetadataRoute.Sitemap = STATES_CATALOG.map(s =>
    url(`/exams/${s.id}`, 0.75),
  );

  // Lesson / topic study pages (public study material)
  const topicSlugs = new Set([
    ...ALL_TOPIC_IDS,
    ...Object.values(ALL_EXAMS).flat().flatMap(exam =>
      exam.subjects.flatMap(subject => subject.chapters.flatMap(chapter => chapter.topics.map(t => t.id)))
    ),
    ...Object.keys(ALL_LESSONS),
    ...Object.keys(TOPIC_ALIASES),
  ]);
  const lessonRoutes: MetadataRoute.Sitemap = Array.from(topicSlugs)
    .filter(id => !/^(custom-notes|uploaded-notes)$/.test(id))
    .map(id => url(`/lesson/${id}`, 0.7));

  // Study subject pages
  const subjectRoutes: MetadataRoute.Sitemap = Object.values(ALL_EXAMS).flat().flatMap(exam =>
    (exam.subjects ?? []).map(subject => url(`/study/${exam.id}/${subject.id}`, 0.65)),
  );

  // Mock test pages for named test IDs (not dynamic topic variants — too many)
  const namedTests = [
    'punjab-master-cadre', 'punjab-master-cadre-sst', 'punjab-master-cadre-science',
    'punjab-ett', 'punjab-clerk', 'ppsc-clerk', 'punjab-gk-punjabi',
    'reet-level2-sst', 'clerk', 'patwari',
  ];
  const testTopicRoutes: MetadataRoute.Sitemap = [
    ...namedTests.map(id => url(`/mock-test/${id}`, 0.75)),
    ...AVAILABLE_TEST_TOPICS.slice(0, 200).map(t => url(`/mock-test/topic-${t.id}`, 0.6)),
  ];

  return [
    ...staticRoutes,
    ...stateRoutes,
    ...lessonRoutes,
    ...subjectRoutes,
    ...testTopicRoutes,
  ];
}
