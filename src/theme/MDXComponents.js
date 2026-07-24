import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import GovernanceFactor, {
  Principle,
  Problem,
  Characteristics,
  PositiveExamples,
  NegativeExamples,
  AntiPatterns,
  Diagram,
  Discussion,
  RelatedFactors,
  References,
} from '@site/src/components/GovernanceFactor';
import GovernanceArtifact, {
  Purpose,
  Role,
  Examples,
  LinksUpstream,
  LinksDownstream,
} from '@site/src/components/GovernanceArtifact';
import FactorList from '@site/src/components/FactorList';
import ArtifactList from '@site/src/components/ArtifactList';
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
  AntiPatterns,
  Diagram,
  Discussion,
  RelatedFactors,
  References,
  GovernanceArtifact,
  Purpose,
  Role,
  Examples,
  LinksUpstream,
  LinksDownstream,
  FactorList,
  ArtifactList,
  RevealItem,
  LayerPill,
  ArtifactLayerMap,
  Tool,
  HelpsWith,
  ToolList,
};
