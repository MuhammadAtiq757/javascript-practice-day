// use break in for loop

for(var i = 1; i<=50; i++){
    if(i==10){
        break;
    }
    console.log(i);
}



// use continue in for loop

for (var i = 0; i<=50; i++){
    if(i==10){
        continue;
    }
    console.log(i);
}


// find odd number in for loop with continue
for (var i = 0; i<=50; i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}
