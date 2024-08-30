import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={`${styles.box} ${styles.box1}`}>
        <div className={styles.sideLeft}></div>
        <div className={styles.sideRight}></div>
        <div className={styles.sideTop}></div>
      </div>
      <div className={`${styles.box} ${styles.box2}`}>
        <div className={styles.sideLeft}></div>
        <div className={styles.sideRight}></div>
        <div className={styles.sideTop}></div>
      </div>
      <div className={`${styles.box} ${styles.box3}`}>
        <div className={styles.sideLeft}></div>
        <div className={styles.sideRight}></div>
        <div className={styles.sideTop}></div>
      </div>
      <div className={`${styles.box} ${styles.box4}`}>
        <div className={styles.sideLeft}></div>
        <div className={styles.sideRight}></div>
        <div className={styles.sideTop}></div>
      </div>
    </div>
  );
};

export default Loader;
