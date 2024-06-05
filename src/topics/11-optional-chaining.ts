export interface Passenger {
    name:string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Greys"
}

const passenger2: Passenger = {
    name: "Carmen",
    children: ['jorge', 'kelsy'],

}

const returChildrenNumber = ( passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;

    console.log( passenger.name, howManyChildren)
    return howManyChildren;
}

returChildrenNumber(passenger1);
returChildrenNumber(passenger2);