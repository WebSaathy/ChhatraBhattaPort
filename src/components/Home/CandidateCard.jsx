import React from 'react';
import styles from './CandidateCard.module.css';

export default function CandidateCard({
  nameLine1 = 'छत्रबहादुर',
  nameLine2 = 'भट्ट',
  subtitle = 'स्वतन्त्र उम्मेदवार',
  role = '— प्रतिनिधि सभा कैलाली',
  region = 'क्षेत्र नम्बर 4',
  image, // optional image URL to show the left-side portrait
  onProfile = () => {},
  onJoin = () => {},
}) {
  return (
    <section className={styles.card} aria-label="candidate card">
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.nameWrap}>
            <h1 className={styles.name}>
              <span className={styles.nameLine1}>{nameLine1}</span>
              <span className={styles.nameLine2}>{nameLine2}</span>
            </h1>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.rightContent}>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.role}>{role}</p>
            <p className={styles.region}>{region}</p>

            <div className={styles.buttons}>
              <button className={styles.primary} onClick={onProfile}>मेरो परिचय</button>
              <button className={styles.ghost} onClick={onJoin}>सदस्य बहुहोस्</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
