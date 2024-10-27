const input=[["a","b","c"],["d","e","f"]]
input.flat().reduce((accumalator,currentValue)=>{
    if (accumalator[currentValue]){
        accumalator[currentValue]+=1;
    }else{
             accumalator[currentValue]=1;
}
             return accumalator;},{});
//Map
const input=[{name:"John",age:13},{name:"Mark",age:56},{name:"Rani",age:45}];
        const ages=input.map((person)=>person.age);
             [Math.min(...ages),Math.max(...ages),Math.max(...ages),Math.min(...ages)];
//Filter
             const input=[1,-4,12,0,-3,29,-150]
             input.filter(function(num){
                 return num>0;
             })
             .reduce(function(accumulator,currentValue){
                 return accumulator+currentValue;
             },0);
