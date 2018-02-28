export class InputField{
    name:string;
    inputType:string;
    inputValues:any;
    htmlAttributes:Array<string>;
    hint:string;

    constructor(name,inputType,inputValues,htmlAttrs,hint){
        this.name=name;
        this.inputType=inputType;
        this.inputValues=inputValues;
        this.htmlAttributes=htmlAttrs;
        this.hint=hint;
    }
}