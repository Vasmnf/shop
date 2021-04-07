
enum ProductType {
    Milk='milk',
    FruitVegetables='F&V',
    Meat='Meat',
    Etc='etc'
}
//workers sex
enum Sex {
    Male='male',
    Female='female'
}
//workers WorkTurn
enum WorkTurn {
    One='7-16',
    Two='15-23',
    There='23-7'
}
enum Week {
Monday,
Tuesday,
Wednesday,
Thursday,
Friday,
Saturday,
Sunday,
}
enum City {
    Dnipro='Dnipro',
    Lviv='Lviv'
}
//shop WorkHours
enum WorkHours {
    AlTime=24,
    Daily=18
}

export interface Shop {
    readonly id:number;
    readonly city:City;
    readonly address:string;
    workHours:WorkHours;
    cashier: Cashier;
    cashRegister: CashRegister;
    product: Product;
    mover: Mover;
    manager: Manager;
}

export interface Cashier {
    readonly id:number;
    readonly firstName: string;
    readonly sourName: string;
    readonly sex:Sex;
    age: number;
    city:City;
    yearsOfExperience:number;
    worksInShifts:string;
    workTurn:WorkTurn

}

export interface Mover {
    readonly id:number;
    readonly firstName: string;
    readonly sourName: string;
    yearsOfExperience:number;
    readonly sex:Sex;
    age: number;
    city:City;
    worksInShifts:string;
    workTurn:WorkTurn

}

export interface Manager {
    readonly id:number;
    readonly firstName: string;
    readonly sourName: string;
    yearsOfExperience:number;
    readonly sex:Sex;
    age: number;
    city:City;
    worksInShifts:string;
    workTurn:WorkTurn

}

export interface CashRegister {
    readonly id:number;
    cashier: Cashier;
    money: number;
}

export interface Product {
    readonly id:number;
    readonly productType:ProductType;
    readonly name: string;
    price: number;
    quantity: number;
    color?: string;
    weight?: number;
    size?: string;
}
