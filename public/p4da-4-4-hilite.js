const allhilite2 = {
   "4": [">height", ">display", "<keyboard"],
   "5": [">anotherWeight"],
   "7": ["<anotherWeight"],
   "9": [">weight", ">display", "<keyboard"],
   "11": ["<weight", "<height", ">bmi"],
   "12": ["<bmi", ">display"],
   "14": [">anotherWeight", ">display", "<keyboard"],

   "height": ["4", "11"],
   "weight": ["9", "11"],
   "bmi": ["11", "12"],
   "anotherWeight": ["5", "7", "14"],

   "display": ["4", "9", "12", "14"],
   "keyboard": ["4", "9", "14"]
};

const allhilite3 = {
   "7": ["9", "11", "12", "14"]
};