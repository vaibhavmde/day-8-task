/*Question 1
https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
*/
ans/code

class Movie{
 constructor(title,studio,rating="PG"){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
  static getPG(arr){
     var PG=[];
     for(let value of arr){
         if(value.rating=="PG"){
          PG.push(value.title);
         }
     }
     return PG;
    
 }
}

let movie1=new Movie("Casino Royale","Eon Productions","PG13");
let movie2=new Movie("Spider man","Marvel","R");
let movie3=new Movie("Pushpa","Surya","R");
let movie4=new Movie("Bunty or bubly","Yash Raj");
let movie5=new Movie("Iron Man","Marvel");
console.log(Movie.getPG([movie1,movie2,movie3,movie4,movie5]));

//output 
[ 'Bunty or bubly', 'Iron Man' ]

/*Question 2
https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
*/

ans/code

class Circle{
  getRadius(radius){this.radius=radius.toFixed(2);}
  setRadius(){console.log(this.radius);}
   getColor(color){this.color=String(color);}
   serColor(){console.log(this.color);}
   toString(){console.log(`Circle[radius=${this.radius},color=${this.color}]`);}
   getArea(){console.log((22/7)*(this.radius**2));}
   getCircumference(){console.log(2*(22/7)*(this.radius));}
}

let c=new Circle();
c.getRadius(5);
c.getColor("red");
c.setRadius();
c.serColor();
c.toString();
c.getArea();
c.getCircumference();

//output
 5.00
red
Circle[radius=5.00,color=red]
78.57142857142857
31.428571428571427

/*Question 3
Write a “person” class to hold all the details.
*/

ans/code

class Person {
  static CompanyName = "Amazon"; //static member
  constructor(name, age, address) {
    //set the values for 3 properties
    this.name = name;
    this.age = age;
    this.address = address;
  }
  //instance method
  getData() {
    let personData = `
      Name: ${this.name}
      Age: ${this.age}
      Address: ${this.address} 
    
      `;
    console.log(personData);
  }
  //static method
  static getCompanyName() {
    console.log(Person.CompanyName);
  }
}

class Employee extends Person {
  static companynew = "Google";
  constructor(name, age, address,EmployeeID, Designation, salary) {
    super(name, age, address);
    this.EmployeeID= EmployeeID;
    this.Designation = Designation;
    this.salary = salary;
  }
  //Instance Method
  getData() {
    let employeeData = `
        Name: ${this.name}
        Age: ${this.age}
        Address: ${this.address}
        EmployeeID: ${this.EmployeeID} 
        Designation: ${this.Designation}
        Salary: ${this.salary}
        `;
    console.log(employeeData);
  }

  //Static Method
  static getCompanyName() {
    console.log(Employee.companynew);
  }
}

//create an object for employee
let employee1 = new Employee(
  "Jack",
  56,
  "Bangalore",
  "45678",
  "Mern Developer",
  "10000$"
);


let person1 = new Person("John", "45", "Mumbai");
person1.getData(); //obj ref
Person.getCompanyName(); //class
employee1.getData(); //obj ref
Employee.getCompanyName(); //class

//output 
 Name: John
      Age: 45
      Address: Mumbai 
    
      
Amazon

        Name: Jack
        Age: 56
        Address: Bangalore
        EmployeeID: 45678 
        Designation: Mern Developer
        Salary: 10000$
        
Google

/*Question 4
write a class to calculate uber price.
*/

ans/code

class Uber{
 getvalue(start,stop,distance,cartype="mini"){
     this.start= start;
     this.stop= stop;
     this.distance=distance;
     this.cartype=cartype;
 }
 price(){
     let bookingFee=40,fare,CPK=10;
       bookingFee = this.cartype==="mini"?bookingFee-10:bookingFee;
       fare=bookingFee+this.distance*CPK;
       console.log(`
       Pickup point:${this.start}
       Destination:${this.stop}
       Distance:${this.distance}
       Cartype:${this.cartype}
       Fare:${fare}`);
 }
}
 let ride=new Uber();
  ride.getvalue("Nashik","Pune",187,"mini");
  ride.price();
 let ride2=new Uber();
  ride2.getvalue("Mumbai","Nashik",166);
  ride2.price();

//output
       Destination:Pune
       Distance:187
       Cartype:mini
       Fare:1900

       Pickup point:Mumbai
       Destination:Nashik
       Distance:166
       Cartype:mini
       Fare:1690








