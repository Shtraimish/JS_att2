const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const dotenv = require("dotenv");

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

let arrData = [
  { id: 1, title: "harry potter", content: "story" },
  { id: 2, title: "star wars", content: "film" },
  { id: 3, title: "Lotr", content: "story" },
];

app.get("/api/products/:id", (req, res) => {
  try {
    const id = req.params.id;
    const data = arrData.filter((item) => {
      return item.id == id;
    });
    if (data.length > 0) {
      res.json(data);
    } else {
      res.json({ msg: "Could not find any items" });
    }
  } catch (e) {
    res.status(400).json({ msg: "Problem with database..." });
  }
});

app.get("/api/products", (req, res) => {
  res.json(arrData);
});

app.put("/api/products/:id", (req, res) => {
  const id = req.params.id;
  res.json(id);
});

app.post("/api/products", (req, res) => {
  console.log("req recieved");
  const { title, content } = req.body;
  console.log(title, content);
  res.status(200).json("success");
  arrData.push({ id: arrData.length + 1, title, content });
  //console.log(arrData);
});

app.delete('/api/products/:id',(req,res)=>{

    console.log(req.params.id);
    const delId=req.params.id;
    const productToDel = arrData.findIndex((item) => item.id == delId);
    if (productToDel==-1) return res.status(404).json({ msg: "product not found" });
    arrData.splice(productToDel,1);
    res.json(arrData);
    console.log(arrData);
  })