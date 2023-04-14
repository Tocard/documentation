import React, { ReactNode } from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeaturedLinksJSON = [
  {
    href: './classes/Stream',
    content: 'Stream',
    label: 'class',
  },
  {
    href: './classes/StreamrClient',
    content: 'StreamrClient',
    label: 'class',
  },
  {
    href: './classes/Subscription',
    content: 'Subscription',
    label: 'class',
  },
  {
    href: './interfaces/Message',
    content: 'Message',
    label: 'interface',
  },
];

type Props = {
  content: ReactNode;
  label: string;
  href: string;
};

export function FeaturedLink({ content, label, href }: Props): JSX.Element {
  return (
    <Link style={{ textDecoration: 'none' }} to={href}>
      <div className={styles.link}>
        <span style={{ fontWeight: 'bold' }}>{label}:</span>
        <span>{content}</span>
      </div>
    </Link>
  );
}

export default function FeaturedLinks(): JSX.Element {
  return (
    <section className={styles.linkList + ' container'}>
      {FeaturedLinksJSON.map((fLink, index) => {
        return (
          <FeaturedLink
            key={index}
            content={fLink.content}
            href={fLink.href}
            label={fLink.label}
          />
        );
      })}
      <FeaturedLink
        content={FeaturedLinksJSON[0].content}
        href={FeaturedLinksJSON[0].href}
        label={FeaturedLinksJSON[0].label}
      />
      <FeaturedLink
        content={FeaturedLinksJSON[0].content}
        href={FeaturedLinksJSON[0].href}
        label={FeaturedLinksJSON[0].label}
      />{' '}
    </section>
  );
}
