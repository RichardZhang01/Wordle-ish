import styles from "@/styles/Board.module.css";
import { MAX_GUESSES } from "@/utils/words";
import Row from "@/components/Row";

interface BoardProps {
    guesses: string[];
    currentGuess: string;
    guessStatuses: string[][];
}

export default function Board({
    guesses,
    currentGuess,
    guessStatuses,
}: BoardProps) {
    const rows = [];

    for (let i = 0; i < MAX_GUESSES; i++) {
        const isCurrentRow = i === guesses.length;
        rows.push(
            <Row
                key={i}
                guess={isCurrentRow ? currentGuess : guesses[i] || ""}
                statuses={guessStatuses[i] || []}
                isCurrent={isCurrentRow}
            />
        );
    }

    return <div className={styles.board}>{rows}</div>;
}
