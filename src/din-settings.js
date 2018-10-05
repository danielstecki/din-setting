import { WEIGHT_SCALE, HEIGHT_SCALE, SOLE_SCALE, DIN_CHART } from './constants';

export class DinSetting {
  constructor(options) {
    this.options = options;
  }

  calcDinSetting() {
    return DIN_CHART[this.skierCode][this.indicatorSetting];
  }

  get skierCode() {
    const { weight, height, type, age } = this.options;
    const wIndex = this.weightIndex(weight);
    const hIndex = this.heightIndex(height);

    let index = wIndex <= hIndex ? wIndex : hIndex;

    if (age <= 9 || age >= 50) index -= 1;
    if (weight < 48 && type === 3) return (index += 1);
    if (type === 2) index += 1;
    if (type === 3) index += 2;

    return index;
  }

  weightIndex() {
    const { weight } = this.options;

    if (weight >= 210) return WEIGHT_SCALE.length;
    return WEIGHT_SCALE.findIndex(e => weight < e);
  }

  heightIndex() {
    const { height } = this.options;

    // Account for HEIGHT_SCALE having less values.
    const differential = WEIGHT_SCALE.length - HEIGHT_SCALE.length;
    if (height >= 77) return HEIGHT_SCALE.length + differential;
    return HEIGHT_SCALE.findIndex(e => height < e) + differential;
  }

  get indicatorSetting() {
    const { sole } = this.options;

    if (sole >= 351) return SOLE_SCALE.length;
    return SOLE_SCALE.findIndex(e => sole < e);
  }
}
