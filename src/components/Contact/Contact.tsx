import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import styles from './Contact.module.css';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.section-label', {
      scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      x: -30, duration: 0.8, ease: 'power3.out',
    });

    gsap.from(`.${styles.contactGrid} > *`, {
      scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      y: 30, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={`${styles.contact} section`} id="contact">
      <div className="section-container">
        <div className="section-label">04 / Contact</div>

        <div className={styles.contactGrid}>
          {/* Left Column */}
          <div className={styles.contactLeft}>
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>Email</h3>
              <a href="mailto:amansingh1992002@gmail.com" className={styles.contactValue}>
                amansingh1992002@gmail.com
              </a>
            </div>

            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>Location</h3>
              <p className={styles.contactValue}>Gurugram, Haryana, India</p>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.contactRight}>
            <h3 className={styles.contactLabel}>Social</h3>
            <div className={styles.socialList}>
              <a
                href="https://github.com/Aman5ingh19"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FiGithub className={styles.socialIcon} />
                Github <span className={styles.arrow}>↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aman-singh-533519301/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FiLinkedin className={styles.socialIcon} />
                Linkedin <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
