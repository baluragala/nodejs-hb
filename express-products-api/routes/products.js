const express = require("express");
const router = express.Router();
let products = [];
let id = 1;

// router.get("/", function(req, res, next) {
//   res.json(products);
// });

// router.post("/", function(req, res, next) {
//   let product = req.body;
//   product.id = id++;
//   products.push(product);
//   res.set("X-App-Token", "token1");
//   res.status(201).json(product);
// });

// router.put("/:pid", function(req, res) {
//   let id = req.params["pid"];
//   let product = req.body;
//   let updateIndex = products.findIndex(function(p) {
//     console.log(p);
//     return p.id == id;
//   });

//   if (updateIndex == -1) {
//     res.status(404).json({ message: "product with " + id + " not found" });
//   } else {
//     products[updateIndex] = product;
//     res.status(201).json(product);
//   }
// });

// router.delete("/:pid", function(req, res) {
//   let id = req.params["pid"];
//   let product = req.body;
//   let updateIndex = products.findIndex(function(p) {
//     console.log(p);
//     return p.id == id;
//   });

//   if (updateIndex == -1) {
//     res.status(404).json({ message: "product with " + id + " not found" });
//   } else {
//     products.splice(updateIndex, 1);
//     res.status(203).end();
//   }
// });

router
  .route("/")
  .get(handleList)
  .post(authenticate, handleProductCreate);

router
  .route("/:pid([0-9]{3})")
  .put(authenticate, handleProductEdit)
  .delete(authenticate, handleProductDelete);

function authenticate(req, res, next) {
  console.log("authenticate in process");
  if (req.get("X-APP-TOKEN") == "T1") {
    next();
  } else {
    res.status(401).json({ message: "token missing" });
  }
}

async function handleList(req, res, next) {
  res.json(products);
}

async function handleProductCreate(req, res, next) {
  let product = req.body;
  product.id = id++;
  products.push(product);
  res.set("X-App-Token", "token1");
  res.status(201).json(product);
}

async function handleProductEdit(req, res) {
  let id = req.params["pid"];
  let product = req.body;
  let updateIndex = products.findIndex(function(p) {
    console.log(p);
    return p.id == id;
  });

  if (updateIndex == -1) {
    res.status(404).json({ message: "product with " + id + " not found" });
  } else {
    products[updateIndex] = product;
    res.status(201).json(product);
  }
}

async function handleProductDelete(req, res) {
  let id = req.params["pid"];
  let product = req.body;
  let updateIndex = products.findIndex(function(p) {
    console.log(p);
    return p.id == id;
  });

  if (updateIndex == -1) {
    res.status(404).json({ message: "product with " + id + " not found" });
  } else {
    products.splice(updateIndex, 1);
    res.status(203).end();
  }
}

module.exports = router;
