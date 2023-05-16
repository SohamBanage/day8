

  function addition(n1, n2) {
    return n1 + n2;
  }
 
  // OVERLOADING
  let add1 = addition(); // no arg.
  console.log(add1);
  
  let add2 = addition(1); // less arg
  console.log(add2);
  
  let add3 = addition(1, 2); // required arg
  console.log(add3);
  
  let add4 = addition(10, 20, 30); // More than required arg
  console.log(add4);