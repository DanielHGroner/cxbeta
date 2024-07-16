const allhelp = {
    "title": "This program reads a text file of product information "+
    "(ID, estimated demand, order cost, holding costs), and "+
    "for each product calculates and displays the EOQ (economic order quantity.",
    "4": "Define the signature for the calcEOQ() function. "+
         "This function takes as input estimated demand, ordering cost, and holding cost "+
         " and calculates and returns the EOQ (economic order quantity).",
    "5": "Calculate the EOQ for a given product.",
    "6": "Return the EOQ result to the calling statement.",

    "8": "The <span class='cx-fun'>open()</span> function associates the variable <span class='cx-var'>f</span> with the file eoq.txt. "+
         " The variable <span class='cx-var'>f</span> will be used in subsequent statements (with <span class='cx-fun'>readline()</span> and <span class='cx-key'>for</span>), to read the data file one line at a time. "+
         "The second argument to <span class='cx-fun'>open()</span>, <span class='cx-str'>'r'</span>, indicates the file will be read from (as opposed to written to).",

    "9": "The <span class='cx-fun'>readline()</span> method is called to read and skip over the first line of the data file "+
         "which is the files header record.",
    "10": "Using <span class='cx-key'>for</span> repetition, read the data file one line at a time. ",
    "11": "Remove the trailing newline character from the line. "+
          "Note <span class='cx-fun'>rstrip()</span> is a string method that strips off the indicated string from the end; "+
          "<span class='cx-str'>'\\n'</span> refers to the newline character. "+
          "Also, <span class='cx-fun'>strip()</span> removes blanks (whitespace) from the start and end of the string.",
    "12": "Check if the last line read was blank (only non-blank lines will be processed).",
    "13": "Split the line read into a list of strings, assuming comma as the field separator.",
    "14": "The product id is the first field in the data file. "+
          "Assign the variable <span class='cx-var'>id</span> using the data in the list created from the above <span class='cx-fun'>split()</span> method.",
    "15": "The product's estimated demand is the 2nd field in the data file. "+
          "Assign the variable <span class='cx-var'>demand</span> using the data in the list created from the above <span class='cx-fun'>split()</span> method.",
    "16": "The product's order cost is the 3rd field in the data file. "+
          "Assign the variable <span class='cx-var'>orderCost</span> using the data in the list created from the above <span class='cx-fun'>split()</span> method.",
    "17": "The product's holding cost is the 4th field in the data file. "+
          "Assign the variable <span class='cx-var'>demand</span> using the data in the list created from the above <span class='cx-fun'>split()</span> method.",
    "18": "Display the data read from the data file, as split into the corresponding variables.",
    "19": "Based on the data read from the file, call the calcEOQ function, "+
          "to calculate the EOQ for the product.",
    "20": "Display the product ID and its calculate EOQ.",
    "21": "Close the file.",

    "calcEOQ.demand": "The estimated demand for a product for an assumed period of time.",
    "calcEOQ.orderCost": "The cost to place an order a batch of given product.",
    "calcEOQ.holdingCost": "The holding cost for a product for an assumed period of time.",
    "calcEOQ.result": "The calculated economic order quantity.",

    "f": "This variable is a reference to the data file.",
    "line": "This variable stores the last read line of the data file (or an empty string when there is no more data to read).",
    "fields": "A list of strings; each item in the list corresponds to a field read from the data file.",
    "id": "A product's ID, as read from the data file.",
    "demand": "The estimated demand for a product for an assumed period of time.",
    "orderCost": "The cost to place an order for a batch of a given product.",
    "holdingCost": "The holding cost for a product for an assumed period of time.",
    "eoq": "The calculated economic order quantity.",

     "display": "-", 
     "keyboard": "-",     
     "file": "-"      
  };
  