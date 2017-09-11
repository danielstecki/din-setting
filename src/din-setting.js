/* An incorrect din setting can cause serious injury to the skier.
A trained professional should recalculate the results of this script */

// constants from rossignols 2016 din settings chart
const WEIGHT_SCALE = [30, 39, 48, 57, 67, 79, 92, 108, 126, 148, 175, 210];
const HEIGHT_SCALE = [59, 62, 66, 71, 77];
const SOLE_SCALE = [230, 250, 270, 290, 310, 330, 350];
const DIN_CHART = [
  [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
  [1, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
  [1.5, 1.25, 1.25, 1, 1, 1, 1, 1],
  [2, 1.75, 1.5, 1.5, 1.25, 1.25, 1.25, 1.25],
  [2.5, 2.25, 2, 1.75, 1.5, 1.5, 1.5, 1.5],
  [3, 2.75, 2.5, 2.25, 2, 1.75, 1.75, 1.75],
  [3.5, 3.5, 3, 2.75, 2.5, 2.25, 2, 2],
  [3.5, 3.5, 3.5, 3, 3, 2.75, 2.5, 2.5],
  [4.5, 4.5, 4.5, 4, 3.5, 3.5, 3, 3],
  [5.5, 5.5, 5.5, 5, 4.5, 4, 3.5, 3],
  [6.5, 6.5, 6.5, 6, 5.5, 5, 4.5, 4],
  [7.5, 7.5, 7.5, 7, 6.5, 6, 5.5, 5],
  [8.5, 8.5, 8.5, 8, 8, 7, 6.5, 6],
  [10, 10, 10, 10, 9.5, 8.5, 8, 7.5],
  [11.5, 11.5, 11.5, 11.5, 11, 10, 9.5, 9],
  [12, 12, 12, 12, 12, 12, 11, 10.5]
];

class DinSetting {
  constructor(options) {
    this.options = options;

    return { dinSetting: this.calcDinSetting() };
  }

  calcDinSetting() {
    return DIN_CHART[this.getSkierCode()][this.getIndicatorSetting()];
  }

  getSkierCode() {
    const { weight, height, type, age } = this.options;
    const wIndex = this.getWeightIndex(weight);
    const hIndex = this.getHeightIndex(height);

    let index = wIndex <= hIndex ? wIndex : hIndex;

    if (age <= 9 || age >= 50) index -= 1;
    if (weight < 48 && type === 3) return (index += 1);
    if (type === 2) index += 1;
    if (type === 3) index += 2;

    return index;
  }

  getWeightIndex() {
    const { weight } = this.options;

    if (weight >= 210) return WEIGHT_SCALE.length;
    return WEIGHT_SCALE.findIndex(e => weight < e);
  }

  getHeightIndex() {
    const { height } = this.options;

    // account for HEIGHT_SCALE having less values
    const differential = WEIGHT_SCALE.length - HEIGHT_SCALE.length;
    if (height >= 77) return HEIGHT_SCALE.length + differential;
    return HEIGHT_SCALE.findIndex(e => height < e) + differential;
  }

  getIndicatorSetting() {
    const { sole } = this.options;

    if (sole >= 351) return SOLE_SCALE.length;
    return SOLE_SCALE.findIndex(e => sole < e);
  }
}

export default DinSetting;
