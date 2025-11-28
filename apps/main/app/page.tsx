import Link from "next/link";
import { getRoutes } from "@repo/routing";
import { PublicSection } from "@repo/public-section";
import { ClientSection } from "@repo/client-section";
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
          <Link className={styles.navLink} href={routes.public}>
            Ouvrir l&apos;app publique
          </Link>
          <Link className={styles.navLink} href={routes.client}>
            Ouvrir l&apos;app client
          </Link>
        </div>
      </header>

      <div className={styles.grid}>
        <PublicSection routes={routes} />
        <ClientSection routes={routes} />
      </div>
    </main>
  );
}
