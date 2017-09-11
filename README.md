# din-setting

A **din setting** is a calculation based on a skier's weight, height, sole, age, and skiing ability.

## Install
Using NPM, install din-setting and save it to your `package.json` dependencies.

```
bash
$ npm install --save din-setting
```

## Import
Import din-setting, naming the module what you would like.

```
es6
import DinSetting from 'din-setting'
```

## Call
call din-setting by creating an instance of the class

```
es6
new DinSetting(options)
```

## Options
All options are required and should be a number type.

```
es6
new DinSetting({
  weight: 212, //lb
  height: 78,  //in
  sole: 270,   //mm
  age: 30,     //years
  type: 1      //if you are unsure what this is, go with 1
})
```
