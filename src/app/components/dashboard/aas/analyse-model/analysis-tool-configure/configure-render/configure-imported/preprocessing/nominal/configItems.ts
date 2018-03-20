import { Validators } from '@angular/forms';

export class NumericalConfigurer {
    numericalAttributeOptions = [
        {
            'name': 'Drop Row',
            'hasParams': false,

        },
        {
            'name': 'Fill By Values',
            'hasParams': true,
            'params': [
                {
                    "label": "Fill By",
                    "type": "select",
                    "validators": [Validators.required],
                    "options": [
                        {
                            name: "Zero",
                            hasParams: false
                        },
                        {
                            name: "Mean",
                            hasParams: false
                        },
                        {
                            name: "Median",
                            hasParams: false
                        },
                        {
                            name: "Forward",
                            hasParams: false
                        },
                        {
                            name: "Backward",
                            hasParams: false
                        }
                    ],
                    "name": "fill_by",
                    "placeholder":"Select criteria",
                    "hasParams": false
                }
            ]


        }
    ];
    public bindOptions(itemList) {
        // console.log("Inside the list");

        let retVal = itemList.map(item => {
            return {
                iname: item.name,
                itype: 'select',
                ioptions: this.numericalAttributeOptions,
                placeholder: 'Select Option'
            }
        });
        //console.log(retVal);
        return retVal;
    }
}