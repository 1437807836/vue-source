const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const BASE_URL = process.env.NODE_ENV === "production" ? "/iview-admin" : "/";

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("c", resolve("src/components"));

  },
  //打包时不生成.map文件
  productionSourceMap: false,
  // 告诉开发服务器将所有没有请求到静态文件的请求都代理到这个地址下
  devServer: {
    proxy: "http://localhost:4000"
  }
};
