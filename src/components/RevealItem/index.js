import React from 'react';
import styles from './styles.module.css';

/**
 * Progressive-reveal list item: click the title to expand the description.
 *
 * ```mdx
 * <RevealItem title="Releasing to production">
 *   A concrete sensitive activity where policy can evaluate before state changes.
 * </RevealItem>
 * ```
 */
export default function RevealItem({title, children, defaultOpen = false}) {
  return (
    <details className={styles.item} open={defaultOpen || undefined}>
      <summary className={styles.summary}>
        <span className={styles.title}>{title}</span>
        <span className={styles.chevron} aria-hidden="true" />
      </summary>
      <div className={styles.body}>{children}</div>
    </details>
  );
}
