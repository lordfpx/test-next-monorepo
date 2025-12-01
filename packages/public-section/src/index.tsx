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

export function PublicSection({ routes, className }: SectionProps) {
  return (
    <SectionShell className={className}>
      <header className={styles.hero}>
        <Card title="Public">
          <p>
            Section <strong>publique</strong> construite avec Next.js et la librairie UI{" "}
            <strong>@repo/core</strong>.
          </p>
          <div className={styles.actions}>
            <Button href={routes.client} label="Aller sur la page client" variant="secondary" />
            <Button href={routes.storybook} label="Ouvrir Storybook" variant="ghost" />
          </div>
        </Card>
      </header>
    </SectionShell>
  );
}
