exports.standardizeData={
  "name":"standardize Data",
  "params":[
      {
        "name":"with_mean",
        "inputType":"select",
        "htmlattributes":[],
        "required":true,
        "inputValues":[],
        "hint":""
      },
      {
        "name":"with_standard",
        "inputType":"select",
        "htmlattributes":[],
        "inputValues":[],
        "required":true,
        "hint":""
        
      }
    ] 
}

exports.minMaxScaler={
  "name":"Min Max Scaler",
  "params":[
      {
        "name":"Min",
        "inputType":"input",
        "htmlattributes":["type='number'","required"],
        "inputValues":[],
        "required":true,
        "hint":""
      },
      {
        "name":"Range",
        "inputType":"input",
        "htmlattributes":["type='number'","required"],
        "inputValues":[],
        "required":true,
        "hint":""
        
      }
    ] 
}
