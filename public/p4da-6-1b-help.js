const allhelp = {
    "title":"This program determines the color and description for a user-entered AQI level.",
    "5": "Initialize a list to store the upper levels of the AQI ranges. "+
         "Note float('inf') represents infinity, which is used here since the highest AQI level has no upper level.",
    "6": "Initialize a list to store the AQI colors.",
    "7": "Initialize a list to store the AQI concern descriptions.",
    "10": "Prompt the user for an AQI level, convert to int, and store in the variable <span class='cx-var'>level</span>.",
    "13": "Initialize <span class='cx-var'>found</span> to <span class='cx-key'>False</span>. "+
          "<span class='cx-var'>found</span> will be set subsequently to <span class='cx-key'>True</span> when the user-entered <span class='cx-var'>level</span> is found in the <span class='cx-var'>levels</span> list.",
    "14": "Initialize <span class='cx-var'>i</span> to <span class='cx-var'>0</span>. <span class='cx-var'>i</span> will be used as the index of the lists.",
    "15": "Use <span class='cx-key'>while</span> repetition to find the index in the levels list associated with the user-entered AQI level.",
    "16": "If the user-entered level is less than or equal to the current <span class='cx-var'>levels</span>[<span class='cx-var'>i</span>], the AQI range has been found.",
    "17": "Record the <span class='cx-var'>color</span> of the AQI level, according to <span class='cx-var'>colors</span>[<span class='cx-var'>i</span>].",
    "18": "Record the <span class='cx-var'>concern</span> of the AQI level, according to <span class='cx-var'>concerns</span>[<span class='cx-var'>i</span>]",
    "19": "Set <span class='cx-var'>found</span> to <span class='cx-key'>True</span>, since the AQI range has been found. "+
          "This will end the repetition when <span class='cx-key'>while</span> (above) next executes.",
    "20": "Increment <span class='cx-var'>i</span>, to prepare to check the next AQI range in the repetition",
    "23": "Display the AQI color corresponding to the user-entered AQI level.",
    "24": "Display the AQI concern corresponding to the user-entered AQI level.",

    "levels": "This variable stores a list of the upper levels of each AQI range.",
    "colors": "This variable stores a list of the colors of each AQI range.",
    "concerns": "This variable stores a list of the concern descriptions of each AQI range.",
    "level": "This variable stores the AQI level of interest, as entered by the user.",
    "color": "This variable will store the corresponding color of the AQI level entered by the user.",
    "concern": "This variable will store the corresponding concern of the AQI level entered by the user.",
    "i": "This variable is used as an index of the lists.",
    "found": "This variable is set to <span class='cx-key'>True</span> when the <span class='cx-var'>color</span> and <span class='cx-var'>concern</span> of the user-entered AQI <span class='cx-var'>level</span> are found.",

     "display": "-", 
     "keyboard": "-"      
  };
  