import { useEffect, useState } from 'react';

export const  useWindowPosition = () => {
  const [scrollPosition, setPosition] = useState(0);
  
    useEffect(() => {
			const updatePosition = () => {
					setPosition(window.scrollY);
			}
			window.addEventListener('scroll', updatePosition);
			updatePosition();
    	return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  
  return scrollPosition;
}
