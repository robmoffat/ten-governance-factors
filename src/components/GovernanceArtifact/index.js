import React, {Children, isValidElement} from 'react';
import {
  AntiPatterns,
  Diagram,
  Discussion,
  References,
} from '@site/src/components/GovernanceFactor';
import styles from './styles.module.css';

function Section({id, title, children, bodyClassName, variant}) {
  if (children == null || children === false || children === '') {
    return null;
  }
  if (Array.isArray(children) && children.length === 0) {
    return null;
  }
  const variantClass =
    variant === 'warn'
      ? styles.sectionWarn
      : variant === 'accent'
        ? styles.sectionAccent
        : '';
  return (
    <section
      className={`${styles.section}${variantClass ? ` ${variantClass}` : ''}`}
      id={id}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div
        className={`${styles.sectionBody}${bodyClassName ? ` ${bodyClassName}` : ''}`}
      >
        {children}
      </div>
    </section>
  );
}

function createSlot(displayName) {
  function Slot({children}) {
    return children;
  }
  Slot.displayName = displayName;
  return Slot;
}

export const Purpose = createSlot('Purpose');
export const LayerRole = createSlot('LayerRole');
export const WhyYouNeedThis = createSlot('WhyYouNeedThis');
export const Contains = createSlot('Contains');
export const KeyFields = createSlot('KeyFields');
export const LinksUpstream = createSlot('LinksUpstream');
export const LinksDownstream = createSlot('LinksDownstream');
export const Example = createSlot('Example');
export const RelatedArtifacts = createSlot('RelatedArtifacts');
export const RelatedFactors = createSlot('RelatedFactors');

// Shared with GovernanceFactor so MDX can register one Diagram / etc.
export {AntiPatterns, Diagram, Discussion, References};

const SLOTS = {
  Purpose,
  LayerRole,
  WhyYouNeedThis,
  Contains,
  KeyFields,
  LinksUpstream,
  LinksDownstream,
  Example,
  AntiPatterns,
  Diagram,
  Discussion,
  RelatedArtifacts,
  RelatedFactors,
  References,
};

function getSlot(children, Slot) {
  const match = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === Slot,
  );
  return match?.props?.children ?? null;
}

function layerKey(layer) {
  if (layer === 'cross' || layer === 'Cross') {
    return 'cross';
  }
  if (layer == null || layer === '') {
    return null;
  }
  return String(layer);
}

function layerLabel(layer) {
  const key = layerKey(layer);
  if (key === 'cross') {
    return 'Cross-cutting';
  }
  if (!key) {
    return null;
  }
  return `Layer ${key}`;
}

/**
 * Structured template for a Gemara governance artifact type.
 */
export default function GovernanceArtifact({
  title,
  gemaraType,
  layer,
  children,
}) {
  const purpose = getSlot(children, SLOTS.Purpose);
  const layerRole = getSlot(children, SLOTS.LayerRole);
  const whyYouNeedThis = getSlot(children, SLOTS.WhyYouNeedThis);
  const contains = getSlot(children, SLOTS.Contains);
  const keyFields = getSlot(children, SLOTS.KeyFields);
  const linksUpstream = getSlot(children, SLOTS.LinksUpstream);
  const linksDownstream = getSlot(children, SLOTS.LinksDownstream);
  const example = getSlot(children, SLOTS.Example);
  const antiPatterns = getSlot(children, SLOTS.AntiPatterns);
  const diagram = getSlot(children, SLOTS.Diagram);
  const discussion = getSlot(children, SLOTS.Discussion);
  const relatedArtifacts = getSlot(children, SLOTS.RelatedArtifacts);
  const relatedFactors = getSlot(children, SLOTS.RelatedFactors);
  const references = getSlot(children, SLOTS.References);

  const key = layerKey(layer);
  const layerText = layerLabel(layer);
  const layerClass = key ? styles[`layer${key === 'cross' ? 'Cross' : key}`] : '';

  return (
    <article
      className={`${styles.artifact}${layerClass ? ` ${layerClass}` : ''}`}
      data-layer={key || undefined}
    >
      <header className={styles.header}>
        <div className={styles.badges}>
          <p className={styles.eyebrow}>Governance artifact</p>
          {layerText ? <p className={styles.layerBadge}>{layerText}</p> : null}
          {gemaraType ? (
            <p className={styles.typeBadge}>
              <code>{gemaraType}</code>
            </p>
          ) : null}
        </div>
        <h1 className={styles.title}>{title}</h1>
        {purpose && (
          <div className={styles.purpose}>
            <span className={styles.purposeLabel}>Purpose</span>
            {purpose}
          </div>
        )}
      </header>

      <Section id="layer-role" title="Layer role" variant="accent" bodyClassName={styles.prose}>
        {layerRole}
      </Section>

      <Section
        id="why-you-need-this"
        title="Why you need this"
        variant="accent"
        bodyClassName={styles.prose}
      >
        {whyYouNeedThis}
      </Section>

      <Section id="contains" title="Contains" bodyClassName={styles.listContent}>
        {contains}
      </Section>

      <Section id="key-fields" title="Key fields" bodyClassName={styles.listContent}>
        {keyFields}
      </Section>

      <Section
        id="links-upstream"
        title="Links upstream"
        bodyClassName={styles.listContent}
      >
        {linksUpstream}
      </Section>

      <Section
        id="links-downstream"
        title="Links downstream"
        bodyClassName={styles.listContent}
      >
        {linksDownstream}
      </Section>

      <Section
        id="example"
        title="Example"
        variant="accent"
        bodyClassName={`${styles.prose} ${styles.diagramContent}`}
      >
        {example}
      </Section>

      <Section
        id="anti-patterns"
        title="Anti-patterns"
        variant="warn"
        bodyClassName={styles.listContent}
      >
        {antiPatterns}
      </Section>

      <Section
        id="diagram"
        title="Diagram"
        variant="accent"
        bodyClassName={`${styles.prose} ${styles.diagramContent}`}
      >
        {diagram}
      </Section>

      <Section id="discussion" title="Discussion" bodyClassName={styles.prose}>
        {discussion}
      </Section>

      <Section
        id="related-artifacts"
        title="Related artifacts"
        bodyClassName={styles.listContent}
      >
        {relatedArtifacts}
      </Section>

      <Section
        id="related-factors"
        title="Related factors"
        bodyClassName={styles.listContent}
      >
        {relatedFactors}
      </Section>

      <Section id="references" title="References" bodyClassName={styles.listContent}>
        {references}
      </Section>
    </article>
  );
}
