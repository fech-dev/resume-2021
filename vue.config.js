const bootstrapCssAbstractsImports = require("vue-cli-plugin-bootstrap-vue/bootstrapCssAbstractsImports");
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: [...bootstrapCssAbstractsImports, ""].join(";\n"),
      },
    },
  },
};
