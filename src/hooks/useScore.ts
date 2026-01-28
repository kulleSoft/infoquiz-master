import { useState, useEffect } from 'react';
import { UserScore, QuizResult, QuizCategory } from '@/types/quiz';

const SCORE_KEY = 'infoquiz_score';

const defaultScore: UserScore = {
  totalPoints: 0,
  quizzesTaken: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  history: [],
};

export const useScore = () => {
  const [score, setScore] = useState<UserScore>(() => {
    const stored = localStorage.getItem(SCORE_KEY);
    if (stored) {
      return { ...defaultScore, ...JSON.parse(stored) };
    }
    return defaultScore;
  });

  useEffect(() => {
    localStorage.setItem(SCORE_KEY, JSON.stringify(score));
  }, [score]);

  const addQuizResult = (category: QuizCategory, correct: number, total: number) => {
    const result: QuizResult = {
      category,
      score: correct,
      total,
      date: new Date().toISOString(),
    };

    setScore((prev) => ({
      totalPoints: prev.totalPoints + correct * 10,
      quizzesTaken: prev.quizzesTaken + 1,
      correctAnswers: prev.correctAnswers + correct,
      wrongAnswers: prev.wrongAnswers + (total - correct),
      history: [result, ...prev.history].slice(0, 50), // Keep last 50 results
    }));
  };

  const resetScore = () => {
    setScore(defaultScore);
  };

  const getAccuracy = () => {
    const total = score.correctAnswers + score.wrongAnswers;
    if (total === 0) return 0;
    return Math.round((score.correctAnswers / total) * 100);
  };

  return {
    score,
    addQuizResult,
    resetScore,
    getAccuracy,
  };
};
