// Desafio 11
function generatePhoneNumber(array) {
  let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let fail = false;
  let telefone = '(xx) xxxxx-xxxx';

  if (array.length !== 11) { return 'Array com tamanho incorreto.'; }

  array.forEach((element) => {
    counts[element] += 1;
    telefone = telefone.replace(/x/, element);

    if (element > 9 || element < 0 || counts[element] >= 3) { fail = true; }
  });

  if (fail) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return telefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  }

  return true;
}

// Desafio 13
function hydrate(bebida) {
  let numero = bebida.match(/\d+/g);
  let soma = 0;

  numero.forEach((element) => { soma += parseInt(element, 10); });

  if (soma === 1) {
    return `${soma} copo de água`;
  }

  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
