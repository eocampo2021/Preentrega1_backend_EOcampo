const fs = require('fs');

class FileManager {
  constructor(path){
    this.path = path;
    this.products = this.readData();
  }

  readData(){
    const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
    return data;
  }
  writeData(data){
    let writeFile = JSON.stringify(data);
    fs.writeFileSync(`./${this.path}`, writeFile);
    return writeFile;
  }
}

module.exports.FileManager = FileManager;