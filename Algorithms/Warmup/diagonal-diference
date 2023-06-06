function diagonalDifference(matriz) {
  var tamanho = matriz.length;
  var somaDiagonalPrincipal = 0;
  var somaDiagonalSecundaria = 0;

  for (var i = 0; i < tamanho; i++) {
    somaDiagonalPrincipal += matriz[i][i];
    somaDiagonalSecundaria += matriz[i][tamanho - 1 - i];
  }

  var diferenca = somaDiagonalPrincipal - somaDiagonalSecundaria;
  return Math.abs(diferenca);
}
