const allhilite2 = {
   "4":[">calcTotal.numberItems", ">calcTotal.unitCost", ">calcTotal.taxRate"],
   "5":["<calcTotal.numberItems", "<calcTotal.unitCost", ">calcTotal.pretaxCost"],
   "6":["<calcTotal.pretaxCost", "<calcTotal.taxRate", ">calcTotal.salesTax"],
   "7":["<calcTotal.pretaxCost", "<calcTotal.salesTax"],

   "10":[">count", ">display", "<keyboard"],
   "11":[">cost", ">display", "<keyboard"],

   "14":["<count", "<cost", ">pretax", ">tax"],
   "17":["<pretax", ">display"],
   "18":["<tax", ">display"],
   "19":["<pretax", "<tax", ">display"],

   "calcTotal.numberItems":["4", "5"],
   "calcTotal.unitCost":["4", "5"],
   "calcTotal.taxRate":["4", "6"],
   "calcTotal.pretaxCost":["5", "6"],
   "calcTotal.salesTax":["6", "7"],
   "count":["10", "14"],
   "cost":["11", "14"],
   "pretax":["14", "17", "19"],
   "tax":["14", "18", "19"],

   "display": ["10", "11", "17", "18", "19"],
   "keyboard": ["10", "11"]

};

const allhilite3 = {
   "4":["5", "6", "7"]
};