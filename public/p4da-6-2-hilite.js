const allhilite2 = {
   "4": [],
   "5": [">getValues.result"],
   "6": [">getValues.entry", ">display", "<keyboard"],
   "7": ["<getValues.entry"],
   "8": [">getValues.result", "<getValues.entry"],
   "9": [">getValues.entry", ">display", "<keyboard"],
   "10": ["<getValues.result"],

   "13":[">calcMean.alist"],
   "14": [">calcMean.n", "<calcMean.alist"],
   "15": ["<calcMean.n"],
   "15.1": [],
   "16":[">calcMean.sum"],
   "17":[">calcMean.i", "<calcMean.n"],
   "18": ["*calcMean.sum", "<calcMean.alist", "<calcMean.i"],
   "19":["<calcMean.sum", "<calcMean.n"],

   "21": [">measures"],
   "22": ["<measures", ">mean"],
   "23": ["<mean", ">display"],

   "getValues.result":["5", "8", "10"],
   "getValues.entry":["6", "7", "8", "9"],
   "calcMean.alist":["13", "14", "18"],
   "calcMean.sum": ["16", "18", "19"],
   "calcMean.n": ["14", "15", "17", "19"],
   "calcMean.i": ["17", "18"],
   "measures":["21", "22"],
   "mean":["22", "23"],

   "display": ["6", "9", "23"],
   "keyboard": ["6", "9"]
};

const allhilite3 = {
   "4":["5", "6", "7", "8", "9", "10"],
   "7":["8", "9"],
   "13":["14","15","15.1","16","17","18","19"],
   "15":["15.1"],
   "17":["18"]
};