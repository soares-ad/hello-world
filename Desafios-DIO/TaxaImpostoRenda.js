let renda = parseFloat(gets()).toFixed(2);
    
if(renda <= 2000.00) {
  
  console.log("Isento");
  
} else if(2000.01 <= renda && renda <= 3000.00) {
    
    let imposto = parseFloat((renda - 2000) * 0.08).toFixed(2);
    console.log("R$ " + imposto);
    
} else if(3000.01 <= renda && renda <= 4500.00) {
      
      let imposto = parseFloat(80 + ((renda - 3000.00) * 0.18)).toFixed(2);
      console.log("R$ " + imposto);
      
} else {
      
      let imposto = parseFloat(350 + (renda - 4500.00) * 0.28).toFixed(2);
      console.log("R$ " + imposto);
      
}