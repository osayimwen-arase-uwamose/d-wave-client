import { 
  useCallback,
  useEffect,
  useState
} from "react";

import { 
  getAbout,
} from "../services/about.service.js";

const useAbout = () =>  {
  const [about, setAbout] = useState(null);

  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState(null);

  const fetchAbout = useCallback(
    async () => { 
      setLoading(true);
      setError(null);

      try { 
        const response = await getAbout();

        const { body } = response;

        setAbout(body.about);
      } catch (error)  { 
        console.error(
          "Failed to fetch about:",
          error
        );

        setError(error);
      } finally { 
        setLoading(false)
      }
    }, []);

    useEffect(() => { 
      fetchAbout();
    }, [fetchAbout]);

    return { 
      about,
      loading,
      error,
      refetch: fetchAbout,
    };
};

export default useAbout;
