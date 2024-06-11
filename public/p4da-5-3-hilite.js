const allhilite2 = {
   "4":[">calcTotal.numberItems", ">calcTotal.unitCost"],
   "5":["<calcTotal.numberItems", "<calcTotal.unitCost", ">calcTotal.totalCost"],
   "6":["<calcTotal.totalCost"],
   "9":[">count", ">display", "<keyboard"],
   "10":[">cost", ">display", "<keyboard"],
   "13":["<count", "<cost", ">total"],
   "16":["<total", ">display"],

   "calcTotal.numberItems":["4", "5"],
   "calcTotal.unitCost":["4", "5"],
   "calcTotal.totalCost":["5","6"],
   "count":["9", "13"],
   "cost":["10", "13"],
   "total":["13", "16"],

   "display": ["9", "10", "16"],
   "keyboard": ["9", "10"]

};

const allhilite3 = {
   "4":["5", "6"]
};