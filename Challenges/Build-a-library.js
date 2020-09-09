class Media {
    constructor(title){
        this._title = title;
        this._isCheckOut = true;
        this._ratings = [];
    }
    addRatings(num){
  // push the new ratings to out ratings
     num.forEach(v => this.ratings.push(v));
    } 
    get title(){
        return this._title;
    }
    get isCheckOut(){
        return this._isCheckOut;
    }
    get ratings(){
        return this._ratings;
    }
       //Compute the average of ratings
       getAverageRating(){
        return this.ratings.reduce((a , b) => a + b);
       }
       // toggling the checkout if its returned already
       toggleCheckOutStatus(){
         return this._isCheckOut == false ? true : false;
       }
}

// Subclasses
class Cd extends Media {
    constructor(title , artists){
        super(title);
        this._songs = []
        this._artists = artists
    }
    get songs(){
        return this._songs
    }
    get artists(){
        return this._artists
    }
    addSongs(song){
      this._songs.push(song);
    } 
}
class Movie extends Media {
    constructor(director ,title ,runtime){
        super(title);
        this._director = director
        this._runtime = runtime
    }
    get director() {
    return this.director
    }
    get runtime() {
        return this.runtime
    }
}
class Book extends Media {
    constructor(title , author , pages){
        super(title);
        this._author = author
        this._pages = pages
    }
    get author(){
         return this._author
    }
    get pages(){
        return this._pages
   }
}


// Instances
const test1 = new Cd('din','penagunda');
test1.addSongs('asd');

