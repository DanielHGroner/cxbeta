// p4da-5-2-help.js
const allhelp = {
    "title":"This program calculates total order cost based on a number of books and the cost per book. "+
            "The function <span class='cx-fun'>calcCost()</span> is defined, which takes two parameters (<span class='cx-var'>numberItems</span>, <span class='cx-var'>unitCost</span>), "+
            "and returns the total cost.  This example shows how to define and call a function.",
     "4":"The <span class='cx-fun'>calcTotal</span> function's signature defines the name of the function, "+
         "as well as defining that the function has two input parameters named <span class='cx-var'>numberItems</span> and <span class='cx-var'>unitCost</span>.",
     "5":"The variable <span class='cx-var'>totalCost</span> is calculated based on the input parameters <span class='cx-var'>numberItems</span> and <span class='cx-var'>unitCost</span>.",
     "6":"The result value of the function, <span class='cx-var'>totalCost</span>, is returned to the calling statement.",
     "9": "Get input for # of books, convert to an integer value, "+
         "and assign to variable <span class='cx-var'>count</span>. "+ 
         "The <span class='cx-fun'>input()</span> function returns a string, which is converted to a number "+
         "by the <span class='cx-fun'>int()</span> function, before being assigned to the <span class='cx-var'>count</span> variable.",
     "10": "Get input for cost per book, convert to a float value, "+
         "and assign to variable <span class='cx-var'>cost</span>. "+ 
         "The <span class='cx-fun'>input()</span> function returns a string, which is converted to a number "+
         "by the <span class='cx-fun'>float()</span> function, before being assigned to the <span class='cx-var'>cost</span> variable.",
     "13":"Call the <span class='cx-fun'>calcTotal()</span> function, providing it two arguments (the <span class='cx-var'>count</span> variable and the <span class='cx-var'>cost</span> variable). "+
          "Then, receive the result from <span class='cx-fun'>calcTotal()</span> and assign it to the <span class='cx-var'>total</span> variable.",
     "16": "Display the calculated total cost.  The <span class='cx-fun'>print()</span> function here displays "+
     "both a string, as well as the value stored in the variable "+
     "<span class='cx-var'>total</span>.",

     "calcTotal.numberItems": "The parameter <span class='cx-var'>numberItems</span> is an input to the <span class='cx-fun'>calcTotal()</span> function. "+
                              "Note this variable is known only within the <span class='cx-fun'>calcTotal()</span> function, "+
                              "but not known elsewhere in the program.",
     "calcTotal.unitCost": "The parameter <span class='cx-var'>unitCost</span> is an input to the <span class='cx-fun'>calcTotal()</span> function. "+
                              "Note this variable is known only within the <span class='cx-fun'>calcTotal()</span> function, "+
                              "but not known elsewhere in the program.",
     "calcTotal.totalCost": "This variable is the calculated cost based on the passed-in parameters <span class='cx-var'>numberItems</span> and "+
                            "<span class='cx-var'>unitCost</span>. "+
                            "Note this variable is known only within the <span class='cx-fun'>calcTotal()</span> function, "+
                            "but not known elsewhere in the program.",
     "count":"This variable stores the number of books, as entered by the user.",
     "cost":"This variable stores the cost per book, as entered by the user.",
     "total":"This variable is the total cost for the purchased books.",

     "display": "-",
     "keyboard": "-" 
};
  