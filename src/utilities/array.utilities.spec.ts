import * as utils from './array.utilities';

describe('array.utilities.ts', () => {
  describe('getArrayLength', () => {
    it('should return length of the given array', () => {
      expect(utils.getArrayLength([])).toEqual(0);
      expect(utils.getArrayLength([1, 2, 3])).toEqual(3);
      expect(utils.getArrayLength([1, 2, 3, 4, 5])).toEqual(5);
    });
  });

  describe('filerNumbersLessThan', () => {
    it('should return array filtered by giver argument', () => {
      const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(utils.filerNumbersLessThan(array, 3)).toEqual([1, 2]);
      expect(utils.filerNumbersLessThan(array, 4)).toEqual([1, 2, 3]);
      expect(utils.filerNumbersLessThan(array, 11)).toEqual(array);
      expect(utils.filerNumbersLessThan(array, 1)).toEqual([]);
    });
  });

  describe('filerNumbersBiggerThan', () => {
    it('should return array filtered by giver argument', () => {
      const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(utils.filerNumbersBiggerThan(array, 7)).toEqual([8, 9, 10]);
      expect(utils.filerNumbersBiggerThan(array, 100)).toEqual([]);
      expect(utils.filerNumbersBiggerThan(array, 0)).toEqual(array);
    });
  });

  describe('addToEachArrayItem', () => {
    it('should return array of elements with added argument', () => {
      const array: number[] = [1, 2, 3, 4, 5];
      expect(utils.addToEachArrayItem(array, 1)).toEqual([2, 3, 4, 5, 6]);
      expect(utils.addToEachArrayItem(array, 7)).toEqual([8, 9, 10, 11, 12]);
      expect(utils.addToEachArrayItem(array, 1007)).toEqual([1008, 1009, 1010, 1011, 1012]);
      expect(utils.addToEachArrayItem([], 0)).toEqual([]);
      expect(utils.addToEachArrayItem([], 1000)).toEqual([]);
      expect(utils.addToEachArrayItem(array, 0)).toEqual(array);
    });
  });

  describe('multiplyEachArrayItem', () => {
    it('should return array of elements multiplied by given argument', () => {
      const array: number[] = [1, 2, 3, 4, 5];
      expect(utils.multiplyEachArrayItem(array, 1)).toEqual(array);
      expect(utils.multiplyEachArrayItem(array, 2)).toEqual([2, 4, 6, 8, 10]);
      expect(utils.multiplyEachArrayItem(array, 3)).toEqual([3, 6, 9, 12, 15]);
      expect(utils.multiplyEachArrayItem(array, 0)).toEqual([0, 0, 0, 0, 0]);
      expect(utils.multiplyEachArrayItem([], 1000)).toEqual([]);
    });
  });

  describe('getSumOfAllArrayItems', () => {
    it('should return sum of all array elements', () => {
      const bigArray: number[] = [];
      for (let i = 1; i < 1001; i++){
        bigArray.push(i);
      }
      expect(utils.getSumOfAllArrayItems([1])).toEqual(1);
      expect(utils.getSumOfAllArrayItems([1, 2])).toEqual(3);
      expect(utils.getSumOfAllArrayItems([1, 2, 3])).toEqual(6);
      expect(utils.getSumOfAllArrayItems([1, 2, 3, 4])).toEqual(10);
      expect(utils.getSumOfAllArrayItems(bigArray)).toEqual(500500);
    });
  });
});
