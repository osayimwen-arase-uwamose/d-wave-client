import ENDPOINTS from "../data/endpoints.js";

import axiosClient from "../api/axiosClient.js";

const { 
  GETONE,
  GETALL,
} = ENDPOINTS.EVENTS

const getEvent = async (
  eventId,
) => {
  const response = await axiosClient.get(
    GETONE(eventId)
  );

  return response.data;
};

const getEvents = async () => {
  const response = await axiosClient.get(
    GETALL
  );

  return response.data;
};

export { 
  getEvent,
  getEvents,
};
