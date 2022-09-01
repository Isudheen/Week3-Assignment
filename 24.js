const readline = require('readline-sync');

class Area {
  circle(radius) {
    console.log('Enter radius');
    radius = Number(readline.question());
    const area = Math.PI * radius ** 2;
    return area;
  }
  square(sideLength) {
    console.log('Enter side length');
    sideLength = Number(readline.question());
    const area = sideLength * sideLength;
    return area;
  }
  rectangle(length, breadth) {
    console.log('Enter length and breadth');
    length = Number(readline.question());
    breadth = Number(readline.question());
    const area = length * breadth;
    return area;
  }
  triangle(base, height) {
    console.log('Enter base length and height');
    base = Number(readline.question());
    height = Number(readline.question());
    const area = 0.5 * base * height;
    return area;
  }
}

class MyClass extends Area {
  main() {
    const calcArea = new Area();
    console.log('Enter the length or radius: ');

    console.log(
      'Enter your choice:\n 1. Circle\n 2. Square\n 3. Rectangle\n 4. Triangle'
    );
    const choice = Number(readline.question());
    switch (choice) {
      case 1:
        console.log(`Area of Circle is: ${calcArea.circle()}`);
        break;
      case 2:
        console.log(`Area of Square is: ${calcArea.square()}`);
        break;
      case 3:
        console.log(`Area of Rectangle is: ${calcArea.rectangle()}`);
        break;
      case 4:
        console.log(`Area of Triangle is: ${calcArea.triangle()}`);
        break;
      default:
        console.log('Invalid Entry, try again');
        break;
    }
  }
}
const myobj = new MyClass();
myobj.main();
