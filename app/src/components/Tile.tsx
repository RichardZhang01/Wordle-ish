import styles from "@/styles/Tile.module.css";

export default function Tile({letter = '', status = 'empty'}) {
    const statusClass = styles[status] || styles.empty;

    return (
        <div className={`${styles.tile} ${statusClass}`}>
            {letter}
        </div>
    )
}