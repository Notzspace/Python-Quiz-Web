import React, { useRef, useEffect } from 'react';
import { Download, Award, Calendar, Target, Trophy, Star, Clock, User, FileText } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ScoreCardProps {
  userName: string;
  level: string;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  completionDate: Date;
  onClose: () => void;
}

const ScoreCard: React.FC<ScoreCardProps> = ({
  userName,
  level,
  score,
  totalQuestions,
  timeSpent,
  completionDate,
  onClose
}) => {
  const scoreCardRef = useRef<HTMLDivElement>(null);

  const generateScoreId = () => {
    const date = completionDate.toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `SC-${level.toUpperCase()}-${date}-${random}`;
  };

  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return { level: 'Outstanding', color: 'text-yellow-400', bgColor: 'from-yellow-500/20 to-orange-500/20', icon: Trophy };
    if (percentage >= 80) return { level: 'Excellent', color: 'text-blue-400', bgColor: 'from-blue-500/20 to-cyan-500/20', icon: Star };
    if (percentage >= 70) return { level: 'Good', color: 'text-green-400', bgColor: 'from-green-500/20 to-emerald-500/20', icon: Award };
    if (percentage >= 60) return { level: 'Satisfactory', color: 'text-purple-400', bgColor: 'from-purple-500/20 to-pink-500/20', icon: Target };
    return { level: 'Needs Improvement', color: 'text-red-400', bgColor: 'from-red-500/20 to-orange-500/20', icon: Target };
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const percentage = Math.round((score / totalQuestions) * 100);
  const performance = getPerformanceLevel(percentage);
  const PerformanceIcon = performance.icon;

  const downloadScoreCard = async () => {
    if (!scoreCardRef.current) return;

    try {
      const canvas = await html2canvas(scoreCardRef.current, {
        scale: 2,
        backgroundColor: '#1e293b',
        width: 1000,
        height: 1400
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`Python-${level}-ScoreCard-${userName.replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error('Error generating score card:', error);
    }
  };

  // Disable context menu and keyboard shortcuts
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'a' || e.key === 's' || e.key === 'p')) {
        e.preventDefault();
      }
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl w-full border border-white/20 max-h-[90vh] overflow-y-auto">
        {/* Score Card */}
        <div
          ref={scoreCardRef}
          className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-8 mb-8 border-2 border-white/20 relative overflow-hidden"
          style={{ width: '800px', margin: '0 auto' }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-8 left-8 w-24 h-24 border-2 border-blue-400 rounded-full"></div>
            <div className="absolute top-16 right-16 w-16 h-16 border-2 border-purple-400 rounded-full"></div>
            <div className="absolute bottom-16 left-16 w-20 h-20 border-2 border-green-400 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-yellow-400 rounded-full"></div>
          </div>

          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Final Score Card
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* User Info */}
          <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">{userName}</h2>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-300 capitalize">Python {level} Level Assessment</p>
            </div>
          </div>

          {/* Performance Summary */}
          <div className={`bg-gradient-to-r ${performance.bgColor} rounded-xl p-6 mb-6 border border-white/20 relative z-10`}>
            <div className="flex items-center justify-center mb-4">
              <PerformanceIcon className={`w-8 h-8 ${performance.color} mr-3`} />
              <h3 className={`text-2xl font-bold ${performance.color}`}>
                {performance.level}
              </h3>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{percentage}%</div>
              <div className="text-lg text-gray-300">Overall Performance</div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-lg font-semibold text-white">Score</span>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{score}/{totalQuestions}</div>
                <div className="text-sm text-gray-400">Correct Answers</div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-lg font-semibold text-white">Time</span>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatTime(timeSpent)}</div>
                <div className="text-sm text-gray-400">Total Duration</div>
              </div>
            </div>
          </div>

          {/* Level Details */}
          <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10 relative z-10">
            <h4 className="text-lg font-semibold text-white mb-3 text-center">Assessment Details</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-purple-400 capitalize">{level}</div>
                <div className="text-sm text-gray-400">Difficulty Level</div>
              </div>
              <div>
                <div className="text-xl font-bold text-orange-400">{totalQuestions}</div>
                <div className="text-sm text-gray-400">Total Questions</div>
              </div>
              <div>
                <div className="text-xl font-bold text-cyan-400">{totalQuestions - score}</div>
                <div className="text-sm text-gray-400">Incorrect</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-sm text-gray-400 relative z-10">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>
                {completionDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <div className="text-center">
              <div className="text-xs text-gray-500">Python Quiz Master</div>
            </div>

            <div className="font-mono text-xs">
              ID: {generateScoreId()}
            </div>
          </div>

          {/* Decorative Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-purple-500 to-blue-400"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={downloadScoreCard}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>Download Score Card</span>
          </button>
          
          <button
            onClick={onClose}
            className="flex items-center space-x-2 bg-white/10 text-white px-8 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;