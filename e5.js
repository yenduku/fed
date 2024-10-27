const input=[["a","b","c"],["d","e","f"]]
input.reduce((accumalator,currentValue)=>{
    if (accumalator[currentValue]){
        accumalator[currentValue]+=1;
    }else{
             accumalator[currentValue]=1;
}
             return accumalator;},{});