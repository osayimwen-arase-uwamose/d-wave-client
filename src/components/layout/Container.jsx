const Container = ({
  children,
  className = "",
  as: Component = "div",
}) => {
  return (
    <Component
      className={`dw-container ${className}`.trim()}
    >
      {children}
    </Component>
  );
};

export default Container;
