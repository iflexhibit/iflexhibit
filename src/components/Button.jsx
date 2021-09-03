const Button = ({
  icon = "none",
  variant = "text",
  label = "BUTTON",
  href = "",
}) => {
  return href === "" ? (
    <button className={"btn " + variant}>
      {icon !== "none" && <i className={icon} aria-hidden></i>}
      {label}
    </button>
  ) : (
    <a href={href} className={"btn " + variant}>
      {icon !== "none" && <i className={icon} aria-hidden></i>}
      {label}
    </a>
  );
};

export default Button;
