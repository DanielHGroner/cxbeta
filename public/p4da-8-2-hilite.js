const allhilite2 = {
   "2": [">text"],
   "4": [">entry", ">display", "<keyboard"],
   "5": ["<entry"],
   "6": [">command", "<entry"],
   "7": ["<command"],
   "7.1": ["*text", "<entry"],
   "8": ["<command"],
   "8.1": [">text"],
   "9": [],
   "9.1": [">text", "<entry"],
   "10": ["<text", ">display"],
   "11": [">entry", ">display", "<keyboard"],

   "text": ["2", "7.1", "8.1", "9.1", "10"],
   "entry": ["4", "5", "6", "7.1", "9.1", "11"],
   "command": ["6", "7", "8"],

   "display": ["4", "10", "11"],
   "keyboard": ["4", "11"]
};

const allhilite3 = {
   "5": ["6", "7", "8", "9", "11"],
   "7": ["7.1"],
   "8": ["8.1"],
   "9": ["9.1"],
};