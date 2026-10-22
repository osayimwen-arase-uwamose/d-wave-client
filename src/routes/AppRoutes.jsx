import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage.jsx";
import EventsPage from "../pages/EventsPage.jsx";
import EventDetailsPage from "../pages/EventDetailsPage.jsx";
import AboutUsPage from "../pages/AboutUsPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/events"
        element={<EventsPage />}
      />

      <Route
        path="/event-info/:eventId"
        element={<EventDetailsPage />}
      />

      <Route
        path="/about"
        element={<AboutUsPage />}
      />

      <Route
        path="/contact"
        element={<ContactPage />}
      />

      {/* Fallback */}
      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />

    </Routes>
  );
};

export default AppRoutes;
