'use client'
import React, { useRef, useEffect, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { ChevronDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { LanguageInfo } from 'types/type';

type LanguageSelectorProps = {
  languageInfo: LanguageInfo[];
  selectedLanguage: LanguageInfo | null;
  onLanguageChange: (id: string) => void;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languageInfo, selectedLanguage, onLanguageChange }) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerWidth, setTriggerWidth] = useState(0);

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [triggerRef]);

  return (
    <Popover.Root>
      <Popover.Trigger
        ref={triggerRef}
        className="flex-1 bg-white flex py-2 px-6 items-center text-black rounded-lg justify-between"
      >
        <span className="flex-1 text-center">
          {selectedLanguage?.language || 'Select Language'}
        </span>
        <ChevronDownIcon className="w-5 h-5" />
      </Popover.Trigger>
      <Popover.Content
        className="bg-white text-black rounded-lg shadow-lg -ml-4 p-2 mt-2 border-b border-gray-300"
        style={{ width: triggerWidth }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-2 items-center"
        >
          {languageInfo.map((info, index) => (
            <label
              key={info.id}
              className={`flex items-center justify-center cursor-pointer p-2 w-full ${index < languageInfo.length - 1 ? 'border-b border-gray-300' : ''}`}
              onClick={() => onLanguageChange(info.id)}
            >
              {info.language}
            </label>
          ))}
        </motion.div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default LanguageSelector;
