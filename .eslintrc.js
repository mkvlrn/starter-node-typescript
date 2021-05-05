module.exports = {
  extends: ["mkvlrn/ts"],
  overrides: [
    {
      files: [".eslintrc.js", "./*.config.ts", "./*.config.js"],
      parserOptions: {
        project: "./tsconfig.base.json",
      },
    },
    {
      files: ["./tests/*.ts"],
      parserOptions: {
        project: "./tsconfig.test.json",
      },
    },
  ],
};
