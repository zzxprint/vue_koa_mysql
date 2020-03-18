// https://github.com/michael-ciniawsky/postcss-load-config

const AutoPrefixer = require("autoprefixer");
const px2rem = require("postcss-px2rem");
module.exports = ({ file }) => {
　　let remUnit;
　　//link https://github.com/youzan/vant/issues/1181
　　if (file && file.dirname && file.dirname.indexOf("vant") > -1) {
　　　　remUnit = 37.5;
　　}else {
　　　　remUnit = 75;
　　}
　　return {
　　　　plugins: [
　　　　　　px2rem({ remUnit: remUnit}),
　　　　　　AutoPrefixer({ browsers: ["last 20 versions", "android >= 4.0", "iOs >= 7"] })

　　　　]
　　};
};
