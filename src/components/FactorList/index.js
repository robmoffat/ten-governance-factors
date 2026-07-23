import React from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

/**
 * Numbered index of Ten Factor Governance factors from the category-listing plugin.
 * Docs tagged "Factor" are listed in sidebar_position order.
 */
export default function FactorList({tag = 'Factor'} = {}) {
  const listing = usePluginData('category-listing') ?? {};
  const factors = [...(listing[tag] ?? [])].sort((a, b) => a.order - b.order);

  if (factors.length === 0) {
    return null;
  }

  return (
    <ol className={styles.list}>
      {factors.map((factor, index) => {
        const description =
          factor.description ?? factor.frontMatter?.description ?? '';
        const n = index + 1;
        return (
          <li
            key={factor.permalink}
            className={`${styles.item}${styles[`factor${n}`] ? ` ${styles[`factor${n}`]}` : ''}`}
            data-factor={n}
          >
            <h3 className={styles.heading}>
              <span className={styles.numeral} aria-hidden="true">
                {ROMAN[index] ?? String(n)}.
              </span>{' '}
              <Link className={styles.title} to={factor.permalink}>
                {factor.title}
              </Link>
            </h3>
            {description ? (
              <p className={styles.principle}>{description}</p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
