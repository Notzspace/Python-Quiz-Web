import React, { useState, useEffect } from 'react';
import { ArrowLeft, RotateCcw, Trophy, Target, Clock, CheckCircle, FileText, Shield } from 'lucide-react';
import Question from './Question';
import ScoreCard from './ScoreCard';
import { Question as QuestionType, UserAnswer, QuizResult } from '../types/quiz';

interface QuizLevelProps {
  level: string;
  questions: QuestionType[];
  userName: string;
  onBack: () => void;
  onComplete: (result: QuizResult) => void;
}

const QuizLevel: React.FC<QuizLevelProps> = ({ level, questions, userName, onBack, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizStartTime] = useState(Date.now());
  const [isCompleted, setIsCompleted] = useState(false);
  const [showScoreCard, setShowScoreCard] = useState(false);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);
  const [quizTimer, setQuizTimer] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  // Quiz timer
  useEffect(() => {
    const timer = setInterval(() => {
      setQuizTimer(Math.floor((Date.now() - quizStartTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStartTime]);

  // Security measures
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable copy, paste, select all, save, print
      if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'a' || e.key === 's' || e.key === 'p')) {
        e.preventDefault();
      }
      // Disable F12 and developer tools
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
      }
    };

    const handleSelectStart = (e: Event) => e.preventDefault();
    const handleDragStart = (e: Event) => e.preventDefault();

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Add CSS to prevent text selection
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    };
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  const handleAnswer = (answerIndex: number, isCorrect: boolean, timeSpent: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex,
      isCorrect,
      timeSpent
    };
    
    setUserAnswers(prev => [...prev, newAnswer]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz completed
      const finalTimeSpent = Math.floor((Date.now() - quizStartTime) / 1000);
      setTotalTimeSpent(finalTimeSpent);
      const score = userAnswers.filter(answer => answer.isCorrect).length + 
                   (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0);
      
      const result: QuizResult = {
        level,
        score,
        totalQuestions: questions.length,
        timeSpent: finalTimeSpent,
        answers: [...userAnswers, {
          questionId: currentQuestion.id,
          selectedAnswer: selectedAnswer || 0,
          isCorrect: selectedAnswer === currentQuestion.correctAnswer,
          timeSpent: 0
        }]
      };
      
      setIsCompleted(true);
      onComplete(result);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCompleted(false);
    setShowScoreCard(false);
  };

  const handleGetScoreCard = () => {
    setShowScoreCard(true);
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-400';
    if (percentage >= 70) return 'text-blue-400';
    if (percentage >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPerformanceMessage = (percentage: number) => {
    if (percentage >= 90) return 'Outstanding! You\'re a Python expert! 🏆';
    if (percentage >= 70) return 'Great job! You have solid Python knowledge! 👏';
    if (percentage >= 50) return 'Good work! Keep practicing to improve! 💪';
    return 'Keep learning! Practice makes perfect! 📚';
  };

  if (showScoreCard) {
    const score = userAnswers.filter(answer => answer.isCorrect).length;
    return (
      <ScoreCard
        userName={userName}
        level={level}
        score={score}
        totalQuestions={questions.length}
        timeSpent={totalTimeSpent}
        completionDate={new Date()}
        onClose={() => setShowScoreCard(false)}
      />
    );
  }

  if (isCompleted) {
    const score = userAnswers.filter(answer => answer.isCorrect).length;
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Results Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">Quiz Completed!</h1>
              <p className="text-xl text-gray-300">Well done, {userName}!</p>
              <p className="text-lg text-gray-400 capitalize">{level} Level</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className={`text-3xl font-bold mb-2 ${getScoreColor(percentage)}`}>
                  {score}/{questions.length}
                </div>
                <div className="text-gray-300">Correct Answers</div>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className={`text-3xl font-bold mb-2 ${getScoreColor(percentage)}`}>
                  {percentage}%
                </div>
                <div className="text-gray-300">Accuracy</div>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">
                  {formatTime(totalTimeSpent)}
                </div>
                <div className="text-gray-300">Total Time</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-6 border border-blue-400/30 mb-8">
              <p className="text-xl text-white font-medium">
                {getPerformanceMessage(percentage)}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetScoreCard}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span>Final Score Card</span>
              </button>
              
              <button
                onClick={handleRestart}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Retake Quiz</span>
              </button>
              
              <button
                onClick={onBack}
                className="flex items-center justify-center space-x-2 bg-white/10 text-white px-8 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Levels</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white capitalize">{level} Level</h1>
            <p className="text-gray-300">{userName}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-xl border border-white/20">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-white font-mono">{formatTime(quizTimer)}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-xl border border-white/20">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-white text-sm">Secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Question Component */}
      <Question
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
        showExplanation={showExplanation}
        selectedAnswer={selectedAnswer}
      />

      {/* Next Button */}
      {showExplanation && (
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizLevel;