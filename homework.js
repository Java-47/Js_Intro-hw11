let res = sumDigits(1234);
console.log(`res = ${res}`);//res = 10
res = luckyNumber(123871);//1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'lucky' : 'unlucky');


function sumDigits(x) {

let result = 0;
while (x!=0)
{
    y = x%10;

    x = (x-y) /10;

    result += y;
}

return result;
}

function luckyNumber(x){
    
y = String(x);
console.log(y[0])
let sum1 = 0, sum2 = 0;
for(i=0; i<y.length; i++){
    if ((i+1)%2 == 0){
        sum1+=y[i];
    }
    else
    {
        sum2+=y[i];
    }
}
sum1=sumDigits(sum1);
sum2=sumDigits(sum2);

if (sum1==sum2)
return true;


}