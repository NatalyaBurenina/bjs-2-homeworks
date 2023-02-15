"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
   if(a==0) return
   
     let x1;
     let x2;
          if(d === 0){
          x1 =-b/(2*a);
         arr.push(x1);
          console.log(arr);
  return arr;
      }
        if(d > 0){
          x1 = (-b + Math.sqrt(d)) / 2*a;
          x2 = (-b - Math.sqrt(d)) / 2*a;
          arr.push(x1,x2);
    console.log(arr);
    return arr;
        }
        if(d < 0){
          console.log(arr)
        }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution; // тело кредита, сумма - взнос  
	let P = percent / 100 / 12; // 1/12 процентной ставки, преобразовали в месячный взнос
	if ((percent < 0 || contribution < 0 || amount < 0 || countMonths < 0) ||
		(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths))) {
		return false;
	}
	let monthAmount = S * (P + (P / (((1 + P) ** countMonths) - 1))); // платеж в месяц
	let totalAmount = monthAmount * countMonths; //общая сумма платежа
    return Number(totalAmount.toFixed(2));
}