const allhilite2 = {
   "2": [">text"],
   "4": [">entry", ">_display", "<_keyboard"],
   "5": ["<entry"],
   "6": [">display"],
   "7": [">command", "<entry"],
   "8": ["<command"],
   "9": ["*text", "<entry"],
   "10": [">display"],
   "11": ["<command"],
   "12": [">text"],
   "13": ["<command"],
   "14": ["<entry", "<text", ">_display"],
   "15": ["<command"],
   "16": ["<entry", "<text", ">_display"],

   "17": ["<command"],
   "18": ["*text"],
   "19": [">display"],
   "20": ["<command"],
   "21": [">fields", "<entry"],
   "22": ["<fields"],
   "23": ["*text", "<fields"],
   "24": [">display"],

   "25": [],
   "26": [">text", "<entry"],
   "28": ["<display"],
   "29": ["text", ">_display"],
   "30": [">entry", ">_display", "<_keyboard"],

   "text": ["2", "9", "12", "14", "16", "18", "23", "26", "29"],
   "entry": ["4", "5", "7", "9", "14", "16", "21", "26", "30"],
   "command": ["7", "8", "11", "13", "15", "17", "20"],
   "display": ["6", "10", "19", "24", "28"],
   "fields": ["21", "22", "23"],

   "_display": ["4", "14", "16", "29", "30"],
   "_keyboard": ["4",    "30"]
};

const allhilite3 = {
   "5": ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "21","22", "23", "24", "25", "26", "27", "28", "29","30"],
   "8": ["9", "10"],
   "11": ["12"],
   "13": ["14"],
   "15": ["16"],
   "17": ["18", "19"],
   "20": ["21", "22", "23", "24"],
   "22": ["23", "24"],
   "25": ["26"],
   "28": ["29"]
};