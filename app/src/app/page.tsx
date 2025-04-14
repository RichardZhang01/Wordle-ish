"use client";
import styles from "./page.module.css";
import Board from "@/components/Board";
import Keyboard from "@/components/Keyboard";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Board
                    guesses={["Hello", "World"]}
                    currentGuess="!!!!!"
                    guessStatuses={[]}
                />
                <Keyboard
                    onKeyPress={() => {
                        return;
                    }}
                    keyStatuses={{}}
                />
            </main>
        </div>
    );
}
