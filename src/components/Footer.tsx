import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-center space-x-2">
        <Sparkles className="w-4 h-4 text-pink-500" />
        <a
          href="https://t.me/Opleech_WD"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500 transition-colors"
        >
          WOODCRAFT APPS
        </a>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        Crafting digital experiences since 2025
      </p>
    </footer>
  );
};
