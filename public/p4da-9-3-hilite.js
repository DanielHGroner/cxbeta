const allhilite2 = {
   "3": [">contacts"],
   "6": [">display"],
   "7": [">email", ">display", "<keyboard"],
   "8": ["<email"],
   "9": ["<email", "<contacts"],
   "10": ["<contacts", "<email", ">phone"],
   "11": ["<phone", ">display"],
   "13": [">display"],
   "14": [">email", ">display", "<keyboard"],

   "contacts": ["3", "9", "10"],
   "email": ["7", "8", "9", "10", "14"],
   "phone": ["10", "11"],

   "display": ["6", "7", "11", "13", "14"],
   "keyboard": ["7", "14"]
};

const allhilite3 = {
   "8": ["9", "10", "11", "12", "13", "14"],
   "9": ["10", "11"],
   "12": ["13"]
};