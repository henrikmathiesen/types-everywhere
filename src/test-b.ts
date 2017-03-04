namespace TypesEverywhere {

    export class Lorem {
        private bar: string;

        constructor() {
            this.bar = 'Iam in JavaScript land!';
            console.log(this.bar);

            var ipsum: Ipsum = new Ipsum();
            console.log(ipsum.message());

            this.changeH1Color();
        }

        private changeH1Color() {
            $('h1').css('color', 'red');
        }

        private testingTypes(state: angular.ui.IStateService) {
            state.go('all.over.the.place');
        }
    }

    //
    // bootstrapping

    //declare var $:any; // This is one way of making TypeScript ignore type checking jQuery, but it's better to use typings for 3party libraries
    var lorem = new Lorem();
}
