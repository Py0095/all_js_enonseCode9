function adresseIp(a) {
    let x=a[0]
    a = a.split('.')
    let somme =0;
    let y=0;
    let z=0;
    for (let i = 0; i < a.length; i++) {
            if (a[i].length >1){
                   let r =( a[i].split(''));
                    for (let i = 0; i < r.length; i++) {
                            y += parseInt( r[i]);  
                            // console.log(y);                   
                    }
            }else
                    z += parseInt( a[i]);
    }
    return result = (z+y)*x;
}
// Enonse 1
let userEntry = prompt('Antre adress Ip a')
console.log(adresseIp(userEntry));
