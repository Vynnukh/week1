let num = Math.round(Math.random() * 100)

if (num % 3 === 0 && num % 5 === 0) {
    console.log(`Fizz Buzz`)
} else if (num % 3 === 0) {
    console.log.apply(`Fizz`)
} else if (num % 5 === 0) {
    console.log("Buzz")
}
else {
    console.log(`${num}`)
}

const pet = {
    name: "Amber",
    Type: "Cat",
    age: 13,
    colour: "Tortoiseshell",
    eating() {
        return(`${this.name} is eating.`)
    },
    drinking() {
        return(`${this.name} is drinking.`)
    }
}

console.log(pet.eating())
console.log(pet.drinking())

let password = Math.round(Math.random() * 99999999)

if(password.length < 8) {
    console.log("Your password is too short")
} else {
    console.log(`Your password is ${password}`)
}

let num1 = Math.round(Math.random() * 100)

if (num1 % 3 === 0 || num1 % 5 === 0) {
    console.log(`${num1} is divisible by 3 or 5`)
} else {
    console.log(`${num1} is not divisible by 3 or 5`)
}