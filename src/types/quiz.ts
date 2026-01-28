export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: QuizCategory;
}

export type QuizCategory = 
  | 'basico'
  | 'hardware'
  | 'software'
  | 'sistemas'
  | 'redes'
  | 'programacao';

export interface CategoryInfo {
  id: QuizCategory;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface QuizResult {
  category: QuizCategory;
  score: number;
  total: number;
  date: string;
}

export interface UserScore {
  totalPoints: number;
  quizzesTaken: number;
  correctAnswers: number;
  wrongAnswers: number;
  history: QuizResult[];
}

export interface Settings {
  soundEnabled: boolean;
  darkMode: boolean;
  termsAccepted: boolean;
}
