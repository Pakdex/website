import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className={clsx('heroLogok', styles.heroLogo)} src="img/vertical_black_specular_logo.svg"/>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.b_container}> 
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--md"
              to="https://medium.com/@SpecularL2/towards-secure-trust-minimized-optimistic-rollups-18f32a767aed">
              What is Specular?
            </Link>
          </div>

          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--md"
              to="/docs/getting-started">
              Getting Started
            </Link>
          </div>
        </div>

        <div>
          <div style={{margin: "20px 0 15px 0", color: "black"}}>With support from</div>
          <div className={styles.sponsors}>
            <Link to="https://rdi.berkeley.edu"><img className={styles.sponsorImg} src="img/berkeley_rdi_logo.jpeg"/></Link> 
            <Link to="https://blog.ethereum.org/2023/02/14/layer-2-grants-roundup"><img className={styles.sponsorImg} src="img/ef-logo.svg"/></Link> 
            <Link to="https://gnosis.io"><img height="18" style={{marginTop: "10px"}} src="https://raw.githubusercontent.com/gnosischain/media-kit/main/Logos/01%20Chain/Transparent/SVG/LogomarkChain-Horizontal-Moss.svg"/></Link> 
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Home`}
      description="The First EVM-native Optimistic Rollup">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
