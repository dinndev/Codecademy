const array = ['al', 'asda' ,'asdasd'];

const reverseArray = arr => {
    let newArr = [];
  for(let i = arr.length -1; i >= 0; i--){ 
    newArr.push(arr[i])
  }
  return newArr
}



console.log(reverseArray(array))