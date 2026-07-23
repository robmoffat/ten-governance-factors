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
import GovernanceArtifact, {
  Purpose,
  LayerRole,
  WhyYouNeedThis,
  Contains,
  KeyFields,
  LinksUpstream,
  LinksDownstream,
  Example,
  RelatedArtifacts,
  RelatedFactors,
} from '@site/src/components/GovernanceArtifact';
import FactorList from '@site/src/components/FactorList';
import RevealItem from '@site/src/components/RevealItem';
import LayerPill from '@site/src/components/LayerPill';
import ArtifactLayerMap from '@site/src/components/ArtifactLayerMap';

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
  GovernanceArtifact,
  Purpose,
  LayerRole,
  WhyYouNeedThis,
  Contains,
  KeyFields,
  LinksUpstream,
  LinksDownstream,
  Example,
  RelatedArtifacts,
  RelatedFactors,
  FactorList,
  RevealItem,
  LayerPill,
  ArtifactLayerMap,
};
