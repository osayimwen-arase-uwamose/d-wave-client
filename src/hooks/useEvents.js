import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getEvent,
  getEvents,
} from "../services/events.service.js";


const getLocalDateKey = (date) => {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1,
  ).padStart(2, "0");

  const day = String(
    date.getDate(),
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
};


const useEvents = () => {
  const [events, setEvents] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const [getting, setGetting] =
    useState(false);

  const [getError, setGetError] =
    useState(null);


  const fetchEvents = useCallback(
    async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getEvents();

        const fetchedEvents =
          response?.data?.events;

        if (!Array.isArray(fetchedEvents)) {
          throw new Error(
            "Invalid events response: expected response.data.events to be an array.",
          );
        }

        setEvents(fetchedEvents);
      } catch (error) {
        console.error(
          "Failed to fetch Events:",
          error,
        );

        setEvents([]);
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );


  const handleGetEvent = useCallback(
    async (eventId) => {
      setGetting(true);
      setGetError(null);

      try {
        const response = await getEvent(
          eventId,
        );

        const event =
          response?.data?.event ??
          response?.event ??
          response?.data;

        return event;
      } catch (error) {
        console.error(
          "Failed to get Event:",
          error,
        );

        setGetError(error);

        throw error;
      } finally {
        setGetting(false);
      }
    },
    [],
  );


  const {
    futureEvents,
    pastEvents,
    todaysEvents,
  } = useMemo(() => {
    const now = new Date();

    const todayKey =
      getLocalDateKey(now);

    const todayEvents = [];
    const upcomingEvents = [];
    const previousEvents = [];

    events.forEach((event) => {
      const scheduledAt =
        new Date(event.scheduledAt);

      if (
        Number.isNaN(scheduledAt.getTime())
      ) {
        return;
      }

      const eventDateKey =
        getLocalDateKey(scheduledAt);

      if (eventDateKey === todayKey) {
        todayEvents.push(event);
      } else if (scheduledAt > now) {
        upcomingEvents.push(event);
      } else {
        previousEvents.push(event);
      }
    });

    upcomingEvents.sort((a, b) => {
      return (
        new Date(a.scheduledAt).getTime() -
        new Date(b.scheduledAt).getTime()
      );
    });

    previousEvents.sort((a, b) => {
      return (
        new Date(b.scheduledAt).getTime() -
        new Date(a.scheduledAt).getTime()
      );
    });

    todayEvents.sort((a, b) => {
      return (
        new Date(a.scheduledAt).getTime() -
        new Date(b.scheduledAt).getTime()
      );
    });

    return {
      futureEvents: upcomingEvents,
      pastEvents: previousEvents,
      todaysEvents: todayEvents,
    };
  }, [events]);


  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);


  return {
    events,

    futureEvents,
    pastEvents,
    todaysEvents,

    loading,
    error,

    getting,
    getError,

    refetch: fetchEvents,
    getEvent: handleGetEvent,
  };
};


export default useEvents;