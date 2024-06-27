import styles from "./page.module.css";
import Main from "@/components/Main"
import AOS from 'aos';

export default function Home() {
  return (
    <main
     className={styles.main}
     >
      <Main/>
    </main>
  );
}
