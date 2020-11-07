class Abdulkareem {
  constructor(age, city, numChildren, job, favFood, hobby) {
    this.age = age;
    this.city = city;
    this.numChildren = numChildren;
    this.job = job;
    this.favFood = favFood;
    this.hobby = hobby;
  }

  get story() {
    return `Abdulkareem is a ${this.age} year old man, that lives in ${this.city}. He has a wife and ${this.numChildren} children.
           As a day job he's a ${this.job}, that makes houses. He likes to eat ${this.favFood} and ${this.hobby}.`;
  }

  set story(newDetail) {
    throw new Error(`No more details allowed. This is the whole story!`);
  }
}

const person = new Abdulkareem(35, 'Riyadh', 3, 'construction worker', 'dates', 'smoke water pipe');
console.log(person);
console.log(person.story);



class Adel {
  constructor(age, color, favFood, job) {
    this.age = age;
    this.color = color;
    this.favFood = favFood;
    this.job = job;
  }

  get story() {
    return `Abdulkareem has a horse, named Adel. The horse is ${this.age} years old and has the color ${this.color}. 
           Usually the horse eats ${this.favFood} or ${this.job} for Abdulkareem.`;
  }

  set story(newDetail) {
    throw new Error(`No more details allowed. This is the whole story!`);
  }
}

const horse = new Adel(15, 'brown', 'grass', 'helps transport materials');
console.log(horse);
horse.story = 'abcd';