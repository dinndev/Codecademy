const justCoolStuff = (coolStuff , myStuff) => {
    const newArr = coolStuff.filter(arr => {
   for(let i = 0; i < myStuff.length; i++){
     if(arr === myStuff[i]){
     return arr
     }
   }
    });
    return newArr
   };