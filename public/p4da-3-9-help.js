// p4da-3-6-help.js
const allhelp = {
    "title": "This program calculates the ending balance for a certificate of deposit."+
    "The interest rate is determined based on the the customer type and user-entered investment amount, "+
    "using if and else statements.  The ending balance is calculated based on "+
    "the investment amount and interest rate, and then displayed.",
    "5": "Get the customer type, to determine if this is a new or existing customer. "+
         "The user input is assigned to the string variable <span class='cx-var'>customer</span>. "+
         "Note the <span class='cx-fun'>input()</span> function returns a string, so the <span class='cx-var'>customer</span> variable is also a string.",
    "8": "Get input for initial investment amount, convert to float, "+
         "and assign to variable <span class='cx-var'>invest</span>. "+ 
         "The <span class='cx-fun'>input()</span> function returns a string, which is converted to a number "+
         "by the <span class='cx-fun'>float()</span> function, before being assigned to the <span class='cx-var'>invest</span> variable.",
    "10":"This <span class='cx-key'>if</span> statement determines whether the customer is an existing customer; "+
         "if so, the following nested statements will determine the interest rate based on the investment amount",
    "12":"Determine if the initial investment is greater than or equal to 1000; "+
        "if so, the next statement will set the interest rate,"+
        "otherwise, the statement after the <span class='cx-key'>else</span> will set the interest rate.",
    "13":"Set the interest rate to 3.25 (if the initial investment was at least 1000).",
    "14":"This <span class='cx-key'>else</span> block covers the case where the initial investment is less than 1000.",
    "15":"Set the interest rate to 3.0 (if the initial investment is less than 1000).",
    "16":"This <span class='cx-key'>else</span> corresponds to the first <span class='cx-key'>if</span> statement, and handles the case where customers are not existing (i.e., new customers).",
    "17": "Set the interest rate for new customers.",
    "20":"Calculate the ending balance based on the initial investment and interest rate.",
    "23":"Display the interest rate, as previously determined by the <span class='cx-key'>if</span>/<span class='cx-key'>else</span> section.",
    "24":"Display the ending balance.",

    "customer": "This string variable stores the customer type: 'n' for new customers, 'e' for existing customers.",
    "invest": "This variable stores the initial investment amount. "+
              "It is entered by the user, and used in the determination of the interest rate "+
              "as well as the calculation of the ending balance.",
    "interestRate": "This variable stores the interest rate (in percent). "+
              "It is determined in the <span class='cx-key'>if</span>/<span class='cx-key'>else</span> section based on the investment amount.",
    "endBalance": "This variable stores the ending balance. "+
           "It is calculated based on the initial investment and interest rate, and is displayed at the end of the program."
  };
  