function miltip(a,b,min,max) {
    konte1 = 0;
    let k1='';
    konte2 = 0;
    let k2='';
    konte3 = 0;
    let k3='';
    konte4 = 0;
    let k4='';
    for (let i = min; i <=max; i++) {
            if(i%a ===0 && i%b !==0){
                    konte1++;
                    k1 +=','+i;
            }
            else if(i%b ===0 && i%a !==0){
                    konte2++;
                    k2 +=','+i;
            }
            else if(i%a === 0 &&i%b === 0){
                    konte3++;
                    k3 +=','+i;
            }
            else{
                    konte4++;
                    k4 +=','+i;
            }
    }
    console.log(`Total nonb ki se miltip ${a} se : ${konte1}`);
    console.log(`ex:${k1.slice(1)} --> total nonb ${konte1}`);
    console.log('------------------------------------------------');
    console.log(`Total nonb ki se miltip ${b} se : ${konte2}`);
    console.log(`ex:${k2.slice(1)} --> total nonb ${konte2}`);
    console.log('------------------------------------------------');
    console.log(`Total nonb ki se miltip ${a} ak ${b} se : ${konte3}`);
    console.log(`ex:${k3.slice(1)} --> total nonb ${konte3}`);
    console.log('------------------------------------------------');
    console.log(`Total nonb ki pa miltip ${a} ak ${b} se : ${konte4}`);
    console.log(`ex:${k4.slice(1)} --> total nonb ${konte4}`);
}

miltip(2,3,1,20)