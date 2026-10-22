const Section = ({
  children,
  className = "",
  id,
  as: Component = "section",
}) => {
  return (
    <Component
      id={id}
      className={`dw-section ${className}`.trim()}
    >
      {children}
    </Component>
  );
};

export default Section;
