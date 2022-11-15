let r = '5 45 123 12'
let y=1;
let z=0;
let result;
for (let i = 0; i < r.length; i++) {
        if(r[i].length>1){
                let e = (r[i].split(''))
                for (let u = 0; u < e.length; u++) {
                        y *=parseInt(e[i]);        
                }
                result = y;
        }
        else{
                z +=parseInt(r[i])
                result = z;
        }
        
}
console.log(result);
