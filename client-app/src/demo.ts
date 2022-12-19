let data: number = 42;

let data2: any = 42;
data2 = '42';

let data3: number | string = 42;
data3 = "42";

export interface Duck {
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void;
}

const duck1: Duck = {
    name: "huey",
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2: Duck = {
    name: "dewey",
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

duck1.makeSound("quack");
duck2.makeSound!('quack');

export const ducks = [duck1, duck2];