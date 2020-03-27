// №1

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     console.log(this.rate * this.days);
//   }
// }
// const workeR = new Worker("Иван", "Иванов", 10, 31);
// console.log(workeR);
// console.log(workeR.name);
// console.log(workeR.surname);
// console.log(workeR.rate);
// console.log(workeR.days);

// workeR.getSalary();

// №2

// class Worker {
//   constructor(name, surname, rate, days) {
//     this._name = name;
//     this._surname = surname;
//     this._rate = rate;
//     this._days = days;
//   }
//   getName() {
//     return this._name;
//   }
//   getSurname() {
//     return this._surname;
//   }
//   getRate() {
//     return this._rate;
//   }
//   getDays() {
//     return this._days;
//   }
//   getSalary() {
//     console.log(this._rate * this._days);
//   }
// }
// const all = new Worker("Иван", "Иванов", 10, 31);

// console.log(all.getName());
// console.log(all.getSurname());
// console.log(all.getRate());
// console.log(all.getDays());
// all.getSalary();

class Worker {
  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }
  getName() {
    return this._name;
  }
  getSurname() {
    return this._surname;
  }
  getRate() {
    return this._rate;
  }
  getDays() {
    return this._days;
  }
  getSalary() {
    console.log(this._rate * this._days);
  }
  setRate(q) {
    return (this._rate = q);
  }
  setDays(w) {
    return (this._days = w);
  }
}
const all = new Worker("Иван", "Иванов", 10, 31);

console.log(all.getName());
console.log(all.getSurname());
console.log(all.getRate());
console.log(all.getDays());
all.getSalary();
all.setRate(20);
all.setDays(10);
all.getSalary();
