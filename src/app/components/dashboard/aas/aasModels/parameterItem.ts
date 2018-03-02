export class ParameterItem{
    parameterName:string;
    required:boolean;
    hint:string;

    parameterItem(pname,required,hint){
        this.parameterName=pname;
        this.required=required;
        this.hint=hint;
    }
}