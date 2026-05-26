
/*Assignment 2 */
/*A bank evaluates loan applicants based on the following criteria:

1. Credit Score:
	o If the credit score is above 750, the loan is automatically approved.
	o If the credit score is between 650 and 750, additional checks are performed.
	o If the credit score is below 650, the loan is denied.
2. Income:
	o For credit scores between 650 and 750, the customer’s income must be at least $50,000
for the loan to be considered.

3. Employment Status:
	o If the customer’s income is at least 50,000, the system checks whether the customer is
employed.
	o If the customer is unemployed, the loan is denied.
4. Debt-to-Income Ratio:
	o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
	o If the DTI ratio is less than 40%, the loan is approved.
	o If the DTI ratio is 40% or greater, the loan is denied.

Create common function and then based on below details, print whether user is eligible to get the loan or not */


// customerName = "John Doe";
// creditScore = 720;
// income = 55000.0;
// isEmployed = true;
// debtToIncomeRatio = 35.0;

let customerName: string  = "John Doe";
let creditscore: number= 750;
let income: number = 50000.01;
let isEmployed:boolean = true;
let debtToIncomeRatio:number = 40.01;


if(creditscore>750)
 {  
    console.log(`Hi ${customerName} Congratulations, you are loan is automatically approved.`);

 }
else if(creditscore<=750&& creditscore>=650)
{
    console.log(`Hi ${customerName}, Additional checks are performed due to average credit score.`);
            if(income>=50000)
                {
                  if(isEmployed)
                  {
                    if(debtToIncomeRatio<40)
                        console.log(`Hi ${customerName} Congratulations, you are loan is approved.`);
                    else
                        console.log(`......I am sorry, Loan is not served at this time due to DTI ratio.`);
                  }
                  else
                    console.log(`......Customer is unemployed, Loan is denied`);

                    
                }
                else
                    console.log(`......Customer does not have income of at least 50,000, Loan is denied.`);
}
else 
{
    console.log(`${customerName} I am sorry, we cannot loan at this time.`)
}