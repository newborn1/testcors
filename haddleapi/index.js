/**
 * 作为统一接口，向router提供接口
 */
const { surfaceApi } = require("./haddleapi");

module.exports = {
  htmlApi: surfaceApi.htmlApi,
};
