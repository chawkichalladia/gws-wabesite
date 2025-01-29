import { useEffect, useRef, useState } from 'react';

interface UseViewPortIntersectionObserverProps extends Partial<IntersectionObserverInit> {}

export const useViewPortIntersectionObserver = (observerConfigs: UseViewPortIntersectionObserverProps) => {
  const [intersected, setIntersected] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersected((state) => (state ? state : entry.isIntersecting));
    }, observerConfigs);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, observerConfigs]);

  return { intersected, ref };
};
