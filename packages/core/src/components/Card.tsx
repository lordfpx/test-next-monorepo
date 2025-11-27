import type React from "react";
import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>{title}</header>
      <div className={styles.content}>{children}</div>
    </article>
  );
}
