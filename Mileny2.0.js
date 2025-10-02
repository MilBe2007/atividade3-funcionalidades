function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "ímpar";
  } else {
    return "par";
  }
}

module.exports = parOuImpar;