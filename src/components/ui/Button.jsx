import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  className = "",
  to,
  href,
  type = "button",
  disabled = false,
  external = false,
  onClick,
  ...props
}) => {
  const classes = [
    "dw-button",
    `dw-button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
