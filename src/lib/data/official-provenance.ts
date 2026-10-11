// ============================================================
// ExamSathi - Authoritative Official Notification & Syllabus Provenance Register
// Compliant with Master AI Specification Section 3
// ============================================================

export interface ExamProvenanceRecord {
  examId: string;
  examName: string;
  state: 'punjab' | 'rajasthan' | 'haryana' | 'delhi' | 'central' | 'defence';
  boardAuthority: string;
  officialPortalUrl: string;
  notificationIdentifier: string;
  recruitmentYear: string;
  stageOrPaper: string;
  subjectTrack: string;
  documentTitle: string;
  publishedDate: string | null;
  fetchedDate: string;
  verificationStatus: 'verified-official' | 'provisional-archive' | 'unresolved-verification';
  language: 'punjabi' | 'hindi' | 'english' | 'bilingual';
  structure: {
    paperA?: {
      title: string;
      marks: number;
      questions: number;
      qualifyingPercentage: number;
      isMeritScored: boolean;
      negativeMarking: number;
    };
    paperB: {
      title: string;
      marks: number;
      questions: number;
      durationMinutes: number;
      isMeritScored: boolean;
      negativeMarking: number;
    };
  };
  notes: string;
}

export const PUNJAB_MASTER_CADRE_PROVENANCE: Record<string, ExamProvenanceRecord> = {
  'punjab-master-cadre-sst': {
    examId: 'punjab-master-cadre-sst',
    examName: 'Punjab Master Cadre — Social Science (SST)',
    state: 'punjab',
    boardAuthority: 'Education Recruitment Board (ERB), Directorate of Education Recruitment, Punjab (DPI SE)',
    officialPortalUrl: 'https://educationrecruitmentboard.com',
    notificationIdentifier: 'Advt. No. 4161 / Subject Posts (Master Cadre)',
    recruitmentYear: '2022 / Ongoing Cycles',
    stageOrPaper: 'Paper A (Qualifying Punjabi) + Paper B (Social Studies Domain)',
    subjectTrack: 'Social Science (History, Civics, Geography, Economics)',
    documentTitle: 'Syllabus for the Post of Master Cadre - Social Studies',
    publishedDate: null,
    fetchedDate: '2026-10-10',
    verificationStatus: 'verified-official',
    language: 'bilingual',
    structure: {
      paperA: {
        title: 'Compulsory Punjabi Qualifying Test (Punjab State Group C Mandate)',
        marks: 50,
        questions: 50,
        qualifyingPercentage: 50,
        isMeritScored: false,
        negativeMarking: 0,
      },
      paperB: {
        title: 'Subject Domain Specialization (Social Science: History, Civics, Geography, Economics)',
        marks: 150,
        questions: 150,
        durationMinutes: 150,
        isMeritScored: true,
        negativeMarking: 0,
      },
    },
    notes: 'Paper A minimum 50% (25 marks) is compulsory to qualify; Paper B score exclusively decides selection merit list. No negative marking in either paper.',
  },
  'punjab-master-cadre-science': {
    examId: 'punjab-master-cadre-science',
    examName: 'Punjab Master Cadre — Science (Physics, Chemistry, Biology)',
    state: 'punjab',
    boardAuthority: 'Education Recruitment Board (ERB), Directorate of Education Recruitment, Punjab',
    officialPortalUrl: 'https://educationrecruitmentboard.com',
    notificationIdentifier: 'Advt. No. 4161 / Subject Posts (Master Cadre)',
    recruitmentYear: '2022 / Ongoing Cycles',
    stageOrPaper: 'Paper A (Qualifying Punjabi) + Paper B (Science Domain)',
    subjectTrack: 'Science (Physics, Chemistry, Biology)',
    documentTitle: 'Syllabus for the Post of Master Cadre - Science',
    publishedDate: null,
    fetchedDate: '2026-10-10',
    verificationStatus: 'verified-official',
    language: 'bilingual',
    structure: {
      paperA: {
        title: 'Compulsory Punjabi Qualifying Test',
        marks: 50,
        questions: 50,
        qualifyingPercentage: 50,
        isMeritScored: false,
        negativeMarking: 0,
      },
      paperB: {
        title: 'Subject Domain Specialization (Physics, Chemistry, Biology)',
        marks: 150,
        questions: 150,
        durationMinutes: 150,
        isMeritScored: true,
        negativeMarking: 0,
      },
    },
    notes: 'Separate recruitment post from SST. Candidates require B.Sc. with relevant science subjects + B.Ed. + PSTET Paper 2.',
  },
  'punjab-master-cadre-math': {
    examId: 'punjab-master-cadre-math',
    examName: 'Punjab Master Cadre — Mathematics',
    state: 'punjab',
    boardAuthority: 'Education Recruitment Board (ERB), Directorate of Education Recruitment, Punjab',
    officialPortalUrl: 'https://educationrecruitmentboard.com',
    notificationIdentifier: 'Advt. No. 4161 / Subject Posts (Master Cadre)',
    recruitmentYear: '2022 / Ongoing Cycles',
    stageOrPaper: 'Paper A (Qualifying Punjabi) + Paper B (Mathematics Domain)',
    subjectTrack: 'Mathematics (Higher Mathematics Core)',
    documentTitle: 'Syllabus for the Post of Master Cadre - Mathematics',
    publishedDate: null,
    fetchedDate: '2026-10-10',
    verificationStatus: 'verified-official',
    language: 'bilingual',
    structure: {
      paperA: {
        title: 'Compulsory Punjabi Qualifying Test',
        marks: 50,
        questions: 50,
        qualifyingPercentage: 50,
        isMeritScored: false,
        negativeMarking: 0,
      },
      paperB: {
        title: 'Subject Domain Specialization (Higher Mathematics Core: Algebra, Calculus, Matrices, Statistics)',
        marks: 150,
        questions: 150,
        durationMinutes: 150,
        isMeritScored: true,
        negativeMarking: 0,
      },
    },
    notes: 'Pure 150-mark Mathematics paper. No negative marking.',
  },
  'punjab-master-cadre-punjabi': {
    examId: 'punjab-master-cadre-punjabi',
    examName: 'Punjab Master Cadre — Punjabi Language & Literature',
    state: 'punjab',
    boardAuthority: 'Education Recruitment Board (ERB), Directorate of Education Recruitment, Punjab',
    officialPortalUrl: 'https://educationrecruitmentboard.com',
    notificationIdentifier: 'Advt. No. 4161 / Subject Posts (Master Cadre)',
    recruitmentYear: '2022 / Ongoing Cycles',
    stageOrPaper: 'Paper A (Qualifying Punjabi) + Paper B (Punjabi Sahit & Vyakaran)',
    subjectTrack: 'Punjabi Language & Literature',
    documentTitle: 'Syllabus for the Post of Master Cadre - Punjabi',
    publishedDate: null,
    fetchedDate: '2026-10-10',
    verificationStatus: 'verified-official',
    language: 'punjabi',
    structure: {
      paperA: {
        title: 'Compulsory Punjabi Qualifying Test',
        marks: 50,
        questions: 50,
        qualifyingPercentage: 50,
        isMeritScored: false,
        negativeMarking: 0,
      },
      paperB: {
        title: 'Subject Domain Specialization (Punjabi Sahitya: Gurmat, Sufi, Qissa, Modern Literature & Vyakaran)',
        marks: 150,
        questions: 150,
        durationMinutes: 150,
        isMeritScored: true,
        negativeMarking: 0,
      },
    },
    notes: 'Paper B tests deep Gurmat Kav, Sufi Kav, Qissa Kav, Modern Punjabi literature, Natak, Vartak and advanced grammar.',
  },
  'punjab-master-cadre-hindi': {
    examId: 'punjab-master-cadre-hindi',
    examName: 'Punjab Master Cadre — Hindi Language & Literature',
    state: 'punjab',
    boardAuthority: 'Education Recruitment Board (ERB), Directorate of Education Recruitment, Punjab',
    officialPortalUrl: 'https://educationrecruitmentboard.com',
    notificationIdentifier: 'Advt. No. 4161 / Subject Posts (Master Cadre)',
    recruitmentYear: '2022 / Ongoing Cycles',
    stageOrPaper: 'Paper A (Qualifying Punjabi) + Paper B (Hindi Sahitya & Vyakaran)',
    subjectTrack: 'Hindi Language & Literature',
    documentTitle: 'Syllabus for the Post of Master Cadre - Hindi',
    publishedDate: null,
    fetchedDate: '2026-10-10',
    verificationStatus: 'verified-official',
    language: 'hindi',
    structure: {
      paperA: {
        title: 'Compulsory Punjabi Qualifying Test',
        marks: 50,
        questions: 50,
        qualifyingPercentage: 50,
        isMeritScored: false,
        negativeMarking: 0,
      },
      paperB: {
        title: 'Subject Domain Specialization (Hindi Sahitya ka Itihas, Kavyashastra & Vyakaran)',
        marks: 150,
        questions: 150,
        durationMinutes: 150,
        isMeritScored: true,
        negativeMarking: 0,
      },
    },
    notes: 'Paper B tests Hindi Sahitya (Aadikal to Aadhunik Kal), Ras, Chhand, Alankar and Vyakaran.',
  },
  'punjab-master-cadre-english': {
    examId: 'punjab-master-cadre-english',
    examName: 'Punjab Master Cadre — English Language & Literature',
    state: 'punjab',
    boardAuthority: 'Education Recruitment Board (ERB), Directorate of Education Recruitment, Punjab',
    officialPortalUrl: 'https://educationrecruitmentboard.com',
    notificationIdentifier: 'Advt. No. 4161 / Subject Posts (Master Cadre)',
    recruitmentYear: '2022 / Ongoing Cycles',
    stageOrPaper: 'Paper A (Qualifying Punjabi) + Paper B (English Grammar & Literature)',
    subjectTrack: 'English Language & Literature',
    documentTitle: 'Syllabus for the Post of Master Cadre - English',
    publishedDate: null,
    fetchedDate: '2026-10-10',
    verificationStatus: 'verified-official',
    language: 'english',
    structure: {
      paperA: {
        title: 'Compulsory Punjabi Qualifying Test',
        marks: 50,
        questions: 50,
        qualifyingPercentage: 50,
        isMeritScored: false,
        negativeMarking: 0,
      },
      paperB: {
        title: 'Subject Domain Specialization (English Grammar, Syntax, Literary Periods & Authors)',
        marks: 150,
        questions: 150,
        durationMinutes: 150,
        isMeritScored: true,
        negativeMarking: 0,
      },
    },
    notes: 'Paper B tests Shakespeare, Romantic Poets, Victorian Prose, Modern Literature and English Grammar.',
  },
};

