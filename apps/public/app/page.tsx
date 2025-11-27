import { Card, Button } from "@acme/core";
import styles from "./page.module.scss";

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <Card title="Welcome to the public site">
          <p>
            This boilerplate ships with separate workspaces for marketing and client
            experiences, all sharing a single design system.
          </p>
          <div className={styles.actions}>
            <Button label="Get started" variant="primary" />
            <Button label="View Storybook" variant="ghost" />
          </div>
        </Card>
      </header>
    </main>
  );
}
