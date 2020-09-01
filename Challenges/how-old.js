

const howOld = (age ,year) => {
const date = new Date();
const diff = date.getFullYear() - year;
const birthYear = Math.abs(age - date.getFullYear())
console.log(birthYear)
 if(year > date.getFullYear()){
    return `You will be ${Math.abs(diff - age)} in the year ${year}`
 } else if(year < birthYear){
   return `The year ${year} was ${diff - age} years before you were born`
 } else if(year < date.getFullYear()){
   return `You were ${Math.abs(diff - age)} in the year ${year}`
 }
}

console.log(howOld(20 , 2010));