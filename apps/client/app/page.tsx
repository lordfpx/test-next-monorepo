import Link from "next/link";
import { getRoutes } from "@repo/routing";
import { ClientSection } from "@repo/client-section";
import styles from "./page.module.scss";

export default function ClientPage() {
  const routes = getRoutes();
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Espace client</h1>
        <p>
          Workspace client autonome. Cette page reste accessible directement et via l&apos;app principale.
        </p>
        <div className={styles.nav}>
          <Link className={styles.navLink} href={routes.main}>
            Retour à l&apos;app principale
          </Link>
          <Link className={styles.navLink} href={routes.public}>
            Aller à l&apos;app publique
          </Link>
        </div>
      </header>

      <ClientSection routes={routes} />
    </main>
  );
}
