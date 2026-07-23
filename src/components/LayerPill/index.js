import React from 'react';
import styles from './styles.module.css';

/**
 * Coloured badge for a Gemara layer (1–7 or "cross").
 */
export default function LayerPill({layer, children}) {
  const key =
    layer === 'cross' || layer === 'Cross' || layer === 'Cross-cutting'
      ? 'cross'
      : String(layer);
  const layerClass =
    key === 'cross' ? styles.layerCross : styles[`layer${key}`] ?? '';
  const label =
    children ??
    (key === 'cross' ? 'Cross-cutting' : `L${key}`);

  return (
    <span
      className={`${styles.pill}${layerClass ? ` ${layerClass}` : ''}`}
      data-layer={key}
    >
      {label}
    </span>
  );
}
