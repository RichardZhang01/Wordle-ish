import styles from "@/styles/AlertBox.module.css";

interface AlertBoxProps {
    message: string;
}

export default function AlertBox({ message }: AlertBoxProps) {
    if (!message) return null;

    return <div className={styles.alertBox}>{message}</div>;
}
