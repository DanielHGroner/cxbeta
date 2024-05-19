const allhilite2 = {
   "4": [">invest", ">display", "<keyboard"],
   "7": ["<invest"],
   "8": [">interestRate"],
   "9": [],
   "10": [">interestRate"],
   "13": [">endBalance", "<interestRate", "<invest"],
   "16": ["<interestRate", ">display"],
   "17": ["<endBalance", ">display"],

   "invest": ["4", "7", "13"],
   "interestRate": ["8", "10", "13", "16"],
   "endBalance": ["13", "17"],

   "display": ["4", "16", "17"],
   "keyboard": ["4"]
};

const allhilite3 = {
   "7": ["8","9","10"],
   "9": ["7","8","10"]
};
