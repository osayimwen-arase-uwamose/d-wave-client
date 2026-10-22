import MainLayout from "../components/layout/MainLayout.jsx";
import PageContainer from "../components/layout/PageContainer.jsx";

import Hero from "../components/landing/Hero.jsx";
import UpcomingEvents from "../components/landing/UpcomingEvents.jsx";
import Services from "../components/landing/services/Services.jsx";
import Newsletter from "../components/landing/NewsLetter.jsx";

const LandingPage = () => {
return ( <MainLayout> <PageContainer> <Hero /> <UpcomingEvents /> <Services /> <Newsletter /> </PageContainer> </MainLayout>
);
};

export default LandingPage;
