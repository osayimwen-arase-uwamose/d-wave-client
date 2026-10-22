import { BrowserRouter } from "react-router-dom";

import { Toaster } from "sonner";

import AppRoutes from "./routes/AppRoutes.jsx";

import ScrollManager from "./components/routing/ScrollManager.jsx";

const App = () => {
  return (
    <BrowserRouter>
        <ScrollManager />

        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={4000}
        />
        <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
