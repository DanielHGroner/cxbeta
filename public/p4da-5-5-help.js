// p4da-5-2-help.js
const allhelp = {
    "title":"This program calculates total order cost based on a number of books, the cost per book, tax rate, and number of decimals to round pre-tax cost. "+
            "The function <span class='cx-fun'>calcCost()</span> is defined, which takes three required parameters (<span class='cx-var'>numberItems</span>, <span class='cx-var'>unitCost</span>, <span class='cx-var'>taxRate</span>), "+
            "and returns the total cost. " +
            "A fourth parameter, <span class='cx-var'>decimals</span>, is a named parameter, which can be optionally set by the calling statement. "+
            "If the calling statement does not specify <span class='cx-var'>decimals</span>, it will default to 2. "+
            "This example shows how to define and call a function with a named parameter.",
     "4":"The <span class='cx-fun'>calcTotal</span> function's signature defines the name of the function, "+
         "as well as defining that the function has three input parameters named <span class='cx-var'>numberItems</span>, <span class='cx-var'>unitCost</span>, and <span class='cx-var'>taxRate</span>.",
     "5":"The variable <span class='cx-var'>pretaxCost</span> is calculated based on the input parameters <span class='cx-var'>numberItems</span> and <span class='cx-var'>unitCost</span>.",
     "6":"The variable <span class='cx-var'>aftertaxCost</span> is calculated based on the input parameter <span class='cx-var'>taxRate</span> and the variable <span class='cx-var'>pretaxCost</span>.",
     "7":"The result value of the function, <span class='cx-var'>posttaxlCost</span>, is returned to the calling statement.",
     "10": "Get input for # of books, convert to an integer value, "+
         "and assign to variable <span class='cx-var'>count</span>. "+ 
         "The <span class='cx-fun'>input()</span> function returns a string, which is converted to a number "+
         "by the <span class='cx-fun'>int()</span> function, before being assigned to the <span class='cx-var'>count</span> variable.",
     "11": "Get input for cost per book, convert to a float value, "+
         "and assign to variable <span class='cx-var'>cost</span>. "+ 
         "The <span class='cx-fun'>input()</span> function returns a string, which is converted to a number "+
         "by the <span class='cx-fun'>float()</span> function, before being assigned to the <span class='cx-var'>cost</span> variable.",
     "14":"Call the <span class='cx-fun'>calcTotal()</span> function, providing it three arguments (the <span class='cx-var'>count</span> variable, the <span class='cx-var'>cost</span> variable, and the constant <span class='cx-num'>.075</span>). "+
          "Then, receive the result from <span class='cx-fun'>calcTotal()</span> and assign it to the <span class='cx-var'>total</span> variable.",
     "17": "Display the calculated total cost.  The <span class='cx-fun'>print()</span> function here displays "+
     "both a string, as well as the value stored in the variable "+
     "<span class='cx-var'>total</span>.",

     "calcTotal.numberItems": "The parameter <span class='cx-var'>numberItems</span> is an input to the <span class='cx-fun'>calcTotal()</span> function. "+
                              "Note this variable is known only within the <span class='cx-fun'>calcTotal()</span> function, "+
                              "but not known elsewhere in the program.",
     "calcTotal.unitCost": "The parameter <span class='cx-var'>unitCost</span> is an input to the <span class='cx-fun'>calcTotal()</span> function. "+
                              "Note this variable is known only within the <span class='cx-fun'>calcTotal()</span> function, "+
                              "but not known elsewhere in the program.",
     "calcTotal.taxRate": "The parameter <span class='cx-var'>taxRate</span> is an input to the <span class='cx-fun'>calcTotal()</span> function. "+
                              "Note this variable is known only within the <span class='cx-fun'>calcTotal()</span> function, "+
                              "but not known elsewhere in the program.",
     "calcTotal.decimals": "The named parameter <span class='cx-var'>decimals</span> is an optional input to the <span class='cx-fun'>calcTotal()</span> function. "+
                              "Its default value is <span class='cx-num'>2</span>. "+
                              "Note this variable is known only within the <span class='cx-fun'>calcTotal()</span> function, "+
                              "but not known elsewhere in the program.",
     "calcTotal.pretaxCost": "This variable is the calculated cost based on the passed-in parameters <span class='cx-var'>numberItems</span> and "+
                            "<span class='cx-var'>unitCost</span>. "+
                            "Note this variable is known only within the <span class='cx-fun'>calcTotal()</span> function, "+
                            "but not known elsewhere in the program.",
     "calcTotal.aftertaxCost": "This variable is the calculated after-tax cost based on the passed-in parameters. "+
                            "Note this variable is known only within the <span class='cx-fun'>calcTotal()</span> function, "+
                            "but not known elsewhere in the program.",
     "count":"This variable stores the number of books, as entered by the user.",
     "cost":"This variable stores the cost per book, as entered by the user.",
     "total":"This variable is the total cost for the purchased books.",

     "display": "-",
     "keyboard": "-" 
};
  