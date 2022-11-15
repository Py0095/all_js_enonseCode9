function nameUpper(a) {
    let z =''
    let y =a.split(' ')
    console.log(y);
    for (let i of y) {
            // z =i[0].toUpperCase() + y.slice(1);
            z +=' '+(i[0].toLocaleUpperCase()+i.slice(1));
    }
   return console.log(z);  
}

// Enonse 3
let a ='ayiti se yon bel paradi'
nameUpper(a)
