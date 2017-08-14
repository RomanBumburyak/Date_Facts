///////////////////////////////////////////
//1.)
const moment = require("moment");
const chalk = require('chalk');
console.log(chalk.blue(day));


var day = moment().format('LLLL');
console.log(day);

console.log(chalk.blue(day));
/////////////////////////////////////////
//2.)
var dayOfYear = moment().format('DDDD');
console.log(dayOfYear);

//////////////////////////////////////////
// 3.)

var grabbingHours = moment().format('HH');
console.log(grabbingHours);

var grabbingSeconds = moment().format('ss');
console.log(grabbingSeconds);

var secInDay = (grabbingHours * 3600) + grabbingSeconds;
/////////////////////////////////////////////////

//4.)

var DayLightSavings = moment().isDST();
  console.log(DayLightSavings);
  if (DayLightSavings) {
    console.log("It is Day Light Savings Time");
  };
  ///////////////////////////////////////////////
  //5.)

  var leapYear = moment().isLeapYear();
    console.log(leapYear);
    if (!leapYear) {
      console.log("It" + chalk.red(" is not ") + "a Leap Year")
    }
