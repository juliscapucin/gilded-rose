import { useEffect, useState, useRef } from 'react';

const useIsElementInViewport = (
 element: HTMLDivElement | null,
 threshold: number
) => {
 const [isInViewport, setIsInViewport] = useState(false);

 useEffect(() => {
  const observer = new IntersectionObserver(
   ([entry]) => {
    setIsInViewport(entry.isIntersecting);
   },
   {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: threshold,
   }
  );

  if (element) {
   observer.observe(element);
   console.log('hallo');
  }

  return () => {
   if (element) {
    observer.unobserve(element);
   }
  };
 }, []);

 console.log(isInViewport);

 return isInViewport;
};

export default useIsElementInViewport;
