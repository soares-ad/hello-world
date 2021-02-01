let entrada = gets().split(" ");
let T = parseInt(entrada[0]);
let V = parseInt(entrada[1]);

let consumo = parseFloat((T*V)/12).toFixed(3); // Calcula o consumo de combustível com três casas decimais
console.log(consumo);