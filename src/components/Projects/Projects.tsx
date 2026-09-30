import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    number: '01',
    title: 'FixIt | Distributed Service Booking & Repair Platform',
    description: 'Built a full-stack platform connecting customers with technicians for service bookings, job tracking, and real-time communication using Socket.IO. Implemented OAuth 2.0/OIDC authentication, Redis caching, and asynchronous processing with RabbitMQ (DLQ, retries) and Kafka event streaming. Integrated Razorpay Test Mode, Docker, Kubernetes with HPA, and GitHub Actions CI/CD.',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Redis', 'Socket.IO', 'RabbitMQ', 'Kafka', 'Docker', 'Kubernetes'],
    github: 'https://github.com/Aman5ingh19/FixIt',
    demo: 'https://fix-it-nu-sable.vercel.app/',
    image: '',
  },
  {
    number: '02',
    title: 'MailGenius | AI-Powered Email Assistant & Intelligence Platform',
    description: 'Developed an AI email assistant for professional reply generation, draft improvement, grammar correction, and tone analysis. Engineered multi-provider AI fallback using Gemini, Groq, and OpenRouter, with RAG-based semantic retrieval using Supabase pgvector. Integrated NextAuth.js, Redis rate limiting, Firebase push notifications, and Docker.',
    tech: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'pgvector', 'Gemini', 'Redis', 'Firebase', 'Docker'],
    github: 'https://github.com/Aman5ingh19/MailGenius---AI-Email-Assistant',
    demo: 'https://mail-genius-ai-email-assistant.vercel.app',
    image: '',
  },
  {
    number: '03',
    title: 'HRMS Lite | Cloud-Native Distributed Human Resource Management System',
    description: 'Developed an HR management platform for employee records, attendance tracking, and check-in/check-out workflows with Clerk authentication. Implemented event-driven processing using Kafka and RabbitMQ, with Redis caching and n8n workflow automation. Containerized services using Docker and configured Kubernetes deployments with HPA and GitHub Actions CI/CD.',
    tech: ['React', 'Django', 'MongoDB Atlas', 'Redis', 'RabbitMQ', 'Kafka', 'Docker', 'Kubernetes'],
    github: 'https://github.com/Aman5ingh19/HRMS-LITE',
    demo: 'https://hrms-lite-ten-phi.vercel.app',
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
                    <FiGithub className={styles.cardLinkIcon} /> GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.cardLink} data-cursor-hover>
                      <FiExternalLink className={styles.cardLinkIcon} /> Live Demo
                    </a>
                  )}
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
