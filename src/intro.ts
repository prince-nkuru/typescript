let user = {name: 'prince', age: 24};

console.log('prince');
console.log(user.name);                

let greetings: string = 'hello prince';
console.log(greetings);

// number//

let userId: number = 1234; // not necessarily to use number and string keyword
console.log(userId)
// function

function getHero(num: number): number{  // good to put keyword
return  num + 2;
//return 'hello' this is not allowed.
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

/* let arr: number[][] = [
[1,2,3,4],
[5,6,7,8]
]
*/

//tuples

/*In TypeScript, tuples are a special type of array where the type of elements is known and fixed. Each element in a tuple can have a different type, unlike arrays where all elements are typically of the same type. Tuples provide a way to group a fixed number of elements together with specific types.*/


// in tuples, u can use push, pop method.... and it work regardles of what u have set//

let user2 : [number,string] = [1,'prince'];
console.log(user2);

user2.push('2') // this is possible

// enums 
//we use pascal case . every start letter is capital

// default value for first element is 0, then 1 then 2 ...  if you change to 10, second is incremented by 1

const enum Response {             // best practice to use const for getting fewer javascript code
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
/*
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

*/




// ADVANCED TYPESCRIPT

// YOU WILL LEARN :
//TYPE ALIASES
//UNION AND INTERSECTIONS
//TYPE NARROWING
//NULLABLE TYPE
//UNKNOWN TYPE
//NEVER TYPE

// ALIASES. we used to avoid re-using code.

type Employee = {
  readonly id:number,
  name:string,
  retire: (date:Date) => void
}

let employee: Employee = {
  id: 123,
  name:'prince',
  retire: (date:Date) => {
    return date;
  }
}
console.log(employee);

 //UNION. WE USE TO GIVE DIFFERENT TYPE OF PARAMETER

 function kgToLbs(weigth:number|string):number{
  // narrowing bcz we don not kwow value of weigth
  if (typeof weigth === 'number'){
    return weigth * 2.2;
  }else {
    return parseInt(weigth) * 2.2
  }
 }
 console.log(kgToLbs(100));
//************************************************************************ */
 type User = {
  name:string,
  id : number
 }

 type Admin = {
  userName: string,
  id: number
 }

 let prince : User | Admin = {
  name :"prince",
  id: 123
 }
 console.log(prince.name)

 //if you want to return arr with combination of number and string you can use this

 let arr4 :(string | number)[] = [1,2,3,'4']
 arr4[2];

 //************************************************************************ */


 // INTERSECTION . WE USE IT TO COMBINE 

  type Draggable = {
     Drag : () => void
  }

  type Resizable = {
    size : () => void
  }

  type UIwidget = Draggable & Resizable;

  let textBox : UIwidget = {
    Drag : () => {},
    size : () => {}
  }
  textBox.Drag;


  // LITERAL TYPE. CAN BE ANY VALUE 
// EXAMPLES
 type Quantity = 50 |100;

 let quantity : Quantity = 100;
 console.log (quantity);

 // NULLABLE TYPE


 function greet(name:string | null|undefined){
  if (name)
    console.log(name.toUpperCase)
  else
  console.log('Hola')
 }

 greet(null)          // ALL IS POSSIBLE 
 greet(undefined)



   //OPTIONAL CHAINING
    type Customer = {
      birthday? : Date
    }

    function getCUstomer(id :number):Customer | null | undefined {
      return id === 0? null : {birthday : new Date()}
    }

    let customer = getCUstomer(2);
    // optional property access  operator

    // optional chaining is used here by the use of ?. it only work if customer is neither null nor undefined
    console.log(customer?.birthday)
    console.log(customer?.birthday?.getFullYear);


    /*****************************************************************************/
                          // INTERFACE//
    /*****************************************************************************/
   
    interface user{
      readonly dbID: number,  // you can not change the value if it readonly
      email: string,
      userId:number,
      googleId?: number,
      startTrial():string
    }

    interface user{             //this is possible with interface not for type.
      githubToken:string
    }

    interface admin extends user {       // this also is possible
      role: 'admin'|'learner'
    }

    const princes: admin/*user*/ = {
      dbID : 22,
      email : 'nkuruprinces@gamil.com',
      userId: 12,
      // you can fill googleId or not because of optional chaining
      startTrial:()=>{
        return'started'
      },
      githubToken: 'github',
      role: 'learner'
    }
    console.log(princes)

 /*****************************************************************************/
                          // CLASSES//
    /*****************************************************************************/

    class userx {
            email:string
            name:string
            constructor(email:string, name:string){
               this.email = email,
               this.name = name
            }
    }

    const nkuru = new userx('nkuru@gmail.com', 'prince');
    console.log(nkuru);

export{}
