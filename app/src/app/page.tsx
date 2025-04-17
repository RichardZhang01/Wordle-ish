"use client";

import styles from "./page.module.css";
import Head from "next/head";
import Board from "@/components/Board";
import Keyboard from "@/components/Keyboard";
import AlertBox from "@/components/AlertBox";
import { useState, useEffect, useCallback, useRef } from "react";
import { getRandomWord, WORD_LENGTH, MAX_GUESSES } from "@/utils/words";
import { calculateGuessStatus } from "@/utils/status";

export default function Home() {
    const [solution, setSolution] = useState<string>("");
    const [guesses, setGuesses] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState<string>("");
    const [guessStatuses, setGuessStatuses] = useState<string[][]>([]);
    const [gameState, setGameState] = useState<
        "playing" | "won" | "lost" | "validating"
    >("playing");
    const [keyStatuses, setKeyStatuses] = useState<{
        [key: string]: "correct" | "present" | "absent";
    }>({});
    const [alertMessage, setAlertMessage] = useState<string>("");
    const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetGame = useCallback(() => {
        setSolution(getRandomWord());
        setGuesses([]);
        setCurrentGuess("");
        setGuessStatuses([]);
        setGameState("playing");
        setKeyStatuses({});
        setAlertMessage("");
        if (messageTimeoutRef.current) {
            clearTimeout(messageTimeoutRef.current);
            messageTimeoutRef.current = null;
        }
        // TODO: localStorage, save state, save stats?
        // console.log("New game started. New word:", solution);
    }, []);

    const displayMessage = useCallback(
        (message: string, duration: number = 1500) => {
            setAlertMessage(message);
            if (messageTimeoutRef.current)
                clearTimeout(messageTimeoutRef.current);

            messageTimeoutRef.current = setTimeout(() => {
                setAlertMessage("");
                messageTimeoutRef.current = null;
            }, duration);
        },
        []
    );

    useEffect(() => {
        resetGame();
    }, [resetGame]);

    const handleSubmit = useCallback(async () => {
        if (gameState !== "playing") return;

        // valudation
        if (currentGuess.length !== WORD_LENGTH) {
            displayMessage(`Word must be ${WORD_LENGTH} letters long`);
            return;
        }

        if (guesses.includes(currentGuess)) {
            displayMessage("You already guessed that word");
            return;
        }

        // word validation
        setGameState("validating");

        try {
            const response = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${currentGuess}`
            );
            const responseData = await response.json();
            if (
                responseData.title == "No Definitions Found" ||
                response.status == 404
            ) {
                displayMessage("Please enter a valid word");
                setGameState("playing");
                return;
            }
        } catch (error) {
            console.error("Error fetching word:", error);
            displayMessage(
                "Error validating word. Please check your connection and try again."
            );
            setGameState("playing");
            return;
        }

        setGameState("playing");

        if (messageTimeoutRef.current) {
            clearTimeout(messageTimeoutRef.current);
            messageTimeoutRef.current = null;
        }
        setAlertMessage("");

        // process guess
        const statuses = calculateGuessStatus(currentGuess, solution);
        const newGuesses = [...guesses, currentGuess];
        const newGuessStatuses = [...guessStatuses, statuses];

        // update state
        setGuesses(newGuesses);
        setGuessStatuses(newGuessStatuses);
        setCurrentGuess("");

        // update statuses
        const newKeyStatuses = { ...keyStatuses };
        currentGuess.split("").forEach((letter, index) => {
            const currentStatus = newKeyStatuses[letter];
            const newStatus = statuses[index];

            if (newStatus === "correct") newKeyStatuses[letter] = "correct";
            else if (newStatus === "present" && currentStatus !== "correct")
                newKeyStatuses[letter] = "present";
            else if (newStatus === "absent" && !currentStatus)
                newKeyStatuses[letter] = "absent";
        });
        setKeyStatuses(newKeyStatuses);

        // check win/loss
        if (currentGuess === solution) {
            setGameState("won");
            displayMessage("You won!", 3000);
            // Could save stats here
        } else if (newGuesses.length >= MAX_GUESSES) {
            setGameState("lost");
            displayMessage(`You lost! The word was ${solution}`, 5000);
            // Could save stats here
        }
        // if using localstorage, could remove save state, and add word to seen words
    }, [
        currentGuess,
        displayMessage,
        gameState,
        guessStatuses,
        guesses,
        keyStatuses,
        solution,
    ]);

    const handlePhysicalKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (gameState !== "playing") return;
            const key = event.key.toUpperCase();
            console.log(key);

            if (key === "ENTER") handleSubmit();
            else if (key === "BACKSPACE")
                setCurrentGuess((prev) => prev.slice(0, -1));
            else if (key.length === 1 && /^[A-Z]$/.test(key)) {
                if (currentGuess.length < WORD_LENGTH) {
                    setCurrentGuess((prev) => prev + key);
                }
            }
            console.log(currentGuess);
        },
        [gameState, handleSubmit, currentGuess]
    );

    const handleVirtualKeyPress = (key: string) => {
        handlePhysicalKeyPress(new KeyboardEvent("keydown", { key }));
    };

    useEffect(() => {
        window.addEventListener("keydown", handlePhysicalKeyPress);
        return () => {
            window.removeEventListener("keydown", handlePhysicalKeyPress);
        };
    }, [handlePhysicalKeyPress]);

    return (
        <div className={(styles.container, styles.page)}>
            <Head>
                <title>Wordle-ish</title>
                <meta
                    name="description"
                    content="Worlde clone built using Next.js"
                />
            </Head>

            <header className={styles.header}>
                <h1>Wordle-ish</h1>
                {/* <p style={{ fontSize: "0.8rem", color: "#aaa" }}>{solution}</p> */}
            </header>

            <main>
                {alertMessage && <AlertBox message={alertMessage} />}
                <Board
                    guesses={guesses}
                    guessStatuses={guessStatuses}
                    currentGuess={currentGuess}
                />
                <Keyboard
                    onKeyPress={handleVirtualKeyPress}
                    keyStatuses={keyStatuses}
                />
            </main>
            {(gameState === "won" || gameState === "lost") && (
                <button onClick={resetGame} className={styles.restartButton}>
                    ↺ Play Again
                </button>
            )}
        </div>
    );
}
