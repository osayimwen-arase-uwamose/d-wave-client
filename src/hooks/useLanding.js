import { 
  useCallback,
  useEffect,
  useState
} from "react";

import { 
  getLanding,
} from "../services/landing.service.js";

const useLanding = () =>  {
  const [landing, setLanding] = useState(null);

  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState(null);

  const fetchLanding = useCallback(
    async () => { 
      setLoading(true);
      setError(null);

      try { 
        const response = await getLanding();

        const { body } = response;

        setLanding(body.landing);
      } catch (error)  { 
        console.error(
          "Failed to fetch landing:",
          error
        );

        setError(error);
      } finally { 
        setLoading(false)
      }
    }, []);

    useEffect(() => { 
      fetchLanding();
    }, [fetchLanding]);

    return { 
      landing,
      loading,
      error,
      refetch: fetchLanding,
    };
};

export default useLanding;
