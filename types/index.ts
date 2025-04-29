export type ThemeType = 'light' | 'dark';

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  totalLessons: number;
  completedLessons: number;
  topics: Topic[];
  level: 'Başlangıç' | 'Orta' | 'İleri';
  duration: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  codeExamples: CodeExample[];
  quiz: Quiz | null;
  completed: boolean;
  duration: string;
}

export interface CodeExample {
  id: string;
  title: string;
  code: string;
  description: string;
  language: 'javascript' | 'jsx' | 'typescript' | 'tsx';
}

export interface Quiz {
  id: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  image: string;
  earned: boolean;
  earnedAt?: string;
}

export interface UserProgress {
  completedLessons: string[];
  completedQuizzes: string[];
  badges: Badge[];
  favorites: string[];
}