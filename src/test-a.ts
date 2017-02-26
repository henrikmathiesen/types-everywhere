namespace TypesEverywhere { 
    
    export interface IIpsum {
        message(): string;
    }

    export class Ipsum implements IIpsum {
        public message(): string {
            return "Well hello there";
        }
    }
}
