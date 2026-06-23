import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Navbar.module.css';

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { label: 'About', href: '#about', number: '01' },
  { label: 'Experience', href: '#experience', number: '02' },
  { label: 'Work', href: '#work', number: '03' },
  { label: 'Contact', href: '#contact', number: '04' },
];

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useGSAP(() => {
    const nav = navRef.current;
    if (!nav) return;

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        const currentScrollY = self.scroll();
        setIsScrolled(currentScrollY > 50);
      },
    });
  }, { scope: navRef });

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      // Using window.scrollTo since we use Lenis
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        id="navbar"
      >
        <div className={styles.navInner}>
          <div className={styles.logo} onClick={scrollToTop} data-cursor-hover>
            
          </div>

          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  className={styles.navLink}
                  onClick={() => handleNavClick(item.href)}
                  data-cursor-hover
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-cursor-hover
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            className={styles.mobileNavLink}
            onClick={() => handleNavClick(item.href)}
            data-cursor-hover
          >
            <span className={styles.mobileNavNumber}>{item.number}</span>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
