import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import FactorList from '@site/src/components/FactorList';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>FINOS CCC</p>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.subtitle}>
          A shared vocabulary for operable governance: activity-centred,
          machine-readable, continuous, and owned.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryCta} to="/docs/">
            Read the introduction
          </Link>
          <Link
            className={styles.secondaryCta}
            to="/docs/factors/govern-sensitive-activities"
          >
            Start with Factor I
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Exploring governance factors for the FINOS CCC"
    >
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>The Ten Factors</h2>
            <p className={styles.sectionLead}>
              Each factor names a property of governance that scales with modern
              platforms—not a product checklist, but a design stance.
            </p>
            <FactorList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
