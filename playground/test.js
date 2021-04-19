// JSX javascript XML - its the js syntax extension it not the part of the core js lang install babel bable preset which are env and react app.js in src folder will conatin our JSX
// while app.js in public / scripts folder will contain auto generated file which
// contain babels transformations


const multplier = {
    numbers: [28, 8, 9, 7],
    multpliedBy: 9,
    multplie: function() {
        return this.numbers.map((number) => number * this.multpliedBy)
    }
}

console.log(multplier.multplie())