import type React from "react";
import Link from "next/link";
import clsx from "clsx";
import { Card } from "@repo/core";
import styles from "./section.module.scss";

export type SectionRoutes = {
  main: string;
  public: string;
  client: string;
  storybook: string;
};

type SectionProps = {
  routes: SectionRoutes;
  className?: string;
};

const SectionShell = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => <section className={clsx(styles.main, className)}>{children}</section>;

export function ClientSection({ routes, className }: SectionProps) {
  return (
    <SectionShell className={className}>
      <section className={styles.hero}>
        <Card title="Client">
          <p>
            Section <strong>client</strong> partageant la librairie UI <strong>@repo/core</strong>.
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
    </SectionShell>
  );
}
