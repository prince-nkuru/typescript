"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = 'hello prince';
// number
var userId = 1234; // not necessarily to use number and string keyword
// function
function getHero(num) {
    return num + 2;
    //return 'hello' this is not allowed
}
//getHero('hello') is not allowed
var userName = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
userName('prince', 'nkuruprinces@gmail.com');
// arrow function
var getHeros = function (s) {
    return '';
};
//arrays
var heros = ['thor', 'spider', 'hurk'];
heros.map(function (hero) {
    return "this is ".concat(hero);
});
// shuld learn how to use never, void,unknown .... in function
//objects
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'prince', isPaid: false });
function createCourse() {
    return { name: 'biology', price: 300 };
}
