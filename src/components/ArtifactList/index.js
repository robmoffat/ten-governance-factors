import React from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

function layerFromTags(tags = []) {
  for (const tag of tags) {
    const label = tag.label ?? tag;
    const match = /^Layer (\d+)$/.exec(label);
    if (match) {
      return Number(match[1]);
    }
  }
  return null;
}

/**
 * Index of governance artifacts from the category-listing plugin.
 * Docs tagged "Artifact" are listed in sidebar_position order.
 *
 * @param {object} props
 * @param {string} [props.tag='Artifact']
 * @param {number[]} [props.layers] - If set, only include those Gemara layers
 */
export default function ArtifactList({tag = 'Artifact', layers} = {}) {
  const listing = usePluginData('category-listing') ?? {};
  const allowed = layers?.length ? new Set(layers.map(Number)) : null;

  const artifacts = [...(listing[tag] ?? [])]
    .map((doc) => ({
      ...doc,
      layer: layerFromTags(doc.tags),
    }))
    .filter((doc) => {
      if (doc.permalink?.endsWith('/definitions/') || doc.permalink?.endsWith('/definitions')) {
        return false;
      }
      if (!allowed) {
        return true;
      }
      return doc.layer != null && allowed.has(doc.layer);
    })
    .sort((a, b) => a.order - b.order);

  if (artifacts.length === 0) {
    return null;
  }

  return (
    <ol className={styles.list}>
      {artifacts.map((artifact) => {
        const description =
          artifact.description ?? artifact.frontMatter?.description ?? '';
        const layerClass =
          artifact.layer != null ? styles[`layer${artifact.layer}`] : '';
        return (
          <li
            key={artifact.permalink}
            className={`${styles.item}${layerClass ? ` ${layerClass}` : ''}`}
            data-layer={artifact.layer ?? undefined}
          >
            <h3 className={styles.heading}>
              {artifact.layer != null ? (
                <span className={styles.numeral} aria-hidden="true">
                  L{artifact.layer}
                </span>
              ) : null}{' '}
              <Link className={styles.title} to={artifact.permalink}>
                {artifact.title}
              </Link>
            </h3>
            {description ? (
              <p className={styles.description}>{description}</p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
