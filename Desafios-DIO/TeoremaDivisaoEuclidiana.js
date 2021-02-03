let entrada = gets();
let valores = entrada.split(" ");
let a = parseInt(valores[0]);
let b = parseInt(valores[1]);
let r = a % b;
let q;

if(r < 0){
  r = r + Math.abs(b);
}

q = (a - r)/b;

console.log(q+' '+r);
