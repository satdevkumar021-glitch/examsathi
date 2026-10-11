import { studyStorage } from './storage';

// ============================================================
// ExamSathi - Physical Screening & Measurement Standards
// Compliant with Master AI Specification Section 10:
// - Official recruitment stage/event standards preserved with source dates
// - Clear category standards (Male / Female / Ex-Servicemen)
// - Strictly private local preparation log (examsathi_physical_log)
// - Explicit medical disclaimer (no false clearance or unsafe promises)
// ============================================================

export interface PhysicalEvent {
  eventName: string;
  category: 'Male' | 'Female' | 'Ex-Servicemen' | 'All';
  standard: string;
  attemptsAllowed: number | string;
  qualifyingType: 'qualifying-only' | 'scored';
  notes?: string;
}

export interface RecruitmentPhysicalStandard {
  recruitmentId: string;
  recruitmentName: string;
  department: string;
  officialNotification: string;
  publishedDate: string;
  heightRequirement: {
    male: string;
    female: string;
    reservedNotes?: string;
  };
  chestRequirement?: {
    maleUnexpanded: string;
    maleExpanded: string;
    expansionMin: string;
  };
  events: PhysicalEvent[];
  medicalNotice: string;
}

export const OFFICIAL_PHYSICAL_STANDARDS: Record<string, RecruitmentPhysicalStandard> = {
  'punjab-police-constable': {
    recruitmentId: 'punjab-police-constable',
    recruitmentName: 'Punjab Police Constable (District & Armed Cadre)',
    department: 'Punjab Police Recruitment Board, DGP Office Punjab',
    officialNotification: 'Advt No. 01/2024 (Recruitment of Constables in Punjab Police)',
    publishedDate: '28 February 2024',
    heightRequirement: {
      male: '5 feet 7 inches (170.2 cm)',
      female: '5 feet 2 inches (157.5 cm)',
      reservedNotes: 'No height relaxation for any candidate category under official police rules.',
    },
    events: [
      {
        eventName: '1600 Meters Race',
        category: 'Male',
        standard: 'Complete within 6 minutes 30 seconds',
        attemptsAllowed: 1,
        qualifyingType: 'qualifying-only',
        notes: 'Only one chance allowed. Exceeding 6m 30s results in disqualification.',
      },
      {
        eventName: 'Long Jump',
        category: 'Male',
        standard: 'Minimum 3.80 meters',
        attemptsAllowed: 3,
        qualifyingType: 'qualifying-only',
        notes: 'Maximum 3 attempts permitted.',
      },
      {
        eventName: 'High Jump',
        category: 'Male',
        standard: 'Minimum 1.10 meters',
        attemptsAllowed: 3,
        qualifyingType: 'qualifying-only',
        notes: 'Maximum 3 attempts permitted.',
      },
      {
        eventName: '800 Meters Race',
        category: 'Female',
        standard: 'Complete within 4 minutes 30 seconds',
        attemptsAllowed: 1,
        qualifyingType: 'qualifying-only',
        notes: 'Only one chance allowed.',
      },
      {
        eventName: 'Long Jump',
        category: 'Female',
        standard: 'Minimum 3.00 meters',
        attemptsAllowed: 3,
        qualifyingType: 'qualifying-only',
        notes: 'Maximum 3 attempts permitted.',
      },
      {
        eventName: 'High Jump',
        category: 'Female',
        standard: 'Minimum 0.95 meters',
        attemptsAllowed: 3,
        qualifyingType: 'qualifying-only',
        notes: 'Maximum 3 attempts permitted.',
      },
      {
        eventName: '1400 Meters Walk and Run',
        category: 'Ex-Servicemen',
        standard: 'Complete within 9 minutes 00 seconds',
        attemptsAllowed: 1,
        qualifyingType: 'qualifying-only',
        notes: 'Applicable to Ex-Servicemen male candidates aged 35 years and above.',
      },
      {
        eventName: 'Full Squats',
        category: 'Ex-Servicemen',
        standard: '10 Full Squats within 3 minutes',
        attemptsAllowed: 1,
        qualifyingType: 'qualifying-only',
        notes: 'Continuous form evaluation under board supervision.',
      },
    ],
    medicalNotice: 'Candidates must possess sound physical health and normal color vision (no color blindness). BMI must adhere to standardized medical manual guidelines upon document verification.',
  },
  'punjab-jail-warder': {
    recruitmentId: 'punjab-jail-warder',
    recruitmentName: 'PSSSB Jail Warder & Matron',
    department: 'Department of Prisons, Punjab (via PSSSB)',
    officialNotification: 'PSSSB Advt No. 08/2021',
    publishedDate: '10 May 2021',
    heightRequirement: {
      male: '5 feet 7 inches (170.2 cm) (5 ft 4.5 in for Dogras and Gorkhas)',
      female: '5 feet 3 inches (160 cm) for Matron',
    },
    chestRequirement: {
      maleUnexpanded: '33 inches (83.8 cm)',
      maleExpanded: '34.5 inches (87.6 cm)',
      expansionMin: '1.5 inches expansion',
    },
    events: [
      {
        eventName: '100 Meters Sprint',
        category: 'Male',
        standard: 'Complete within 15 seconds',
        attemptsAllowed: 1,
        qualifyingType: 'qualifying-only',
      },
      {
        eventName: 'Shot Put (7.26 kg / 16 lbs)',
        category: 'Male',
        standard: 'Throw minimum 5.50 meters',
        attemptsAllowed: 3,
        qualifyingType: 'qualifying-only',
      },
      {
        eventName: 'Rope Climbing',
        category: 'Male',
        standard: 'Climb 15 feet from ground',
        attemptsAllowed: 3,
        qualifyingType: 'qualifying-only',
      },
      {
        eventName: '100 Meters Sprint',
        category: 'Female',
        standard: 'Complete within 18.5 seconds',
        attemptsAllowed: 1,
        qualifyingType: 'qualifying-only',
      },
      {
        eventName: 'Shot Put (4 kg)',
        category: 'Female',
        standard: 'Throw minimum 4.00 meters',
        attemptsAllowed: 3,
        qualifyingType: 'qualifying-only',
      },
    ],
    medicalNotice: 'Physical standards are qualifying in nature. No marks are added to written score merit.',
  },
  'rajasthan-police-constable': {
    recruitmentId: 'rajasthan-police-constable',
    recruitmentName: 'Rajasthan Police Constable (General Duty / Driver)',
    department: 'Director General of Police, Rajasthan, Jaipur',
    officialNotification: 'Rajasthan Police Standing Order No. 04/2023',
    publishedDate: '03 August 2023',
    heightRequirement: {
      male: '168 cm (General/OBC/SC/ST)',
      female: '152 cm (Weight minimum 47.5 kg)',
      reservedNotes: 'Tribal Sub-Plan (TSP) candidates eligible for height relaxation per State Government rules.',
    },
    chestRequirement: {
      maleUnexpanded: '81 cm',
      maleExpanded: '86 cm',
      expansionMin: '5 cm expansion',
    },
    events: [
      {
        eventName: '5 Kilometer Run (Male)',
        category: 'Male',
        standard: 'Complete within 25 minutes',
        attemptsAllowed: 1,
        qualifyingType: 'qualifying-only',
        notes: 'Timing measured electronically using RFID chip tag.',
      },
      {
        eventName: '5 Kilometer Run (Female)',
        category: 'Female',
        standard: 'Complete within 35 minutes',
        attemptsAllowed: 1,
        qualifyingType: 'qualifying-only',
      },
      {
        eventName: '5 Kilometer Run (Ex-Servicemen)',
        category: 'Ex-Servicemen',
        standard: 'Complete within 30 minutes',
        attemptsAllowed: 1,
        qualifyingType: 'qualifying-only',
      },
    ],
    medicalNotice: 'Qualified candidates undergo electronic height/chest measurement immediately after completing the 5km run.',
  },
};

