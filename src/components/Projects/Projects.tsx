import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub } from 'react-icons/fi';
import styles from './Projects.module.css';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    number: '01',
    title: 'HRMS Lite — Full Stack HR Management System',
    description: 'Designed REST APIs integrated with React frontend. Optimized DB operations using MongoDB Atlas.',
    tech: ['React', 'Django', 'MongoDB'],
    github: 'https://github.com/Aman5ingh19/HRMS-LITE',
    image: '',
  },
  {
    number: '02',
    title: 'Phishing Email Detection (Research Paper - IJMSRT)',
    description: 'NLP-based text preprocessing + feature extraction. Trained SVM, Random Forest, AdaBoost models. Evaluated using accuracy and AUC-ROC metrics.',
    tech: ['Python', 'ML', 'NLP', 'Scikit-learn'],
    github: 'https://github.com/Aman5ingh19/Phishing-Detection-in-Email-using-deep-learning',
    image: '',
  },
  {
    number: '03',
    title: 'Health Tracker — MERN Stack',
    description: 'Secure user authentication + health monitoring. Disease prediction via backend API integration.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/Aman5ingh19/docodev-health-tracker',
    image: '',
  },
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(() => {
    const trigger = containerRef.current;

    gsap.from('.section-label, .section-title', {
      scrollTrigger: { trigger, start: 'top 80%' },
      y: 30, duration: 1, stagger: 0.1, ease: 'power3.out',
    });

    gsap.from(`.${styles.card}`, {
      scrollTrigger: { trigger, start: 'top 80%' },
      y: 60, duration: 1, stagger: 0.15, ease: 'power3.out',
    });
  }, { scope: containerRef });

  const onMouseMove = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(card, {
      rotateX, rotateY, duration: 0.4, ease: 'power2.out', transformPerspective: 800,
    });
  });

  const onMouseLeave = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' });
  });

  return (
    <section ref={containerRef} className={`${styles.projects} section`} id="work">
      <div className="section-container">
        <div className="section-label">03 / Work</div>
        <h2 className="section-title"> Projects</h2>

        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => (
            <div
              key={project.number}
              className={styles.card}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              data-cursor-hover
            >
              <div className={styles.cardImage}>
                <div className={styles.cardPlaceholder}>{project.number}</div>
                <div className={styles.cardImageOverlay} />
              </div>

              <div className={styles.cardBody}>
                <span className={styles.cardNumber}>Project {project.number}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.cardTech}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>

                <div className={styles.cardLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.cardLink} data-cursor-hover>
                    <FiGithub className={styles.cardLinkIcon} /> Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
