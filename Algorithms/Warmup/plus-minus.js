function plusMinus(arr) {

    let positivo = 0
    let negativo = 0
    let zero = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positivo++;
        } else if (arr[i] < 0) {
            negativo++;
        } else {
            zero++;
        }
    }
    console.log((positivo/arr.length).toFixed(6));
    console.log((negativo/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
    return
}
