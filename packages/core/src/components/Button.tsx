import clsx from "clsx";
import React from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonBaseProps = {
  label: string;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "href"> & {
    href?: undefined;
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const { label, variant = "primary", className } = props;
    const classes = clsx(styles.button, styles[variant], className);

    if (typeof props.href === "string") {
      const { href, ...anchorProps } = props as ButtonAsAnchorProps;
      return (
        <a
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorProps}
        >
          {label}
        </a>
      );
    }

    const buttonProps = props as ButtonAsButtonProps;
    return (
      <button
        type="button"
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...buttonProps}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = "Button";
