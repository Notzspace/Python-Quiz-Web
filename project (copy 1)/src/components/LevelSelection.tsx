import React, { useState } from 'react';
import { Code, Zap, Target, Crown, Skull, User } from 'lucide-react';

interface LevelSelectionProps {
  onSelectLevel: (level: string, userName: string) => void;
  completedLevels: string[];
  currentScore: { [key: string]: number };
}

const levels = [
  {
    id: 'beginner',
    name: 'Beginner',
    description: 'Start your Python journey with basic concepts',
    icon: Code,
    color: 'from-green-400 to-green-600',
    textColor: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'easy',
    name: 'Easy',
    description: 'Build confidence with fundamental operations',
    icon: Zap,
    color: 'from-blue-400 to-blue-600',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    description: 'Dive deeper into Python\'s powerful features',
    icon: Target,
    color: 'from-purple-400 to-purple-600',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Master advanced Python concepts and patterns',
    icon: Crown,
    color: 'from-orange-400 to-orange-600',
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'boss',
    name: 'Boss',
    description: 'Ultimate challenge for Python experts',
    icon: Skull,
    color: 'from-red-400 to-red-600',
    textColor: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  }
];

const LevelSelection: React.FC<LevelSelectionProps> = ({ onSelectLevel, completedLevels, currentScore }) => {
  const [showNameInput, setShowNameInput] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [userName, setUserName] = useState('');

  const handleLevelClick = (levelId: string) => {
    setSelectedLevel(levelId);
    setShowNameInput(true);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      onSelectLevel(selectedLevel, userName.trim());
      setShowNameInput(false);
      setUserName('');
      setSelectedLevel('');
    }
  };

  const handleCancel = () => {
    setShowNameInput(false);
    setUserName('');
    setSelectedLevel('');
  };

  if (showNameInput) {
    const level = levels.find(l => l.id === selectedLevel);
    const Icon = level?.icon || Code;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-md w-full">
          <div className="text-center mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${level?.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 capitalize">
              {level?.name} Level Quiz
            </h2>
            <p className="text-gray-300">Enter your name to start the quiz</p>
          </div>
          
          <form onSubmit={handleNameSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-white/10 text-white placeholder-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/20"
                required
                autoFocus
              />
            </div>
            
            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={!userName.trim()}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Start Quiz
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Python Quiz Master
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Test your Python knowledge across different skill levels. Each level contains 20 carefully crafted questions with detailed explanations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {levels.map((level) => {
            const Icon = level.icon;
            const isCompleted = completedLevels.includes(level.id);
            const score = currentScore[level.id] || 0;
            
            return (
              <div
                key={level.id}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
                onClick={() => handleLevelClick(level.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${level.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{level.name}</h3>
                    </div>
                    {isCompleted && (
                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                        Completed
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{level.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      20 Questions
                    </div>
                    {score > 0 && (
                      <div className="text-sm font-medium text-white">
                        Best: {score}/20
                      </div>
                    )}
                  </div>
                  
                  <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform group-hover:translate-y-[-2px]">
                    {isCompleted ? 'Retake Quiz' : 'Start Quiz'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">AI Chatbot available for help</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelSelection;