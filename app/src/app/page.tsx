import styles from "./page.module.css";
import Tile from "@/components/Tile";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Tile letter="A" />
      </main>
    </div>
  );
}
