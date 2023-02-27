import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'EVM-native',
    Svg: require('@site/static/img/eth_reflect.svg').default,
    description: (
      <>
        Enforcing EVM semantics explicitly on-chain, at the level of a single EVM instruction.
      </>
    ),
  },
  {
    title: 'Auditable TCB',
    Svg: require('@site/static/img/auditable_tcb_1.svg').default,
    description: (
      <>
        Specular's Trusted Computing Base (TCB) includes only the on-chain verifier which is more easily auditable and entirely formally verifiable against a formal EVM specification.
      </>
    ),
  },
  {
    title: 'Permissionless Diversity',
    Svg: require('@site/static/img/client_diversity.svg').default,
    description: (
      <>
        On-chain verifier is agnostic to the client program which provides permissonless and intrinsic client diversity.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
