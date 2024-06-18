let user = {name: 'prince', age: 24}

console.log('prince');
console.log(user.name);

let greetings: string = 'hello prince';
console.log(greetings)

// number

let userId: number = 1234; // not necessarily to use number and string keyword
console.log(userId)
// function

function getHero(num: number): number{  // good to put keyword
return  num + 2
//return 'hello' this is not allowed
}
getHero(4)

let userName = (name:string, email:string, isPaid:boolean = false) =>{
console.log(name, isPaid,email)
}
userName('prince','nkuruprinces@gmail.com')

// arrow function

const getHeros = (s:string):string => {
  return s
}
getHeros('prince');

//arrays

const heros = ['thor', 'spider', 'hurk']

heros.map((hero):string => {  //good practice
  return `this is ${hero}`
})

// shuld learn how to use never, void,unknown .... in function

//objects

function createUser({}){}

//let newUser = {name:'prince', isPaid:false, email:'nkuruprinces@gmail.com'} 

//createUser(newUser);
createUser({name:'prince', isPaid:false, email:'nkuruprinces@gmail.com'} )

function createCourse():{name:string, price:number}{
  return {name:'biology', price: 300}
}
createCourse()


// arrays

let arr:number[] = [1,2,3]
arr.forEach(n => n.toString)

//tuples

/*In TypeScript, tuples are a special type of array where the type of elements is known and fixed. Each element in a tuple can have a different type, unlike arrays where all elements are typically of the same type. Tuples provide a way to group a fixed number of elements together with specific types.*/

let user2 : [number,string] = [1,'prince'];
console.log(user2);

// enums 
//we use pascal case . every start letter is capital

enum Response {
  No = 0,
  Yes = 1
}

function respond(recipient: string, message: Response): void {
  console.log(`${recipient}: ${message}`);
}

respond("Alice", Response.Yes); // Output: Alice: 1;


// best practice for function: annotate parameter and return value
// go to tsconfiguration file and unlock : 1.noUnusedLocals, 2.noUnusedParameters, 3.noImplicitReturn;


// OBJECTS AGAIN

let employee:{
  readonly id:number,
  name:string,
  retire: (date:Date) => void
} = {
  id: 123,
  name:'prince',
  retire: (date:Date) => {
    return date;
  }
}
console.log(employee)





export{}
