import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 1.5, // Reduced delay for better UX
      defaults: { ease: 'power4.out', duration: 1.2 },
    });

    tl.from(greetingRef.current, {
      y: 30, opacity: 0,
    })
    .from([title1Ref.current, title2Ref.current], {
      y: 100, opacity: 0, stagger: 0.2, skewY: 5,
    }, '<0.2')
    .from(roleRef.current, {
      y: 40, opacity: 0,
    }, '<0.4')
    .from(scrollIndicatorRef.current, {
      opacity: 0, y: 20,
    }, '<0.5');

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: -150,
      opacity: 0.2,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.hero} id="hero">
      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <div ref={greetingRef} className={styles.heroGreeting}>
          Hello, I'm
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>
            <span ref={title1Ref} style={{ display: 'inline-block' }}>Aman</span>
          </span>
          <span className={styles.heroTitleLine}>
            <span ref={title2Ref} className={styles.heroAccent} style={{ display: 'inline-block' }}>Singh</span>
          </span>
        </h1>

        <p ref={roleRef} className={styles.heroRole}>
          Software Developer & Software Tester Based in Gurugram
          <br />
          <span className={styles.heroTagline}>
            Building Scalable Web Applications, Intelligent Systems & Quality Assurance
          </span>
        </p>

        <div style={{ marginTop: '2.5rem' }}>
          <a 
            href="/Aman_Singh_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
            data-cursor-hover
            style={{ marginRight: '1.2rem' }}
          >
            View Resume
          </a>
          <a 
            href="#work" 
            className="btn btn-outline"
            data-cursor-hover
          >
            View Projects
          </a>
        </div>
      </div>

      <div ref={scrollIndicatorRef} className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Explore</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
};

export default Hero;

