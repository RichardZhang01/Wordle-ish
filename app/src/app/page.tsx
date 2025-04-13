import styles from "./page.module.css";
import Row from "@/components/Row";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Row guess='hello'/>
        <Row guess='world'/>
      </main>
    </div>
  );
}
