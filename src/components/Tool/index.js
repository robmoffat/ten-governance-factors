import React, {Children, isValidElement} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * One factor relationship for a tool page.
 *
 * ```mdx
 * <HelpsWith to="/docs/factors/govern-sensitive-activities" title="Govern Sensitive Activities">
 *   Brief explanation of how this tool helps that factor.
 * </HelpsWith>
 * ```
 */
export function HelpsWith({to, title, children}) {
  return (
    <li className={styles.helpsItem}>
      <Link className={styles.helpsLink} to={to}>
        {title}
      </Link>
      <div className={styles.helpsBody}>{children}</div>
    </li>
  );
}

HelpsWith.displayName = 'HelpsWith';

/**
 * Structured template for a named tool or standard referenced by the factors.
 *
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.homepage - External project / standards home URL
 * @param {string} props.description - Short summary shown under the title
 * @param {React.ReactNode} props.children - `<HelpsWith>` entries
 */
export default function Tool({name, homepage, description, children}) {
  const helps = Children.toArray(children).filter(
    (child) => isValidElement(child) && child.type === HelpsWith,
  );

  return (
    <article className={styles.tool}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Tool</p>
        <h1 className={styles.title}>{name}</h1>
        {description ? <p className={styles.description}>{description}</p> : null}
        {homepage ? (
          <p className={styles.home}>
            <a href={homepage} target="_blank" rel="noopener noreferrer">
              {homepage.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
          </p>
        ) : null}
      </header>

      {helps.length > 0 ? (
        <section className={styles.section} id="how-it-helps">
          <h2 className={styles.sectionTitle}>Where it helps</h2>
          <ul className={styles.helpsList}>{helps}</ul>
        </section>
      ) : null}
    </article>
  );
}
