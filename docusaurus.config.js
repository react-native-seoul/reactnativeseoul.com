/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "React Native Seoul",
  url: "https://reactnativeseoul.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "react-native-seoul",
  projectName: "reactnativeseoul.com",
  onBrokenLinks: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
  },
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/current/introduction",
            from: "/docs",
          },
          {
            to: "/docs/current/introduction",
            from: "/docs/introduction",
          }
        ],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "React Native Seoul",
      logo: {
        alt: "reactnativeseoul",
        src: "img/logo.png",
      },
      items: [
        {
          to: "/docs/current/introduction",
          label: "Community",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/react-native-seoul/reactnativeseoul.com",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Intro",
              to: "/docs/current/introduction",
            },
          ],
        },
        {
          title: "Offline",
          items: [
            {
              label: "Meetup",
              href: "https://www.meetup.com/ko-KR/react-native-seoul",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Medium",
              href: "https://medium.com/react-native-seoul",
            },
            {
              label: "Slack",
              href: "https://dooboolab.com/joinRNSeoul",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} dooboolab.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          lastVersion: "current",
          versions: {
            current: {
              label: "current",
              path: "current",
            },
          },
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ locale, docPath }) => {
            if (locale !== "en") {
              return `https://github.com/react-native-seoul/reactnativeseoul.com/tree/main/${locale}`;
            }
            // We want users to submit doc updates to the upstream/next version!
            // Otherwise we risk losing the update on the next release.
            const nextVersionDocsDirPath = "docs";
            return `https://github.com/react-native-seoul/reactnativeseoul.com/edit/main/${nextVersionDocsDirPath}/${docPath}`;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
