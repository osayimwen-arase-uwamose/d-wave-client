import axiosClient from "../api/axiosClient.js";

import ENDPOINTS from "../data/endpoints.js";

const { 
 LANDING
} = ENDPOINTS;

const getLanding = async () => { 
  const response = await axiosClient.get(
    LANDING.GET
  );

  return response.data;
};

export { 
  getLanding,
};
