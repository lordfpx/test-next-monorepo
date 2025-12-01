import type React from "react";
import clsx from "clsx";
import { Card, Button } from "@repo/core";
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
            <Button href={routes.public} label="Aller sur la page publique" variant="secondary" />
            <Button href={routes.storybook} label="Ouvrir Storybook" variant="ghost" />
          </div>
        </Card>
      </section>
    </SectionShell>
  );
}
