"use client";

import { useState, useEffect } from "react";

export default function TypewriterText({
    text,
    className,
    delay = 50
}: {
    text: string;
    className?: string;
    delay?: number;
}) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        setDisplayedText("");

        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(text.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, delay);

        return () => clearInterval(interval);
    }, [text, delay]);

    return (
        <span className={className}>
            {displayedText.split("\n").map((line, i, arr) => (
                <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                </span>
            ))}
        </span>
    );
}
