import { Validators } from '@angular/forms';
import {OnlyNumber} from '../../customValidators/onlyNumberValidator.directive'

export class ClassificationAlgoOptions {
    static mlTaskOptions = [
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
    
    static classificationAlgoConfigurations={
        iname:'Select type of  Algorithm',
        itype:'select',
        placeholder:'Select Algorithm',
        ioptions:[
            {
                name:'Decision Tree',
                hasParams:true,
                params:[
                    {
                        label:"Criterion",
                        type:"select",
                        name:"criterion",
                        validators:Validators.required,
                        hasDefaultOption:true,
                        options:[
                            {
                                name:'gini',
                                hasParams:false
                            },
                            {
                                name:'entropy',
                                hasParams:false
                            }
                        ],

                        hasParams:false
                    },
                    {
                        label:"Splitter",
                        type:"select",
                        name:"splitter",
                        validators:Validators.required,
                        hasDefaultOption:true,
                        options:[
                            {
                                name:'best',
                                hasParams:false
                            },
                            {
                                name:'random',
                                hasParams:false
                            }
                        ],

                        hasParams:false
                    },
                    {
                        label:"Max Depth(Optional)",
                        type:"input",
                        name:"max_depth",
                        validators:[OnlyNumber.validateNumber],
                        
                        hasParams:false,
                    },
                    {
                        label:"Minimum Sample Split",
                        type:"input",
                        name:"min_samples_split",
                        validators:[Validators.min(0),Validators.required,OnlyNumber.validateNumber],
                        defaultValue:"2",
                        hasParams:false,
                    },
                    {
                        label:"Minimum Samples Leaf",
                        type:"input",
                        name:"max_samples_leaf",
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        defaultValue:"1",
                        hasParams:false,
                    },
                    {
                        label:"Minimum Weight Fraction Leaf",
                        type:"input",
                        name:"min_weight_fraction_leaf",
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        defaultValue:"0",
                        hasParams:false,
                    },
                    {
                        label:"Number of features considered for best split(Optional)",
                        type:"input",
                        name:"max_features",
                        validators:[OnlyNumber.validateNumber],
                        hasParams:false,
                       
                    },
                    {
                        label:"Random State (Optional)",
                        type:"input",
                        name:"random_state",
                        validators:[OnlyNumber.validateNumber],
                        hasParams:false,
                    },
                    {
                        label:"Max Leaf Nodes(Optional)",
                        type:"input",
                        name:"max_leaf_nodes",
                        validators:[OnlyNumber.validateNumber],
                        hasParams:false,
                    },
                    {
                        label:"Class Weight",
                        type:"select",
                        name:"class_weight",
                        validators:Validators.required,
                        hasDefaultOption:true,
                        options:[
                            {
                                name:'None',
                                hasParams:false
                            },
                            {
                                name:'Balanced',
                                hasParams:false
                            }
                        ],

                        hasParams:false
                    },
                    {
                        label:"Pre Sort",
                        type:"select",
                        name:"presort",
                        validators:Validators.required,
                        hasDefaultOption:true,
                        options:[
                            {
                                name:'False',
                                hasParams:false
                            },
                            {
                                name:'True',
                                hasParams:false
                            }
                        ],

                        hasParams:false
                    },
                     
                ]

            },
            //DECISION TREE ENDS
            //KNN STARTS
            {
                name:'K Neighbors Classifier',
                hasParams:true,
                params:[
                    {
                        label:"Number of neighbors",
                        type:"input",
                        name:"n_neighbors",
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        defaultValue:"5",
                        hasParams:false,
                    },
                    {
                        label:"Weights",
                        type:"select",
                        name:"weights",
                        validators:Validators.required,
                        hasDefaultOption:true,
                        options:[
                            {
                                name:'uniform',
                                hasParams:false
                            },
                            {
                                name:'distance',
                                hasParams:false
                            }
                        ],

                        hasParams:false
                    },
                    {
                        label:"Algorithm",
                        type:"select",
                        name:"algorithm",
                        validators:Validators.required,
                        hasDefaultOption:true,
                        options:[
                            {
                                name:'auto',
                                hasParams:false
                            },
                            {
                                name:'ball_tree',
                                hasParams:false
                            },
                            {
                                name:'kd_tree',
                                hasParams:false
                            },
                            {
                                name:'brute',
                                hasParams:false
                            },
                        
                        ],

                        hasParams:false
                    },
                    {
                        label:"Leaf Size",
                        type:"input",
                        name:"leaf_size",
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        defaultValue:"30",
                        hasParams:false,
                    },
                    {
                        label:"Metric",
                        type:"select",
                        name:"metric",
                        validators:Validators.required,
                        hasDefaultOption:true,
                        options:[
                            {
                                name:'minkowski',
                                hasParams:false
                            },
                            {
                                name:'euclidean',
                                hasParams:false
                            },
                            {
                                name:'manhattan',
                                hasParams:false
                            },
                           
                        
                        ],

                        hasParams:false
                    },
                    {
                        label:"Number of jobs",
                        type:"input",
                        name:"n_jobs",
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        defaultValue:"1",
                        hasParams:false,
                    },
                ]
            },
            //KNN ENDS
            //Gaussian NB STARTS
            {
                name:'Gaussian Naive Bayes Classifier',
                hasParams:false,
             
            }
            //Gaussian NB ENDS
        ]
    }
    static evaluationOptions = 
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
                        hasParams:false
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