# din-setting

A **din setting** is a calculation based on a skier's weight, height, sole, age, and skiing ability.

An incorrect din setting can cause serious injury to the skier. A trained professional should recalculate the results of this script.

## Build

Create a compiled version of the code.

```
bash
$ npm run build
```

## Initialize the DinSetting class

All config options are required and should be a number type.

```
es6
const init = new DinSetting({
  weight: 212, //lb
  height: 78,  //in
  sole: 270,   //mm
  age: 30,     //years
  type: 1      //if you are unsure what this is, go with 1
})
```

## Calculate

Calculate the din setting by calling the calcDinSetting method.

```
es6
init.calcDinSetting();
```
