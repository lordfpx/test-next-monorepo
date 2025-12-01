import { getRoutes } from "@repo/routing";
import { ClientSection } from "@repo/client-section";
import { Button } from "@repo/core";
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
          <Button href={routes.main} label="Retour à l'app principale" variant="primary" />
          <Button href={routes.public} label="Aller à l'app publique" variant="ghost" />
        </div>
      </header>

      <ClientSection routes={routes} />
    </main>
  );
}
