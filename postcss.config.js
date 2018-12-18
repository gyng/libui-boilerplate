module.exports = {
  plugins: {
    // stylelint: {}, // enable this if you want live checking while developing
    "postcss-preset-env": {
      stage: 0
    },
    cssnano: {},
    "postcss-reporter": { clearReportedMessages: true }
  }
};
