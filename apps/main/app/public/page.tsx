import Link from "next/link";
import { getRoutes } from "@repo/routing";
import { PublicSection } from "@repo/public-section";
import styles from "../page.module.scss";

export const metadata = {
  title: "Section publique",
  description: "Section publique du portail Next"
};

export default function PublicPage() {
  const routes = getRoutes();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <span className={styles.tag}>Section publique</span>
        <h1 className={styles.title}>Découvrir la section publique</h1>
        <p className={styles.subtitle}>
          Page dédiée à la partie publique, exportée statiquement pour GitHub Pages.
        </p>
        <div className={styles.nav}>
          <Link className={styles.navLink} href={routes.main}>
            Retour à l&apos;accueil
          </Link>
          <Link className={styles.navLink} href={routes.client}>
            Voir la section client
          </Link>
        </div>
      </header>

      <PublicSection routes={routes} />
    </main>
  );
}
