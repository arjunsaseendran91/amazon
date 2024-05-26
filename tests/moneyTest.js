import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suite: formatCurrency');

console.log('Convert cents in to dollars');
if(formatCurrency(2095) === '20.95'){
  console.log('Passed');
}else{
  console.log('Faild');
}

console.log('Work with 0');
if(formatCurrency(0) === '0.00'){
  console.log('Passed');
}else{
  console.log('Faild');
}


console.log('Rounds up to the nearest cent');
if(formatCurrency(2000.5) === '20.01'){
  console.log('Passed');
}else{
  console.log('Failed');
}