const allhelp = {
    "title":"This program reads a text file and displays its contents to the screen. "+
            "The <span class='cx-fun'>open()</span> function is used to associate the file with a variable, "+
            "and through this variable, the <span class='cx-fun'>readline()</span> method is called to read one line of the file at a time.",
    "4": "The <span class='cx-fun'>open()</span> function associates the variable <span class='cx-var'>f</span> with the file measures.txt. "+
         " The variable <span class='cx-var'>f</span> will be used in subsequent statements to read the data file one line at a time. "+
         "The second argument to <span class='cx-fun'>open()</span>, <span class='cx-str'>'r'</span>, indicates the file will be read from (as opposed to written to).",
    "7": "Read the first line of the file, and store it as a string in the variable <span class='cx-var'>line</span>.",
    "10": "Using <span class='cx-key'>while</span> repetition, continue reading the file if there is more data. "+
          "Note <span class='cx-fun'>readline()</span> will return an empty string when all the data has been read, "+
          "i.e., there is no more data to read from the file.",
    "12": "Remove the trailing newline character from the line. "+
          "Note <span class='cx-fun'>rstrip()</span> is a string method that strips off the indicated string; "+
          "<span class='cx-str'>'\\n'</span> refers to the newline character.",
    "14": "Display the latest line read.",
    "17": "Read the next line from the file. "+
          "Note <span class='cx-fun'>readline()</span> will return an empty string if there is no more data to read.",
    "20": "After all lines have been read from the file, close the file.",

    "f": "This variable is a reference to the data file.",
    "line": "This variable stores the last read line of the data file (or an empty string when there is no more data to read).",

     "display": "-", 
     "keyboard": "-",     
     "file": "-"      
  };
  