export const PHYSICAL_MEDICAL_DISCLAIMER =
  'HEALTH & SAFETY DISCLAIMER: Physical screening standards provided on ExamSathi are reproduced verbatim from official government recruitment notifications for informational planning only. This platform does not provide medical clearance, clinical fitness certificates, or guarantees of athletic selection. Do not attempt extreme or unsafe physical exertion. Consult a qualified medical practitioner before undertaking rigorous athletic preparation.';

export interface PhysicalWorkoutLog {
  id: string;
  date: string;
  recruitmentId: string;
  eventName: string;
  metricAchieved: string;
  targetStandard: string;
  qualifiesTarget: boolean;
  notes?: string;
  loggedAt: number;
}

const STORAGE_PHYSICAL_LOG = 'examsathi_physical_log';

/** Saves a physical workout log locally in browser storage (strictly private). */
export function saveWorkoutLog(log: Omit<PhysicalWorkoutLog, 'id' | 'loggedAt'>): PhysicalWorkoutLog {
  const fullLog: PhysicalWorkoutLog = {
    ...log,
    id: `phys-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    loggedAt: Date.now(),
  };

  try {
    const raw = studyStorage.getItem(STORAGE_PHYSICAL_LOG);
    const list: PhysicalWorkoutLog[] = raw ? JSON.parse(raw) : [];
    list.unshift(fullLog);
    studyStorage.setItem(STORAGE_PHYSICAL_LOG, JSON.stringify(list.slice(0, 50)));
  } catch {}

  return fullLog;
}

/** Retrieves private physical workout logs. */
export function getWorkoutLogs(recruitmentId?: string): PhysicalWorkoutLog[] {
  try {
    const raw = studyStorage.getItem(STORAGE_PHYSICAL_LOG);
    if (!raw) return [];
    const list: PhysicalWorkoutLog[] = JSON.parse(raw);
    if (recruitmentId && recruitmentId !== 'all') {
      return list.filter(l => l.recruitmentId === recruitmentId);
    }
    return list;
  } catch {
    return [];
  }
}
