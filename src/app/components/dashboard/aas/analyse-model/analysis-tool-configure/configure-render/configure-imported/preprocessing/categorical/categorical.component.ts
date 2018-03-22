import { Input, Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CategoricalConfigurer } from './configItems';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-categorical',
  templateUrl: './categorical.component.html',
  styleUrls: ['./categorical.component.css'],
  providers: [CategoricalConfigurer]
})
export class CategoricalComponent implements OnInit {
  @Input() attributesList;
  @Input() formConfig: FormGroup;

  private categoricalAttributes = [];
  private configItem = [];
  private formGroupList = [];
  private catctrl: FormGroup;
  private catctrlarr: FormArray;
  constructor(
    private catconfig: CategoricalConfigurer
  ) { }

  ngOnInit() {
    ////console.log("The attribute list is ");
    ////console.log(this.attributesList)
    //Firstly add a categorical form group to the parent form group
    this.catctrl = new FormGroup({});

    //Separate categorical items
    this.separateCategoricalItems();
    //console.log("Loggin categorical attributes")
    //console.log(this.categoricalAttributes)

    //Bind each attribute to their options
    this.configItem = this.catconfig.bindOptions(this.categoricalAttributes);

    //add form groups for each of the attribute
    this.configItem.forEach(item => {
      let newfg = new FormGroup({
        chosenValue: new FormControl('', Validators.required),
        params: new FormGroup({})
      });
      this.formGroupList.push(newfg);
      this.catctrl.addControl(item.iname, newfg);
    })
    //console.log("logging form group list")
    //console.log(this.formGroupList)
    // let catctrl=new FormControl('',Validators.required)
    // this.catctrlarr=new FormArray([]);
    // this.formConfig.addControl('categorical',catctrl);
    ////console.log(catctrl.status);

    //Finally add the form group to the parent form group
    this.formConfig.addControl('categorical', this.catctrl)
    //console.log(this.formConfig)
  }

  private separateCategoricalItems() {
    this.attributesList.forEach(item => {
      if (Object.values(item)[0] == "String"||Object.values(item)[0] == "string")

        this.categoricalAttributes.push(
          {
            "name": Object.keys(item)[0],
            "type": Object.values(item)[0]
          }
        );
    }
    );
  }
}


