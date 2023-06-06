function simpleArraySum(ar) {
    let soma = 0
    let i = 0
    for (let i = 0; i < ar.length; i++) {
        const element = ar[i];
        soma = soma + element
    }
    return [soma];
}