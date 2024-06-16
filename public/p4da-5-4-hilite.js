const allhilite2 = {
   "2":[">calcTotal.numberItems", ">calcTotal.unitCost", ">calcTotal.taxRate"],
   "3":["<calcTotal.numberItems", "<calcTotal.unitCost", ">calcTotal.pretaxCost"],
   "4":["<calcTotal.pretaxCost", "<calcTotal.taxRate", ">calcTotal.aftertaxCost"],
   "5":["<calcTotal.aftertaxCost"],

   "8":[">count", ">display", "<keyboard"],
   "9":[">cost", ">display", "<keyboard"],

   "12":["<count", "<cost", ">total"],
   "15":["<total", ">display"],

   "calcTotal.numberItems":["2", "3"],
   "calcTotal.unitCost":["2", "3"],
   "calcTotal.taxRate":["2", "4"],
   "calcTotal.pretaxCost":["3", "4"],
   "calcTotal.aftertaxCost":["4", "5"],
   "count":["8", "12"],
   "cost":["9", "12"],
   "total":["12", "15"],

   "display": ["8", "9", "15"],
   "keyboard": ["8", "9"]

};

const allhilite3 = {
   "2":["3", "4", "5"]
};