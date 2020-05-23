// arguments object is no longer bound with arrow functions
// no longer access to arrow functions with => functions 
const add = (a,b) => {
    //console.log(arguments)
    return a+b;
}

console.log(55,1);


// this keyword is longer bound
const user = {
    name: 'Shrobon',
    cities: ['New York', 'Toronto', 'Dublin'],
    printPlacesLived() {

        console.log(this.cities.map((city)=> city.toUpperCase()));
        
        this.cities.forEach((city) => {
            // 'this' wont work inside an anonymous function
            //const that = this;
            console.log(this.name + ' has lived in ' + city);
        })
    }
};

user.printPlacesLived();