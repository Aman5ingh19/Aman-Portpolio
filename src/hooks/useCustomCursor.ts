import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Custom cursor that follows the mouse using GSAP quickTo
 * for buttery smooth movement with spring-like interpolation.
 */
export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check if device supports hover (no touch-only)
    const mediaQuery = window.matchMedia('(hover: hover)');
    if (!mediaQuery.matches) return;

    // GSAP quickTo for smooth cursor following
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.5, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.5, ease: 'power3' });

    // Initial check - show cursor as soon as mouse moves
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursor.classList.contains('visible')) {
        cursor.classList.add('visible');
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseEnter = () => {
      cursor.classList.add('visible');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('visible');
    };

    // Add hover class for interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [data-cursor-hover], .btn'
      );

      const addHover = () => cursor.classList.add('hover');
      const removeHover = () => cursor.classList.remove('hover');

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', addHover);
          el.removeEventListener('mouseleave', removeHover);
        });
      };
    };

    const cleanupHovers = updateInteractiveElements();

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Re-check for new elements periodically (e.g. after animations)
    const interval = setInterval(updateInteractiveElements, 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cleanupHovers();
      clearInterval(interval);
    };
  }, []);

  return cursorRef;
}
