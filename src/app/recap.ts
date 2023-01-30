const username: string = 'mike';

const sum = (a: number, b: number): number => {
  return a + b;
}

console.log(sum(4, 8));

class Person {
  constructor(public age: number, public lastName: string) {}
}

const mike = new Person(24, 'Reyes');

console.log(mike);
