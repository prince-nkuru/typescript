"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: 'prince', age: 24 };
console.log('prince');
console.log(user.name);
let greetings = 'hello prince';
console.log(greetings);
let userId = 1234;
console.log(userId);
function getHero(num) {
    return num + 2;
}
getHero(4);
let userName = (name, email, isPaid = false) => {
    console.log(name, isPaid, email);
};
userName('prince', 'nkuruprinces@gmail.com');
const getHeros = (s) => {
    return s;
};
getHeros('prince');
const heros = ['thor', 'spider', 'hurk'];
heros.map((hero) => {
    return `this is ${hero}`;
});
function createUser({}) { }
createUser({ name: 'prince', isPaid: false, email: 'nkuruprinces@gmail.com' });
function createCourse() {
    return { name: 'biology', price: 300 };
}
createCourse();
let arr = [1, 2, 3];
arr.forEach(n => n.toString);
let user2 = [1, 'prince'];
console.log(user2);
var Response;
(function (Response) {
    Response[Response["No"] = 0] = "No";
    Response[Response["Yes"] = 1] = "Yes";
})(Response || (Response = {}));
function respond(recipient, message) {
    console.log(`${recipient}: ${message}`);
}
respond("Alice", Response.Yes);
let employee = {
    id: 123,
    name: 'prince',
    retire: (date) => {
        return date;
    }
};
console.log(employee);
function kgToLbs(weigth) {
    if (typeof weigth === 'number') {
        return weigth * 2.2;
    }
    else {
        return parseInt(weigth) * 2.2;
    }
}
console.log(kgToLbs);
let prince = {
    name: "prince",
    id: 123
};
console.log(prince.name);
let arr4 = [1, 2, 3, '4'];
arr4[2];
let textBox = {
    Drag: () => { },
    size: () => { }
};
textBox.Drag;
let quantity = 100;
console.log(quantity);
function greet(name) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log('Hola');
}
greet(null);
greet(undefined);
function getCUstomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCUstomer(2);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
//# sourceMappingURL=intro.js.map