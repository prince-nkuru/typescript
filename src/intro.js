"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: 'prince', age: 24 };
console.log('prince');
console.log(user.name);
var greetings = 'hello prince';
console.log(greetings);
// number//
var userId = 1234; // not necessarily to use number and string keyword
console.log(userId);
// function
function getHero(num) {
    return num + 2;
    //return 'hello' this is not allowed.
}
getHero(4);
var userName = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(name, isPaid, email);
};
userName('prince', 'nkuruprinces@gmail.com');
// arrow function
var getHeros = function (s) {
    return s;
};
getHeros('prince');
//arrays
var heros = ['thor', 'spider', 'hurk'];
heros.map(function (hero) {
    return "this is ".concat(hero);
});
// shuld learn how to use never, void,unknown .... in function
//objects
function createUser(_a) { }
//let newUser = {name:'prince', isPaid:false, email:'nkuruprinces@gmail.com'} 
//createUser(newUser);
createUser({ name: 'prince', isPaid: false, email: 'nkuruprinces@gmail.com' });
function createCourse() {
    return { name: 'biology', price: 300 };
}
createCourse();
// arrays
var arr = [1, 2, 3];
arr.forEach(function (n) { return n.toString; });
/* let arr: number[][] = [
[1,2,3,4],
[5,6,7,8]
]
*/
//tuples
/*In TypeScript, tuples are a special type of array where the type of elements is known and fixed. Each element in a tuple can have a different type, unlike arrays where all elements are typically of the same type. Tuples provide a way to group a fixed number of elements together with specific types.*/
// in tuples, u can use push, pop method.... and it work regardles of what u have set//
var user2 = [1, 'prince'];
console.log(user2);
user2.push('2'); // this is possible
function respond(recipient, message) {
    console.log("".concat(recipient, ": ").concat(message));
}
respond("Alice", 1 /* Response.Yes */); // Output: Alice: 1;
var employee = {
    id: 123,
    name: 'prince',
    retire: function (date) {
        return date;
    }
};
console.log(employee);
//UNION. WE USE TO GIVE DIFFERENT TYPE OF PARAMETER
function kgToLbs(weigth) {
    // narrowing bcz we don not kwow value of weigth
    if (typeof weigth === 'number') {
        return weigth * 2.2;
    }
    else {
        return parseInt(weigth) * 2.2;
    }
}
console.log(kgToLbs(100));
var prince = {
    name: "prince",
    id: 123
};
console.log(prince.name);
//if you want to return arr with combination of number and string you can use this
var arr4 = [1, 2, 3, '4'];
arr4[2];
var textBox = {
    Drag: function () { },
    size: function () { }
};
textBox.Drag;
var quantity = 100;
console.log(quantity);
// NULLABLE TYPE
function greet(name) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log('Hola');
}
greet(null); // ALL IS POSSIBLE 
greet(undefined);
function getCUstomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCUstomer(2);
// optional property access  operator
// optional chaining is used here by the use of ?. it only work if customer is neither null nor undefined
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
var princes /*user*/ = {
    dbID: 22,
    email: 'nkuruprinces@gamil.com',
    userId: 12,
    // you can fill googleId or not because of optional chaining
    startTrial: function () {
        return 'started';
    },
    githubToken: 'github',
    role: 'learner'
};
console.log(princes);
var instagram = /** @class */ (function () {
    function instagram(burst, cameraMode, filter) {
        this.burst = 1;
        this.cameraMode = 'hey';
        this.filter = 'string';
        burst = 1,
            cameraMode = 'pixel',
            filter = 'black';
    }
    return instagram;
}());
var app = new instagram(1, 'str', 'str');
console.log(app);
function getArea(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    return Math.PI * Math.pow(shape.sideLength, 2);
}
getArea({ kind: 'circle', radius: 4 });
// using switch
// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
// (parameter) shape: Circle
//     case "square":
//       return shape.sideLength ** 2;
// (parameter) shape: Square
//   }
// }
/*****************************************************************************/
// CLASSES//
/*****************************************************************************/
var userx = /** @class */ (function () {
    function userx(email, name) {
        this._courseCount = 1;
        this.city = 'kigali'; // this is possible
        this.email = email,
            this.name = name;
    }
    Object.defineProperty(userx.prototype, "getApple", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userx.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error('courseNum should more than 1');
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return userx;
}());
var nkuru = new userx('nkuru@gmail.com', 'prince');
console.log(nkuru);
nkuru.city = 'kigali'; // this is possible
//protected keypword means that property must be accessed in that class and any other class that inherit that class. it is different to private where you can access only on that class
/***************************************************************************************************/
// GENERICS
/***************************************************************************************************/
var score = [];
var names = [];
console.log(score);
console.log(names);
function func(arg) {
    return arg;
}
func;
function make(val) {
    return val;
}
make({ brand: 'nile', type: 234 });
