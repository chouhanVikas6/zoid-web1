"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = [
    "THE NATION.",
    "YOUR PRIDE.",
    "THE FIGHT.",
    "ZOID."
];

export default function TextFlipper() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % WORDS.length);
        }, 2500); // Change every 2.5 seconds
        return () => clearInterval(interval);
    }, []);

    const longestWord = WORDS.reduce((a, b) => a.length > b.length ? a : b, "");
    //[#61D1EA]
    return (
        <span className="relative inline-flex justify-center items-center text-light uppercase font-bold [perspective:1000px]">
            <span className="invisible pointer-events-none" aria-hidden="true">
                {longestWord}
            </span>
            <AnimatePresence>
                <motion.span
                    key={index}
                    initial={{ opacity: 0, rotateX: -90, y: 20 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    exit={{ opacity: 0, rotateX: 90, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute origin-center transform-gpu whitespace-nowrap"
                >
                    {WORDS[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
