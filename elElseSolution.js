// js only look up for 6 falsy values , other than that all values are truthy values.

// try to guess weather the if condition will have truthy or falsy values



// false	        The keyword false.
// 0,-0,0n	            The Number zero (so, also 0.0, etc., and 0x0).
//                      The Number negative zero (so, also -0.0, etc., and -0x0).
//      	            The BigInt zero (so, also 0x0n). Note that there is no BigInt negative zero — the negation of 0n is 0n.
// "", '', ``	    Empty string value.
// null	            the absence of any value.
// undefined	    undefined — the primitive value.
// NaN              not a number.


// 1, 'yes'
if(true){
    console.log('shall i run 1')
}

// 2, 'yes'
if('wooo'){
    console.log('shall i run 2')
}

// 3
if(undefined){
    console.log('shall i run 3')
}

// 4 'yes'
if('hoi hoi'){
    console.log('shall i run 4')
}

// 5
if(null){
    console.log('shall i run 5')
}

// 6, 'yes'
if('null'){
    console.log('shall i run 6')
}

// 7
if(""){
    console.log('shall i run 7')
}

// 8, 'yes'
if(4){
    console.log('shall i run 8')
}

// 9, 'yes'
if({}){
    console.log('shall i run 9')
}

// 10, 'yes'
if({name:'vijay'}){
    console.log('shall i run 10')
}

// 11
if(0){
    console.log('shall i run 11')
}

// 12, 'yes'
if([]){
    console.log('shall i run 12')
}

// 13, 'yes'
if('he'){
    console.log('shall i run 13')
}

// revise truth table for AND and OR

// ********************************************
// AND truth table
// ******************

//      |   A   |   B   ||  R   |
//      =========================
//      |   T   |	T	||  T   |
//      |   T   |	F	||  F   |
//      |   F   |	T	||  F   |
//      |   F   |	F	||  F   |
// 
// ********************************************
// OR truth table
// ******************

//      |   A   |   B   ||  R   |
//      =========================
//      |   T   |	T	||  T   |
//      |   T   |	F	||  T   |
//      |   F   |	T	||  T   |
//      |   F   |	F	||  F   |

// ********************************************
// NOT truth table
// ******************

//      |   A       ||  R   |
//      =========================
//      |   T   	||  F   |
//      |   F   	||  T   |

// 14, 'yes'
if([] && []){
    console.log('shall i run 14')
}
// 15
if(null && 8){
    console.log('shall i run 15')
}

// 16
if(true && false){
    console.log('shall i run 16')
}

// 17, 'yes'
if(true && true){
    console.log('shall i run 17')
}

// 18
if(false || false){
    console.log('shall i run 18')
}

// 19, 'yes'
if(null || 'goody'){
    console.log('shall i run 19')
}

// 20, 'yes'
if(!undefined){
    console.log('shall i run 20')
}

// 21
if(!'hi'){
    console.log('shall i run 21')
}

// 22, 'yes'
if('hi' || !29){
    console.log('shall i run 22')
}

// 23
if(!29 || 0){
    console.log('shall i run 23')
}

// 24, 'yes'
if(83 && 93){
    console.log('shall i run 24')
}

// 25
if(!90 && !0){
    console.log('shall i run 25')
}

// 26
if(!90 && !1){
    console.log('shall i run 26')
}

// 27, 'yes'
if(-9 && 8){
    console.log('shall i run 27')
}

// 28, 'yes'
if(9>8 && !8<9){
    console.log('shall i run 28')
}

// 29
if(0>1 && !'ummm'){
    console.log('shall i run 29')
}

// 30, 'yes'
if('pie' && 'lovely'){
    console.log('shall i run 30')
}

// 31, 'yes'
if(function something(){}){
    console.log('shall i run 31')
}

// 32
if(!['1','2']){
    console.log('shall i 32')
}

// 33, 'yes'
if(1>8 || 9<12 || 'i'=== 'i'){
    console.log('shall i run 33')
}

// 34, 'yes'
if(false === false){
    console.log('shall i run 34')
}

// 35
if(true !== false && (8<9 && ![])){
    console.log('shall i run 35')
}


//36
function isPositiveNum(n){
    return n<0?false:true
}

if(isPositiveNum(5) && isPositiveNum(-12)){
    console.log('shall i run 36')
}

// 37
function layer(){
    console.log('👻')
}
if(layer() && 'care'){
    console.log('shall i run 37')
}

// 38, 'yes'
if(!{} || {}){
    console.log('shall i run 38')
}

// 39, 'yes'
if(!!'always'){
    console.log('shall i run 39')
}

// 40, 'yes'
if(!!'something' || true){
    console.log('shall i run 40')
}



