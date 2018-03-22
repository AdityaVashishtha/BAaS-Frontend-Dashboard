import { Input, Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { NumericalConfigurer } from './configItems';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-nominal',
  templateUrl: './nominal.component.html',
  styleUrls: ['./nominal.component.css'],
  providers:[NumericalConfigurer]
})
export class NominalComponent implements OnInit {
  @Input() attributesList;
  @Input() formConfig: FormGroup;

  private numericalAttributes = [];
  private configItem = [];
  private formGroupList = [];
  private numctrl: FormGroup;

  constructor(
    private numconfig: NumericalConfigurer
  ) { }

  ngOnInit() {
    //////console.log("The attribute list is ");
    //////console.log(this.attributesList)

    /**
     *Firstly add numerical form group to the parent form group
     * 
     */
    this.numctrl = new FormGroup({});
    /**
     *Separate numerical items
     */
    this.separateNumericalItems();
    ////console.log("Logging numerical attributes")
    ////console.log(this.numericalAttributes)

    //Bind each attribute to their options
    this.configItem = this.numconfig.bindOptions(this.numericalAttributes);

    //add form groups for each of the attribute

    this.configItem.forEach(item => {
      let newfg = new FormGroup({
        chosenValue: new FormControl('', Validators.required),
        params: new FormGroup({})
      });
      this.formGroupList.push(newfg);
      this.numctrl.addControl(item.iname, newfg);
    })
    ////console.log("logging form group list")
    ////console.log(this.formGroupList)
    // let catctrl=new FormControl('',Validators.required)
    // this.catctrlarr=new FormArray([]);
    // this.formConfig.addControl('categorical',catctrl);
    //////console.log(catctrl.status);

    //Finally add the form group to the parent form group
    this.formConfig.addControl('numerical', this.numctrl)
    ////console.log(this.formConfig)
  }

  private separateNumericalItems() {
    this.attributesList.forEach(item => {
      if (Object.values(item)[0] == "Number"||Object.values(item)[0] == "number")

        this.numericalAttributes.push(
          {
            "name": Object.keys(item)[0],
            "type": Object.values(item)[0]
          }
        );
    }
    );
  }
}

