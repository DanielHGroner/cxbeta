const allhilite2 = {
   "4":[">calcTotal.numberItems", ">calcTotal.unitCost", ">calcTotal.taxRate", ">calcTotal.decimals"],
   "5":["<calcTotal.numberItems", "<calcTotal.unitCost", ">calcTotal.pretaxCost", "<calcTotal.decimals"],
   "6":["<calcTotal.pretaxCost", "<calcTotal.taxRate", ">calcTotal.aftertaxCost"],
   "7":["<calcTotal.aftertaxCost"],

   "10":[">count", ">display", "<keyboard"],
   "11":[">cost", ">display", "<keyboard"],

   "14":["<count", "<cost", ">total"],
   "17":["<total", ">display"],

   "calcTotal.numberItems":["4", "5"],
   "calcTotal.unitCost":["4", "5"],
   "calcTotal.taxRate":["4", "6"],
   "calcTotal.decimals":["4", "5"],
   "calcTotal.pretaxCost":["5", "6"],
   "calcTotal.aftertaxCost":["6", "7"],
   "count":["10", "14"],
   "cost":["11", "14"],
   "total":["14", "17"],

   "display": ["10", "11", "17"],
   "keyboard": ["10", "11"]

};

const allhilite3 = {
   "4":["5", "6", "7"]
};