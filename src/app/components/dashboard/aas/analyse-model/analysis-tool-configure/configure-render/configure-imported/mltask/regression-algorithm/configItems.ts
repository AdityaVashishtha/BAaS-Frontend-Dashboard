import { Validators } from '@angular/forms';
import { OnlyNumber } from '../../customValidators/onlyNumberValidator.directive'

export class RegressionAlgoOptions {
    static mlTaskOptions = [
        {
            name: 'task_type',
            type: 'select',
            label: 'Select Type',
            Validators: [Validators.required],
            placeholder: 'Select Task',
            options: [
                {
                    name: 'Classification',
                    hasParams: false,
                },
                {
                    name: 'Regression',
                    hasParams: false,
                }

            ]
        }]

    static regressionAlgoConfigurations = {
        iname: 'Select type of  Algorithm',
        itype: 'select',
        placeholder: 'Select Algorithm',
        ioptions: [
            //Linear Regression STARTS
            {
                name: 'Linear Regression',
                hasParams: true,
                params: [
                    {
                        label: "Fit Intercept",
                        type: "select",
                        name: "fit_intercept",
                        validators: Validators.required,
                        hasDefaultOption: true,
                        options: [
                            {
                                name: 'True',
                                hasParams: false
                            },
                            {
                                name: 'False',
                                hasParams: false
                            }
                        ],

                        hasParams: false
                    },
                    {
                        label: "Normalize",
                        type: "select",
                        name: "normalize",
                        hasDefaultOption: true,
                        validators: Validators.required,
                        options: [
                            {
                                name: 'False',
                                hasParams: false
                            },
                            {
                                name: 'True',
                                hasParams: false
                            }
                        ],

                        hasParams: false
                    },
                    {
                        label: "Copy X",
                        type: "select",
                        name: "copy_x",
                        hasDefaultOption: true,
                        validators: Validators.required,
                        options: [
                            {
                                name: 'True',
                                hasParams: false
                            },
                            {
                                name: 'False',
                                hasParams: false
                            }
                        ],

                        hasParams: false
                    },
                    {
                        label: "Number of jobs for computation",
                        type: "input",
                        name: "n_jobs",
                        defaultValue:1,
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        hasParams: false
                    },
                ]


            },
            //Linear Regression ENDS
            //Logistic Regression STARTS
            {
                name: 'Logistic Regression',
                hasParams: true,
                params: [
                    {
                        label: "Penalty",
                        type: "select",
                        name: "penalty",
                        validators: Validators.required,
                        hasDefaultOption: true,
                        options: [
                            {
                                name: 'l2',
                                hasParams: false
                            },
                            {
                                name: 'l1',
                                hasParams: false
                            }
                        ],

                        hasParams: false
                    },
                    {
                        label: "Dual",
                        type: "select",
                        name: "dual",
                        hasDefaultOption: true,
                        validators: Validators.required,
                        options: [
                            {
                                name: 'False',
                                hasParams: false
                            },
                            {
                                name: 'True',
                                hasParams: false
                            }
                        ],

                        hasParams: false
                    },
                    {
                        label: "Tolerance",
                        type: "input",
                        name: "tol",
                        defaultValue:0.0001,
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                    {
                        label: "C (Inverse of regularization strength)",
                        type: "input",
                        name: "C",
                        defaultValue:"1",
                        validators:[Validators.min(0),Validators.required,OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                    {
                        label: "Fit Intercept",
                        type: "select",
                        name: "fit_intercept",
                        hasDefaultOption: true,
                        validators: Validators.required,
                        options: [
                            {
                                name: 'True',
                                hasParams: false
                            },
                            {
                                name: 'False',
                                hasParams: false
                            }
                        ],

                        hasParams: false
                    },
                    {
                        label: "Intercept Scaling",
                        type: "input",
                        name: "intercept_scaling",
                        defaultValue:1,
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                    {
                        label: "Class Weight",
                        type: "select",
                        name: "class_weight",
                        hasDefaultOption: true,
                        validators: Validators.required,
                        options: [
                            {
                                name: 'None',
                                hasParams: false
                            },
                            {
                                name: 'balanced',
                                hasParams: false
                            }
                        ],

                        hasParams: false
                    },
                    {
                        label:"Random State (Optional)",
                        type:"input",
                        name:"random_state",
                        validators:[OnlyNumber.validateNumber],
                        hasParams:false,
                    },
                    {
                        label: "Solver ",
                        type: "select",
                        name: "solver",
                        hasDefaultOption: true,
                        validators: Validators.required,
                        options: [
                            {
                                name: 'liblinear',
                                hasParams: false
                            },
                            {
                                name: 'newton-cg',
                                hasParams: false
                            },
                            {
                                name: 'lbfgs',
                                hasParams: false
                            },
                            {
                                name: 'sag',
                                hasParams: false
                            },
                            {
                                name: 'saga',
                                hasParams: false
                            }

                        ],

                        hasParams: false
                    },
                    {
                        label: "Max Iterations",
                        type: "input",
                        name: "max_iter",
                        defaultValue:100,
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                    {
                        label: "Multiclass ",
                        type: "select",
                        name: "multi_class",
                        hasDefaultOption: true,
                        validators: Validators.required,
                        options: [
                            {
                                name: 'ovr',
                                hasParams: false
                            },
                            {
                                name: 'multinomial',
                                hasParams: false
                            }
                        ],

                        hasParams: false
                    },
                    {
                        label: "Warm Start",
                        type: "select",
                        name: "warm_start",
                        hasDefaultOption: true,
                        validators: Validators.required,
                        options: [
                            {
                                name: 'False',
                                hasParams: false
                            },
                            {
                                name: 'True',
                                hasParams: false
                            }
                        ],

                        hasParams: false
                    },
                    
                    {
                        label: "Number of jobs for computation",
                        type: "input",
                        name: "n_jobs",
                        defaultValue:1,
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        hasParams: false
                    },
                ]


            },
            //Logistic Regression ENDS
            //SVR STARTS
            {
                name: 'SVR',
                hasParams: true,
                params: [
                    {
                        label: "Penalty parameter C of error term",
                        type: "input",
                        name: "C",
                        defaultValue:1.0,
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                    {
                        label: "Epsilon",
                        type: "input",
                        name: "epsilon",
                        defaultValue:0.1,
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                    {
                        label: "Kernel",
                        type: "select",
                        name: "kernel",
                        validators: Validators.required,
                        hasDefaultOption: true,
                        options: [
                            {
                                name: 'rbf',
                                hasParams: false
                            },
                            {
                                name: 'linear',
                                hasParams: false
                            },
                            {
                                name: 'poly',
                                hasParams: false
                            },
                            {
                                name: 'sigmoid',
                                hasParams: false
                            },
                            {
                                name: 'precomputed',
                                hasParams: false
                            }
                        ],

                        hasParams: false
                    },
                    {
                        label: "Degree",
                        type: "input",
                        name: "degree",
                        defaultValue:3,
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                    {
                        label: "Gamma (Optional)",
                        type: "input",
                        name: "gamma",
                        
                        validators:[OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                
                    {
                        label: "Independent term(for poly and sigmoid)",
                        type: "input",
                        name: "coef0",
                        defaultValue:"0",
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                    {
                        label: "Shrinking",
                        type: "select",
                        name: "shrinking",
                        hasDefaultOption: true,
                        validators: Validators.required,
                        options: [
                            {
                                name: 'True',
                                hasParams: false
                            },
                            {
                                name: 'False',
                                hasParams: false
                            }
                        ],

                        hasParams: false
                    },
                    {
                        label: "Tolerance",
                        type: "input",
                        name: "tol",
                        defaultValue:0.001,
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                    {
                        label: "Cache Size (in MB)",
                        type: "input",
                        name: "cache_size",
                        defaultValue:1,
                        validators:[Validators.required,OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                    {
                        label: "Max Iterations",
                        type: "input",
                        name: "max_iter",
                        defaultValue:-1,
                        validators:[Validators.min(-1),Validators.required,OnlyNumber.validateNumber],
                        hasParams: false 
                    },
                 
                ]


            },
            //SVR ENDS
            
        ]
    }
    static evaluationOptions =
        {
            iname: 'Select Evaluation Function',
            itype: 'select',
            placeholder: 'Select Function',
            ioptions: [
                {
                    name: 'K-Fold',
                    hasParams: true,
                    params: [
                        {
                            label: "Number of folds",
                            type: "input",
                            validators: [Validators.required, Validators.min(2), Validators.max(15), OnlyNumber.validateNumber],
                            name: "fold_count",
                            hasParams: false
                        }
                    ]
                },
                {
                    name: 'Test and Train',
                    hasParams: true,
                    params: [
                        {
                            label: "Fraction of testing data",
                            type: "input",
                            validators: [Validators.required, Validators.min(0.1), Validators.max(0.9)],
                            name: "fraction",
                            hasParams: false,
                            placeholder: 'Enter a value between 0 and 1',
                            defaultValue: 0.7
                        }
                    ]
                }

            ]
        }





}