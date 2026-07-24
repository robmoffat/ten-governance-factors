/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ten Factor Governance',
  tagline: 'A methodology for operable, auditable governance',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config
  url: 'https://finos.org',
  baseUrl: '/governance-factors/',
  organizationName: 'finos',
  projectName: 'governance-factors',

  onBrokenLinks: 'ignore',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'ignore',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [require.resolve('./src/plugins/category-listing')],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ten Factor Governance',
        logo: {
          alt: 'FINOS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'defaultSidebar',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'The Factors',
                to: '/docs/factors/',
              },
              {
                label: 'Artifacts',
                to: '/docs/artifacts/',
              },
              {
                label: 'Tools',
                to: '/docs/tools/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'FINOS',
                href: 'https://www.finos.org/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/finos/governance-factors',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FINOS.`,
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
    }),
};

module.exports = config;
