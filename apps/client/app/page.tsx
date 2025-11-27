import { Card, Button } from "@acme/core";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Card title="Client">
          <p>
            Ce workspace utilise <strong>Next.js</strong> et consomme la library UI dans <strong>@acme/core</strong>.
          </p>
          <p className={styles.actions}>
            <Button label="Explore components" variant="primary" />
            <Button label="Secondary" variant="ghost" />
          </p>
        </Card>
      </section>
    </main>
  );
}
