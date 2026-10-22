import axiosClient from "../api/axiosClient.js";

import ENDPOINTS from "../data/endpoints.js";

const { 
 ABOUT
} = ENDPOINTS;

const getAbout = async () => { 
  const response = await axiosClient.get(
    ABOUT.GET
  );

  return response.data;
};

export { 
  getAbout,
};