export const RAJASTHAN_REET_PROVENANCE: Record<string, ExamProvenanceRecord> = {
  'reet-level1': {
    examId: 'reet-level1',
    examName: 'REET Level 1 (Primary Teachers — Classes 1 to 5)',
    state: 'rajasthan',
    boardAuthority: 'Board of Secondary Education Rajasthan (BSER / RBSE), Ajmer',
    officialPortalUrl: 'https://rajeduboard.rajasthan.gov.in',
    notificationIdentifier: 'REET Examination Regulations & Syllabus Guidelines',
    recruitmentYear: 'Standard REET Pattern (Lifetime Validity)',
    stageOrPaper: 'Teacher Eligibility Test (Level 1)',
    subjectTrack: 'Primary School (Classes 1 to 5)',
    documentTitle: 'REET Level 1 Detailed Syllabus & Guidelines',
    publishedDate: null,
    fetchedDate: '2026-10-10',
    verificationStatus: 'verified-official',
    language: 'bilingual',
    structure: {
      paperB: {
        title: 'REET Level 1 Composite Eligibility Paper (5 Sections, 30 Marks each)',
        marks: 150,
        questions: 150,
        durationMinutes: 150,
        isMeritScored: true,
        negativeMarking: 0,
      },
    },
    notes: 'REET is a Teacher Eligibility Test (TET) with NO negative marking. It must NOT be conflated with the RSMSSB 3rd Grade Teacher Mains exam (which has 300 marks and 1/3 negative marking). Minimum qualifying mark is 60% (55% for reserved categories).',
  },
  'reet-level2-sst': {
    examId: 'reet-level2-sst',
    examName: 'REET Level 2 (Upper Primary — Social Studies Stream, Classes 6 to 8)',
    state: 'rajasthan',
    boardAuthority: 'Board of Secondary Education Rajasthan (BSER / RBSE), Ajmer',
    officialPortalUrl: 'https://rajeduboard.rajasthan.gov.in',
    notificationIdentifier: 'REET Examination Regulations & Syllabus Guidelines',
    recruitmentYear: 'Standard REET Pattern (Lifetime Validity)',
    stageOrPaper: 'Teacher Eligibility Test (Level 2 — Social Studies Stream)',
    subjectTrack: 'Social Studies Stream (Classes 6 to 8)',
    documentTitle: 'REET Level 2 Syllabus — Social Studies Choice',
    publishedDate: null,
    fetchedDate: '2026-10-10',
    verificationStatus: 'verified-official',
    language: 'bilingual',
    structure: {
      paperB: {
        title: 'REET Level 2 Social Studies Composite Eligibility Paper (CDP 30, Lang I 30, Lang II 30, Social Studies 60)',
        marks: 150,
        questions: 150,
        durationMinutes: 150,
        isMeritScored: true,
        negativeMarking: 0,
      },
    },
    notes: 'Section IV comprises 60 MCQs on Social Studies (Indian History, Geography, Polity, Rajasthan GK & Pedagogical Issues). No negative marking.',
  },
  'reet-level2-science-math': {
    examId: 'reet-level2-science-math',
    examName: 'REET Level 2 (Upper Primary — Science & Mathematics Stream, Classes 6 to 8)',
    state: 'rajasthan',
    boardAuthority: 'Board of Secondary Education Rajasthan (BSER / RBSE), Ajmer',
    officialPortalUrl: 'https://rajeduboard.rajasthan.gov.in',
    notificationIdentifier: 'REET Examination Regulations & Syllabus Guidelines',
    recruitmentYear: 'Standard REET Pattern (Lifetime Validity)',
    stageOrPaper: 'Teacher Eligibility Test (Level 2 — Science & Mathematics Stream)',
    subjectTrack: 'Science & Mathematics Stream (Classes 6 to 8)',
    documentTitle: 'REET Level 2 Syllabus — Mathematics & Science Choice',
    publishedDate: null,
    fetchedDate: '2026-10-10',
    verificationStatus: 'verified-official',
    language: 'bilingual',
    structure: {
      paperB: {
        title: 'REET Level 2 Science-Math Composite Eligibility Paper (CDP 30, Lang I 30, Lang II 30, Math & Science 60)',
        marks: 150,
        questions: 150,
        durationMinutes: 150,
        isMeritScored: true,
        negativeMarking: 0,
      },
    },
    notes: 'Section IV comprises 60 MCQs on Mathematics (30 Qs) and Science (30 Qs) along with their pedagogical methods. No negative marking.',
  },
};
