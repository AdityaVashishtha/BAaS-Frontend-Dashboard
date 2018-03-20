import {Validators} from '@angular/forms';

export class CategoricalConfigurer{
  categoricalAttributeOptions=[
       {
           'name':'Drop Row',
           'hasParams':false,

       },
       {
           'name':'Use Default',
           'hasParams':true,
           'params':[
               {
                   "label":"Replace with default value of",
                   "type":"input",
                   "validators":[Validators.required],
                   "name":"default_value",
                   "hasParams":false
               }
           ]

           
       }
   ];
   public bindOptions(itemList){
   // console.log("Inside the list");

    let retVal= itemList.map(item=>{return{
           iname:item.name,
           itype:'select',
           ioptions:this.categoricalAttributeOptions,
           placeholder:'Select Option'
       }});
    //console.log(retVal);
    return retVal;
   }
}