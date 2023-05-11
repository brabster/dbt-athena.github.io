const sidebarSettings = {
  docs: [
    "docs/introduction",

    // Getting Started
    {
      type: "category",
      label: "Getting started",
      items: [
        {
          type: "category",
          label: "Prerequisites",
          collapsed: true,
          items: [
            "docs/getting-started/prerequisites/aws-resources",
            "docs/getting-started/prerequisites/iam-permissions",
          ],
        },
        "docs/getting-started/installation",
      ],
    },

    // Configuration
    {
      type: "category",
      label: "Configuration",
      items: [
        "docs/configuration/table-configuration",
        {
          type: "category",
          label: "Materializations",
          collapsed: true,
          items: [
            "docs/configuration/materializations/hive",
            "docs/configuration/materializations/hive-ha",
            "docs/configuration/materializations/iceberg",
          ],
        },
        "docs/configuration/seeds",
        "docs/configuration/snapshots",
      ],
    },

    // Others
    "docs/known-issues",

    // Migration
    {
      type: "category",
      label: "Migration",
      items: [
        "docs/migration/UPGRADE-1.5",
      ],
    },

    // Contributing
    {
      type: "category",
      label: "Contributing",
      items: ["docs/contributing/contributing", "docs/contributing/local-development"],
    },

    // FAQ
    {
      type: "category",
      label: "Frequently asked questions",
      link: {
        type: "generated-index",
        title: "Frequently asked questions",
        description:
          "Our Frequently Asked Questions (FAQs) section is a space where you can find an answer to some questions we get asked a lot (but that we’re happy to answer!)",
        slug: "/docs/faqs",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "faqs",
        },
      ],
    },
  ],
};

module.exports = sidebarSettings;
