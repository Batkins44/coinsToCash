var piggyBank = {
    quarters:12,
    nickels:23,
    dimes:85,
    pennies:123,
}

var dollarAmount = ((piggyBank.quarters*.25)+(piggyBank.nickels*.05)+(piggyBank.dimes*.1)+(piggyBank.pennies*.01));

console.log(dollarAmount);