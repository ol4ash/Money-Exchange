// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

	var result1 = {}
	result1.error = "You are rich, my friend! We don't have so much coins for exchange"

	
	var sum = currency;
	var h=50, q=25, d=10, n=5, p=1; 
	var checkResult = [];

function check(rating) {
	
  	var i = 0;
  	while (sum >= rating) {sum = sum-rating;
    i++}
    checkResult = [sum,i]

    return checkResult;
	}
	
while (sum >0) {
    check (h)
    var hSum = (checkResult[1]);
    sum = checkResult[0];
    check (q)
    var qSum = (checkResult[1]);
    sum = checkResult[0];
    check (d)
    var dSum = (checkResult[1]);
    sum = checkResult[0];
    check (n)
    var nSum = (checkResult[1]);
    sum = checkResult[0];
    check (p)
    var pSum = (checkResult[1]);
    sum = checkResult[0];
  }

var result2 = {};

if (hSum>0)	{result2.H = hSum};
if (qSum>0)	{result2.Q = qSum};
if (dSum>0)	{result2.D = dSum};
if (nSum>0)	{result2.N = nSum};
if (pSum>0)	{result2.P = pSum};
	



if (currency > 10000) {return result1}
	else {return result2}





}


