import Link from "next/link";
import { Card } from "@acme/core";
import { getRoutes } from "@acme/routing";
import styles from "./page.module.scss";

export default function HomePage() {
  const routes = getRoutes();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Card title="Client">
          <p>
            Page du workspace <strong>client</strong> utilisant <strong>Next.js</strong> et consommant la library UI dans <strong>@acme/core</strong>.
          </p>
          <div className={styles.actions}>
            <Link className={`${styles.link} ${styles.linkSecondary}`} href={routes.public}>
              Aller sur la page publique
            </Link>
            <Link className={styles.link} href={routes.storybook}>
              Ouvrir Storybook
            </Link>
          </div>
        </Card>
      </section>
    </main>
  );
}
