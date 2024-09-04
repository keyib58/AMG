'use client';
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

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languageInfo,
  selectedLanguage,
  onLanguageChange,
}) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [triggerRef]);

  const handleSelect = (id: string) => {
    onLanguageChange(id);
    setOpen(false); // Close the popover after selection
  };

  // Define the order of languages
  const languageOrder = [
    'ENGLISH',
    'SIMPLIFIED CHINESE',
    'VIETNAMESE',
    'THAI',
    'BAHASA INDONESIA',
    'KOREAN',
    'BURMESE',
    'BRAZILIAN PORTUGUESE',
    'SPANISH',
    'TAGALOG',
  ];

  // Sort languageInfo according to the defined order
  const sortedLanguageInfo = languageInfo.sort(
    (a, b) => languageOrder.indexOf(a.language.toUpperCase()) - languageOrder.indexOf(b.language.toUpperCase())
  );

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
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
        className="bg-white text-black rounded-lg z-10 shadow-lg p-2 mt-2 border-b border-gray-300"
        style={{ width: triggerWidth }}
        side="bottom"
        align="center"
        sideOffset={5}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-2 items-center"
        >
          {sortedLanguageInfo.map((info, index) => (
            <label
              key={info.id}
              className={`flex text-center items-center justify-center cursor-pointer p-2 w-full ${index < sortedLanguageInfo.length - 1 ? 'border-b border-gray-300' : ''}`}
              onClick={() => handleSelect(info.id)}
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
