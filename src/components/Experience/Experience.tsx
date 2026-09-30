import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiFileText } from 'react-icons/fi';
import styles from './Experience.module.css';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCE = [
  {
    date: 'Jun 2025 – Jul 2025',
    title: 'Full Stack Developer Intern',
    company: 'IBM (Partnership Program)',
    desc: 'Developed full-stack web applications using MERN technologies. Built and integrated REST APIs to connect frontend interfaces with backend services. Processed structured data and implemented backend functionality for application workflows.',
    certificate: '/ibm-certificate.pdf',
  },
];

const CERTS = [
  {
    title: 'Full Stack with AI Integration Bootcamp',
    issuer: 'Programming Pathshala — Jul 2026',
    tags: 'MERN, Supabase, Docker, Kafka, DSA, AI',
    link: '/bootcamp Certificate.jpeg'
  },
  {
    title: 'Database and SQL',
    issuer: 'Infosys Springboard — Apr 2025',
    tags: 'SQL, DBMS',
    link: '/dbms-certificate.pdf'
  },
  {
    title: 'NoSQL and DBaaS 101',
    issuer: 'IBM / Cognitive Class — Jul 2025',
    tags: 'NoSQL, MongoDB, DBaaS',
    link: '/NoSQL and DBaaS.pdf'
  },
  {
    title: 'Web Dev Internship',
    issuer: 'Unified Mentor',
    tags: 'HTML, CSS, JavaScript',
    link: '/unified-mentor-certificate.pdf'
  },
  {
    title: 'Data Analytics',
    issuer: 'Deloitte Job Simulation',
    tags: 'Power BI, Python, MS Excel',
    link: '/data-analysis-certificate.pdf'
  },
  {
    title: 'Google Analytics',
    issuer: 'Google Certification',
    tags: 'Analytics, Data',
    link: '/google-analytics-certificate.pdf'
  },
  {
    title: 'Research Publication — IJMSRT 2025',
    issuer: 'Phishing Detection in Email using Deep Learning',
    tags: 'Python, ML, NLP, SVM, Random Forest',
    link: '/research-paper-certificate.jpg'
  },
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const trigger = containerRef.current;

    gsap.from('.section-label', {
      scrollTrigger: { trigger, start: 'top 80%' },
      x: -30, duration: 0.8, ease: 'power3.out',
    });

    gsap.from(`.${styles.timelineItem}`, {
      scrollTrigger: { trigger, start: 'top 80%' },
      x: -20, duration: 0.8, stagger: 0.2, ease: 'power3.out',
    });

    gsap.from(`.${styles.certItem}`, {
      scrollTrigger: { trigger, start: 'top 80%' },
      y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={`${styles.experience} section`} id="experience">
      <div className="section-container">
        <div className="section-label">02 / Experience</div>

        <div className={styles.experienceInner}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Internships</h3>
            <div className={styles.timeline}>
              {EXPERIENCE.map((item, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <span className={styles.timelineDate}>{item.date}</span>
                  <h4 className={styles.timelineTitle}>{item.title}</h4>
                  <div className={styles.timelineSub}>{item.company}</div>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                  {item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.expCertBtn}
                      data-cursor-hover
                    >
                      <FiFileText /> View Internship Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Certifications</h3>
            <div className={styles.certsList}>
              {CERTS.map((cert, idx) => (
                <div key={idx} className={styles.certItem}>
                  <div className={styles.certContent}>
                    <span className={styles.certTitle}>{cert.title}</span>
                    <span className={styles.certIssuer}>{cert.issuer}</span>
                    <span className={styles.certTags}>{cert.tags}</span>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certView}
                  >
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
