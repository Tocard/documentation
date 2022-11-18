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
    description: (
      <>afafas asdjflkaö jldö jfklasö jflsaö fjklaö fadsfa afs fdsafa sadf</>
    ),
    link: '/docs/quickstart',
  },
  {
    title: 'Main Concepts',
    icon: '📚',
    description: (
      <>afafas asdjflkaö jldö jfklasö jflsaö fjkla flsaö fjklaö fadsfa </>
    ),
    link: '/docs/quickstart',
  },
  {
    title: 'Guides',
    icon: '🦮',
    description: <>afafas asdjflkaö jldö jfklasö jflsaö fjklaö vfsafasfas</>,
    link: '/docs/quickstart',
  },
  {
    title: 'Run A Node',
    icon: '👾',
    description: (
      <>
        afafas asdjflkaö jldö jfklasö jflsaö fjklaö fasdfa fasdfa fasdfas fasdf
        as
      </>
    ),
    link: '/docs/quickstart',
  },
];

function Feature({ title, icon, description, link }: GatewayCard) {
  return (
    <Link to={link}>
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
