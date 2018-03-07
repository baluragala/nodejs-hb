const restraunt = require("./restraunt");
const os = require("os");
let itemsForTable1 = ["Sandwhich", "burger", "fresh juice", "pasta"];
let itemsForTable2 = ["Pizza", "coke"];
let itemsForTable3 = ["Chicken Soup", "Fried Chicken", "Coke"];
restraunt.takeOrder("table1", itemsForTable1);
restraunt.takeOrder("table3", itemsForTable3);
restraunt.takeOrder("table2", itemsForTable2);
