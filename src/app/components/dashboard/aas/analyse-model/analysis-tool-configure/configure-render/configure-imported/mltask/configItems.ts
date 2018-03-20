import { Validators } from '@angular/forms';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import {OnlyNumber} from '../customValidators/onlyNumberValidator.directive'
export class MlTaskConfigurer {
    mlTaskOptions = [
        {
            name: 'task_type',
            type: 'select',
            label:'Select Type',
            Validators:[Validators.required],
            placeholder: 'Select Task',
            options:[
                {
                    name:'Classification',
                    hasParams:false,
                },
                {
                    name:'Regression',
                    hasParams:false,
                }

            ]
        }]
    
    scoringFunctionClassificationOptions = [
        {
            name: 'scoring',
            label:'Select Scoring Function',
            type: 'select',
            Validators:[Validators.required],
            placeholder: 'Select Function',
            options:[
              
                {
                    name:'Accuracy',
                    hasParams:false,
                },
                {
                    name:'Neg Log Loss',
                    hasParams:false,
                },
                {
                    name:'ROC AUC',
                    hasParams:false,
                }

            ]
        }]
    scoringFunctionRegressionOptions = [
        {
            name: 'scoring',
            label:'Select Scoring Function',
            type: 'select',
            Validators:[Validators.required],
            placeholder: 'Select Function',
            options:[
             
                {
                    name:'R2',
                    hasParams:false,
                },

                {
                    name:'Neg Mean Absolute Error',
                    hasParams:false,
                },
                  {
                    name:'Neg Mean Squared Error',
                    hasParams:false,
                },
             

            ]
        }]
    
    evaluationOptions = 
    {
        iname: 'Select Evaluation Function',
        itype: 'select',
        placeholder: 'Select Function',
        ioptions:[
            {
                name:'K-Fold',
                hasParams:true,
                params:[
                    {
                        label:"Number of folds",
                        type:"input",
                        validators:[Validators.required,Validators.min(2),Validators.max(15),OnlyNumber.validateNumber],
                        name:"fold_count",
                        hasParams:false,
                        defaultValue:2
                    }
                ]
            },
            {
                name:'Test and Train',
                hasParams:true,
                params:[
                    {
                        label:"Fraction of testing data",
                        type:"input",
                        validators:[Validators.required,Validators.min(0.1),Validators.max(0.9)],
                        name:"fraction",
                        hasParams:false,
                        placeholder:'Enter a value between 0 and 1',
                        defaultValue:0.7
                    }
                ]
            }

        ]
    }

    
    
    

}