import { useState, useEffect } from "react";
import { IWeather } from "../api";

type TFetch = [data: IWeather, error: boolean, loading: boolean];

export function useFetch(url: string): TFetch {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect((): void => {
    (async (): Promise<void> => {
      setError(false);
      setLoading(true);

      const res = await fetch(url);
      const jsonData = await res.json();
      if (res.ok) setData(jsonData);
      else setError(true);
      
      setLoading(false);
    })();
  }, []);

  return [data, error, loading];
}
