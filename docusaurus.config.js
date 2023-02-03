// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Streamr docs',
  tagline:
    'Publish and subscribe to your json based real-time data powered by the decentralized Streamr network.',
  url: 'https://streamr.network/',
  baseUrl: '/documentation/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'streamr-dev', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/streamr-dev/documentation',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://blog.streamr.network/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Streamr',
        logo: {
          alt: 'Streamr Logo',
          src: 'img/streamr-logo.svg',
        },
        // items: [
        //   {
        //     type: 'doc',
        //     docId: 'quickstart/nodejs',
        //     position: 'left',
        //     label: 'Quickstart',
        //   },
        //   {
        //     type: 'doc',
        //     docId: 'node-runners/run-a-node',
        //     position: 'left',
        //     label: 'Run A Node',
        //   },
        //   {
        //     href: 'https://streamr.network/core',
        //     label: 'Streamr Hub',
        //     position: 'right',
        //   },
        // ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quickstart',
                to: 'docs/quickstart/JS-client',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gZAm8P7hK8',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/streamr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.streamr.network/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/streamr-dev',
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
