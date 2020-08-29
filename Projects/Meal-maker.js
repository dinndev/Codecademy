const meal = {
    _courses :{
       appetizers: [],
       mains:  [],
       desserts: [] 
    },
    get courses() {
     return {
         appetizer: this._courses.appetizers,
         mains: this._courses.mains,
        desserts: this._courses.desserts
     }
    },
    addDishToCourse (courseName ,dishName , dishPrice){
     const dish = {
         name: dishName,
         price: dishPrice
     }
     this._courses[courseName].push(dish);
    },
    getRandomDishes(courseName){
       const dishes = this._courses[courseName];
       const random = Math.floor(Math.random() * dishes.length);
       return this._courses[courseName][random];
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishes('appetizers');
        const main = this.getRandomDishes('mains');
        const desserts = this.getRandomDishes('desserts');
        const total = (appetizer.price + main.price + desserts.price);
       return `${appetizer.name} ${main.name} ${desserts.name} total of ${total}`
    },
    get appetizer(){

    },
    set appetizer(appertizerIn){
  
    },
     get mains(){
  
    },
    set mains(mainIn){
  
    },
     get desserts(){
  
    },
    set desserts(dessertIn){
  
    }
}
meal.addDishToCourse('appetizers' ,'steamed fish' ,343);
meal.addDishToCourse('mains' ,'Maasdasdasdam' ,234324);
meal.addDishToCourse('desserts' ,'Mago ice cream' ,234234);

meal.addDishToCourse('appetizers' ,'steamed ' ,4545);
meal.addDishToCourse('mains' ,'Maasdasm' ,4545);
meal.addDishToCourse('desserts' ,'Mago ice ' ,345345);

meal.addDishToCourse('appetizers' ,' fish' ,23423);
meal.addDishToCourse('mains' ,'sdf' ,12);
meal.addDishToCourse('desserts' ,'sdf' ,345345);

console.log(meal._courses)
meal.getRandomDishes('mains');
console.log(meal.generateRandomMeal())