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
    icon: '🚀',
    description: <>The essentials to get you started with Streamr.</>,
    link: '/docs/quickstart',
  },
  {
    title: 'Main Concepts',
    icon: '📚',
    description: (
      <>
        Dive deeper into the Streamr network and learn how to manage your
        real-time data.
      </>
    ),
    link: '/docs/quickstart',
  },
  {
    title: 'Guides',
    icon: '🦮',
    description: (
      <>
        Find guides to specific use-cases. Want to build a chat app, send
        notifications or want to build a multiplayer game? Check out this
        section!
      </>
    ),
    link: '/docs/quickstart',
  },
  {
    title: 'Run A Node',
    icon: '👾',
    description: (
      <>
        Learn how to become part of the Streamr network and start earning
        rewards!
      </>
    ),
    link: '/docs/quickstart',
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
