import { DinSetting } from './din-settings';

const values = {
  weight: 212,
  height: 78,
  sole: 270,
  age: 30,
  type: 1
};

const din = new DinSetting(values).calcDinSetting();

const el = document.querySelector('.din-setting');
el.textContent = din;
