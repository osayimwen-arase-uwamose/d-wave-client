import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout.jsx";
import PageContainer from "../components/layout/PageContainer.jsx";

import AboutUsHero from "../components/about/AboutUsHero.jsx";
import AboutUsStats from "../components/about/AboutUsStats.jsx";
import AboutUsMission from "../components/about/AboutUsMission.jsx";
import AboutUsVisionary from "../components/about/AboutUsVisionary.jsx";
import AboutUsCTA from "../components/about/AboutUsCTA.jsx";

const AboutUsPage = () => {
const navigate = useNavigate();

const handleGoToServices = useCallback(() => {
navigate("/", {
state: {
scrollTo: "services",
},
});
}, [navigate]);

return ( <MainLayout onGoToServices={handleGoToServices}> <PageContainer> <AboutUsHero /> <AboutUsStats /> <AboutUsMission /> <AboutUsVisionary /> <AboutUsCTA onGoToServices={handleGoToServices} /> </PageContainer> </MainLayout>
);
};

export default AboutUsPage;
