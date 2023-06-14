let arr = [0,12,1,10,0,2,34,5]
console.log(arr.length)
function zeroEnd(arr){
let em = 0;
for(let i=0;i<(arr.length);i++){
 if(arr[i] !== 0){
     arr[em] = arr[i];
     em++;
 }
}
for(let j=6;j<arr.length;j++){
    arr[j] = 0;
}
return arr
}

document.write(zeroEnd(arr))
