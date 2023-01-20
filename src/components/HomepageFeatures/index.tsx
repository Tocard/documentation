import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type GatewayCard = {
  title: string;
  icon: string;
  link: string;
  description: JSX.Element;
};

const FeatureList: GatewayCard[] = [
  {
    title: 'Quickstart',
    icon: '🪄',
    description: <>Practical guides for developers to get started with Streamr</>,
    link: '/docs/quickstart/nodejs',
  },
  {
    title: 'Usage',
    icon: '👩🏽‍💻',
    description: (
      <>
        Get your head around the main concepts. Learn how to interact with the Network. 
      </>
    ),
    link: '/docs/quickstart/nodejs',
  },
  {
    title: 'Streamr Network',
    icon: '🌐',
    description: (
      <>
        Technical theory and advanced topics related to how the Streamr Network works.
      </>
    ),
    link: '/docs/quickstart/nodejs',
  },
  {
    title: 'Node runners',
    icon: '👾',
    description: (
      <>
        Learn how to contribute your bandwidth and support the Network as a node runner.
      </>
    ),
    link: '/docs/quickstart/nodejs',
  },
];

function Feature({ title, icon, description, link }: GatewayCard) {
  return (
    <Link style={{ textDecoration: 'none' }} to={link}>
      <div className={styles.card}>
        <div className={styles.icon}>{icon}</div>
        <div className="text--left">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.cards + ' container'}>
      <Feature {...FeatureList[0]} />
      <Feature {...FeatureList[1]} />
      <Feature {...FeatureList[2]} />
      <Feature {...FeatureList[3]} />
    </section>
  );
}
