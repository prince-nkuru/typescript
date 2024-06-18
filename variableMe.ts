let greetings: string = 'hello prince'

// number

let userId: number = 1234; // not necessarily to use number and string keyword

// function

function getHero(num: number): number{  // good to put keyword
return  num + 2
//return 'hello' this is not allowed
}
//getHero('hello') is not allowed

let userName = (name:string, email:string, isPaid:boolean = false) =>{

}
userName('prince','nkuruprinces@gmail.com')

// arrow function

const getHeros = (s:string):string => {
  return ''
}

//arrays

const heros = ['thor', 'spider', 'hurk']

heros.map((hero):string => {  //good practice
  return `this is ${hero}`
})

// shuld learn how to use never, void,unknown .... in function

//objects

function createUser({name:string, isPaid:boolean}){}

createUser({name:'prince', isPaid:false});

function createCourse():{name:string, price:number}{
  return {name:'biology', price: 300}
}





export{}
