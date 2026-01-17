import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: {
    bullets: string[];
    result?: string;
    income?: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-purple-50 transition-colors"
      >
        <span className="font-semibold text-gray-800 pr-4">{title}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[#6D28D9] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pt-2 space-y-3">
          <ul className="space-y-2">
            {content.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-[#6D28D9] mt-1">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          
          {content.result && (
            <div className="flex items-start gap-2 bg-green-50 p-3 rounded-xl">
              <span className="flex-shrink-0">✅</span>
              <p className="text-sm text-gray-700">{content.result}</p>
            </div>
          )}
          
          {content.income && (
            <div className="flex items-start gap-2 bg-yellow-50 p-3 rounded-xl">
              <span className="flex-shrink-0">💸</span>
              <p className="text-sm text-gray-700">{content.income}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
