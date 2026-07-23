import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import GovernanceFactor, {
  Principle,
  Problem,
  PositiveExamples,
  NegativeExamples,
  Tools,
  AntiPatterns,
  Diagram,
  Discussion,
  RelatedPrinciples,
  Interactions,
  References,
} from '@site/src/components/GovernanceFactor';
import FactorList from '@site/src/components/FactorList';

export default {
  ...MDXComponents,
  GovernanceFactor,
  Principle,
  Problem,
  PositiveExamples,
  NegativeExamples,
  Tools,
  AntiPatterns,
  Diagram,
  Discussion,
  RelatedPrinciples,
  Interactions,
  References,
  FactorList,
};
