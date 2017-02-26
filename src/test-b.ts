namespace TypesEverywhere {

    export class Lorem {
        private bar: string;

        constructor() {
            this.bar = 'Iam in JavaScript land!';
            console.log(this.bar);
            console.log(new Ipsum().message());
        }
    }

    // bootstrapping
    var lorem = new TypesEverywhere.Lorem();
}
