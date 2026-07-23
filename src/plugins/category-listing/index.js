module.exports = async function categoryListingPlugin() {
  return {
    name: 'category-listing',
    async allContentLoaded({allContent, actions}) {
      const {setGlobalData} = actions;
      const docsPlugin = allContent['docusaurus-plugin-content-docs'];
      if (!docsPlugin?.default?.loadedVersions) {
        setGlobalData({});
        return;
      }

      const allVersions = docsPlugin.default.loadedVersions;
      // Single-version sites: use the last (only) version's tag map.
      let tagToDocMap = {};
      allVersions.forEach((version) => {
        const docs = version.docs;
        tagToDocMap = {};
        docs.forEach((doc) => {
          const tagNames = doc.tags.map((t) => t.label);
          tagNames.forEach((tn) => {
            const collection = tagToDocMap[tn] ?? [];
            collection.push({
              title: doc.title,
              permalink: doc.permalink,
              description: doc.description,
              order: doc.sidebarPosition ?? 0,
              tags: doc.tags,
              frontMatter: doc.frontMatter,
            });
            tagToDocMap[tn] = collection;
          });
        });
      });

      setGlobalData(tagToDocMap);
    },
  };
};
