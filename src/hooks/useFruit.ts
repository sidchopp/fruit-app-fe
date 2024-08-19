import { useState, useEffect } from "react";

const useFruits = (): UseFruitsResult => {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await fetch("api/fruit/all");

        if (!response.ok) {
          throw new Error("Failed to fetch fruits");
        }
        const data = await response.json();
        setFruits(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFruits();
  }, []);

  return { fruits, loading, error };
};

export { useFruits };
