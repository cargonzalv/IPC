import { useEffect } from 'react';

export const heightObserver = (heightObserverFn: (height: number) => void | undefined) => {
  useEffect(() => {
    if (!heightObserverFn) {
      return;
    }
    const resizeObserver = new ResizeObserver((entries) => {
      heightObserverFn(entries[0].target.clientHeight);
    });

    // start observing a DOM node
    resizeObserver.observe(document.body);
    return () => resizeObserver.unobserve(document.body);
  }, []);
};
