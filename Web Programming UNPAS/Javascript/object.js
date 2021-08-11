// Object Literal
let playerDatabase = {
    name: "Udil",
    gender: "Male",
    role: "Fighter",
    changeRole: function(nameRole) {
        this.role = nameRole;
        return this.role
    }
}

console.log(playerDatabase);
playerDatabase.changeRole("Assasin");
console.log(playerDatabase)










// Function Declaration
function Player(name, gender, role) {
    let player = {};
    player.name = name,
    player.gender = gender,
    player.role = role,
    player.changeRole = function(nameRole) {
        player.role = nameRole;
        return player.role;
    }
    return player;
}

let playerDatabase2 = Player("Joko", "Male", "Fighter");

console.log(playerDatabase2);
playerDatabase2.changeRole("Mage")
console.log(playerDatabase2)









// Constructor Function
function Player2(name, gender, role) {
    this.name = name;
    this.gender = gender;
    this.role = role;
    this.changeRole = function(nameRole) {
        this.role = nameRole;
        return this.role;
    }
}

let playerDatabase3 = new Player2("Arya", "Male", "Tank")
console.log(playerDatabase3);
playerDatabase3.changeRole("Support");
console.log(playerDatabase3);







// Object.create() pada Function Declaration

method = {
    changeRole: function(nameRole) {
        this.role = nameRole;
        return this.role;
    }
}

function Player3(name, gender, role) {
    let player = Object.create(method);
    player.name = name;
    player.gender = gender;
    player.role = role;
    return player;
}

let playerDatabase4 = Player3("Ucok", "Male", "Jungler")
console.log(playerDatabase4)
playerDatabase4.changeRole("Hunter")
console.log(playerDatabase4)






// Object.create() pada Constructor Function

let method2 = {
    changeRole: function(nameRole) {
        this.role = nameRole;
        return this.role;
        }
}

function Player4(name, gender, role) {
    // let this = Object.create(Player4.prototype);
    this.name = name,
    this.gender = gender,
    this.role = role
    // this.changeRole = method2.changeRole
    // return this;
}

Player4.prototype.changeRole = function(nameRole) {
    this.role = nameRole;
    return this.role;
}

let playerDatabase5 = new Player4("Koro", "Male", "Tank")

console.log(playerDatabase5)
playerDatabase5.changeRole("Sniper");
console.log(playerDatabase5)








// Class
class Player5 {
    constructor(name, gender, role) {
        this.name = name;
        this.gender = gender;
        this.role = role;
    }

    changeRole(nameRole) {
        this.role = nameRole;
        return this.role
    }
}

let playerDatabase6 = new Player5("Jawir", "Male", "Healer");

console.log(playerDatabase6);
playerDatabase6.changeRole("Carrier");
console.log(playerDatabase6)