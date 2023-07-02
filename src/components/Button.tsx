import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  testId?: string;
  title?: string;
  id?: string;
  outline?: boolean;
  ghost?: boolean;
  size?: "sm" | "md" | "lg";
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
};

const Button = (props: Props) => {
  const classes = [
    "px-4 py-2 rounded-md font-semibold text-white bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50",
    // props.outline ? "btn-outline-" + props.variant : "btn-" + props.variant,
    props.ghost
      ? "bg-transparent hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50 text-gray-800"
      : "",
    // props.size ? "btn-" + props.size : "",
    // props.className,
  ]
    .filter((c) => c)
    .join(" ");

  const title = props.title ? props.title : props.children;

  return (
    <button
      onClick={props.onClick}
      className={classes}
      disabled={props.disabled}
      data-testid={props.testId}
      title={title as string}
      id={props.id}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
