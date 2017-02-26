namespace TypesEverywhere {

    export class Lorem {
        private bar: string;

        constructor() {
            this.bar = 'Iam in JavaScript land!';
            console.log(this.bar);
            console.log(new Ipsum().message());
            this.changeH1Color();
        }

        private changeH1Color(){
            //$('h1').css('color', 'red');
        }
    }

    // bootstrapping
    var lorem = new TypesEverywhere.Lorem();
}
