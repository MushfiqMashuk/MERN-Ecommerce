import { useEffect, useState } from "react";

export default function useFetch(url, method, headers = {}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(url, {
          method: method,
          headers: headers,
        });

        const result = await response.json();

        setLoading(false);
        setData(result);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchData();
  }, [url, method, headers]);

  return [data, loading, error];
}
