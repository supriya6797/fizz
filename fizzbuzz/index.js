// Given a sequence of numbers ranging from 1 to 𝑛 implement a program that performs
// the following operations:
// If a number is a multiple of 3, print "Fizz".
// If a number is a multiple of 5, print "Buzz".
// If a number is a multiple of both 3 and 5, print "Fizz-Buzz".

for(var n=1;n<=100; n++)
    if(n%3==0 && n%5==0){console.log(n,"Fizz-Buzz")}

    else if(n%3==0){console.log(n,"Fizz")}
    
    else if(n%5==0){console.log(n,"Buzz")}