const allhilite2 = {
   "2": [">text"],
   "4": [">entry", ">display", "<keyboard"],
   "5": ["<entry"],
   "6": [">command", "<entry"],
   "7": ["<command"],
   "7.1": [">text", ">display", "<keyboard"],
   "8": ["<command"],
   "8.1": ["*text", ">display", "<keyboard"],
   "9": ["<command"],
   "9.1": [">text"],
   "11": ["<text", ">display"],
   "12": [">entry", ">display", "<keyboard"],

   "text": ["2", "7.1", "8.1", "9.1", "11"],
   "entry": ["4", "5", "6", "12"],
   "command": ["6", "7", "8", "9"],

   "display": ["4", "7.1", "8.1", "11", "12"],
   "keyboard": ["4", "7.1", "8.1", "12"]
};

const allhilite3 = {
   "5": ["6", "7", "8", "9", "11", "12"],
   "7": ["7.1"],
   "8": ["8.1"],
   "9": ["9.1"]
};