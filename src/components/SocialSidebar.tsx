import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './SocialSidebar.module.css';

const socials = [
  {
    name: 'GitHub',
    icon: <FaGithub />,
    href: 'https://github.com/Aman5ingh19',
    label: 'View GitHub Profile',
    color: '#ffffff',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/aman-singh-533519301/',
    label: 'Connect on LinkedIn',
    color: '#0A66C2',
  },
  {
    name: 'Email',
    icon: <MdEmail />,
    href: 'mailto:amansingh1992002@gmail.com',
    label: 'Send an Email',
    color: '#EA4335',
  },
];

export default function SocialSidebar() {
  return (
    <motion.aside
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
      className={styles.sidebar}
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target={social.name !== 'Email' ? '_blank' : undefined}
          rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
          aria-label={social.label}
          className={styles.socialLink}
          style={{ color: social.color }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + index * 0.1 }}
        >
          {social.icon}
          <span className={styles.tooltip}>{social.name}</span>
        </motion.a>
      ))}
    </motion.aside>
  );
}
