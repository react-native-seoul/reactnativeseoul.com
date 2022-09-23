/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const sidebars = {
  docs: [
    "introduction",
    "news",
    {
      type: "category",
      label: "Resource",
      link: { type: "generated-index" },
      collapsed: false,
      items: ["community", "forums", "meetup", "opensource"],
    },
  ],
};

module.exports = sidebars;
