import React, { useState, useEffect } from 'react';
import LevelSelection from './components/LevelSelection';
import QuizLevel from './components/QuizLevel';
import Chatbot from './components/Chatbot';
import { questions } from './data/questions';
import { QuizResult } from './types/quiz';

function App() {
  const [currentLevel, setCurrentLevel] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [completedLevels, setCompletedLevels] = useState<string[]>([]);
  const [scores, setScores] = useState<{ [key: string]: number }>({});

  // Load saved data from localStorage
  useEffect(() => {
    const savedCompletedLevels = localStorage.getItem('pythonQuizCompletedLevels');
    const savedScores = localStorage.getItem('pythonQuizScores');
    
    if (savedCompletedLevels) {
      setCompletedLevels(JSON.parse(savedCompletedLevels));
    }
    
    if (savedScores) {
      setScores(JSON.parse(savedScores));
    }
  }, []);

  // Save data to localStorage
  const saveProgress = (level: string, score: number) => {
    const updatedCompletedLevels = completedLevels.includes(level) 
      ? completedLevels 
      : [...completedLevels, level];
    
    const updatedScores = {
      ...scores,
      [level]: Math.max(scores[level] || 0, score)
    };
    
    setCompletedLevels(updatedCompletedLevels);
    setScores(updatedScores);
    
    localStorage.setItem('pythonQuizCompletedLevels', JSON.stringify(updatedCompletedLevels));
    localStorage.setItem('pythonQuizScores', JSON.stringify(updatedScores));
  };

  const handleSelectLevel = (level: string, name: string) => {
    setCurrentLevel(level);
    setUserName(name);
  };

  const handleBack = () => {
    setCurrentLevel(null);
    setUserName('');
  };

  const handleQuizComplete = (result: QuizResult) => {
    saveProgress(result.level, result.score);
  };

  const getLevelQuestions = (level: string) => {
    return questions.filter(q => q.difficulty === level);
  };

  if (currentLevel) {
    return (
      <>
        <QuizLevel
          level={currentLevel}
          questions={getLevelQuestions(currentLevel)}
          userName={userName}
          onBack={handleBack}
          onComplete={handleQuizComplete}
        />
        <Chatbot />
      </>
    );
  }

  return (
    <>
      <LevelSelection
        onSelectLevel={handleSelectLevel}
        completedLevels={completedLevels}
        currentScore={scores}
      />
      <Chatbot />
    </>
  );
}

export default App;