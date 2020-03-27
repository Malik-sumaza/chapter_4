// class Animal {
//   constructor(type, name, hairColor, voice) {
//     this.type = type;
//     this.name = name;
//     this.hairColor = hairColor;
//     this.voice = voice;
//   }

//   castVoice() {
//     console.log(`${this.name} says ${this.voice}`);
//   }
// }
// // const dog1 = new Animal("dog", "Jack", "black", "gav");
// // const dog2 = new Animal("dog", "Ditch", "brown", "gov");
// // const cat1 = new Animal("cat", "Barsik", "red", "meow");
// // console.log(dog1);

// // dog1.castVoice();
// // dog2.castVoice();
// // cat1.castVoice();
// class Human extends Animal {
//   constructor(name, hairColor, voice, power, intelligence) {
//     super("human", name, hairColor, voice);

//     this.power = power; // 0-100
//     this.intelligence = intelligence; //0-100
//   }
//   static exampleOfObject() {
//     return new this("NameOfHuman", "brown", "talk", 100, 100);
//   }
//   static className = "SomeValue";

//   learnJavascript() {
//     const intelligence = this.intelligence / 10;
//     let studyHours = 0;
//     for (let i = 1; i <= 1000; i = i + intelligence) {
//       studyHours++;
//     }
//     super.castVoice();
//     console.log(`I learned a js in ${studyHours} hours`);
//   }
// }

// const human1 = new Human("Jack", "brown", "talk", 80, 75);
// human1.learnJavascript();

// Приватные свойства

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
    this.widthInCentimeters = width * 100;
    this.heightInCentimeters = height * 100;
  }
  set width(value) {
    this._width = value;
    this.widthInCentimeters = value * 100;
  }
  set height(value) {
    this._height = value;
    this.heightInCentimeters = value * 100;
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.width * this.height;
  }
}

const square = new Rectangle(10, 10);

// console.log(square);

// console.log(square.area);

square.width = 15;
square.height = 15;
console.log(square);
