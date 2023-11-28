// Desafio 1
function compareTrue(b1, b2) {
  let resposta = b1 && b2;
  return resposta;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let fraseArray = frase.split(' ');
  return fraseArray;
}

// Desafio 4
function concatName(array) {
  let frase = `${array[array.length - 1]}, ${array[0]}`;
  return frase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let contador = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
      contador = 1;
    } else if (array[i] === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  let resposta;

  if (dist1 < dist2) {
    resposta = 'cat1';
  } else if (dist2 < dist1) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }

  return resposta;
}

// Desafio 8
function fizzBuzz(array) {
  array.forEach((element, i) => {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 === 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
    } else {
      array[i] = 'bug!';
    }
  });

  return array;
}

// Desafio 9
function encode(frase) {
  frase = frase.replace(/[a]/g, '1');
  frase = frase.replace(/[e]/g, '2');
  frase = frase.replace(/[i]/g, '3');
  frase = frase.replace(/[o]/g, '4');
  frase = frase.replace(/[u]/g, '5');

  return frase;
}

function decode(frase) {
  frase = frase.replace(/[1]/g, 'a');
  frase = frase.replace(/[2]/g, 'e');
  frase = frase.replace(/[3]/g, 'i');
  frase = frase.replace(/[4]/g, 'o');
  frase = frase.replace(/[5]/g, 'u');

  return frase;
}

// Desafio 10
function techList(array, nome) {
  let tecnologias = [];

  if (array.length === 0) {
    return 'Vazio!';
  }

  if (array.length === 5) {
    array.sort();
  }

  for (let i = 0; i < array.length; i += 1) {
    tecnologias[i] = {
      tech: array[i],
      name: nome,
    };
  }

  return tecnologias;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
