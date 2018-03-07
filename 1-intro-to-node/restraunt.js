function takeOrder(tableNumber, items) {
  console.log("Order from " + tableNumber + ": " + items);
  prepareFood(tableNumber, items, serveOrder);
}

function prepareFood(tableNumber, items, callback) {
  let cookingTime = items.length * 5000;
  console.log(tableNumber + " started cooking ");
  setTimeout(function() {
    callback(tableNumber, items);
  }, cookingTime);
}

function serveOrder(tableNumber, items) {
  console.log("Serving " + items + " for table " + tableNumber);
}

module.exports = {
  takeOrder
};
