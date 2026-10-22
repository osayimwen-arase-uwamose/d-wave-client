const ENDPOINTS = { 
  EVENTS: { 
    GETONE: (eventId) => `/events/${eventId}`,
    GETALL: '/events/',
  },

  LANDING: { 
    GET: '/landing/',
    UPDATE: '/landing/'
  },

  ABOUT: { 
    GET: '/about/',
    UPDATE: '/about/',
  },
};

export default ENDPOINTS;
