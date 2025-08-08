"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const shouldDelete = isDeleting;
    const shouldType = !isDeleting;

    if (shouldType) {
      const timeout = setTimeout(() => {
        setCurrentText(currentWord.text.slice(0, currentText.length + 1));
      }, 100);

      if (currentText === currentWord.text) {
        setTimeout(() => setIsDeleting(true), 2000);
      }

      return () => clearTimeout(timeout);
    }

    if (shouldDelete) {
      const timeout = setTimeout(() => {
        setCurrentText(currentWord.text.slice(0, currentText.length - 1));
      }, 50);

      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }

      return () => clearTimeout(timeout);
    }
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className={`flex text-base sm:text-xl md:text-3xl font-bold ${className}`}>
      {words.map((word, idx) => {
        const isCurrentWord = idx === currentWordIndex;
        return (
          <div key={`word-${idx}`} className="mr-1 2xl:mr-2">
            {isCurrentWord ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-neutral-100 dark:to-neutral-400 ${word.className}`}
              >
                {currentText}
                <span className="animate-pulse">|</span>
              </motion.span>
            ) : (
              <span
                className={`bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-neutral-100 dark:to-neutral-400 ${word.className}`}
              >
                {word.text}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}; 