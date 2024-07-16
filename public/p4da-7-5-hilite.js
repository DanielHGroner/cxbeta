const allhilite2 = {
   "4": [">calcEOQ.demand", ">calcEOQ.orderCost", ">calcEOQ.holdingCost"],
   "5": ["<calcEOQ.demand", "<calcEOQ.orderCost", "<calcEOQ.holdingCost", ">calcEOQ.result"],
   "6": ["<calcEOQ.result"],
   "8": [">f", "<file"],
   "9": ["*f", "<file"],
   "10": [">line", "*f", "<file"],
   "11": ["*line"],
   "12": ["<line"],   
   "13": ["<line", ">fields"],
   "14": [">id", "<fields"],
   "15": [">demand", "<fields"],
   "16": [">orderCost", "<fields"],
   "17": [">holdingCost", "<fields"],
   "18": ["<id", "<demand", "<orderCost", "<holdingCost", ">display"],
   "19": [">eoq", "<demand", "<orderCost", "<holdingCost"],
   "20": ["<id", "<eoq", ">display"],
   "21": ["*f"],

   "calcEOQ.demand": ["4", "5"],
   "calcEOQ.orderCost": ["4", "5"],
   "calcEOQ.holdingCost": ["4", "5"],
   "calcEOQ.result": ["5", "6"],

   "f": ["8", "9", "10", "21"],
   "line": ["11", "12", "13"],
   "fields": ["13", "14", "15", "16", "17"],
   "id": ["14", "18", "20"],
   "demand": ["15", "18", "19"],
   "orderCost": ["16", "18", "19"],
   "holdingCost": ["17", "18", "19"],
   "eoq": ["19", "20"],

   "display": ["18", "20"],
   "keyboard": [],
   "file": ["8", "9", "10"]
};

const allhilite3 = {
   "4": ["5", "6"],
   "10":["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
   "12":["13", "14", "15", "16", "17", "18", "19", "20"]
};