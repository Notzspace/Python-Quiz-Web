export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'beginner' | 'easy' | 'intermediate' | 'professional' | 'boss';
}

export interface QuizLevel {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizResult {
  level: string;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  answers: UserAnswer[];
}