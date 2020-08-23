const input = 'alauaaden';
const vowels = ['a','e','i','o','u'];
let resultArray = [];


for(let i = 0 ; i < input.length; i++){
  // console.log(i)
  vowels.forEach( (vowel, j) => {
    if(input[i] === vowel){
      if(input[i] === 'e' || input[i] === 'u') {
       resultArray.push(input[i]);
      }
    }
  });
}
console.log(resultArray.join('').toUpperCase());