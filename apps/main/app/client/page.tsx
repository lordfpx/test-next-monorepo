import Link from "next/link";
import { getRoutes } from "@repo/routing";
import { ClientSection } from "@repo/client-section";
import styles from "../page.module.scss";

export const metadata = {
  title: "Section client",
  description: "Section client du portail Next"
};

export default function ClientPage() {
  const routes = getRoutes();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <span className={styles.tag}>Section client</span>
        <h1 className={styles.title}>Découvrir la section client</h1>
        <p className={styles.subtitle}>
          Page dédiée à la partie client, exportée statiquement pour GitHub Pages.
        </p>
        <div className={styles.nav}>
          <Link className={styles.navLink} href={routes.main}>
            Retour à l&apos;accueil
          </Link>
          <Link className={styles.navLink} href={routes.public}>
            Voir la section publique
          </Link>
        </div>
      </header>

      <ClientSection routes={routes} />
    </main>
  );
}
