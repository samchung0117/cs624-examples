// ex02
/*
    HexCode '\xB0' for degree sign
    http://www.javascripter.net/faq/mathsymbols.htm
    
    Var, Let, and Const – What's the Difference?
    https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
*/

/*
    Get the temperature in Celsius from the end-user.
    
    Add 32 to the temperature in Celsius.
    Multiply the result by 9/5 (because the ratio of change from F to C is 180/100)
    
    Store the result as the temperature in Fahrenheit.
*/
function cToF(celsius) 
{
    let cTemp = celsius;
    let cToFahr = cTemp * 9 / 5 + 32;
    let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

cToF(0);
cToF(100);

/*
    Get the temperature in Fahrenheit from the end-user.
    
    Subtract 32 from the temperature in Fahrenheit.
    Multiply the result by 5/9 (because the ratio of change from C to F is 100/180)
    
    Store the result as the temperature in Celsius.
*/
function fToC(fahrenheit) 
{
    let fTemp = fahrenheit;
    let fToCel = (fTemp - 32) * 5 / 9;
    let  message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

fToC(32);
fToC(212);
