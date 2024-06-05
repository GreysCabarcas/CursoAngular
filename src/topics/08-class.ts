export class Person{
    // public name: string;
    // public address: string;

    constructor(
        public name: string,
        private address: string = 'No Address'
    ){}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public relName: string,
//     ){
//         super( alterEgo, 'Turbaco');
//     }
// }

export class Hero{
    public person: Person;
    
    constructor(
        public alterEgo: string,
        public age: number,
        public relName: string,
    ){
       this.person = new Person(relName)
    }
}

const ironman = new Hero('la Greys',45, 'Greys');

console.log (ironman) 