import styles from "@/styles/Row.module.css";
import { WORD_LENGTH } from "@/utils/words";
import Tile from "@/components/Tile";

interface RowProps {
    guess?: string;
    statuses?: string[];
    isCurrent?: boolean;
}

export default function Row({ guess ='', statuses = [], isCurrent = false }: RowProps) {
    const tiles = [];

    for (let i = 0; i < WORD_LENGTH; i++) {
        const letter = guess[i] || '';
        const status = (statuses[i] as 'correct' | 'present' | 'typing' | 'absent' | 'empty') || 
            (isCurrent && letter ? 'typing' : 'empty');
        tiles.push(<Tile key={i} letter={letter} status={status} />);
    }

    return <div className={styles.row}>{tiles}</div>
}
