// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
function freq(params){
   let x=0;
   let y=0;
   let count=0;
   let max=0;
   let ans;
    params.sort();
    while(x!=params.length){
        if(params[x]==params[y] && y!=params.length){
            y++;
            count++;
        }
        else{
            if(max<count){
                max=count;
                ans=params[x];
            }
            count=0;
            x=y;
        }
    }
    console.log(params);
    return {max , ans};
}
const x = freq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
console.log(`${x.ans} ( ${x.max} times )`);