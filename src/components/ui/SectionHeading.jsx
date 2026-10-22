const SectionHeading = ({
  eyebrow,
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <div className={`dw-section-heading ${className}`.trim()}>
      {eyebrow && (
        <span className="dw-section-heading__eyebrow">
          {eyebrow}
        </span>
      )}

      <h2
        className={`dw-section-heading__title ${titleClassName}`.trim()}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`dw-section-heading__description ${descriptionClassName}`.trim()}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
