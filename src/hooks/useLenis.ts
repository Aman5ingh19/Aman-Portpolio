import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to initialize Lenis smooth scrolling
 * and synchronize it with GSAP ScrollTrigger.
 *
 * This is the core scroll engine — Lenis handles the smooth interpolation,
 * while ScrollTrigger reads the scroll position for animations.
 */
export function useLenisScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker as the animation frame driver for Lenis
    const update = (time: number) => {
      lenis.raf(time * 1000); // Lenis expects ms, GSAP gives seconds
    };
    
    gsap.ticker.add(update);

    // Disable GSAP's built-in lag smoothing so Lenis has full control
    gsap.ticker.lagSmoothing(0);

    // Initial refresh
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      gsap.ticker.remove(update);
      clearTimeout(timeout);
    };
  }, []);

  return lenisRef;
}
