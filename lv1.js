       function fibonacci(n) {
        var num1= 1,num2= 1,sum;
        for(var i = 3; i <= n; i += 1) {
            sum = num1 + num2
            num1 = num2
            num2 = sum
        }
        return sum
    }
    function fibonaccii(n){
        var num1=1,num2=1,num3;
        var arr=[1,1];
        for(var i=3;i<=n;i++){
            num3=num1+num2;
            num1=num2;
            num2=num3;
            arr.push(num3);
        }
        return arr;
    }
    