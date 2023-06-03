import { binarySearch } from "../Pages/Binary";

const arr=[1,2,2,4,4,5,6,7,8,9];

describe('tests for binary search', () => {
    it('testing the case when search is successful', () => {
            expect(binarySearch(arr, 7)).toBe(7);
            
    })


        it('testing the case when search is successful', () => {
            expect(binarySearch(arr, 17)).toBe(-1);
            
    })
     

    // it('testing the case when not passing all the parameters', () => {

    // })

});