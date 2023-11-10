var finances = [
  ["Jan-2010", 867884],
  ["Feb-2010", 984655],
  ["Mar-2010", 322013],
  ["Apr-2010", -69417],
  ["May-2010", 310503],
  ["Jun-2010", 522857],
  ["Jul-2010", 1033096],
  ["Aug-2010", 604885],
  ["Sep-2010", -216386],
  ["Oct-2010", 477532],
  ["Nov-2010", 893810],
  ["Dec-2010", -80353],
  ["Jan-2011", 779806],
  ["Feb-2011", -335203],
  ["Mar-2011", 697845],
  ["Apr-2011", 793163],
  ["May-2011", 485070],
  ["Jun-2011", 584122],
  ["Jul-2011", 62729],
  ["Aug-2011", 668179],
  ["Sep-2011", 899906],
  ["Oct-2011", 834719],
  ["Nov-2011", 132003],
  ["Dec-2011", 309978],
  ["Jan-2012", -755566],
  ["Feb-2012", 1170593],
  ["Mar-2012", 252788],
  ["Apr-2012", 1151518],
  ["May-2012", 817256],
  ["Jun-2012", 570757],
  ["Jul-2012", 506702],
  ["Aug-2012", -1022534],
  ["Sep-2012", 475062],
  ["Oct-2012", 779976],
  ["Nov-2012", 144175],
  ["Dec-2012", 542494],
  ["Jan-2013", 359333],
  ["Feb-2013", 321469],
  ["Mar-2013", 67780],
  ["Apr-2013", 471435],
  ["May-2013", 565603],
  ["Jun-2013", 872480],
  ["Jul-2013", 789480],
  ["Aug-2013", 999942],
  ["Sep-2013", -1196225],
  ["Oct-2013", 268997],
  ["Nov-2013", -687986],
  ["Dec-2013", 1150461],
  ["Jan-2014", 682458],
  ["Feb-2014", 617856],
  ["Mar-2014", 824098],
  ["Apr-2014", 581943],
  ["May-2014", 132864],
  ["Jun-2014", 448062],
  ["Jul-2014", 689161],
  ["Aug-2014", 800701],
  ["Sep-2014", 1166643],
  ["Oct-2014", 947333],
  ["Nov-2014", 578668],
  ["Dec-2014", 988505],
  ["Jan-2015", 1139715],
  ["Feb-2015", 1029471],
  ["Mar-2015", 687533],
  ["Apr-2015", -524626],
  ["May-2015", 158620],
  ["Jun-2015", 87795],
  ["Jul-2015", 423389],
  ["Aug-2015", 840723],
  ["Sep-2015", 568529],
  ["Oct-2015", 332067],
  ["Nov-2015", 989499],
  ["Dec-2015", 778237],
  ["Jan-2016", 650000],
  ["Feb-2016", -1100387],
  ["Mar-2016", -174946],
  ["Apr-2016", 757143],
  ["May-2016", 445709],
  ["Jun-2016", 712961],
  ["Jul-2016", -1163797],
  ["Aug-2016", 569899],
  ["Sep-2016", 768450],
  ["Oct-2016", 102685],
  ["Nov-2016", 795914],
  ["Dec-2016", 60988],
  ["Jan-2017", 138230],
  ["Feb-2017", 671099],
];
console.log("Financial Anaysis");
console.log("-----------------");
//The total number of months included in the dataset
//In order to identify the total number of months we need the following steps:
//1. Create a loop which will iterate through all the values from the first collumn of the array set
//2. Inside the loop will be required to split the date format into months and years in order to be able sum them
//3. The months have to be translated into numbers with the help of a switch case for being able to sum them up
//4. We have to create a variable for total months and incremented inside the for loop
//5. Console the results
var totalMonths = 0;
for (var i = 0; i < finances.length; i++) {
  var dateString = finances[i][0];
  var [monthString, yearString] = dateString.split("-");
  var month = 0;
  //Switch case will convert the month string into months
  switch (monthString) {
    case "Jan":
      month = 1;
      break;
    case "Feb":
      month = 2;
      break;
    case "Mar":
      month = 3;
      break;
    case "Apr":
      month = 4;
      break;
    case "May":
      month = 5;
      break;
    case "Jun":
      month = 6;
      break;
    case "Jul":
      month = 7;
      break;
    case "Aug":
      month = 8;
      break;
    case "Sep":
      month = 9;
      break;
    case "Oct":
      month = 10;
      break;
    case "Nov":
      month = 11;
      break;
    case "Dec":
      month = 12;
      break;
  }
  totalMonths++;
}
console.log("The total number of months is: " + totalMonths);

//The net total amount of Profit/Losses over the entire period.
//In order to calculate the net profit or loss over the given period we need to follow the below steps:
//1.Create a variable which will stock the required some and initiliase;
//2.Create loop to iterate through finances list
//3.Inside loop add every entry to the first variable created
//4. Display result in console
var sumOfFinancialRecords = 0;
for (const entry of finances) {
  sumOfFinancialRecords += entry[1]; //Entry[1]indicate the position of the entry from the array set
}
console.log(
  "The net total amount of profit over the entire period is: " +
    "$" +
    sumOfFinancialRecords
);

//Total change in Profit/Losses from month to month, greatest increase and lowest decrease
//1. Declare variable for total monthly changes
//2. Create a for loop to iterate through the array finances
//3. Create variable for current and previous month;
//4. Calculate the change between current and previous into a variable
//5. Add every change to the total variable created
//6. Display results
//7. Calculate the average change over the period
//8. Display results

var maxIncrease = -Infinity; //This step is to calculate the greatest increase
var maxIncreaseDate = ""; //This step is to calculate the greatest change
var maxDecrease = -Infinity; //This step is to calculate the greatest decrease
var maxDecreaseDate = "";

var changesInProfit = 0;
for (var i = 1; i < finances.length; i++) {
  var currentMonth = finances[i][1];
  var previousMonth = finances[i - 1][1];
  var change = currentMonth - previousMonth;
  changesInProfit += change;
  if (i === 1) {
    //this if is for finding out the greatest change over the period
    maxIncrease = change; //the first comparison is used for the future reference
    maxIncreaseDate = finances[i][0];
    maxDecrease = change;
    maxDecreaseDate = finances[i][0];
  } else {
    // Update maximum increase and corresponding date
    if (change > maxIncrease) {
      //next increase is compared with first, if higher stock in the variable
      maxIncrease = change;
      maxIncreaseDate = finances[i][0];
    }
    if (change < maxDecrease) {
      //next increase is compared with first, if higher stock in the variable
      maxDecrease = change;
      maxDecreaseDate = finances[i][0];
    }
  }
}

var average = changesInProfit / (totalMonths - 1);
var roundedAverage = average.toFixed(2);
console.log(
  "The average of the changes in profit or losses over the period is: " +
    roundedAverage
);
console.log(
  "The greatest increase in Profit or Losses is: $" +
    maxIncrease +
    " on " +
    maxIncreaseDate
);
console.log(
  "The greatest decrease in Profit or Losses is: $" +
    maxDecrease +
    " on " +
    maxDecreaseDate
);
