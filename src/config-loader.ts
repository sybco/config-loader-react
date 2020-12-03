import { load } from './config';
import { useEffect, useState } from 'react';

export default function ConfigLoader({ ready, loading }: any) {

  const [isLoaded, setIsLoaded] = useState(false);
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    load()
      .then(config => {
        setIsLoaded(true);
        setConfig(config);
      });
  }, []);

  if (!isLoaded) {
    return loading ? loading() : null;
  }

  return ready(config);
}