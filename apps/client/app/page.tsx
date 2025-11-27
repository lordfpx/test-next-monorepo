import { Card, Button } from "@acme/core";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Card title="Client space">
          <p>
            This workspace is preconfigured to consume shared UI primitives from the
            <strong> @acme/core</strong> package.
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
