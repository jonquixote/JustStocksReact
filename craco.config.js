const path = require("path");

module.exports = {
  webpack: {
    resolve: { 
      alias: {
        "@app": path.resolve(__dirname, "src/"),
        Redux: path.resolve(__dirname, ‘src/redux/’)
        "todo/reducer": path.resolve(__dirname, ‘src/redux/todo/reducer’)
      }
    }    
  }
};