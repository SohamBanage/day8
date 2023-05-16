function addition(n1, n2) {
    n1 = n1 || 0;
    n2 = n2 || 0;
  
    return n1 + n2;
  }
  
  // OVERLOADING
  let result1 = addition(); 
  console.log(result1);
  
  let result2 = addition(1); 
  console.log(result2);
  
  let result3 = addition(1, 1);
  console.log(result3);
  
  let result4 = addition(10, 20, 40);
  console.log(result4);