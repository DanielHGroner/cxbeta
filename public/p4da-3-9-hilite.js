const allhilite2 = {
   "5": [">customer", ">display", "<keyboard"],
   "8": [">invest", ">display", "<keyboard"],
   "10": ["<customer"],
   "12": ["<invest"],
   "13": [">interestRate"],
   "14": [],
   "15": [">interestRate"],
   "17": [">interestRate"],   
   "20": [">endBalance", "<interestRate", "<invest"],
   "23": ["<interestRate", ">display"],
   "24": ["<endBalance", ">display"],

   "customer": ["5", "10"],
   "invest": ["8", "12", "20"],
   "interestRate": ["13", "15", "17", "20", "23"],
   "endBalance": ["20", "24"],

   "display": ["5", "8", "23", "24"],
   "keyboard": ["5", "8"]
};

const allhilite3 = {
   "10": ["12","13","14", "15", "16", "17"],
   "12": ["13", "14", "15"],
   "14": ["12", "13", "15"],
   "16": ["10", "12","13","14", "15", "17"]
};
