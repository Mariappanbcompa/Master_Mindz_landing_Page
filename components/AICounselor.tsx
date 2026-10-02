import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToCounselor } from '../services/geminiService';
import { ChatMessage } from '../types';

const AICounselor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm the Master Mindz AI Counselor. Ask me anything about the Excel & VBA course!" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    // Prepare history for the API (converting to API expected format if needed, 
    // strictly passing text for this simple implementation)
    const historyForApi = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const reply = await sendMessageToCounselor(userText, historyForApi);

    setMessages(prev => [...prev, { role: 'model', text: reply }]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans pointer-events-none max-w-[calc(100vw-1.5rem)] max-h-[calc(100dvh-1.5rem)]">
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto mb-3 w-[calc(100vw-2rem)] sm:w-96 max-w-[calc(100vw-1.5rem)] sm:max-w-[400px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[520px] max-h-[calc(100vh-2rem)] max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100dvh-3.5rem)] transition-all duration-300">
          {/* Header */}
          <div className="bg-navy-900 px-4 py-3 sm:px-5 sm:py-3.5 flex justify-between items-center text-white shrink-0 border-b border-white/10">
            <div className="flex items-center gap-2 min-w-0">
              <Sparkles className="w-5 h-5 text-yellow-300 shrink-0" />
              <div className="truncate">
                <h3 className="font-bold text-sm truncate">AI Course Advisor</h3>
                <p className="text-xs text-slate-300 truncate">Online • Replies instantly</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 active:bg-white/30 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold"
              aria-label="Close chat"
              title="Close chat window (Esc)"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 bg-slate-50 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-lg rounded-bl-none shadow-sm">
                  <Loader2 className="w-5 h-5 text-brand-600 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-200 flex flex-col gap-2 shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about the syllabus..."
                className="flex-1 bg-slate-100 border-transparent focus:bg-white focus:border-brand-500 focus:ring-0 rounded-md text-sm px-3 py-2 outline-none transition-all border"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white p-2 rounded-md transition-colors shrink-0"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-between px-1 text-[11px] text-slate-400">
              <span>Powered by Gemini AI</span>
              <button 
                type="button" 
                onClick={() => setIsOpen(false)} 
                className="text-slate-500 hover:text-slate-800 hover:underline"
              >
                Hide chat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto group flex items-center justify-center w-14 h-14 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-200"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us
          </span>
        </button>
    </div>
  );
};

export default AICounselor;
