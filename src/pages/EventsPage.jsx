import MainLayout from "../components/layout/MainLayout.jsx";
import PageContainer from "../components/layout/PageContainer.jsx";

import EventsHero from "../components/events/EventsHero.jsx";
import EventsMainContent from "../components/events/EventsMainContent.jsx";

import useEvents from "../hooks/useEvents.js";

const EventsPage = () => {
  const {
    events = [],
    loading,
    error,
    refetch,
  } = useEvents();

  return (
    <MainLayout>
      <PageContainer>
        <EventsHero
          events={events}
          loading={loading}
        />

        <EventsMainContent
          events={events}
          loading={loading}
          error={error}
          onRetry={refetch}
        />
      </PageContainer>
    </MainLayout>
  );
};

export default EventsPage;
