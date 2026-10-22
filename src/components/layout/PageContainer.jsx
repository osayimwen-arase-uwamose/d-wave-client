const PageContainer = ({
  children,
  className = "",
}) => {
  return (
    <main
      className={`dw-page-container ${className}`.trim()}
    >
      {children}
    </main>
  );
};

export default PageContainer;
