let id = Symbol("id");
let user = {
        name: "John",
        [id]: 123 // not "id": 123
    };

console.log(user.id); //undefined
console.log(user["id"]); //undefined

user[id] = "Our id value";
console.log( user[id] ); // Our id value

user[id] = "Their id value" // It adds another property
console.log( user[id] ); // Their id value