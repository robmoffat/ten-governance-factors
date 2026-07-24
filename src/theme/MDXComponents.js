import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import GovernanceFactor, {
  Principle,
  Problem,
  Characteristics,
  PositiveExamples,
  NegativeExamples,
  Tools,
  AntiPatterns,
  Diagram,
  Discussion,
  RelatedFactors,
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
} from '@site/src/components/GovernanceArtifact';
import FactorList from '@site/src/components/FactorList';
import RevealItem from '@site/src/components/RevealItem';
import LayerPill from '@site/src/components/LayerPill';
import ArtifactLayerMap from '@site/src/components/ArtifactLayerMap';
import Tool, {HelpsWith} from '@site/src/components/Tool';
import ToolList from '@site/src/components/ToolList';

export default {
  ...MDXComponents,
  GovernanceFactor,
  Principle,
  Problem,
  Characteristics,
  PositiveExamples,
  NegativeExamples,
  Tools,
  AntiPatterns,
  Diagram,
  Discussion,
  RelatedFactors,
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
  FactorList,
  RevealItem,
  LayerPill,
  ArtifactLayerMap,
  Tool,
  HelpsWith,
  ToolList,
};
