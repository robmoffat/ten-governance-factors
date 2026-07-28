import React, {Children, isValidElement, useId, useMemo, useState} from 'react';
import styles from './styles.module.css';

/**
 * Collapsible MDX block for code examples.
 *
 * ```mdx
 * <CodeExample
 *   title="Policy evaluation"
 *   type="YAML"
 *   caption="Returned by the decision function"
 * >
 * ```yaml
 * decision: permit
 * ```
 * </CodeExample>
 *
 * <CodeExample title="Frontend" type="Example">
 *   <Outputs defaultValue="html">
 *     <Output value="html" label="HTML">
 *       ```html
 *       <div>Hello</div>
 *       ```
 *     </Output>
 *     <Output value="css" label="CSS">
 *       ```css
 *       div { color: red; }
 *       ```
 *     </Output>
 *   </Outputs>
 * </CodeExample>
 * ```
 */
export default function CodeExample({
  title,
  type,
  caption,
  children,
  defaultOpen = false,
}) {
  return (
    <details className={styles.item} open={defaultOpen || undefined}>
      <summary className={styles.summary}>
        <span className={styles.header}>
          <span className={styles.heading}>
            <span className={styles.title}>{title}</span>
            {type ? <span className={styles.pill}>{type}</span> : null}
          </span>
          {caption ? <span className={styles.caption}>{caption}</span> : null}
        </span>
        <span className={styles.chevron} aria-hidden="true" />
      </summary>
      <div className={styles.body}>{children}</div>
    </details>
  );
}

export function Output({children}) {
  return children;
}

Output.displayName = 'Output';

export function Outputs({children, defaultValue}) {
  const groupId = useId();
  const options = useMemo(
    () =>
      Children.toArray(children).filter(
        (child) => isValidElement(child) && child.type === Output,
      ),
    [children],
  );

  const initialValue = defaultValue ?? options[0]?.props?.value;
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const selectedOption =
    options.find((option) => option.props.value === selectedValue) ?? options[0];

  if (options.length === 0) {
    return null;
  }

  return (
    <div className={styles.outputs}>
      <div className={styles.outputSelector} role="radiogroup" aria-label="Output selector">
        {options.map((option) => {
          const value = option.props.value;
          const label = option.props.label ?? value;
          const inputId = `${groupId}-${value}`;
          const checked = value === selectedValue;

          return (
            <label
              key={value}
              className={`${styles.outputOption}${checked ? ` ${styles.outputOptionSelected}` : ''}`}
              htmlFor={inputId}
            >
              <input
                id={inputId}
                className={styles.outputInput}
                type="radio"
                name={groupId}
                value={value}
                checked={checked}
                onChange={() => setSelectedValue(value)}
              />
              <span className={styles.outputLabel}>{label}</span>
            </label>
          );
        })}
      </div>
      <div className={styles.outputBody}>{selectedOption}</div>
    </div>
  );
}

Outputs.displayName = 'Outputs';
