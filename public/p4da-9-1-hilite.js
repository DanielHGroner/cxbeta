const allhilite2 = {
   "3": [">contacts"],
   "5": [">display"],
   "6": [">entry", ">display", "<keyboard"],
   "7": ["<entry"],
   "8": ["<entry", ">email", ">phone"],
   "9": [">contacts", "<email", "<phone"],
   "10": ["<contacts", ">display"],
   "11": [">entry", ">display", "<keyboard"],

   "contacts": ["3", "9", "10"],
   "entry": ["6", "7", "8", "11"],
   "email": ["8", "9"],
   "phone": ["8", "9"],

   "display": ["6", "10", "11"],
   "keyboard": ["6", "11"]
};

const allhilite3 = {
   "7": ["8", "9", "10", "11"]
};