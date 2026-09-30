import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { name: 'C++', iconKey: 'cpp' },
  { name: 'Python', iconKey: 'py' },
  { name: 'JavaScript', iconKey: 'js' },
  { name: 'TypeScript', iconKey: 'ts' },
  { name: 'React.js', iconKey: 'react' },
  { name: 'Next.js', iconKey: 'nextjs' },
  { name: 'Tailwind CSS', iconKey: 'tailwind' },
  { name: 'Node.js', iconKey: 'nodejs' },
  { name: 'Express.js', iconKey: 'express' },
  { name: 'Django', iconKey: 'django' },
  { name: 'FastAPI', iconKey: 'fastapi' },
  { name: 'PostgreSQL', iconKey: 'postgres' },
  { name: 'MongoDB', iconKey: 'mongodb' },
  { name: 'Supabase', iconKey: 'supabase' },
  { name: 'Redis', iconKey: 'redis' },
  { name: 'Firebase', iconKey: 'firebase' },
  { name: 'Docker', iconKey: 'docker' },
  { name: 'Kubernetes', iconKey: 'kubernetes' },
  { name: 'Apache Kafka', iconKey: 'kafka' },
  { name: 'RabbitMQ', iconKey: 'rabbitmq' },
  { name: 'Prisma', iconKey: 'prisma' },
  { name: 'Git', iconKey: 'git' },
  { name: 'GitHub', iconKey: 'github' },
  { name: 'Postman', iconKey: 'postman' },
  { name: 'VS Code', iconKey: 'vscode' },
];

const STATS = [
  { number: '7.0', label: 'CGPA' },
  { number: '2023-27', label: 'B.Tech CSE' },
  { number: '1', label: 'Internship' },
];

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const trigger = containerRef.current;

    gsap.from('.section-label', {
      scrollTrigger: { trigger, start: 'top 80%' },
      x: -30, duration: 0.8, ease: 'power3.out',
    });

    gsap.from(`.${styles.bioText}`, {
      scrollTrigger: { trigger, start: 'top 80%' },
      y: 40, duration: 1, ease: 'power3.out',
    });

    gsap.from(`.${styles.bioDescription}`, {
      scrollTrigger: { trigger, start: 'top 80%' },
      y: 30, duration: 0.8, delay: 0.2, ease: 'power3.out',
    });

    gsap.from(`.${styles.skillItem}`, {
      scrollTrigger: { trigger, start: 'top 80%' },
      y: 20, duration: 0.6, stagger: 0.05, ease: 'power3.out',
    });

    gsap.from(`.${styles.stat}`, {
      scrollTrigger: { trigger, start: 'top 80%' },
      y: 20, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={`${styles.about} section`} id="about">
      <div className="section-container">
        <div className="section-label">01 / Profile</div>

        <div className={styles.aboutInner}>
          <div className={styles.bioColumn}>
            <div className={styles.bioText}>
              I'm <span className={styles.bioHighlight}>Aman Singh</span>, a Computer Science Engineering Student 
              at <span className={styles.bioHighlight}>K.R. Mangalam University</span>.
            </div>

            <p className={styles.bioDescription}>
              Computer Science Engineering student specializing in full stack development, distributed systems, 
              and cloud-native applications. Experienced in building scalable web architectures using 
              React, Next.js, Node.js, and Django with event-driven pipelines (Kafka, RabbitMQ, Redis) and 
              containerized deployments (Docker, Kubernetes). Passionate about AI integrations (RAG, vector search) 
              and solving complex real-world engineering problems with robust DSA fundamentals.
            </p>

            <div className={styles.statsRow}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillsColumn}>
            <div className={styles.skillsTitle}>Technical Skills</div>
            <div className={styles.skillsGrid}>
              {SKILLS.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                  <img 
                    src={`https://skillicons.dev/icons?i=${skill.iconKey}`}
                    alt={skill.name}
                    className={styles.skillIcon}
                    width="32"
                    height="32"
                  />
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
