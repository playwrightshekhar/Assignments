/*Assignment 1*
//1. Temperature of a city in degrees Celsius: 25.5
let temp: number = 25.5;
console.log(`Temperature of a city in degrees Celsius: ${temp} °C`);
//2. Whether a customer has placed an order: true or false
let cust: boolean = false;
console.log(`Whether a customer has placed an order: ${cust}`);
//3. Person's phone number: "123-456-7890"
let phone: string = "123-456-7890";
console.log(`Person's phone number: "${phone}"`);
//4. Amount of money in a customer's bank account: 1000.50
let balance: number = 1000.50;
console.log(`Amount of money in a customer's bank account: ${balance}`);
//5. Person's email address: "john.doe@example.com"
let email: string = "john.doe@example.com"
console.log(`My Person's email address: "${email}"`)
//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let coordinates: number[] =[37.7749, -122.4194];
console.log(`Coordinates of a location (latitude, longitude): ${coordinates}`);
//7. Person's marital status: true or false
let mStatus: boolean = true;
console.log(`Person's marital status: ${mStatus}`);
//8. Person's occupation: "Software Engineer"
let occupation : string = "Software Engineer"
console.log(`Person's occupation: "${occupation}"`)
//9. Person's favourite colour: "Blue"
let fColour: string ="Blue";
console.log(`Person's favourite colour: ${fColour}`);
//10.Current year: 2023
let cYear: number = 2023;
console.log(`Current year: ${cYear}`);
//11.Number of followers on a social media platform: 1,000,000
let followers: string = "1,000,000;"
console.log(`Number of followers on a social media platform: ${followers}`);
//12.Rating of a movie: 7.5
let rating: number = 7.5
console.log(`Rating of a movie: ${rating}`);
//13.Person's blood type: 'A'
let bType: string = 'A';
console.log(`Person's blood type: '${bType}'`)
//14.Title of a book: "To Kill a Mockingbird"
let tBook: string = "To Kill a Mockingbird";
console.log(`Title of a book: "${tBook}"`);
//15.Number of employees in a company: 500
const numofEmployees: number = 500;
console.log(`Number of employees in a company: ${numofEmployees}`);
//16.Time of an event: 2:30 PM
const timeOfEvent: string = "2:30 PM";
console.log(`Time of an event: ${timeOfEvent}`);
//17.Name of a country: "United States"
let country: string ="United States"
console.log(`Name of a country: "${country}"`);
//18.Person's eye color: "Brown"
let eColour: string ="Brown";
console.log(`Person's eye color: "${eColour}"`);
//19.Person's birthplace: "New York City"
let birthplace: string ="New York City";
console.log(`Person's birthplace: "${birthplace}"`);
//20. Distance between two cities: 200.5
let distance: number = 200.5;
console.log(`Distance between two cities: ${distance}`);
const age: number=43;
console.log(`My age is: "${age}"`);

*/
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


// Income:
// 	o For credit scores between 650 and 750, the customer’s income must be at least $50,000

