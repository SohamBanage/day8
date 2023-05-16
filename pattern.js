function asc(){let pattern=" "; 
console.log("PATTERN IN ASENDING ORDER")
for(let i=0 ; i < 5 ; i++){
    pattern = pattern+"* ";
console.log(pattern);
}
}

function des(){
console.log("PATTERN IN DESENDING ORDER")
for(let i=5 ; i >= 1 ; i--){
    let pattern=" ";
    for(let j=1;j <= i;j++){
    pattern=pattern+"* ";
    }

    console.log(pattern);
    }
}

asc();
des();
