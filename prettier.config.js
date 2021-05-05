module.exports = {
  overrides: [
    {
      files: ["*.json", "*.jsonc"],
      options: {
        parser: "json-stringify",
      },
    },
  ],
};
