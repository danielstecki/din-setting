# din-setting
This script calculates the din-setting for ski bindings.
To use:
pass an options object to the DinSetting class

ex:
const options = {
  weight: 212, //lb
  height: 78,  //in
  sole: 270,   //mm
  age: 30,    //years
  type: 1     //if you are unsure what this is, go with 1
};

new DinSetting(options)
