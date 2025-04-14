import styles from "@/styles/Keyboard.module.css";

const KEY_LAYOUT = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
    ["ENTER"],
];

interface KeyboardProps {
    onKeyPress: (key: string) => void;
    keyStatuses: Record<string, "correct" | "present" | "absent">;
}

export default function Keyboard({ onKeyPress, keyStatuses }: KeyboardProps) {
    const handleButtonClick = (key: string) => {
        onKeyPress(key);
    };

    return (
        <div className={styles.keyboard}>
            {KEY_LAYOUT.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.keyboardRow}>
                    {row.map((key) => {
                        const statusClass = styles[keyStatuses[key]] || "";
                        const isSpecialKey =
                            key === "ENTER" || key === "BACKSPACE";
                        const keyClass = isSpecialKey
                            ? styles.specialKey
                            : styles.key;

                        return (
                            <button
                                key={key}
                                className={`${keyClass} ${statusClass}`}
                                onClick={() => handleButtonClick(key)}
                            >
                                {key === "BACKSPACE" ? "⌫" : key}
                            </button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
