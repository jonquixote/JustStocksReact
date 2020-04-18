const path = require("path");

module.exports = {
  webpack: {
    resolve: { 
      alias: {
        "@app": path.resolve(__dirname, "src/"),
        redux: path.resolve(__dirname, ‘src/redux/’)
      }
    }    
  }
};