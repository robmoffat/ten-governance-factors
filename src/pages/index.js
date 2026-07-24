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
        <p className={styles.eyebrow}>FINOS</p>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.subtitle}>
          A shared vocabulary for operable governance: activity-centred,
          machine-readable, continuous, and owned.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryCta} to="/docs/factors/">
            Explore the factors
          </Link>
          <Link
            className={styles.secondaryCta}
            to="/docs/artifacts/"
          >
            Browse artifacts
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
      description="Ten Factor Governance"
    >
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.manifesto}>
              <p>
                Modern software increasingly operates in environments where
                trust, accountability and compliance are not optional—they are
                fundamental requirements. Whether building systems for financial
                services, healthcare, critical infrastructure or government,
                organisations are expected to demonstrate not only that their
                software works, but that it is secure, resilient, auditable and
                governed throughout its lifecycle.
              </p>
              <p>
                Regulations such as DORA, the EU AI Act, NIS2, HIPAA, GDPR and
                countless industry-specific frameworks all point towards the
                same outcome: continuous evidence of responsible operation,
                rather than periodic compliance exercises.
              </p>
              <p>
                Ten Factor Governance provides a practical architectural
                blueprint for building systems that can meet these expectations
                by design. It encourages developers to make governance
                observable, machine-readable and continuously verifiable,
                ensuring that policies, controls and evidence evolve alongside
                the software itself. The result is software that is easier to
                trust, easier to audit, easier to automate and ultimately more
                capable of operating safely in the highly regulated environments
                that increasingly define modern computing.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>The Factors</h2>
            <p className={styles.sectionLead}>
              Each factor in Ten Factor Governance names a property of operable
              governance that scales with modern platforms—not a product
              checklist, but a design stance.
            </p>
            <FactorList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
