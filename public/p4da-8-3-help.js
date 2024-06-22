const allhelp = {
    "title":"This program implements a simple text processor, to demonstrate a few string-related aspects. "+
            "Added features include search and count.",
    "2": "Set the <span class='cx-var'>text</span> variable to an empty string.  This variable is the text buffer for the text processor.",
    "4": "Prompt the user for input; the first character can be the desired command (+|-|?|#).",
    "5": "Continue repeating while the user's entry is not the empty string.",
    "6": "Set the variable <span class='cx-var'>display</span> to <span class='cx-key'>False</span>; this will control if the text buffer is displayed near the end of the loop.",
    "7": "The command may be the first character of the user's entry.",
    "8": "If the command is +, append the text buffer with the slice of the user's entry.",
    "9": "The command was + ; append the text buffer with the slice of the user entry.",
    "10": "Set <span class='cx-var'>display</span> to <span class='cx-key'>True</span>, so the text buffer is displayed near the end of the loop.",
    "11": "If the command is -, clear the text buffer.",
    "12": "The command was - ; clear the text buffer.",
    "13": "If the command was a ?, perform a search in the next statement.",
    "14": "Perform a search to check for a match based on the user-entered string after the ?.",
    "15": "If the command was a #, perform a count in the next statement.",
    "16": "Perform a count of matches based on the user-entered string after the #.",
    "17": "The first character of the user entry was not a known command; "+
          "in this case, in the next statement sets the text buffer to the user's entry.",
    "18": "Set the text buffer to the user entry.",
    "20": "Check if the text buffer should be displayed.",
    "21": "Display the text buffer.",
    "22": "Prompt the user for the next entry, assign this to the variable <span class='cx-var'>entry</span>.",

    "text": "This variable is the text buffer of the text processor.",
    "entry": "This variable is the desired command (+|-|?|#) and/or text to process.",
    "command": "This variable is the first character of the entered text.",
    "display": "A bool variable to control if the text buffer is displayed after the user's entry.",

     "_display": "-", 
     "keyboard": "-"      
  };
  