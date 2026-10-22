import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

const MainLayout = ({ children, onGoToServices }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoToServices = useCallback(() => {
    if (onGoToServices) {
    onGoToServices();
    return;
    }

    if (location.pathname === "/") {
      window.dispatchEvent(
        new CustomEvent("app:scroll-to-section", {
          detail: {
            sectionId: "services",
          },
        })
      );

      return;
    };

    navigate("/", {
      state: {
        scrollTo: "services",
      },
    });
  }, [location.pathname, navigate, onGoToServices]);

  return (
    <> 
      <NavBar 
        onGoToServices={handleGoToServices} 
      />
      {children} 
      <Footer />
    </>
  );
};

export default MainLayout;
