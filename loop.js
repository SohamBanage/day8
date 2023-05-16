// BASIC LOOP
for (let i = 0; i < 4; i++) {
    console.log("SOHAM");
  }
  
  // list :: ArrayList in java
  let list = ["soham", "lalit", "bharat", "jyoti"];
  
  // Approach 1
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    console.log(item);
  }
  console.log("----------------------------------");
  
  // Approach 2
  for (let item of list) {
    console.log(item);
  }
  console.log("----------------------------------");
  // Approach 3 :: lamda and stream
list.forEach(console.log);
  
