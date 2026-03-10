import { useState, useEffect } from "react";

const useFecthCharacters = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reiniciar el estado antes de cada nueva solicitud
    setData(null);
    setError(null);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "Ha ocurrido un error al cargar los datos");
      } finally {
        setLoading(false);
      }
    };
    if (url) fetchData();
  }, [url]);
  return { data, error, loading };
};

export default useFecthCharacters;
