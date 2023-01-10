import { useState, useEffect } from "react";

type TFetch = [
  data: any,
  error: boolean,
  loading: boolean
]

export function useFetch(url: string): TFetch {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect((): void => {
    (async (): Promise<void> => {
      setError(false);
      setLoading(true);
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    })();
  },[]);

  return [data, error, loading];
}
