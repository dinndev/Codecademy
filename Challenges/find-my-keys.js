const findMyKeys = arr => {
    return arr.includes('keys') ? arr.indexOf('keys') : -1
   }
   const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

   console.log(findMyKeys(randomStuff))   