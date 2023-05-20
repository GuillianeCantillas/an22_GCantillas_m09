const trainer = {
  name: "Ash",
  age: 16,
  pokemon: [],
  friends: {
    close: ["Brock", "Misty"],
    acquaintances: ["Gary", "Serena"]
  },
  talk() {
    console.log("Pikachu! I choose you!");
  }
};

console.log(trainer.name);
console.log(trainer["age"]);
console.log(trainer.friends.close);

trainer.talk();

function Pokemon(name, level) {
  this.name = name;
  this.level = level;
  this.health = 10 * level;
  this.attack = 5 * level;
}

const pikachu = new Pokemon("Pikachu", 10);
const charmander = new Pokemon("Charmander", 5);
const squirtle = new Pokemon("Squirtle", 8);

Pokemon.prototype.tackle = function(target) {
  target.health -= this.attack;


  if (target.health <= 0) {
    this.faint(target);
  }
};


Pokemon.prototype.faint = function(pokemon) {
  console.log(pokemon.name + " has fainted.");
};


pikachu.tackle(charmander);

console.log(charmander.health);
