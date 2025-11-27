import Link from "next/link";
import { Card } from "@acme/core";
import { getRoutes } from "@acme/routing";
import styles from "./page.module.scss";

export default function LandingPage() {
  const routes = getRoutes();

  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <Card title="Public">
          <p>
            Page du workspace <strong>public</strong> utilisant <strong>Next.js</strong> et consommant la library UI dans <strong>@acme/core</strong>.
          </p>
          <div className={styles.actions}>
            <Link className={`${styles.link} ${styles.linkSecondary}`} href={routes.client}>
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
