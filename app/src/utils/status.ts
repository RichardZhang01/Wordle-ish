import { WORD_LENGTH } from "./words";

export function calculateGuessStatus(guess: string, solution: string) {
    const statuses = Array(WORD_LENGTH).fill("absent") as string[];
    const solutionLetters = solution.split("") as string[];
    const guessLetters = guess.split("") as string[];
    const letterCounts = {} as { [key: string]: number };

    solutionLetters.forEach((letter: string) => {
        letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    });

    guessLetters.forEach((letter: string, index: number) => {
        if (letter === solution[index]) {
            statuses[index] = "correct";
            letterCounts[letter]--;
        };
    });

    guessLetters.forEach((letter: string, index: number) => {
        if (statuses[index] === "correct" || !letterCounts[letter] || letterCounts[letter] <= 0) return;
        if (solutionLetters.includes(letter) && letterCounts[letter] > 0) {
            statuses[index] = "present";
            letterCounts[letter]--;
        };
    });

    return statuses;
};