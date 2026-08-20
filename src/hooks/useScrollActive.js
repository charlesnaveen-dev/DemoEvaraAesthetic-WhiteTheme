import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an interactive card enters the central viewport
 * on touch/mobile devices ((hover: none) and (pointer: coarse)), applying an active
 * visual state via IntersectionObserver.
 * 
 * On desktop (fine pointer with hover capability), it stays inactive to let native
 * CSS :hover handle interactions with zero React re-renders.
 */
export function useScrollActive(options = {}) {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Capability check: detect if device is touch-based without true hover
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    // Desktop fine pointer devices use pure CSS :hover
    if (!isTouchDevice) {
      setIsActive(false);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observerOptions = {
      threshold: options.threshold ?? 0.45,
      rootMargin: options.rootMargin ?? '-10% 0px -10% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsActive(entry.isIntersecting);
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isActive };
}

export default useScrollActive;
