namespace TypesEverywhere {

    export interface IFoo {
        bar: string;
    }

    export class Lorem implements IFoo {
        bar: string;

        constructor() {
            this.bar = 'Iam in JavaScript land!';
            console.log(this.bar);
        }
    }

}
