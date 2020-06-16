const path = require('path');

const rootPath = path.resolve(process.cwd());
const imagesFolderPath = `${rootPath}/public/images`;


module.exports = {
  rootPath,
  imagesFolderPath
};
