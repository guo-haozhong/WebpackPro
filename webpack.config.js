const path=require('path');
module.exports={
    entry:__dirname+'/app/main.js',
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename: "bundle.js"
    }
}
