export class Person {
    constructor(public name: string, public number: number) {

    }
    public getName(): string {
        return this.name;
    }
}