
//const fs = require('fs');
const DB_PATH = './database/products.json';
const { FileManager } = require('./FileManager');
const fm = new FileManager();

class ProductManager {
  constructor(path = DB_PATH){
    this.path = path;
   // this.products = this.readData();
  }
/*
  readData(){
    const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
    return data;
  }
  writeData(data){
    let writeFile = JSON.stringify(data);
    fs.writeFileSync(`./${this.path}`, writeFile);
    return writeFile;
  }
*/
  
  idGenerator(){
    if(this.products.length > 0){
        let productsID = this.products.map(product => product.id);
        return Math.max(...productsID) + 1;
    }else{
      let id = 1;
      return id;
    }
 }

 getAllProduct(){
    let data = this.readData();
    console.log(data);
    return data;
 }

 addProduct(product){
   //console.log(product);
  if (this.products.find((item) => item.code === product.code)){
      return console.log("El codigo del producto ya existe");
  }
   else if(!!!product.title || !!!product.description || !!!product.price || !!!product.code || !!!product.thumbnail || !!!product.stock){
      return console.log("Hay datos Null");
    }else{
      let data = this.readData();
      product.id = this.idGenerator();
      data.push(product);
      this.writeData(data);
  }
}
 

 getProductById(id){
  let data = this.readData();
  if(data.find(product => product.id === id)){
    let getProduct = data.find(product => product.id === id)
    console.log (getProduct);
    return getProduct;
  }else{ // sacar este else
      console.log("No se encontro el ID del producto")
      return({error: "El producto con ID:" + id + " no existe"})
  }
  }

updateProduct(id, product){
  let data = this.readData();
  if(data.find(product => product.id === id)){
      let products = data.filter(product => product.id !==id)
      product.id = id;
      products.push(product);
      this.writeData(products);
      return products;
  }else{
    console.log("El ID del producto a actualizar no se encuentra");
  }
 }

 deleteProduct(id){
  let data = this.readData();
  if(data.find(product => product.id === id)){
      let products = data.filter(product => product.id !==id)
      this.writeData(products);
      //console.log(products);
      return products;
  }else{
    console.log("El ID del producto a borrar no se encuentra");
  }
 }
}

const productManager = new ProductManager("db.json");

/*
let product2 = {
    title: "Auto", 
    description: "TOYOTA", 
    price: 4010000,
    code: "TOYOTA_COROLLA",
    thumbnail: "url://stockimg/net/T_Co1234.png",
    stock: 35,
};
*/


 //productManager.addProduct(product2);

/*
productManager.updateProduct(2, {
  title: "SUV", 
  description: "Jeep", 
  price: 1199999,
  code: "Jeep_Renegade",
  thumbnail: "url://stockimg/net/J_Re1234.png",
  stock: 17,
});
*/

//productManager.getProductById(3);

//productManager.deleteProduct(2);

//productManager.getAllProduct();




module.exports = {
  productManager
}
