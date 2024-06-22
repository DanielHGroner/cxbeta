const allhelp = {
    "title":"This program implements a simple text processor, to demonstrate a few string-related aspects. "+
            "Added features include uppercase and replace.",
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

    "17": "If the command was a ^, convert text buffer to uppercase in the next statement.",
    "18": "Convert text buffer to uppercase.",
    "19": "Set <span class='cx-var'>display</span> to <span class='cx-key'>True</span>, so the text buffer is displayed near the end of the loop.",

    "20": "If the command was a /, convert text buffer using replace and the user's entry in the subsequent statements.",
    "21": "Split the user's entry into a <span class='cx-var'>fields</span> list, based on the / character. "+
          "The fields are used in the subsequent <span class='cx-fun'>replace()</span> method.",
    "22": "Check if the number of fields is three, in other words if user entry was of form: /from/to",
    "23": "Update the text buffer using <span class='cx-fun'>replace()</span>, based on fields entered by the user.",
    "24": "Set <span class='cx-var'>display</span> to <span class='cx-key'>True</span>, so the text buffer is displayed near the end of the loop.",

    "25": "The first character of the user entry was not a known command; "+
          "in this case, in the next statement sets the text buffer to the user's entry.",
    "26": "Set the text buffer to the user entry.",
    "28": "Check if the text buffer should be displayed.",
    "29": "Display the text buffer.",
    "30": "Prompt the user for the next entry, assign this to the variable <span class='cx-var'>entry</span>.",

    "text": "This variable is the text buffer of the text processor.",
    "entry": "This variable is the desired command (+|-|?|#|^|/) and/or text to process.",
    "command": "This variable is the first character of the entered text.",
    "display": "A bool variable to control if the text buffer is displayed after the user's entry.",
    "fields": "A list of strings, used in the replace command, to separate user-entered from and to strings.",

     "_display": "-", 
     "keyboard": "-"      
  };
  