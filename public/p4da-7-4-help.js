const allhelp = {
    "title":"This program reads a text file and calculates the average of its values. "+
            "The <span class='cx-fun'>open()</span> function is used to associate the file with a variable, "+
            "and with this variable, <span class='cx-fun'>for</span> is used to read one line of the file at a time. "+
            "The line is updated to remove its trailing newline using <span class='cx-fun'>rstrip()</span>, and to remove any leading and trailing blanks with <span class='cx-fun'>strip()</span>.",
   "4": "Initialize the <span class='cx-var'>total</span> variable to 0.",
   "5": "Initialize the variable <span class='cx-var'>i</span> to 0.  <span class='cx-var'>i</span> keeps track of how many lines have been read from the data file.",
   "7": "The <span class='cx-fun'>open()</span> function associates the variable <span class='cx-var'>f</span> with the file measures.txt. "+
         " The variable <span class='cx-var'>f</span> will be used in the subsequent <span class='cx-key'>for</span> statement to read the data file one line at a time. "+
         "The second argument to <span class='cx-fun'>open()</span>, <span class='cx-str'>'r'</span>, indicates the file will be read from (as opposed to written to).",
    "8": "Using <span class='cx-key'>for</span> repetition, read the data file one line at a time. ",
    "9": "Remove the trailing newline character from the line. "+
          "Note <span class='cx-fun'>rstrip()</span> is a string method that strips off the indicated string from the end; "+
          "<span class='cx-str'>'\\n'</span> refers to the newline character. "+
          "Also, <span class='cx-fun'>strip()</span> removes blanks (whitespace) from the start and end of the string.",
    "10": "Check if the last line read was blank (only non-blank lines will be converted to numbers for averaging).",
    "11": "Convert the string <span class='cx-var'>line</span> to a <span class='cx-var'>float</span> value.",
    "12": "Display the latest value read.",
    "13": "Cumulate the latest <span class='cx-var'>value</span> into the <span class='cx-var'>total</span>.",
    "14": "Increment <span class='cx-var'>i</span> to keep count of the number of lines read.",
    "16": "After all lines have been read from the file, close the file.",
    "17": "Calculate the average of all values read.",
    "18": "Display the calculated average.",

    "total": "The running total of values read from the file.",
    "i": "The count of values read from the file.",
    "value": "The most recent value read from the file.",
    "average": "The calculated average of all values read from the file.",
    "f": "This variable is a reference to the data file.",
    "line": "This variable stores the last read line of the data file (or an empty string when there is no more data to read).",

     "display": "-", 
     "keyboard": "-",     
     "file": "-"      
  };
  