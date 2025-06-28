import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your Python learning assistant. Ask me anything about Python concepts, syntax, or get help with the quiz questions!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Python concept responses
    if (lowerMessage.includes('variable')) {
      return "In Python, variables are created by assigning values using the '=' operator. Python is dynamically typed, so you don't need to declare the variable type. For example: `name = 'Python'` or `age = 25`.";
    }
    
    if (lowerMessage.includes('list')) {
      return "Lists in Python are ordered, mutable collections created with square brackets. Example: `my_list = [1, 2, 3]`. You can append items with `my_list.append(4)`, access items with indexing `my_list[0]`, and use negative indexing `my_list[-1]` for the last item.";
    }
    
    if (lowerMessage.includes('function')) {
      return "Functions in Python are defined using the 'def' keyword. Example:\n```python\ndef greet(name):\n    return f'Hello, {name}!'\n```\nFunctions can have parameters, default values, and return values. Use *args for variable positional arguments and **kwargs for keyword arguments.";
    }
    
    if (lowerMessage.includes('loop')) {
      return "Python has two main loop types:\n1. **for loop**: `for i in range(5):` or `for item in list:`\n2. **while loop**: `while condition:`\nUse 'break' to exit early and 'continue' to skip to the next iteration.";
    }
    
    if (lowerMessage.includes('dictionary') || lowerMessage.includes('dict')) {
      return "Dictionaries store key-value pairs using curly braces: `my_dict = {'key': 'value'}`. Access values with `my_dict['key']`, add new pairs with `my_dict['new_key'] = 'new_value'`, and check if keys exist with `'key' in my_dict`.";
    }
    
    if (lowerMessage.includes('class') || lowerMessage.includes('object')) {
      return "Classes define blueprints for objects:\n```python\nclass Person:\n    def __init__(self, name):\n        self.name = name\n    \n    def greet(self):\n        return f'Hi, I\\'m {self.name}'\n```\nCreate instances with `person = Person('Alice')`.";
    }
    
    if (lowerMessage.includes('import')) {
      return "Import modules with `import module_name` or `from module import function`. For example: `import math` or `from datetime import datetime`. You can also use aliases: `import numpy as np`.";
    }
    
    if (lowerMessage.includes('error') || lowerMessage.includes('exception')) {
      return "Handle errors with try-except blocks:\n```python\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero!')\nfinally:\n    print('This always runs')\n```";
    }
    
    if (lowerMessage.includes('string')) {
      return "Strings in Python can use single or double quotes. Use f-strings for formatting: `f'Hello {name}'`. Common methods: `.upper()`, `.lower()`, `.strip()`, `.split()`, `.join()`.";
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('hint')) {
      return "Here are some Python learning tips:\n• Practice regularly with small programs\n• Read error messages carefully\n• Use Python's built-in `help()` function\n• Break complex problems into smaller parts\n• Don't be afraid to experiment in the Python REPL!";
    }
    
    if (lowerMessage.includes('quiz') || lowerMessage.includes('question')) {
      return "Having trouble with a quiz question? Try:\n• Read the question carefully\n• Think about the fundamental concept being tested\n• Consider edge cases\n• Remember Python's syntax rules\n• If stuck, ask me about specific concepts!";
    }
    
    // Encouragement and motivation
    if (lowerMessage.includes('difficult') || lowerMessage.includes('hard')) {
      return "Learning Python can be challenging, but you're doing great! 🐍 Remember: every expert was once a beginner. Take breaks when needed, practice regularly, and don't hesitate to ask questions. You've got this!";
    }
    
    if (lowerMessage.includes('thank')) {
      return "You're very welcome! I'm here to help you master Python. Keep practicing and asking questions - that's how you become a better programmer! 🚀";
    }
    
    // Default responses
    const defaultResponses = [
      "That's an interesting Python question! Could you be more specific about what you'd like to know?",
      "I'd love to help you with Python! Can you tell me more about what concept you're working on?",
      "Great question! Python has many features - which specific area would you like to explore?",
      "I'm here to help with your Python journey! What particular topic can I assist you with?",
      "Python is amazing! What specific concept or problem would you like help with?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-medium">Python Assistant</h3>
            <p className="text-gray-400 text-xs">Online</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 h-64 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[70%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isBot ? 'bg-blue-500' : 'bg-purple-500'
                  }`}>
                    {message.isBot ? <Bot className="w-3 h-3 text-white" /> : <User className="w-3 h-3 text-white" />}
                  </div>
                  <div className={`rounded-xl p-3 ${
                    message.isBot 
                      ? 'bg-white/10 text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/20">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Python..."
                className="flex-1 bg-white/10 text-white placeholder-gray-400 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/20"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;