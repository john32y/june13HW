function factorialCalculator(number) {
    let result = 1 
    for(let i=0; i< number; i++) {
        result = result * (i+1)
        console.log(result)

    }
}factorialCalculator(5)