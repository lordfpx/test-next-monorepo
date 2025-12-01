import { getRoutes } from "@repo/routing";
import { PublicSection } from "@repo/public-section";
import { ClientSection } from "@repo/client-section";
import { Button } from "@repo/core";
import styles from "./page.module.scss";

export default function MainPage() {
  const routes = getRoutes();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <span className={styles.tag}>App principale</span>
        <h1 className={styles.title}>Portail Next unique</h1>
        <p className={styles.subtitle}>
          Une app Next servie sur l&apos;index, qui regroupe les entrées publique et client, tout en conservant
          les workspaces dédiés pour développer séparément.
        </p>
        <div className={styles.nav}>
          <Button href={routes.public} label="Ouvrir l'app publique" />
          <Button href={routes.client} label="Ouvrir l'app client" variant="secondary" />
        </div>
      </header>

      <div className={styles.grid}>
        <PublicSection routes={routes} />
        <ClientSection routes={routes} />
      </div>
    </main>
  );
}
