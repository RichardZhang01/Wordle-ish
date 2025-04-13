import styles from "@/styles/Tile.module.css";

interface TileProps {
    letter?: string;
    status?: 'correct' | 'present' | 'typing' | 'absent' | 'empty';
}

export default function Tile({letter = '', status = 'empty'}: TileProps) {
    const statusClass = styles[status] || styles.empty;

    return (
        <div className={`${styles.tile} ${statusClass}`}>
            {letter}
        </div>
    )
}
