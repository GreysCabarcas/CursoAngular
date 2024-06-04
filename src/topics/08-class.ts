export class Person{
    // public name: string;
    // public address: string;

    constructor(public name: string, private address: string = 'No Address'){
        this.name = name;
        this.address = address;
    }
}

const ironman = new Person('Greys', 'Turbaco');

console.log (ironman) 