import { getRoutes } from "@repo/routing";
import { PublicSection } from "@repo/public-section";
import { Button } from "@repo/core";
import styles from "./page.module.scss";

export default function LandingPage() {
  const routes = getRoutes();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Section publique</h1>
        <p>
          Workspace dédié à la partie marketing/public. Cette page reste autonome mais peut aussi être consommée
          depuis l&apos;app principale.
        </p>
        <div className={styles.nav}>
          <Button href={routes.main} label="Retour à l'app principale" variant="primary" />
          <Button href={routes.client} label="Ouvrir l'app client" variant="ghost" />
        </div>
      </header>

      <PublicSection routes={routes} />
    </main>
  );
}
