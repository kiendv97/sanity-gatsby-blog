export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60cf5bc86844ff51e94f2af0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-1qsbcjw9",
                  apiId: "61f380b2-adea-4f58-8fb8-ac40475e244a",
                },
                {
                  buildHookId: "60cf5bc83eaca84376f38084",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-hfcziyrv",
                  apiId: "63584197-d450-4580-a2e7-1beaa23fc255",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kiendv97/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-hfcziyrv.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
