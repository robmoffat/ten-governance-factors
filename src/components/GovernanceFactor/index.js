import React, {Children, isValidElement} from 'react';
import styles from './styles.module.css';

function Section({id, title, children, bodyClassName, variant}) {
  if (children == null || children === false || children === '') {
    return null;
  }
  if (Array.isArray(children) && children.length === 0) {
    return null;
  }
  const variantClass =
    variant === 'positive'
      ? styles.sectionPositive
      : variant === 'negative'
        ? styles.sectionNegative
        : variant === 'warn'
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
      <div className={`${styles.sectionBody}${bodyClassName ? ` ${bodyClassName}` : ''}`}>
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

export const Principle = createSlot('Principle');
export const Problem = createSlot('Problem');
export const Characteristics = createSlot('Characteristics');
export const PositiveExamples = createSlot('PositiveExamples');
export const NegativeExamples = createSlot('NegativeExamples');
export const Tools = createSlot('Tools');
export const AntiPatterns = createSlot('AntiPatterns');
export const Diagram = createSlot('Diagram');
export const Discussion = createSlot('Discussion');
export const RelatedPrinciples = createSlot('RelatedPrinciples');
export const Interactions = createSlot('Interactions');
export const References = createSlot('References');

const SLOTS = {
  Principle,
  Problem,
  Characteristics,
  PositiveExamples,
  NegativeExamples,
  Tools,
  AntiPatterns,
  Diagram,
  Discussion,
  RelatedPrinciples,
  Interactions,
  References,
};

function getSlot(children, Slot) {
  const match = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === Slot,
  );
  return match?.props?.children ?? null;
}

/**
 * Structured template for a single Ten Factor Governance factor.
 *
 * Content sections are provided as nested tags (not props), so MDX authors can
 * use ordinary markdown inside each part:
 *
 * ```mdx
 * <GovernanceFactor title="…">
 *   <Principle>…</Principle>
 *   <Problem>…</Problem>
 *   <PositiveExamples>
 *
 *   - example
 *
 *   </PositiveExamples>
 * </GovernanceFactor>
 * ```
 *
 * @param {object} props
 * @param {string} props.title
 * @param {number} [props.number] - Factor ordinal 1–10 (sets colour + Roman eyebrow)
 * @param {React.ReactNode} props.children - Slot tags listed above
 */
export default function GovernanceFactor({title, number, children}) {
  const principle = getSlot(children, SLOTS.Principle);
  const problem = getSlot(children, SLOTS.Problem);
  const characteristics = getSlot(children, SLOTS.Characteristics);
  const positiveExamples = getSlot(children, SLOTS.PositiveExamples);
  const negativeExamples = getSlot(children, SLOTS.NegativeExamples);
  const tools = getSlot(children, SLOTS.Tools);
  const antiPatterns = getSlot(children, SLOTS.AntiPatterns);
  const diagram = getSlot(children, SLOTS.Diagram);
  const discussion = getSlot(children, SLOTS.Discussion);
  const relatedPrinciples = getSlot(children, SLOTS.RelatedPrinciples);
  const interactions = getSlot(children, SLOTS.Interactions);
  const references = getSlot(children, SLOTS.References);

  const n = Number(number);
  const factorClass =
    Number.isFinite(n) && n >= 1 && n <= 10 ? styles[`factor${n}`] : '';

  return (
    <article
      className={`${styles.factor}${factorClass ? ` ${factorClass}` : ''}`}
      data-factor={Number.isFinite(n) ? n : undefined}
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>
          {Number.isFinite(n)
            ? `Factor ${['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][n - 1] ?? n}`
            : 'Factor'}
        </p>
        <h1 className={styles.title}>{title}</h1>
        {principle && (
          <div className={styles.principle}>
            <span className={styles.principleLabel}>Principle</span>
            {principle}
          </div>
        )}
      </header>

      <Section id="problem" title="Problem" variant="accent" bodyClassName={styles.prose}>
        {problem}
      </Section>

      <Section
        id="characteristics"
        title="Characteristics"
        variant="accent"
        bodyClassName={`${styles.listContent} ${styles.revealList}`}
      >
        {characteristics}
      </Section>

      <Section
        id="positive-examples"
        title="Positive examples"
        variant="positive"
        bodyClassName={`${styles.listContent} ${styles.revealList}`}
      >
        {positiveExamples}
      </Section>

      <Section
        id="negative-examples"
        title="Negative examples"
        variant="negative"
        bodyClassName={`${styles.listContent} ${styles.revealList}`}
      >
        {negativeExamples}
      </Section>

      <Section id="tools" title="Tools you can use" bodyClassName={styles.listContent}>
        {tools}
      </Section>

      <Section
        id="anti-patterns"
        title="Anti-patterns"
        variant="warn"
        bodyClassName={`${styles.listContent} ${styles.revealList}`}
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
        id="related-principles"
        title="Related principles"
        bodyClassName={styles.listContent}
      >
        {relatedPrinciples}
      </Section>

      <Section id="interactions" title="Interactions" bodyClassName={styles.prose}>
        {interactions}
      </Section>

      <Section id="references" title="References" bodyClassName={styles.listContent}>
        {references}
      </Section>
    </article>
  );
}
