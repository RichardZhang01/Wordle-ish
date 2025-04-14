import styles from "./page.module.css";
import Board from "@/components/Board";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Board guesses={["Hello", "World"]} currentGuess="!!!!!" guessStatuses={[]}/>
      </main>
    </div>
  );
};
