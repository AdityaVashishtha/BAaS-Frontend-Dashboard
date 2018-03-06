export class InputField{
    name:string;
    inputType:string;
    inputValues:any;
    htmlAttributes:Array<string>;
    inputSource:string;
    expectation:any
    hint:string;

    constructor(name,inputType,inputValues,htmlAttrs,inputSource,e,hint){
        this.name=name;
        this.inputType=inputType;
        this.inputValues=inputValues;
        this.htmlAttributes=htmlAttrs;
        this.inputSource=inputSource;
        this.hint=hint;
        this.expectation=e;
        this.tellAboutSelf();
    }

    tellAboutSelf(){
        console.log("HI,I AM A NEW  INPUT FIELD");
        console.log(`Name : ${this.name}`)
        console.log(`expectation`)
        console.log(this.expectation)
    }
}