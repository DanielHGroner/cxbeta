// p4da-3-6-help.js
const allhelp = {
    "title": "This program calculates the ending balance for a certificate of deposit."+
    "The interest rate is determined based on the user-entered investment amount, "+
    "using if, elif and else statements.  The ending balance is calculated based on "+
    "the investment amount and interest rate, and then displayed.",
    "4": "Get input for initial investment amount, convert to float, "+
         "and assign to variable <span class='cx-var'>invest</span>. "+ 
         "The <span class='cx-fun'>input()</span> function returns a string, which is converted to a number "+
         "by the <span class='cx-fun'>float()</span> function, before being assigned to the <span class='cx-var'>invest</span> variable.",
    "7":"Determine <span class='cx-key'>if</span> the initial investment is greater than or equal to 10,000; "+
        "if so, the next statement will set the interest rate,"+
        "otherwise, the subsequent statements will determine the interest rate.",
    "8":"Set the interest rate to 3.5 (if the initial investment was at least 10,000).",
    "9":"The <span class='cx-key'>elif</span> block covers the case where the initial investment is at least 1,000 and less than 10,000.",
    "10":"Set the interest rate to 3.25 (if the initial investment was at least 1,000 and less than 10,000).",
    "11":"The <span class='cx-key'>else</span> block covers the case where the initial investment is less than 1000.",
    "12":"Set the interest rate to 3.0 (if the initial investment is less than 1,000).",
    "15":"Calculate the ending balance based on the initial investment and interest rate.",
    "18":"Display the interest rate, as previously determined by the <span class='cx-key'>if</span>/<span class='cx-key'>else</span> section.",
    "19":"Display the ending balance.",

    "invest": "This variable stores the initial investment amount. "+
              "It is entered by the user, and used in the determination of the interest rate "+
              "as well as the calculation of the ending balance",
    "interestRate": "This variable stores the interest rate (in percent). "+
              "It is determined in the <span class='cx-key'>if</span>/<span class='cx-key'>elif</span>/<span class='cx-key'>else</span> section based on the investment amount.",
    "endBalance": "This variable stores the ending balance. "+
           "It is calculated based on the initial investment and interest rate, and is displayed at the end of the program."
  };
  