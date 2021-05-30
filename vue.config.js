const path = require('path');

function resolve(dir){
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack:(config)=>{
        config.output.filename('[name].[hash].js').end();
        config.resolve.symlinks(true);
        config.resolve.alias
        .set('@', resolve('./src'))
    }
  }
