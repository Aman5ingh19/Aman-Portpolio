import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`section-container ${styles.footerInner}`}>
        <div className={styles.footerLeft}>
          © {currentYear}{' '}
          <span className={styles.footerName}>Aman Singh</span>. All rights
          reserved.
        </div>

        <button
          className={styles.backToTop}
          onClick={scrollToTop}
          data-cursor-hover
        >
          Back to top{' '}
          <span className={styles.backToTopArrow}>↑</span>
        </button>

        
      </div>
    </footer>
  );
};

export default Footer;
