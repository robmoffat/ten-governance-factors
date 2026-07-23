import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const LAYERS = [
  {
    key: '1',
    label: 'Layer 1 — Definitions',
    items: [
      {to: '/docs/artifacts/layer-1/principle', label: 'Principle'},
      {to: '/docs/artifacts/layer-1/vector', label: 'Vector'},
      {to: '/docs/artifacts/layer-1/guidance', label: 'Guidance'},
    ],
  },
  {
    key: '2',
    label: 'Layer 2 — Threats & controls',
    items: [
      {to: '/docs/artifacts/layer-2/capability', label: 'Capability'},
      {to: '/docs/artifacts/layer-2/threat', label: 'Threat'},
      {to: '/docs/artifacts/layer-2/control', label: 'Control'},
    ],
  },
  {
    key: '3',
    label: 'Layer 3 — Risk & policy',
    items: [
      {to: '/docs/artifacts/layer-3/risk', label: 'Risk'},
      {to: '/docs/artifacts/layer-3/policy', label: 'Policy'},
    ],
  },
  {
    key: '4',
    label: 'Layer 4 — Sensitive activity',
    items: [{to: '/docs/artifacts/layer-4/sensitive-activity', label: 'Sensitive Activity'}],
  },
  {
    key: '5',
    label: 'Layer 5 — Evaluation',
    items: [{to: '/docs/artifacts/layer-5/evaluation-log', label: 'Evaluation Log'}],
  },
  {
    key: '6',
    label: 'Layer 6 — Enforcement',
    items: [{to: '/docs/artifacts/layer-6/enforcement-log', label: 'Enforcement Log'}],
  },
  {
    key: '7',
    label: 'Layer 7 — Audit',
    items: [{to: '/docs/artifacts/layer-7/audit-log', label: 'Audit Log'}],
  },
];

const CROSS = [
  {to: '/docs/artifacts/cross-cutting/lexicon', label: 'Lexicon'},
  {to: '/docs/artifacts/cross-cutting/mapping-document', label: 'Mapping Document'},
];

/**
 * Flex stack of Gemara layers with links into each artifact page.
 */
export default function ArtifactLayerMap() {
  return (
    <div className={styles.map} role="img" aria-label="Gemara artifact layers">
      <div className={`${styles.band} ${styles.layerCross}`}>
        <p className={styles.bandLabel}>Cross-cutting</p>
        <div className={styles.items}>
          {CROSS.map((item) => (
            <Link key={item.to} className={styles.chip} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <p className={styles.flowHint}>defines ↓</p>

      {LAYERS.map((layer, index) => (
        <React.Fragment key={layer.key}>
          {index === 3 ? (
            <p className={styles.flowHint}>governs ↓</p>
          ) : null}
          {index === 4 ? (
            <p className={styles.flowHint}>measures ↓</p>
          ) : null}
          <div className={`${styles.band} ${styles[`layer${layer.key}`]}`}>
            <p className={styles.bandLabel}>{layer.label}</p>
            <div className={styles.items}>
              {layer.items.map((item) => (
                <Link key={item.to} className={styles.chip} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
