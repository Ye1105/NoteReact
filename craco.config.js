/*
 * @Author: your name
 * @Date: 2021-09-14 14:51:21
 * @LastEditTime: 2021-09-14 15:33:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\craco.config.js
 */
/* craco.config.js */

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1890ff' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};