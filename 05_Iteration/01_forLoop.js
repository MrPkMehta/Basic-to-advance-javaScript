//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}
// console.log(element);  out of scope


for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);

    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}


//to fetch array through loop
let myArr = ['pk', 'ak', 'tm', 'hm']

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}



//break and continue
//to break the condition and come out of the loop


for (let index = 1; index <= 20; index++) {

    if(index == 5) {
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);

    
}


//continue 
//it ignorees the given itetration or we can say that it can skip one value 
//it does not come out of loop
for (let index = 1; index <= 20; index++) {

    if(index == 5) {
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);

    
}