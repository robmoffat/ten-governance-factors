import React from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

/**
 * Index of tools from the category-listing plugin (docs tagged "Tool").
 */
export default function ToolList({tag = 'Tool'} = {}) {
  const listing = usePluginData('category-listing') ?? {};
  const tools = [...(listing[tag] ?? [])].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  if (tools.length === 0) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {tools.map((tool) => (
        <li key={tool.permalink} className={styles.item}>
          <h3 className={styles.heading}>
            <Link className={styles.title} to={tool.permalink}>
              {tool.title}
            </Link>
          </h3>
          {tool.description ? (
            <p className={styles.description}>{tool.description}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
