"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
};

export default function TypingText({
  text,
  speed = 18,
}: Props) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="whitespace-pre-wrap leading-8 text-gray-200">
      {displayed}
      <span className="animate-pulse text-cyan-400">|</span>
    </div>
  );
}