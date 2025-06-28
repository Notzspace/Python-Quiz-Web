import React, { useRef } from 'react';
import { Download, Award, Calendar, Target, Trophy, Star } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface CertificateProps {
  userName: string;
  level: string;
  score: number;
  totalQuestions: number;
  completionDate: Date;
  onClose: () => void;
}

const Certificate: React.FC<CertificateProps> = ({
  userName,
  level,
  score,
  totalQuestions,
  completionDate,
  onClose
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const generateCertificateId = () => {
    const date = completionDate.toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `PY-${level.toUpperCase()}-${date}-${random}`;
  };

  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return { level: 'Outstanding', color: 'text-yellow-400', icon: Trophy };
    if (percentage >= 80) return { level: 'Excellent', color: 'text-blue-400', icon: Star };
    if (percentage >= 70) return { level: 'Good', color: 'text-green-400', icon: Award };
    return { level: 'Satisfactory', color: 'text-purple-400', icon: Target };
  };

  const percentage = Math.round((score / totalQuestions) * 100);
  const performance = getPerformanceLevel(percentage);
  const PerformanceIcon = performance.icon;

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: '#1e293b',
        width: 1200,
        height: 800
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`Python-${level}-Certificate-${userName.replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error('Error generating certificate:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-6xl w-full border border-white/20">
        {/* Certificate */}
        <div
          ref={certificateRef}
          className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-12 mb-8 border-4 border-gradient-to-r from-blue-400 to-purple-600 relative overflow-hidden"
          style={{ width: '1200px', height: '800px', margin: '0 auto' }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-blue-400 rounded-full"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border-4 border-purple-400 rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-28 h-28 border-4 border-green-400 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border-4 border-yellow-400 rounded-full"></div>
          </div>

          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Certificate of Achievement
              </h1>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12 relative z-10">
            <p className="text-2xl text-gray-300 mb-8">This is to certify that</p>
            
            <h2 className="text-5xl font-bold text-white mb-8 border-b-2 border-gradient-to-r from-blue-400 to-purple-600 pb-4 inline-block">
              {userName}
            </h2>
            
            <p className="text-2xl text-gray-300 mb-6">has successfully completed the</p>
            
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-6 mb-8 border border-blue-400/30">
              <h3 className="text-4xl font-bold text-white capitalize mb-4">
                Python {level} Level Quiz
              </h3>
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Target className="w-6 h-6 text-blue-400" />
                  <span className="text-xl text-gray-300">Score: {score}/{totalQuestions}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PerformanceIcon className={`w-6 h-6 ${performance.color}`} />
                  <span className={`text-xl ${performance.color}`}>{performance.level}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-xl text-gray-300">{percentage}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between relative z-10">
            <div className="text-left">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Date of Completion</span>
              </div>
              <p className="text-xl font-semibold text-white">
                {completionDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <p className="text-sm text-gray-400">Python Quiz Master</p>
            </div>

            <div className="text-right">
              <div className="mb-2">
                <span className="text-gray-300">Certificate ID</span>
              </div>
              <p className="text-lg font-mono text-white bg-white/10 px-3 py-1 rounded">
                {generateCertificateId()}
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-purple-500 to-blue-400"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={downloadCertificate}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>Download Certificate</span>
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

export default Certificate;