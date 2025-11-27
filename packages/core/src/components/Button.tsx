import clsx from "clsx";
import type React from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ label, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button className={clsx(styles.button, styles[variant], className)} {...props}>
      {label}
    </button>
  );
}
