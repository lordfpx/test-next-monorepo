import Link from "next/link";
import { Card } from "@acme/core";
import { getRoutes } from "@acme/routing";
import styles from "./page.module.scss";

export default function LandingPage() {
  const routes = getRoutes();

  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <Card title="Welcome to the public site">
          <p>
            This boilerplate ships with separate workspaces for marketing and client
            experiences, all sharing a single design system.
          </p>
          <div className={styles.actions}>
            <Link className={`${styles.link} ${styles.linkSecondary}`} href={routes.public}>
              Voir la page publique
            </Link>
            <Link className={styles.link} href={routes.client}>
              Aller sur la page client
            </Link>
            <Link className={styles.link} href={routes.storybook}>
              Ouvrir Storybook
            </Link>
          </div>
        </Card>
      </header>
    </main>
  );
}
