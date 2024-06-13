const allhilite2 = {
   "4":[">calcMean.alist"],
   "5":[">calcMean.sum"],
   "6":[">calcMean.value", "<calcMean.alist"],
   "7": ["*calcMean.sum", "<calcMean.value"],
   "8":["<calcMean.sum", "<calcMean.alist"],

   "10": [">measures"],
   "11": ["<measures", ">mean"],
   "12": ["<mean", ">display"],

   "calcMean.alist":["4", "6", "8"],
   "calcMean.sum": ["5", "7", "8"],
   "calcMean.value": ["6", "7"],
   "measures":["10", "11"],
   "mean":["11", "12"],

   "display": ["5", "7"],
   "keyboard": ["7"]

};

const allhilite3 = {
   "4":["5", "6", "7", "8"]
};