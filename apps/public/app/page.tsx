import Link from "next/link";
import { getRoutes } from "@repo/routing";
import { PublicSection } from "@repo/public-section";
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
          <Link className={styles.navLink} href={routes.main}>
            Retour à l&apos;app principale
          </Link>
          <Link className={styles.navLink} href={routes.client}>
            Ouvrir l&apos;app client
          </Link>
        </div>
      </header>

      <PublicSection routes={routes} />
    </main>
  );
}
