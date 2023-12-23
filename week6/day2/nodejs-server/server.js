// const http=require ('http');

// const server=http.createServer((req,res)=>{
//     console.log('getting req');
//     console.log('url=>',req.url);
//     console.log('headers=>',req.headers);
//     res.end('hello my first nodejs server');

// });

// server.listen(5000,()=>{
//     console.log('run on port 5000');
// });

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const dotenv = require("dotenv");
const { products } = require("./config/db.js");
dotenv.config();

app.listen(5000, () => {
  console.log("run on port 5000");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/search", (req, res) => {
  const productName = req.query.name;
  const filteredProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(productName.toLowerCase());
  });

  if (filteredProducts.length === 0) {
    return res.status(200).json({ msg: "no matched to your search" });
  }
  res.status(200).json(filteredProducts);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  //console.log('params=>',params);
  const product = products.find((item) => item.id == id);
  if (!product) return res.status(404).json({ msg: "product not found" });
  res.json(product);
});

app.post("/api.products", (req, res) => {
  const body = req.body;
  console.log("body=>", body);
  res.json({ msg: "ok POST" });
});

app.post("/api.products", (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  res.json({ msg: "ok POST" });
});

app.delete('/api.products/:id',(req,res)=>{
  const delId=req.params.id;
  if(delId=id){
    arrData.splice(delId,1);
  }
  console.log(arrData);
})




