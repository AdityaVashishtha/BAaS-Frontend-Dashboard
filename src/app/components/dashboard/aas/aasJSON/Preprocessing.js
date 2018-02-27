const nominal=require("./Preprocessing_nominal");
const categorical=require("./Preprocessing_categorical");

exports.preprocessing={
  "name":"Preprocessing",
  "subsections":
  [
    {
      
      "name":"Nominal",
      "aasAttributesType":"number",
      "forEach":false,
      "inputType":"select",
      "inputValues":[nominal.minMaxScaler,nominal.standardizeData],
      "htmlattributes":[],
    },
    {
      "name":"Categorical",
      "aasAttributesType":"string",
      "forEach":false,
      "inputType":"select",
      "inputValues":[categorical.oneHotEncoder,categorical.labelEncoder],
      "htmlattributes":[],
    }
  ]
}
