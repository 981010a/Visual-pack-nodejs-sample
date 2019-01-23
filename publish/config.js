'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');
const version = "2.1";


module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },


  install: {
    versionfile: path.resolve(__dirname, "../publish/version.txt"),
    output: path.resolve(__dirname, '../dist/visual.zip'),
    visualConfig: {
      "groupId": "giantsupport",
      "packageId": "giantsupport.myCustomVisual",
      "visualName": "myCustomVisual",
      "displayName": "my first custom visual",
    },
    quadrantPropertiesHtml: path.resolve(__dirname, "../publish/visual/quadrant-properties.html"),
    quadrantPropertiesJs: path.resolve(__dirname, "../publish/visual/quadrant-properties.js"),
    //authcookie: "pvElWPOqR4-FpcrSzOPtEbkGwSuw_z4gc_B0oDQZ0Zoll8fa2ipNeLthAaevpIb6Otlmhx5iZxOWZvgjOYBC8g33JNeiWxdthqDya0Nyp4S5-IfJdGDXZOf2IHdjaglGZ50y4GSpc0M7MOFyRzrRfSJxV-p0fgL5JqLXyBAHqqjML0JmSjtw5FErOpJwXe69iedXW_lLc48P-EsSnOUwBJgpiJ3g1ci_1M_DHUu0kOrBhT_LYFJDzIbuffzfJq8BYnFQXUu_7VM2HzsBGZd7b5pyamV3Ppl3MjfdqGzhvgl_Hxl3F1gmeZFeitkUjKvJ7i40KUs9SEit8w-j_HMZg0x5jfjYZc49P1mWfxYV4aJfz1vt_fAlBmgx_DMoc0WAjwchlUUQ-ONmDnrtkzQmHLjjv4_JabsDBzGyae_CPkJHPGt5yzGuUyDX29XMjbxLkkI-mVs84Hj4xKBYJ9571kJBtz670bWeAGmwsTeNtOR64AJb8qOEbKXSULiqi-Z-ZVR3RVpLgGyQ8r8lhtZ-kHeM5eSUyZP5AWNLlN740BG7ZkxSSChGNEE9pQ6sX0ULMspJkhGxNZygtTYzKQ_QgWry8EBwD6rVK3XPogbVcukAaiEN7jDzzLKqqTJ4T4SM7ea3QvW7jVbG-eSCxKbUUauI3TnbtUxOKyBvvsmp1cIBjT_aRYmdhmgKZf4atLwTwC950A",
    //giantUrl: "http://172.16.53.228/Websites/Analytics"
	authcookie: "fx-user-culture=en-gb; .AspNet.ApplicationCookie=lOYD7WeE0lDOIxg90peRDaHIJmcQ-qj4xtRI2YZtS1XZQzXOS0AvI-YUHKsbxA9-0bSorfiyT8YLj06Ekp_-cBjJKP4Q8jrtkk3Fco44i2t4YwccYDZSlIQ_1SMXWsQPc1ThgbNaDIvgFFHkKqUo4rEYVOXCI4nFRfVMHiVvF25vGeFnYXy5lOekE_RpVfF1E3NBIYrsQuRl4qU2btgtZyu-25oOk6YIthb9FPiKsezetrYI_1sdNpRoBqtS2Edfl0uQCB0tZ3tMJwXc2c5JX-3kTAD7CAa9VSN45HT9MfMPI5L7kFaHNHxje88CKUhv3cRO7FotSWn_zTPJg52D-s6hd-lHn1lrRGLBuLHmlfZhtrqubecq6DjC694fBED-A0WJlB630WszBTGz02fSJ8Hpv80-bh3VuC-zBheIQK4CNtvKkMKt45ncgGnSWGY27cR3-WSsdb1-DkU9JPXym9gd74Yj0RKd-fZRxzVoXneK1odcYcXWm7t_J9OChNMvfA1beNequOFSnPNETZg30HxQ74yd7-XLgA2Gs833xvUmkv046oKdkNjBuW8adVsOOQ-He6LT0DogDO47K5ckBnFsIvwjVlfEWAeSZ4rbEpDQUo8nybVxc0VVcoJfuGPEMqpI7XtyZuXwZKrYRdfvnF84kXjcirzF0ZxRwGfoVPB3AjVCYxAjHNCso8ET9PYMzBIgVw",
    giantUrl: "https://giant2016-csgb.fusionexsite.com/AnalyticsI"
  }
};
