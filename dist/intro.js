"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: 'prince', age: 24 };
console.log('prince');
console.log(user.name);
let greetings = 'hello prince';
let userId = 1234;
function getHero(num) {
    return num + 2;
}
let userName = (name, email, isPaid = false) => {
};
userName('prince', 'nkuruprinces@gmail.com');
const getHeros = (s) => {
    return '';
};
const heros = ['thor', 'spider', 'hurk'];
heros.map((hero) => {
    return `this is ${hero}`;
});
function createUser({}) { }
createUser({ name: 'prince', isPaid: false, email: 'nkuruprinces@gmail.com' });
function createCourse() {
    return { name: 'biology', price: 300 };
}
let arr = [1, 2, 3];
let user2 = [1, 'prince'];
var Response;
(function (Response) {
    Response[Response["No"] = 0] = "No";
    Response[Response["Yes"] = 1] = "Yes";
})(Response || (Response = {}));
function respond(recipient, message) {
    console.log(`${recipient}: ${message}`);
}
respond("Alice", Response.Yes);
//# sourceMappingURL=intro.js.map