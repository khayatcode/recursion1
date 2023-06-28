// Recursive Sigma

function sigma(num){
    var sum = 0
    if(num <= 0){
        return sum
    } 
    // Check if num is a string
    else if(typeof num == "string"){
        return "Error: Input must be a number"
    }
    else{
        for(let i = 1; i <= num; i++){
            sum += i
        }
        return sum
    }
}

console.log("Test 1")
console.log(sigma(5))
console.log("Test 2")
console.log(sigma(2.5))
console.log("Test 3")
console.log(sigma(-1))
console.log("Test 4")
console.log(sigma("hello"))

// Recursive Factorial

function factorial(num){
    var sum = 1
    if(num <= 0){
        return 0
    } 
    else if(typeof num == "string"){
        return "Error: Input must be a number"
    }
    else{
        for(let i = 1; i <= num; i++){
            sum *= i
        }
        return sum
    }
}

console.log("Test 1")
console.log(factorial(3))
console.log("Test 2")
console.log(factorial(6.5))
console.log("Test 3")
console.log(factorial(-1))
console.log("Test 4")
console.log(factorial("hello"))

