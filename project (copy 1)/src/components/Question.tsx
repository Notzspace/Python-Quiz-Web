import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Clock, ChevronRight } from 'lucide-react';
import { Question as QuestionType } from '../types/quiz';

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedAnswer: number, isCorrect: boolean, timeSpent: number) => void;
  showExplanation: boolean;
  selectedAnswer: number | null;
}

const Question: React.FC<QuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  showExplanation,
  selectedAnswer
}) => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    const isCorrect = answerIndex === question.correctAnswer;
    const finalTimeSpent = Math.floor((Date.now() - startTime) / 1000);
    onAnswer(answerIndex, isCorrect, finalTimeSpent);
  };

  const getOptionStyle = (index: number) => {
    if (selectedAnswer === null) {
      return "bg-white/10 hover:bg-white/20 border-white/30 hover:border-white/50 cursor-pointer transform hover:scale-[1.02]";
    }
    
    if (index === question.correctAnswer) {
      return "bg-green-500/20 border-green-400 text-green-100";
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "bg-red-500/20 border-red-400 text-red-100";
    }
    
    return "bg-white/5 border-white/20 text-gray-400";
  };

  const getOptionIcon = (index: number) => {
    if (selectedAnswer === null) return null;
    
    if (index === question.correctAnswer) {
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return <XCircle className="w-5 h-5 text-red-400" />;
    }
    
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl font-medium">
              Question {questionNumber} of {totalQuestions}
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock className="w-4 h-4" />
              <span>{timeSpent}s</span>
            </div>
          </div>
          <div className="text-gray-300 text-sm capitalize">
            {question.difficulty} Level
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/10 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${getOptionStyle(index)}`}
              onClick={() => handleAnswerClick(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-medium">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-lg text-white">{option}</span>
                </div>
                <div className="flex items-center space-x-3">
                  {getOptionIcon(index)}
                  {selectedAnswer === null && (
                    <ChevronRight className="w-5 h-5 text-white/50" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Explanation</h3>
          </div>
          <p className="text-gray-200 leading-relaxed text-lg">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default Question;