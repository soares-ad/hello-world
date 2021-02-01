let entrada = gets().split(" ");
let H = parseInt(entrada[0]);
let P = parseInt(entrada[1]);

let media = parseFloat(H/P).toFixed(2); // Calcula a média com duas casas decimais
console.log(media);