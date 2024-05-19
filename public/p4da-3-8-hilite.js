const allhilite2 = {
   "4": [">invest", ">display", "<keyboard"],
   "7": ["<invest"],
   "8": [">interestRate"],
   "9": ["<invest"],
   "10": [">interestRate"],
   "11": [],
   "12": [">interestRate"],
   "15": [">endBalance", "<interestRate", "<invest"],
   "18": ["<interestRate", ">display"],
   "19": ["<endBalance", ">display"],

   "invest": ["4", "7", "9", "15"],
   "interestRate": ["8", "10", "12", "15", "18"],
   "endBalance": ["15", "19"],

   "display": ["4", "18", "19"],
   "keyboard": ["4"]
};

const allhilite3 = {
   "7": ["8","9","10","11","12"],
   "9": ["7", "8","10","11","12"],
   "11": ["7", "8","9","10","12"]
};
